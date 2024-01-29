import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/main";
import MainCarousel from "../components/Carousel/main";
import HomeCategoriesLayout from "../layouts/home/categories";
import CategoryCard from "../components/categories/categoryCard";
import HomeProductsLayout from "../layouts/home/products";
import ProductCard from "../components/products/productCard";
import axios from "axios";
function IndexView() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
        <HomeProductsLayout>
          {/* {data.map((product) => (
            <ProductCard key={product.id} title={product.title} />
          ))} */}

          {data.map((p, i) => {
            return (
              <>
                <ProductCard key={i} id={p.id} title={p.title} description={p.description} />
              </>
            );
          })}
        </HomeProductsLayout>
      </MainLayout>
    </>
  );
}

export default IndexView;
