import React from "react";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function CategoryCard() {
  return (

        <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6} className="mt-2 mb-2 text-center">
          <Image src="/assets/category.svg" rounded />
        </Col>
  );
}

export default CategoryCard;