import { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { createInsertSchema, createSelectSchema } from 'drizzle-valibot'
import { sql } from 'drizzle-orm/sql/sql'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const BlogPostTable = sqliteTable('BlogPost', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  author: text('author').notNull().default('Simone Saleri'),
  image: text('image').notNull(),
  date: text('date').notNull().default(sql`CURRENT_DATE`),
  tags: text('tags', { mode: 'json' }).$type<string[]>(),
})

export type BlogPost = InferSelectModel<typeof BlogPostTable>
export type InsertBlogPost = InferInsertModel<typeof BlogPostTable>
export const insertBlogPostSchema = createInsertSchema(BlogPostTable)
export const selectBlogPostSchema = createSelectSchema(BlogPostTable)
