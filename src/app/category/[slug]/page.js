import React from 'react';

const SingleCategoryPage = ({ params }) => {
    return (
        <div>My Post: {params.slug}</div>
    );
};

export default SingleCategoryPage;