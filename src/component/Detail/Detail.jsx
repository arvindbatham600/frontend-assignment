import { products } from "../../Constant/data";
import { useParams } from "react-router-dom";
import { Box, styled } from "@mui/system";
import { Grid } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetails from "./ProductDetails";

// css

const Wrapper = styled(Box)``;

  const RightContainer = styled(Grid)`
    margin-top: 50px;
    padding-left: 20px;
  `;

const Detail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  console.log(product);
  return (
    <Wrapper>
      {product && (
        <Grid container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <ProductDetails product={product} />
          </RightContainer>
        </Grid>
      )}
    </Wrapper>
  );
};

export default Detail;
