'use server'


import zod from 'zod'
import prisma from './prismadb'
import { revalidatePath } from 'next/cache'


export const createTodo = async (formData: FormData) => {
    const schema = zod.object({
        title: zod.string().min(1, { message: 'Todo Title is required' })
    })

    const { title } = schema.parse({
        title: formData.get('title'),
    })
    try {
        await prisma.todo.create({ data: { title } })
        revalidatePath('/');
        return { message: 'Added Todo Successfully.' }
    } catch {
        return { message: 'Failed to create todo.' }
    }
}

export async function deleteTodo(id: string) {
    try {
        await prisma.todo.delete({ where: { id } })

        revalidatePath('/')
        return { message: `Deleted todo` }
    } catch (e) {
        return { message: 'Failed to delete todo' }
    }
}