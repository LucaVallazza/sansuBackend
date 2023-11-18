import prisma from "@/app/db";
import { NextResponse } from "next/server";

export async function GET(){
    await prisma.users.deleteMany()
    await prisma.character.deleteMany()
    return new NextResponse('Reseteado', {status:200})
}