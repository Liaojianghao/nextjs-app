import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
// 为了解决nextjs 13 热更新导致重复创建PrismaClient 实例， 然后conlse一直报警的问题
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client
