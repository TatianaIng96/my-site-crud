import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EditProdut from './components/EditProduct'
import './App.css'
import AddProduct from './components/AddProduct'
import { productList } from './assets/data'
import { Table } from './components/Table'


function App() {
  const [products, setProducts] = useState(productList);
  const [showMenu, setShowMenu] = useState(false);
  const [showAdd,setShowAdd]=useState(false)
  const [showEdit,setShowEdit]=useState(false)
  const [productToEdit, setProductToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setProducts(products.filter((_, index) => index !== targetIndex));
  };

  const handleEditRow = (index) => {
    setProductToEdit(index);
    setShowEdit(!showEdit);
    setShowAdd(false)

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
             <Table rows={products} deleteRow={handleDeleteRow} editRow={handleEditRow} />
            </div>
            <div className='column column2'>
                {showAdd &&  <AddProduct handleSubmit={handleSubmit} showAdd={showAdd}/>}
                {showEdit &&  <EditProdut handleSubmit={handleSubmit} 
                                          defaultValue={productToEdit !== null && products[productToEdit]}
                                          setShowEdit={setShowEdit}/>}
            </div>
        </div>
    </>
  )
}

export default App
