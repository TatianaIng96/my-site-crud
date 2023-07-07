import "./NoData.css";
import scarecrow from "../../assets/scarecrow.png";

const NoData = () => {
  return (
    <>
      <div className="nodata__content">
        <h1>Ups! no hay productos que mostrar, por favor agregue uno</h1>
        <img src={scarecrow} className="img" />
      </div>
    </>
  );
};
export default NoData;
