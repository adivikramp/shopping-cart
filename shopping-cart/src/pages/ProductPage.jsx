import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;

const ProductPage = () => {
  return (
    <Wrapper>
      <List>
        {products.map((prod) => (
          <>
            <ProductCard item={prod} />
          </>
        ))}
      </List>
    </Wrapper>
  );
};

export default ProductPage;
