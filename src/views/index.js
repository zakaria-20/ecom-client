import React from 'react'
import MainLayout from '../layouts/main'
import MainCarousel from '../components/carousel/main';
import HomeCategoriesLayout from '../layouts/home/categories';
import CategoryCard from '../components/categories/categoryCard';
import HomeProductsLayout from '../layouts/home/products';
import ProductCard from '../components/products/productCard';
function IndexView(){
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
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </HomeProductsLayout>
        </MainLayout>
        </>
    )
}

export default IndexView;