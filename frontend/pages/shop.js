import Form from '@/components/shop/Form';
import { ShopContext } from '@/context/ShopProvider';
import React, { useContext } from 'react'

function Shop() {
  const {shop } = useContext(ShopContext);
  return (
    <div className="w-full h-screen flex items-start">
    <div className="relative w-1/2 h-full sm:flex flex-col hidden">
        <Form/>
    </div>
    <div className="sm:relative w-full sm:w-1/2 h-full flex flex-col">
    <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1579199339853-eec461b791b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
        />
    </div>
</div>
  )
}

export default Shop;
