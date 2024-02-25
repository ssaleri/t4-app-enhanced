import { PersonTable } from '../db/schema'
import { publicProcedure, router } from '../trpc'

export const personsRouter = router({
  all: publicProcedure.query(async ({ ctx }) => {
    const { db } = ctx
    const allPersons = await db.select().from(PersonTable).all()
    return allPersons
  }),
})
