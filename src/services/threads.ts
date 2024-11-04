import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { Thread } from 'src/dtos/thread';

const prisma = new PrismaClient()

@Injectable()
export class ThreadsService {
    async getThreads(section: number) {
        try {
            const threads = await prisma.threads.findMany({ where: { section } })
            return threads;
        }
        catch (e) {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        }
        finally {
            await prisma.$disconnect()
        }
    }

    async postThread(section: number, tags: Array<string>, title: string, content: { text: string, images: Array<string> }): Promise<Thread> {
        try {
            const lastId = (await prisma.threads.findFirst({ orderBy: { id: "asc" } })).id_
            const thread = await prisma.threads.create({ data: { id_: lastId + 1, section, tags, title, content } });
            return thread;
        }
        catch (e) {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        }
        finally {
            await prisma.$disconnect()
        }
    }

}
