import { integer, pgTable, text } from 'drizzle-orm/pg-core';

export const choicesTable = pgTable('choices', {
  id: integer().primaryKey().generatedAlwaysAsIdentity({ startWith: 1000 }),
  name: text().notNull(),
});
