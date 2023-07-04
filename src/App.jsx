import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
  ]

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand"><img src={viteLogo}/> <h1>My Site</h1></div>
        <button className="navbar-toggler" onClick={toggleMenu}>
          Menu
        </button>
      </nav>
        <div className={`position-column  container navbar-menu ${showMenu ? "show" : ""}`}
          id="navbarMenu">
            <div className='column column1'>
              <div className='class-table'>
                <div className='container-button'>
                  <h1 className='product'>Product list</h1>
                  <button className='button-add'>ADD</button>
                </div>
                <table>
                    <thead><tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Accion</th>
                    </tr></thead>
                    <tbody>
                      {data.map((val, key) => {
                          return (
                              <tr key={key}>
                                  <td>{val.name}</td>
                                  <td>{val.age}</td>
                                  <td>{val.gender}</td>
                                  <td className='button-eliminar-editar'>
                                    <button className='color'>Edit</button>{' | '}<button className='color'>Delete</button>
                                  </td>
                              </tr>
                          )
                      })}

                    </tbody>
                </table>
              </div>
            </div>
            <div className='column column2'>
                <h1>Agregar un nuevo producto</h1>
            </div>
        </div>
    </>
  )
}

export default App
