import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Category from '@/models/categoryModel'


export const GET = async (request) => {
    try {
        await connect();
        const categories = await Category.find();
        return new NextResponse(JSON.stringify(categories), { status: 200 });
    } catch (error) {
        return new NextResponse('Error in fetching books' + error.message, { status: 500 });
    }
}