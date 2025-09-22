"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const hashing_service_1 = require("../auth/hash/hashing.service");
let UsersService = class UsersService {
    prisma;
    hashingService;
    constructor(prisma, hashingService) {
        this.prisma = prisma;
        this.hashingService = hashingService;
    }
    async create(createUserDto) {
        try {
            const passwordHash = await this.hashingService.hash(createUserDto.password);
            await this.prisma.users.create({
                data: {
                    name: createUserDto.name,
                    username: createUserDto.username,
                    password: passwordHash,
                    role: createUserDto.role
                }
            });
            return { message: "Usuario Registrado com sucesso!" };
        }
        catch (err) {
            console.log(err);
            throw new common_1.HttpException('Erro ao cadastrar usuario.', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll(paginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;
        try {
            const data = await this.prisma.$transaction([
                this.prisma.users.findMany({
                    skip: offset,
                    take: limit,
                    select: {
                        id: true,
                        name: true,
                        username: true,
                        role: true
                    }
                })
            ]);
            return {
                data,
                limit,
                offset
            };
        }
        catch (err) {
            throw new common_1.HttpException('Erro ao buscar os usuarios', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update() {
    }
    async delete(id) {
        try {
            const findUser = await this.prisma.users.findFirst({
                where: {
                    id: id
                }
            });
            if (!findUser) {
                throw new common_1.HttpException('Esse usuario nao existe.', common_1.HttpStatus.BAD_REQUEST);
            }
            await this.prisma.users.delete({
                where: {
                    id: findUser.id
                }
            });
            return { message: "Usuario deletado com sucesso!" };
        }
        catch (err) {
            throw new common_1.HttpException('Falha ao deletar usuario.', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        hashing_service_1.HashingServiceProtocol])
], UsersService);
//# sourceMappingURL=users.service.js.map