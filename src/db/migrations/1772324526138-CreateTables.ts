import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1772324526138 implements MigrationInterface {
    name = 'CreateTables1772324526138'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "table" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "position" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "workspaceId" integer NOT NULL, CONSTRAINT "PK_28914b55c485fc2d7a101b1b2a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "list" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "position" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "tableId" integer NOT NULL, CONSTRAINT "PK_d8feafd203525d5f9c37b3ed3b9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "checklistitem" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "isDone" boolean NOT NULL DEFAULT false, "position" integer NOT NULL DEFAULT '0', "checklistId" integer NOT NULL, CONSTRAINT "PK_43d001245fb09615bc582a1b2d3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "checklist" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "position" integer NOT NULL DEFAULT '0', "cardId" integer NOT NULL, CONSTRAINT "PK_e4b437f5107f2a9d5b744d4eb4c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "label" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "color" character varying NOT NULL, "workspaceId" integer NOT NULL, CONSTRAINT "PK_5692ac5348861d3776eb5843672" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "member" ("id" SERIAL NOT NULL, "role" character varying, "assignedAt" TIMESTAMP NOT NULL DEFAULT now(), "cardId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_97cbbe986ce9d14ca5894fdc072" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "card" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, "dueDate" TIMESTAMP, "position" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "listId" integer NOT NULL, "tableId" integer NOT NULL, CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "commentary" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "cardId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_465979b97c47c504d1032b0e757" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "avatar" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "workspace" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "ownerId" integer, CONSTRAINT "PK_ca86b6f9b3be5fe26d307d09b49" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "card_label" ("cardId" integer NOT NULL, "labelId" integer NOT NULL, CONSTRAINT "PK_c2596a851447a94b22b839c609a" PRIMARY KEY ("cardId", "labelId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2400b258e4a4c55add6c9b7376" ON "card_label" ("cardId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f27296bc98741a991d5288ad38" ON "card_label" ("labelId") `);
        await queryRunner.query(`CREATE TABLE "workspace_users_user" ("workspaceId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_e838ab3e6c445c5c091f252b716" PRIMARY KEY ("workspaceId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e560bebe0dad802fbb036ba878" ON "workspace_users_user" ("workspaceId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ff70af68685d8a5d6b588dfdc5" ON "workspace_users_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "table" ADD CONSTRAINT "FK_27b4a16f90ce33950faaff280aa" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "list" ADD CONSTRAINT "FK_34834d43075fe6d7fbec5f39c0d" FOREIGN KEY ("tableId") REFERENCES "table"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "checklistitem" ADD CONSTRAINT "FK_c763a187d70fd447a80736e347f" FOREIGN KEY ("checklistId") REFERENCES "checklist"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "checklist" ADD CONSTRAINT "FK_6924ab6f5fe68018de8f6babaf6" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "label" ADD CONSTRAINT "FK_7a5ee5f5602f7343ab5915f9364" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member" ADD CONSTRAINT "FK_179daedf535345ae177ef69938e" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "member" ADD CONSTRAINT "FK_08897b166dee565859b7fb2fcc8" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "card" ADD CONSTRAINT "FK_4267e15872bbabeb7d9c0448ca0" FOREIGN KEY ("listId") REFERENCES "list"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "card" ADD CONSTRAINT "FK_218b8bccd4b43f8cd114d76d169" FOREIGN KEY ("tableId") REFERENCES "table"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "commentary" ADD CONSTRAINT "FK_ac4241f79cc8986496f5336afd9" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "commentary" ADD CONSTRAINT "FK_bf8192a335436327d296b685dc2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "workspace" ADD CONSTRAINT "FK_51f2194e4a415202512807d2f63" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "card_label" ADD CONSTRAINT "FK_2400b258e4a4c55add6c9b73766" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "card_label" ADD CONSTRAINT "FK_f27296bc98741a991d5288ad385" FOREIGN KEY ("labelId") REFERENCES "label"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "workspace_users_user" ADD CONSTRAINT "FK_e560bebe0dad802fbb036ba8788" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "workspace_users_user" ADD CONSTRAINT "FK_ff70af68685d8a5d6b588dfdc5b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "workspace_users_user" DROP CONSTRAINT "FK_ff70af68685d8a5d6b588dfdc5b"`);
        await queryRunner.query(`ALTER TABLE "workspace_users_user" DROP CONSTRAINT "FK_e560bebe0dad802fbb036ba8788"`);
        await queryRunner.query(`ALTER TABLE "card_label" DROP CONSTRAINT "FK_f27296bc98741a991d5288ad385"`);
        await queryRunner.query(`ALTER TABLE "card_label" DROP CONSTRAINT "FK_2400b258e4a4c55add6c9b73766"`);
        await queryRunner.query(`ALTER TABLE "workspace" DROP CONSTRAINT "FK_51f2194e4a415202512807d2f63"`);
        await queryRunner.query(`ALTER TABLE "commentary" DROP CONSTRAINT "FK_bf8192a335436327d296b685dc2"`);
        await queryRunner.query(`ALTER TABLE "commentary" DROP CONSTRAINT "FK_ac4241f79cc8986496f5336afd9"`);
        await queryRunner.query(`ALTER TABLE "card" DROP CONSTRAINT "FK_218b8bccd4b43f8cd114d76d169"`);
        await queryRunner.query(`ALTER TABLE "card" DROP CONSTRAINT "FK_4267e15872bbabeb7d9c0448ca0"`);
        await queryRunner.query(`ALTER TABLE "member" DROP CONSTRAINT "FK_08897b166dee565859b7fb2fcc8"`);
        await queryRunner.query(`ALTER TABLE "member" DROP CONSTRAINT "FK_179daedf535345ae177ef69938e"`);
        await queryRunner.query(`ALTER TABLE "label" DROP CONSTRAINT "FK_7a5ee5f5602f7343ab5915f9364"`);
        await queryRunner.query(`ALTER TABLE "checklist" DROP CONSTRAINT "FK_6924ab6f5fe68018de8f6babaf6"`);
        await queryRunner.query(`ALTER TABLE "checklistitem" DROP CONSTRAINT "FK_c763a187d70fd447a80736e347f"`);
        await queryRunner.query(`ALTER TABLE "list" DROP CONSTRAINT "FK_34834d43075fe6d7fbec5f39c0d"`);
        await queryRunner.query(`ALTER TABLE "table" DROP CONSTRAINT "FK_27b4a16f90ce33950faaff280aa"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ff70af68685d8a5d6b588dfdc5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e560bebe0dad802fbb036ba878"`);
        await queryRunner.query(`DROP TABLE "workspace_users_user"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f27296bc98741a991d5288ad38"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2400b258e4a4c55add6c9b7376"`);
        await queryRunner.query(`DROP TABLE "card_label"`);
        await queryRunner.query(`DROP TABLE "workspace"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "commentary"`);
        await queryRunner.query(`DROP TABLE "card"`);
        await queryRunner.query(`DROP TABLE "member"`);
        await queryRunner.query(`DROP TABLE "label"`);
        await queryRunner.query(`DROP TABLE "checklist"`);
        await queryRunner.query(`DROP TABLE "checklistitem"`);
        await queryRunner.query(`DROP TABLE "list"`);
        await queryRunner.query(`DROP TABLE "table"`);
    }

}
