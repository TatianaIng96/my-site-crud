import React, { useState, useEffect } from "react";
import FormCard from "../FormCard";
import "./AddProduct.css";

const AddProduct = ({
  handleSubmit,
  showAdd,
  product,
  setProduct,
  closeModal,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(product);
    setProduct({
      productName: "",
      color: "",
      category: "",
      price: "",
    });
    closeModal();
  };

  return (
    <div className={`modal ${showAdd && "block"}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="h1-add">Add Product</h1>
          <button className="modal-exit-btn" onClick={closeModal}>
            X
          </button>
        </div>
        <FormCard
          product={product}
          handleChange={handleChange}
          handleSubmit={onSubmit}
          showAdd={showAdd}
        />
      </div>
    </div>
  );
};

export default AddProduct;
