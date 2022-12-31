import Carousel from "react-multi-carousel";
import { bannerData } from "../../Constant/data";
import { styled, Box } from "@mui/material";
import "react-multi-carousel/lib/styles.css";

// css

const Wrapper = styled(Box)`
padding:10px;
background-color:#f6f6f6;
`;

const Image = styled("img")`
  width: 100%;
  height: 280px;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <Wrapper>
      <Carousel
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        infinite={true}
        slidesToSlide={1}
        swipeable={false}
        draggable={false}
      >
        {bannerData.map((banner) => (
          <Image src={banner.url} alt="Banner" />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default Banner;
