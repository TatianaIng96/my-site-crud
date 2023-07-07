import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EditProdut from './components/EditProduct'
import './App.css'
import AddProduct from './components/AddProduct'
import { Table } from './components/Table'
import NoData from './components/NoData'



function App() {
  const [products, setProducts] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [showAdd,setShowAdd]=useState(false)
  const [showEdit,setShowEdit]=useState(false)
  const [productToEdit, setProductToEdit] = useState(null);
  const [isEffectExecuted, setIsEffectExecuted] = useState(false);
   
  const [product, setProduct] = useState({
    productName: '',
    color: '',
    category:'',
    price:'',
})


  useEffect(() => {
    (async function fetchData(){
      try {
        const response = await fetch('http://localhost:8080/products')
        const products = await response.json();
        setProducts(products.data)
        
      } catch(error) {
        console.log(`Ups! ocurrió algo, intentalo más tarde. Error: ${error}`)
      }
    })()

    if (!isEffectExecuted) {
      setIsEffectExecuted(true);
    }
  }, [isEffectExecuted])

  const handleDeleteRow = async(id) => {
    const url ="http://localhost:8080/products"
    try {
      const configFetch = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      }
      await fetch(`${url}${id ? `/${id}` : ''}`,configFetch)
      
    } catch(error) {
      console.log(error)
    }
    const targetIndex = products.findIndex(function(objeto) {
      return objeto.id === id;
    });
    setProducts(products.filter((_, index) => index !== targetIndex));
    setShowEdit(false);
    setShowAdd(false)
  };

  const handleEditRow = (index) => {
    setProductToEdit(index);
    setShowEdit(!showEdit);
    setShowAdd(false)
    setProduct(products[index])
  };

  const handleSubmit = async(newProduct) => {
    productToEdit === null
      ? setProducts([...products, newProduct])
      : setProducts(
          products.map((currProduct, index) => {
            if (index !== productToEdit) return currProduct;

            return newProduct;
          })
        );
        const url = `http://localhost:8080/products${product.id ? `/${product.id}` : ''}`
        const configFetch = {
          method: product.id ? 'PUT' : 'POST',
          body: JSON.stringify(newProduct),
          headers: {
            'Content-Type': 'application/json'
          },
        }
        
        try {
          const response = await fetch(url, configFetch)
          const product = await response.json();
          products.splice(productToEdit, 1,product.data)
          setProducts([...products]);
    
        } catch(error) {
         console.log(error);
        }

        setIsEffectExecuted(false);
        setShowEdit(false);

  };



  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const buttonAdd = () => {
    setShowAdd(!showAdd);
    setShowEdit(false)
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand"><img src={viteLogo}/> <h1 className='h1'>My Site</h1></div>
        <button className="navbar-toggler" onClick={toggleMenu}>
          Menu
        </button>
      </nav>
        <div className={`position-column  container navbar-menu ${showMenu ? "show" : ""}`}
          id="navbarMenu">
            <div className={`column column1 ${showAdd ? "show" : ""}`}>
             <h1 className='title-h1'>Product list</h1>
             <button onClick={buttonAdd} className='btn'>ADD</button>
             {products.length > 0 ? 
             <Table rows={products} deleteRow={handleDeleteRow} editRow={handleEditRow} />
              : <NoData/>}
            </div>
            <div className='column column2'>
                {showAdd &&  <AddProduct handleSubmit={handleSubmit} showAdd={showAdd} product={product} setProduct={setProduct}/>}
                {showEdit &&  <EditProdut handleSubmit={handleSubmit} product={product} setProduct={setProduct}
                                          setShowEdit={setShowEdit}/>}
            </div>
        </div>
    </>
  )
}

export default App
