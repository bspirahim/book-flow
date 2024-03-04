import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Book from '@/models/bookModel'

export const GET = async (request) => {
    try {
        await connect();
        const books = await Book.find();
        return new NextResponse(JSON.stringify(books), { status: 200 });
    } catch (error) {
        return new NextResponse('Error in fetching books' + error.message, { status: 500 });
    }
}


export const POST = async (request) =>{
    try{
        const body = await request.json();
        await connect();
        const newBooks = new Book(body);
        await newBooks.save();

        return new NextResponse('Book is Added', {status: 200})

    }catch(error){
        return new NextResponse('Error add books' + error.message, { status: 500 });
    }
}



