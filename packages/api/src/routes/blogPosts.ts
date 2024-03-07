import { BlogPostTable, CarTable, UserTable } from '../db/schema'
import { publicProcedure, router } from '../trpc'
import { eq } from "drizzle-orm";
import { z } from "zod";

export const blogPostsRouter = router({
  all: publicProcedure.query(async ({ ctx }) => {
    const { db } = ctx
    const allBlogPosts = await db.select().from(BlogPostTable).all()
    return allBlogPosts
  }),
  byId: publicProcedure.input(
    z.object({
      id: z.string(),
    }),
  ).query(async ({ctx, input}) => {
    const { id } = input;
    const { db } = ctx;
    const blogPost = await db.select().from(BlogPostTable).where(eq(BlogPostTable.id, id)).get();
    return blogPost;
  }),

})
