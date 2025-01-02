import { initTRPC } from '@trpc/server'

const ideas = [
  { nick: 'cool-idea-1', id: 1, title: 'Learn TypeScript' },
  { nick: 'cool-idea-2', id: 2, title: 'Build a full-stack app' },
  { nick: 'cool-idea-3', id: 3, title: 'Learn GraphQL' },
  { nick: 'cool-idea-4', id: 4, title: 'Learn Rust' },
  { nick: 'cool-idea-5', id: 5, title: 'Learn Go' },
  { nick: 'cool-idea-6', id: 6, title: 'Learn Python' },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
})

export type TrpcRouter = typeof trpcRouter
