import { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-valibot'

export const PersonTable = sqliteTable('Person', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('year').notNull(),
})

export type Person = InferSelectModel<typeof PersonTable>
export type InsertPerson = InferInsertModel<typeof PersonTable>
export const insertPersonSchema = createInsertSchema(PersonTable)
export const selectPersonSchema = createSelectSchema(PersonTable)
