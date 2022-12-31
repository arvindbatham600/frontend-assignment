import { navData } from "../../Constant/data";
import { Typography, Box, styled } from "@mui/material";

// css

const Text = styled(Typography)`
font-size:14px;
font-weight:600;
opacity:0.8;
`


const Navbar = () => {
    return (
      <Box
        style={{
          margin: "0 130px 10px 130px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          padding:'10px'      
        }}
      >
        {navData.map((data) => (
          <Box>
            <img
              src={data.url}
              alt="icons"
              style={{
                width: 64,
              }}
            />
            <Text>{data.text}</Text>
          </Box>
        ))}
      </Box>
    );
}

export default Navbar;