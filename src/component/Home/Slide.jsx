import Carousel from "react-multi-carousel";
import { products } from "../../Constant/data";
import { styled, Box, Typography } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

// css

const Image = styled("img")`
  width: auto;
  height: 150px;
`;

const Wrapper = styled(Box)`
  padding: 10px;
  text-align: center;
  margin-top: 20px;
`;

const Text = styled(Typography)`
font-size:14px;
margin-top:5px;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
  },
};

const Slide = () => {
  return (
    <Wrapper>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        centerMode={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        showDots={false}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
            <Link to={`product/${product.id}`} style = {{textDecoration: 'none'}} >
            <Box>
              <Image src={product.url} alt="product" />
              <Text
                style={{
                  fontWeight: 600,
                  color: "#212121",
                }}
              >
                {product.title.shortTitle}
              </Text>
              <Text
                style={{
                  color: "green",
                }}
              >
                {product.discount}
              </Text>
              <Text
                style={{
                  color: "#212121",
                  opacity: ".6",
                }}
              >
                {product.tagline}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default Slide;
