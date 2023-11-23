'use server'
import zod from 'zod'
import prisma from './prismadb'
import { revalidatePath } from 'next/cache'


const todoObject = zod.object({
    title: zod.string().min(1, { message: "Todo Title is required" })
})

export const createTodo = async (data: FormData) => {

    const { title } = todoObject.parse({
        title: data.get('title')
    })
    await prisma.todo.create({ data: { title: title } })
    revalidatePath('/')
}