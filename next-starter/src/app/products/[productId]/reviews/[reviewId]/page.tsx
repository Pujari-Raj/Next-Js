import React from 'react'

const ProductReview = ({params}: {
    params: {
        productId: string,
        reviewId: string
    }
}) => {
  return (
    <div>ProductReview {params.reviewId} of product {params.productId} </div>
  )
}

export default ProductReview