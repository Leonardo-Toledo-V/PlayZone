import React from 'react'
import Form from './shop/Form'

function Shop() {
  return (
    <div className="flex items-start">
    <div className="sm:relative w-full lg:w-3/5 h-full flex flex-col">
        <Form/>
    </div>
    <div className="relative lg:w-2/5 h-full lg:flex flex-col hidden">
    <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1618193139062-2c5bf4f935b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />
    </div>
    </div>
  )
}

export default Shop
