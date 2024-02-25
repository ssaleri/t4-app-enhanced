import { UpsTable } from '../db/schema'
import { publicProcedure, router } from '../trpc'

export const upsRouter = router({
  all: publicProcedure.query(async ({ ctx }) => {
    const { db } = ctx
    const allUps = await db.select().from(UpsTable).all()
    return allUps
  }),
})
