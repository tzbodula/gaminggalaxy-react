import Header from "../react-components/Header.js";
import Footer from "../react-components/Footer.js";

import "../css/merchandise.css";

import { useEffect, useReducer} from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from "../react-components/Product.js";
import LoadingBox from "../react-components/LoadingBox.js";
import MessageBox from "../react-components/MessageBox.js";

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, products: action.payload, loading: false};
    case 'FETCH_FAIL':
      return{...state, loading: false, error: action.payload};
    default:
      return state; 
  }
}


export default function GalaxyMerch() {
  const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true, 
    error: '',
  });
  useEffect(()=>{
    const fetchData = async () => {
      dispatch({type: 'FETCH_REQUEST'});
      try {
        const result = await axios.get("/api/galaxymerch");
        dispatch({type:'FETCH_SUCCESS', payload: result.data});
      } catch(err) {
        dispatch({type:'FETCH_FAIL', payload: err.message});
      }

    };
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <div>
        <main>
          <h1>Featured Products</h1>
          <div id="galaxy_merch_container">
            {loading ? (
              <LoadingBox />
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <Row>
                {products.map((product) => (
                  <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                    <Product product={product}></Product>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
