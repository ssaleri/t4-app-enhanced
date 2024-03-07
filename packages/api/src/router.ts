import { authRouter } from './routes/auth'
import { carsRouter } from './routes/cars'
import { helloRouter } from './routes/hello'
import { personsRouter } from './routes/persons'
import { upsRouter } from './routes/ups'
import { userRouter } from './routes/user'
import { blogPostsRouter } from './routes/blogPosts'
import { router } from './trpc'

export const appRouter = router({
  hello: helloRouter,
  user: userRouter,
  auth: authRouter,
  car: carsRouter,
  ups: upsRouter,
  person: personsRouter,
  blogPosts: blogPostsRouter,
})

export type AppRouter = typeof appRouter
