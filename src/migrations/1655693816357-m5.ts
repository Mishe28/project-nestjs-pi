import { MigrationInterface, QueryRunner } from "typeorm";

export class m51655693816357 implements MigrationInterface {
    name = 'm51655693816357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "institute_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_d7b6b81e78a2064ec320fc175d3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "zone" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "location" character varying NOT NULL, CONSTRAINT "PK_bd3989e5a3c3fb5ed546dfaf832" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "institute" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "institute" ALTER COLUMN "status" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "institute" ALTER COLUMN "rector" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "institute" ALTER COLUMN "phone" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "institute" ALTER COLUMN "web" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "institute" ALTER COLUMN "email" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "institute" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "institute" ALTER COLUMN "web" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "institute" ALTER COLUMN "phone" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "institute" ALTER COLUMN "rector" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "institute" ALTER COLUMN "status" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "institute" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`DROP TABLE "zone"`);
        await queryRunner.query(`DROP TABLE "institute_type"`);
    }

}
