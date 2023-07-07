import React, { useState, useEffect } from "react";
import FormCard from "../FormCard";
import './AddProduct.css'

const AddProduct = ({handleSubmit, showAdd, product,setProduct}) => {

  const handleChange = (e) => {
      const { name, value } = e.target
      setProduct({ ...product, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(product)

    setProduct({
      productName: '',
      color: '',
      category: '',
      price: '',
    })
  }

  return ( 
    <>
       <h1 className="h1-add">Add Product</h1>
      <FormCard product={product}  handleChange={handleChange} handleSubmit= {onSubmit} showAdd={showAdd}/>
    
    </>
  )
}

export default AddProduct;