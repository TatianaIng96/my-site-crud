import React, { useState, useEffect } from "react";
import FormCard from "../FormCard";
import './EditProduct.css'

const EditProdut =({handleSubmit,setShowEdit, product,setProduct}) => {

  const handleChange = (e) => {
      const { name, value } = e.target
      setProduct({ ...product, [name]: value })
  }

  const handleClick = () => {
    setShowEdit(false)
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
       <h1 className="h1-edit">Edit Product</h1>
      <FormCard product={product}  handleChange={handleChange} handleSubmit= {onSubmit} handleClick={handleClick}/>
    </>
  )
}

export default EditProdut;