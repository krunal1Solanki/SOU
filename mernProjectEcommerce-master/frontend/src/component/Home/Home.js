import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import NavigationBar from "../layout/Header/NavigationBar";
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <NavigationBar/>
          <MetaData title="ECOMMERCE" />
          <div className="heading">
          </div>
            <div className="banner">
            {/* <p>Welcome to Shape Of You</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1> */}
          
            
            <a href="#container">
              <button className="scroll">
                Scroll <CgMouse />
              </button>
            </a>
            </div>
            

          <h2 className="homeHeading">Featured Products</h2>
          
      
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
