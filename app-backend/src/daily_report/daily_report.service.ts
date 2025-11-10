import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateDailyReportDto } from "./dto/create-daily_report.dto";
import { UpdateDailyReportDto } from "./dto/update-daily_report.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class DailyReportService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDailyReportDto: CreateDailyReportDto) {
    
    try {
      // Pre-validações: usuário e veículo (caso informado)
      const [user, vehicle] = await Promise.all([
        this.prisma.users.findFirst({ where: { id: createDailyReportDto.userId } }),
        createDailyReportDto.deliverVehicle
          ? this.prisma.vehicle.findFirst({ where: { plate: createDailyReportDto.deliverVehicle } })
          : Promise.resolve(null),
      ]);

      if (!user) {
        throw new HttpException("Usuário não encontrado.", HttpStatus.NOT_FOUND);
      }
      if (createDailyReportDto.deliverVehicle && !vehicle) {
        throw new HttpException("Veículo (placa) não encontrado.", HttpStatus.NOT_FOUND);
      }

      // Branch: novo payload com múltiplos clientes
      if (createDailyReportDto.customerGroups && createDailyReportDto.customerGroups.length > 0) {
        const results: any[] = [];

        for (const group of createDailyReportDto.customerGroups) {
          // Validar cliente do grupo
          const customer = await this.prisma.customers.findFirst({ where: { code: Number(group.customerCode) } });
          if (!customer) {
            throw new HttpException(`Cliente não encontrado: código ${group.customerCode}.`, HttpStatus.NOT_FOUND);
          }

          // Sanitizar produtos por cliente para JSON
          const productsJson: Prisma.InputJsonValue = (group.items ?? []).map((p) => ({
            code: p.code,
            quantity: p.quantity,
            ...(p.description ? { description: p.description } : {}),
            ...(p.sifOrSisbi ? { sifOrSisbi: p.sifOrSisbi } : {}),
            productTemperature: p.productTemperature,
            productionDate: p.productionDate,
          }));

          const totalQuantity = (group.items ?? []).reduce((acc, it) => acc + (Number(it.quantity) || 0), 0);
          const items = (group.items ?? []);
          if (items.length === 0) {
            throw new HttpException("Grupo de cliente sem produtos.", HttpStatus.BAD_REQUEST);
          }
          // Agregar data de produção (menor data entre itens) e temperatura do produto (mínima)
          const earliestProdTime = items
            .map((it) => new Date(it.productionDate).getTime())
            .reduce((min, t) => (Number.isFinite(min) ? Math.min(min, t) : t), Infinity);
          const productionDate = new Date(earliestProdTime);

          const minProductTemp = items
            .map((it) => Number(it.productTemperature))
            .reduce((min, v) => (Number.isFinite(min) ? Math.min(min, v) : v), Infinity);

          const primarySifOrSisbi = items[0]?.sifOrSisbi;

          const created = await this.prisma.dailyShipmentReport.create({
            data: {
              quantity: totalQuantity,
              invoiceNumber: createDailyReportDto.invoiceNumber,
              productionDate,
              vehicleTemperature: createDailyReportDto.vehicleTemperature,
              hasGoodSanitaryCondition: createDailyReportDto.hasGoodSanitaryCondition,
              driver: createDailyReportDto.driver,
              userId: createDailyReportDto.userId,
              products: productsJson,
              customerCode: BigInt(group.customerCode),
              sifOrSisbi: primarySifOrSisbi && primarySifOrSisbi !== "NA" ? primarySifOrSisbi : null,
              productTemperature: minProductTemp,
              fillingDate: new Date(createDailyReportDto.fillingDate),
              deliverVehicle: createDailyReportDto.deliverVehicle ?? null,
            } as any,
          });

          results.push(created);
        }

        return results;
      }

      // Compatibilidade: payload antigo (cliente único)
      // Validar cliente único
      const customer = await this.prisma.customers.findFirst({
        where: { code: Number(createDailyReportDto.customerCode) },
      });
      if (!customer) {
        throw new HttpException("Cliente não encontrado.", HttpStatus.NOT_FOUND);
      }

      const productsJson: Prisma.InputJsonValue = (createDailyReportDto.products ?? []).map((p) => ({
        code: p.code,
        quantity: p.quantity,
        ...(p.description ? { description: p.description } : {}),
      }));

      const created = await this.prisma.dailyShipmentReport.create({
        data: {
          quantity: createDailyReportDto.quantity!,
          invoiceNumber: createDailyReportDto.invoiceNumber,
          productionDate: new Date(createDailyReportDto.productionDate!),
          vehicleTemperature: createDailyReportDto.vehicleTemperature,
          hasGoodSanitaryCondition: createDailyReportDto.hasGoodSanitaryCondition,
          driver: createDailyReportDto.driver,
          userId: createDailyReportDto.userId,
          products: productsJson,
          customerCode: BigInt(createDailyReportDto.customerCode!),
          sifOrSisbi: createDailyReportDto.sifOrSisbi && createDailyReportDto.sifOrSisbi !== "NA" ? createDailyReportDto.sifOrSisbi : null,
          productTemperature: createDailyReportDto.productTemperature!,
          fillingDate: new Date(createDailyReportDto.fillingDate),
          deliverVehicle: createDailyReportDto.deliverVehicle ?? null,
        } as any,
      });

      return created;
    } catch (err: unknown) {
      // Mensagens amigáveis para erros comuns
      if (err instanceof HttpException) throw err;

      // Tratamento de violações e detalhamento de erro do Prisma
      if (err && typeof err === "object") {
        const anyErr = err as any;
        // Prisma known error
        if (anyErr.code && typeof anyErr.code === "string") {
          const details = anyErr.meta?.cause || anyErr.message || "Erro de banco de dados.";
          throw new HttpException(details, HttpStatus.BAD_REQUEST);
        }
      }
      // Logar erro desconhecido para investigação
      // eslint-disable-next-line no-console
      console.error("[DailyReportService.create] Unknown error:", err);
      throw new HttpException("Falha ao criar relatório diário.", HttpStatus.BAD_REQUEST);
    }
  }

  findAll() {
    return this.prisma.dailyShipmentReport.findMany({
      orderBy: { id: "desc" },
    });
  }

  findOne(id: number) {
    return this.prisma.dailyShipmentReport.findFirst({ where: { id } });
  }

  update(id: number, updateDailyReportDto: UpdateDailyReportDto) {
    return `This action updates a #${id} dailyReport`;
  }

  remove(id: number) {
    return this.prisma.dailyShipmentReport.delete({ where: { id } });
  }

}