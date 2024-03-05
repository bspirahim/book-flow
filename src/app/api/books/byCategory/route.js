import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Book from '@/models/bookModel'


export const POST = async (request) => {
    /* receve data from frontend category page*/
    const {category} = await request.json();
    try {
        await connect();
        const books = await Book.find({
            "category": category
          });
        return new NextResponse(JSON.stringify(books), { status: 200 });
    } catch (error) {
        return new NextResponse('Error in fetching books' + error.message, { status: 500 });
    }
}