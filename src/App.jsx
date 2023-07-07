import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import EditProdut from "./components/EditProduct";
import "./App.css";
import AddProduct from "./components/AddProduct";
import { productList } from "./assets/data";
import { Table } from "./components/Table";

function App() {
  const [products, setProducts] = useState(productList);
  const [showMenu, setShowMenu] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setProducts(products.filter((_, index) => index !== targetIndex));
  };

  const handleEditRow = (index) => {
    setProductToEdit(index);
    setShowEdit(!showEdit);
    setShowAdd(false);
  };

  const handleSubmit = (newProduct) => {
    productToEdit === null
      ? setProducts([...products, newProduct])
      : setProducts(
          products.map((currProduct, index) => {
            if (index !== productToEdit) return currProduct;

            return newProduct;
          })
        );
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const buttonAdd = () => {
    setShowAdd(!showAdd);
    setShowEdit(false);
  };

  return (
    <>
      <nav class="navbar">
        <div class="navbar__container">
          <img src={viteLogo}></img>
          <h1 id="navbar__logo">My Site</h1>

          <div class="navbar__toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>

          <div className="navbar__btn">
            <a href="/" className="button">
              Get Started
            </a>
          </div>
        </div>
      </nav>
      <div className={`column column1 ${showAdd ? "show" : ""}`}>
        <h1 className="title-h1">Product list</h1>
        <button onClick={buttonAdd} className="btn">
          ADD
        </button>
        <Table
          rows={products}
          deleteRow={handleDeleteRow}
          editRow={handleEditRow}
        />
      </div>
      <div className="column column2">
        {showAdd && (
          <AddProduct handleSubmit={handleSubmit} showAdd={showAdd} />
        )}
        {showEdit && (
          <EditProdut
            handleSubmit={handleSubmit}
            defaultValue={productToEdit !== null && products[productToEdit]}
            setShowEdit={setShowEdit}
          />
        )}
      </div>
    </>
  );
}

export default App;
