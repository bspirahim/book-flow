'use client';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

const AddBookPage = () => {
    const [error, setError] = useState();
    const { data: session } = useSession();

    const handleAddBook = async (e) => {
        e.preventDefault()

        const form = e.target;
        const sellerEmail = form.sellerEmail.value;
        const bookName = form.bookname.value;
        const author = form.author.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const addBook = { bookName, author, category, price, quantity, details, rating, photo, sellerEmail }

        console.log(addBook);

        try {
            const res = await fetch('/api/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addBook)
            })
            if (res.status === 500) {
                setError('Something went wrong');
            } if (res.status === 200) {
                setError('');
                alert('Successfully added Book')
                form.reset();
            }
        } catch (error) {
            setError('Error, try again');
            console.log(error);
        }

    }
    return (
        <div className='mb-5 mx-auto w-full'>
            <h1 className='text-center text-3xl my-5 font-bold'>Add Book</h1>
            <form onSubmit={handleAddBook}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" defaultValue={session?.user?.email} name='sellerEmail' readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Book Name</span>
                        </label>
                        <input type="text" defaultValue='' name='bookname' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Book Author</span>
                        </label>
                        <input type="text" name='author' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Book Quantity</span>
                        </label>
                        <input type="text" name='quantity' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name='category' className="input input-bordered" required>
                            <option value="" >Select Category</option>
                            <option value="music">Arts & Music</option>
                            <option value="biography">Biography</option>
                            <option value="tech">Computer & Tech</option>
                            <option value="history">History</option>
                            <option value="barbie">Health and Fitness</option>
                            <option value="Romance">Romance</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photo' className="input input-bordered" required />
                    </div>
                </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <textarea type="text" name='details' className="input input-bordered" required />
                    </div>
                <div className="form-control mt-6">
                    <input type="submit" className='btn btn-primary' value="Add Book" />
                    <p className='text-red-600 my-2'>{error && error}</p>
                </div>
            </form>
        </div>
    );
};

export default AddBookPage;