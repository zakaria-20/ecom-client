import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import ProductDetails from '../components/products/ProductDetails';
function Productdetail() {
     let { id} = useParams();
        const [product,setProduct]=useState([])
        useEffect(() => {
            axios
              .get(`https://dummyjson.com/products/${id}`)
              .then((res) => {
                setProduct(res.data);
              })
              .catch((err) => {
                console.log(err);
              });
          }, []);
  return (
    <>
        <h1>Product Detail View </h1>
        <ProductDetails title={product.title} description={product.description} />
       
    </>
  )
}
export default Productdetail;
