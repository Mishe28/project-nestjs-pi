import { MigrationInterface, QueryRunner } from "typeorm";

export class m41655406802929 implements MigrationInterface {
    name = 'm41655406802929'

    public async up(queryRunner: QueryRunner): Promise<void> {
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
    }

}
