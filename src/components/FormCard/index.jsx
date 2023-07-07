import "./FormCard.css";
import ButtonAdd from "../ButtonAdd";

const FormCard = ({
  product,
  handleChange,
  handleSubmit,
  showAdd,
  setShowEdit,
}) => {
  const handleClick = () => {
    setShowEdit(false);
  };

  return (
    <>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="productName">
              PRODUCT NAME
              <input
                type="text"
                id="productName"
                name="productName"
                value={product.productName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label htmlFor="color">
              COLOR
              <input
                type="text"
                id="color"
                name="color"
                value={product.color}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label htmlFor="category">
              CATEGORY
              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                className="select-css"
              >
                <option value="Music">Music</option>
                <option value="Clothing">Clothing</option>
                <option value="Home">Home</option>
                <option value="Baby">Baby</option>
              </select>
            </label>
          </div>

          <div>
            <label htmlFor="price">
              PRICE
              <input
                type="number"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="button-actions">
            <ButtonAdd
              text={showAdd ? "Add" : "Update"}
              type="submit"
              color="#43CE91"
            />
            {!showAdd && (
              <button onClick={() => handleClick} className="button-cancel">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default FormCard;
