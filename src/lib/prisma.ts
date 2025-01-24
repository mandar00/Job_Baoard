import { PrismaClient } from "@prisma/client"

const prismaSingleton = () => (new PrismaClient())

declare global {
  var prisma: undefined | ReturnType<typeof prismaSingleton>
}

const prisma = global.prisma || prismaSingleton()

export default prisma


// in production mode as the application is build only once this file will be imported and parsed only once 
// so it wuill directly take the prismaSingleton instance at that time 
// where as in development mode as the application is build everytime we make changes to the code 
// as in development the global instance is only created once and not on every hot load 
//we can use the global instance to keep the prisma instance alive between hot reloads
if(process.env.NODE_ENV !== "production") {
  global.prisma = prisma
}