import React from "react";
import "./Table.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr className="table-titles">
            <th>Product Name</th>
            <th>Color</th>
            <th>Category</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.productName}</td>
                <td>{row.color}</td>
                <td>
                  <span className="label">{row.category}</span>
                </td>
                <td>{"$" + row.price}</td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(index)}
                    />
                    <BsFillPencilFill onClick={() => editRow(index)} />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const TableTwo = ({ deleteRow, rows }) => {
  // props = {
  //   rows: "...",
  //   deleteRow: "...",
  //   isLogged: 1
  // }

  // const deleteRow = props.deleteRow
  // const rows = props.rows

  // const { deleteRow, rows } = props;

  return (
    <div className="">
      <p>{deleteRow}</p>
    </div>
  );
};
