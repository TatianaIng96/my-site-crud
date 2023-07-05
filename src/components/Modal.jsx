import React, { useState } from "react";
import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      item: "",
      color: "",
      category: "",
      price: "",
    }
  );

  // const validateForm = () => {
  //   if (
  //     formState.item &&
  //     formState.color &&
  //     formState.category &&
  //     formState.price
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="item">New Item</label>
            <input
              name="item"
              placeholder="your product name"
              value={formState.item}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
              name="color"
              placeholder="silver, black, white, etc"
              value={formState.color}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              value={formState.category}
              onChange={handleChange}
            >
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              placeholder="$1999,99"
              value={formState.price}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
