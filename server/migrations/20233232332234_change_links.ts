import { Knex } from "knex";

export async function up(knex: Knex): Promise<any> {
  const hasTitleTag = await knex.schema.hasColumn(
    "links",
    "title"
  );
  const hasImageTag = await knex.schema.hasColumn(
    "links",
    "image_url"
  );
  if (!hasTitleTag) {
    await knex.schema.alterTable("links", table => {
      table.string("title");
    });
  }
  if (!hasImageTag) {
    await knex.schema.alterTable("links", table => {
      table.string("image_url");
    });
  }
}

export async function down(): Promise<any> {
  return null;
}
