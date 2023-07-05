import React, { useState, useEffect } from "react";
import {productList} from "../../assets/data";
import FormCard from "../FormCard";
import './EditProduct.css'

const EditProdut =({handleSubmit, defaultValue,setShowEdit}) => {
  const [product, setProduct] = useState(defaultValue || {
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
       <h1 className="h1-edit">Edit Product</h1>
      <FormCard product={product}  handleChange={handleChange} handleSubmit= {onSubmit} setShowEdit={setShowEdit}/>
    
    </>
  )
}

export default EditProdut;