import { useState, useEffect } from "react";
import viteLogo from "../../assets/vite.svg";
import EditProdut from "../EditProduct";
import AddProduct from "../AddProduct";
import { Table } from "../Table";
import NoData from "../NoData";
import BurguerComponent from "../BurguerComponent";
import "./stylesPrincipal.css"

const Principal= () => {
    const [products, setProducts] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
    const [isEffectExecuted, setIsEffectExecuted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [product, setProduct] = useState({
      productName: "",
      color: "",
      category: "",
      price: "",
    });
  
   //inicializarel get para traer datos a la tabla
    useEffect(() => {
      (async function fetchData() {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`);
          const products = await response.json();
          setProducts(products.data);
        } catch (error) {
          console.log(`Ups! ocurrió algo, intentalo más tarde. Error: ${error}`);
        }
      })();
  
      if (!isEffectExecuted) {
        setIsEffectExecuted(true);
      }
    }, [isEffectExecuted]);
    
    //consultar el ancho de la pantalla para que aparezca el menu
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 900px)');
      setIsMobile(mediaQuery.matches);
  
      const handleResize = (event) => {
        setIsMobile(event.matches);
      };
  
      mediaQuery.addListener(handleResize);
  
      return () => {
        mediaQuery.removeListener(handleResize);
      };
    }, []);
  
    // Eliminar un producto
    const handleDeleteRow = async (id) => {
      const url = `${import.meta.env.VITE_API_BASE_URL}/products`;
      try {
        const configFetch = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
        await fetch(`${url}${id ? `/${id}` : ""}`, configFetch);
        const targetIndex = products.findIndex(function (objeto) {
          return objeto.id === id;
        });
        setProducts(products.filter((_, index) => index !== targetIndex));
        setShowEdit(false);
        setShowAdd(false);
      } catch (error) {
        console.log(error);
      }
    };
  
   //  actualizar un producto
    const handleEditRow = (index) => {
      setProductToEdit(index);
      setShowEdit(!showEdit);
      setShowAdd(false);
      setProduct(products[index]);
    };
  
    //agregar o actualizar un producto
    const handleSubmit = async (newProduct) => {
      productToEdit === null
        ? setProducts([...products, newProduct])
        : setProducts(
            products.map((currProduct, index) => {
              if (index !== productToEdit) return currProduct;
  
              return newProduct;
            })
          );
      const url = `${import.meta.env.VITE_API_BASE_URL}/products${
        product.id ? `/${product.id}` : ""
      }`;
      const configFetch = {
        method: product.id ? "PUT" : "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      try {
        const response = await fetch(url, configFetch);
        const product = await response.json();
        products.splice(productToEdit, 1, product.data);
        setProducts([...products]);
      } catch (error) {
        console.log(error);
      }
  
      setIsEffectExecuted(false);
      setShowEdit(false);
      setShowAdd(false);
    };
  
    const buttonAdd = () => {
      setShowAdd(!showAdd);
      setShowEdit(false);
    };
  
    const closeModal = () => {
      setShowAdd(false);
      setShowEdit(false);
    };
  
    return (
      <>
        {/* Navbar Section */}
        
        <nav className="navbar">
          <div className="navbar__logo">
            <img src={viteLogo}></img>
            <h1 className="navbar__logo--title">My Site</h1>
          </div>
          
          {
            isMobile ? (
            <div>
              <h1 className="get-started">Get Started</h1>
              <BurguerComponent/>
            </div>) 
            : (
              <div>
                <h1 className="get-started">Get Started</h1>
              </div>
            )
          }
        </nav>
  
        {/* Main Section */}
        <div className="main-container">
          <div className="main-container__section1">
            <h1>Product list</h1>
            <button className="section1__btn" onClick={buttonAdd}>
              Add
            </button>
          </div>
  
          <div>
            {products.length > 0 ? (
              <Table
                rows={products}
                deleteRow={handleDeleteRow}
                editRow={handleEditRow}
              />
            ) : (
              <NoData />
            )}
          </div>
          <AddProduct
            handleSubmit={handleSubmit}
            showAdd={showAdd}
            product={product}
            setProduct={setProduct}
            closeModal={closeModal}
          />
  
          {showEdit && (
            <EditProdut
              handleSubmit={handleSubmit}
              product={product}
              setProduct={setProduct}
              setShowEdit={setShowEdit}
              closeModal={closeModal}
            />
          )}
        </div>
      </>
    );
  }
  
  export default Principal;