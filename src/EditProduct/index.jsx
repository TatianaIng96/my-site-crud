import React, { useState, useEffect } from "react";
import {productList} from "../assets/data";
import FormCard from "../FormCard";

const EditProdut = () => {
  const [product, setProduct] = useState({
      productName: '',
      color: '',
  })

  const [products, setProducts] = useState(productList);


  const handleChange = (e) => {
      const { name, value } = e.target
      setProduct({ ...product, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...product,
      id: Date.now(),
    }

    setProducts([...products, newProduct]);
    // reset form
    setProduct({
      productName: '',
      color: '',
    })
  }

  // useEffect(() => {
  //   console.log(products);
  // }, [products]); // Este efecto se ejecutará cada vez que 'products' cambie

  return ( 
    <>
      <FormCard product={product} products={products} handleChange={handleChange} handleSubmit= {handleSubmit}/>
      <button className="hola">hola</button>
    </>
  )
}

export default EditProdut;