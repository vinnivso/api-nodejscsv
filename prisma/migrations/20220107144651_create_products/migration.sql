-- CreateTable
CREATE TABLE "practice-mercadinho-products" (
    "id" TEXT NOT NULL,
    "code_bar" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "practice-mercadinho-products_pkey" PRIMARY KEY ("id")
);
