import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Book from '@/models/bookModel'


export const GET = async (request) => {
    const category = 'categoryName'
    try {
        await connect();
        const books = await Book.find({
            "_id": 0,
            "category": category
          });
        return new NextResponse(JSON.stringify(books), { status: 200 });
    } catch (error) {
        return new NextResponse('Error in fetching books' + error.message, { status: 500 });
    }
}