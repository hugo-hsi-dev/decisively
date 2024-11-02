import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

import { choicesTable } from '@/features/choices/schemas/table';

export const insertChoiceSchema = createInsertSchema(choicesTable).omit({
  id: true,
});

export const selectChoiceSchema = createSelectSchema(choicesTable);
