import './NoData.css';
import scarecrow from '../../assets/scarecrow.png'

const NoData = () => {
  return (
    <>
      <h3 className="primary">404 NOT FOUND</h3>
      <section>
        <div>
          <h1 className='h1-up'>Ups! no hay productos que mostrar, por favor agregue uno</h1>
          <img src={scarecrow} className='img' />
        </div>
      </section>
    </>
  )
}
export default NoData;