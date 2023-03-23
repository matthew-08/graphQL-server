import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.message.deleteMany({})
    await prisma.user.deleteMany({})
    await prisma.user.create({
        data: {
            name: 'person',
            messages: {
                create: [
                    {
                        body: 'hello'
                    },

                    {
                        body: 'hello 2'
                    }
                ]
            }   
        },
        
    })
    await prisma.user.create({
        data: {
            name: 'person 2',
            messages: {
                create: [
                    {
                        body: 'hello from person 2'
                    },

                    {
                        body: 'hello 2 from person 2'
                    }
                ]
            }   
        },
        
    })
    await prisma.user.create({
        data: {
            name: 'person 3',
            messages: {
                create: [
                    {
                        body: 'hello from person 3'
                    },

                    {
                        body: 'hello 2 from person 3'
                    }
                ]
            }   
        },
        
    })
}

main()