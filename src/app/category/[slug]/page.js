'use client'
import React, { useEffect, useState } from 'react';

const SingleCategoryPage = ({ params }) => {
    console.log({ params });
    return (
        <div>My Post: {params.slug}</div>
    );
};

export default SingleCategoryPage;