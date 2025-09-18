-- CreateTable
CREATE TABLE "public"."Cargo" (
    "id" SERIAL NOT NULL,
    "cargo" VARCHAR(100) NOT NULL,

    CONSTRAINT "Cargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "senha" VARCHAR(50) NOT NULL,
    "cargoId" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Cliente" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "CPF" VARCHAR(11) NOT NULL,
    "CNPJ" VARCHAR(14) NOT NULL,
    "endereco" VARCHAR(255) NOT NULL,
    "telefone" VARCHAR(100) NOT NULL,
    "codigoIdentificacao" VARCHAR(255) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Produto" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "undMedida" VARCHAR(10) NOT NULL,
    "quantidade" DECIMAL(8,2) NOT NULL,
    "validade" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Veiculo" (
    "id" SERIAL NOT NULL,
    "modelo" VARCHAR(100) NOT NULL,
    "placa" VARCHAR(10) NOT NULL,
    "categoria" VARCHAR(20) NOT NULL,
    "marca" VARCHAR(30) NOT NULL,

    CONSTRAINT "Veiculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RelatorioExpedicaoDiaria" (
    "id" SERIAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "notaFiscal" INTEGER NOT NULL,
    "dataProducao" TIMESTAMP(3) NOT NULL,
    "destino" VARCHAR(50) NOT NULL,
    "temperatura" DECIMAL(65,30) NOT NULL,
    "condicaoSanitaria" BOOLEAN NOT NULL,
    "entregador" VARCHAR(100) NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "veiculoId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,

    CONSTRAINT "RelatorioExpedicaoDiaria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RelatorioExpedicaoMensal" (
    "id" SERIAL NOT NULL,
    "quantidade" DECIMAL(65,30) NOT NULL,
    "destino" VARCHAR(50) NOT NULL,
    "temperatura" DECIMAL(65,30) NOT NULL,
    "entregador" VARCHAR(100) NOT NULL,
    "dataProducao" TIMESTAMP(3) NOT NULL,
    "dataExpedicao" TIMESTAMP(3) NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,

    CONSTRAINT "RelatorioExpedicaoMensal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Usuario" ADD CONSTRAINT "Usuario_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "public"."Cargo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RelatorioExpedicaoDiaria" ADD CONSTRAINT "RelatorioExpedicaoDiaria_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RelatorioExpedicaoDiaria" ADD CONSTRAINT "RelatorioExpedicaoDiaria_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "public"."Veiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RelatorioExpedicaoDiaria" ADD CONSTRAINT "RelatorioExpedicaoDiaria_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "public"."Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RelatorioExpedicaoDiaria" ADD CONSTRAINT "RelatorioExpedicaoDiaria_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "public"."Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RelatorioExpedicaoMensal" ADD CONSTRAINT "RelatorioExpedicaoMensal_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "public"."Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RelatorioExpedicaoMensal" ADD CONSTRAINT "RelatorioExpedicaoMensal_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "public"."Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
