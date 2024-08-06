import React, {useContext } from "react";
import MainLayout from "../layouts/main";
import MainCarousel from "../components/Carousel/main";
import HomeCategoriesLayout from "../layouts/home/categories";
import CategoryCard from "../components/categories/categoryCard";
import HomeProductsLayout from "../layouts/home/products";
import ProductCard from "../components/products/productCard";
//import axios from "axios";
import { MyContext } from "../context/index";
//import UserContextProvider from "../context/UserContextProvider";
import {ShopContext} from "../context/ShopContext";
//import ShopContextProvider from "../context/ShopContext";
function IndexView() {
  const {data}= useContext(ShopContext);
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/products", {
  //       params: {
  //         limit: 8,
  //       },
  //     })
  //     .then((res) => {
  //       setData(res.data.products);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <>
   
      <MainLayout>
        <MainCarousel />
        <HomeCategoriesLayout>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </HomeCategoriesLayout>
        {/* <ShopContextProvider> */}
        <HomeProductsLayout>
          {/* {data.map((product) => (
            <ProductCard key={product.id} title={product.title} />
          ))} */}
        
        {data ? (
          
            data.map((p, i) => (
              <MyContext.Provider value={{ p }} key={i}>
                <ProductCard />
              </MyContext.Provider>
            ))
            
          ) : (
            <p>Loading...</p>
          )}
          
        </HomeProductsLayout>
        {/* </ShopContextProvider> */}
      </MainLayout>
      
    </>
  );
}
export default IndexView;
