import { integer, pgTable } from 'drizzle-orm/pg-core';

export const choicesTable = pgTable('choices', {
  id: integer().primaryKey(),
});
