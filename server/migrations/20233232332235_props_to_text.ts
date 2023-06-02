import { Knex } from "knex";

export async function up(knex: Knex): Promise<any> {
    await knex.schema.alterTable("links", table => {
        table.text("title").alter();
    });
    await knex.schema.alterTable("links", table => {
        table.text("description").alter();
    });
    await knex.schema.alterTable("links", table => {
        table.text("image_url").alter();
    });
}

export async function down(): Promise<any> {
  return null;
}
