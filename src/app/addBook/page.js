import React from 'react';

const AddBookPage = () => {
    return (
        <div className='my-12 mb-20 container mx-auto w-3/4'>
            <h1 className='text-center text-3xl mb-7 font-bold'>Add Book</h1>
            <form>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Book No</span>
                        </label>
                        <input type="text" defaultValue='' name='id' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Book Name</span>
                        </label>
                        <input type="text" defaultValue='' name='name' className="input input-bordered" required />
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
                        <input type="text" name='title' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name='category' className="input input-bordered" required>
                            <option value=""></option>
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
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' className="input input-bordered" required />
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
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail Description</span>
                    </label>
                    <textarea type="text" name='details' className="input input-bordered" required />
                </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className='btn btn-primary' value="Add Book" />
                </div>
            </form>
        </div>
    );
};

export default AddBookPage;