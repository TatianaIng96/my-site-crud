import "./App.css";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";
import { useState } from "react";
import { Header } from "./components/Header";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [rows, setRows] = useState([
    { item: "Item 1", color: "Color 1", category: "Category 1", price: 100 },
    { item: "Item 2", color: "Color 2", category: "Category 2", price: 200 },
    { item: "Item 3", color: "Color 3", category: "Category 3", price: 300 },
  ]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, index) => index !== targetIndex));
  };

  const handleEditRow = (index) => {
    setRowToEdit(index);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, index) => {
            if (index !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="App">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default App;
