"use client"
import { redirect, useRouter } from "next/navigation";

const SingleProduct = ({ params }: { params: { productId: string } }) => {

  const router = useRouter();
  const handleClick = () => {
    console.log(`placing order`);
    // redirect('/products');
    router.push("/");
  };

  // 
  function getRandomInt(count: number) {
    return Math.floor(Math.random() * count)
  }

  const random = getRandomInt(1);
  console.log(random);
  
  if (random === 1) {
    console.log('throwing error');
    
    throw new Error(`Error loading review`)
  }

  return (
    <div>
      Details of product {params.productId}
      <button onClick={handleClick}>place prder</button>
    </div>
  );
};

export default SingleProduct;
