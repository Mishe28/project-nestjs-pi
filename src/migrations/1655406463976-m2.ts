import { MigrationInterface, QueryRunner } from "typeorm";

export class m21655406463976 implements MigrationInterface {
    name = 'm21655406463976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "institute" ("id" SERIAL NOT NULL, "name" character varying, "status" boolean, "rector" character varying, "phone" character varying, "web" character varying, "email" character varying, CONSTRAINT "PK_0805fd7b49c18ad55f0646dcbbb" PRIMARY KEY ("id"))`);
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "institute"`);
    }

}
