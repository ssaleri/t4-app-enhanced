import { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { createInsertSchema, createSelectSchema } from 'drizzle-valibot'
import { sql } from 'drizzle-orm/sql/sql'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const BlogPostTable = sqliteTable('BlogPost', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  image: text('image').notNull(),
})

export type BlogPost = InferSelectModel<typeof BlogPostTable>
export type InsertBlogPost = InferInsertModel<typeof BlogPostTable>
export const insertBlogPostSchema = createInsertSchema(BlogPostTable)
export const selectBlogPostSchema = createSelectSchema(BlogPostTable)
