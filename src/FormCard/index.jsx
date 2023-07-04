import './FormCard.css'
const FormCard = ({
  product,
  products,
  handleChange,
  handleSubmit
}) => {
  return(
    <>
      <div className="conta">
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='productName'>
                Name:
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  value={product.productName}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div>
              <label htmlFor='color'>
                Color:
                <input
                  type="text"
                  id="color"
                  name="color"
                  value={product.color}
                  onChange={handleChange}
                />
              </label>
            </div>
            <button type="submit">Send</button>
          </form>

          <div>
            <h2>Products:</h2>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  {product.productName} - {product.color}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormCard;