import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mt-[80px]'>
            <h1 className='text-4xl text-center mb-[40px] text-primary font-bold'>Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mb-[80px]'>

{
    reviews.map(review => <div class="card w-96  shadow-xl">
        <div class="avatar mx-auto ">
            <div class="w-24 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=92310" />
            </div>
        </div>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{review.name}</h2>
            <p>{review.review}</p>
            <div className='flex items-center justify-center'>
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
                
            </div>

        </div>
    </div>)
}
</div>
        </div>
    );
};

export default Review;