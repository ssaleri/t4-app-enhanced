import { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'

import { createInsertSchema, createSelectSchema } from 'drizzle-valibot'

export const UpsTable = sqliteTable('Ups', {
  id: text('id').primaryKey(),
  model: text('model').notNull(),
  year: integer('year').notNull(),
  price: real('price').notNull(),
  wattage: integer('wattage').notNull(),
})

export type Ups = InferSelectModel<typeof UpsTable>
export type InsertUps = InferInsertModel<typeof UpsTable>
export const insertUpsSchema = createInsertSchema(UpsTable)
export const selectUpsSchema = createSelectSchema(UpsTable)
