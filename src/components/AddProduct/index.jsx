import React, { useState, useEffect } from "react";
import {productList} from "../../assets/data";
import FormCard from "../FormCard";
import './AddProduct.css'

const AddProduct = ({handleSubmit, showAdd}) => {
  const [product, setProduct] = useState({
      productName: '',
      color: '',
      category:'',
      price:'',
  })

  


  const handleChange = (e) => {
      const { name, value } = e.target
      setProduct({ ...product, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(product)

   // setProducts([...products, newProduct]);
    // reset form
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