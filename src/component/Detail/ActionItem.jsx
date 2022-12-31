import { Box, styled } from "@mui/system";
import { FlashOn as Flash } from "@mui/icons-material";
import { Button } from "@mui/material";
import {useState} from "react";
import DialogBox from "../Dialog/DialogBox";
// css
const Wrapper = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")`
  padding: 15px 20px;
`;

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
  margin-top: 10px;
 margin-left: 25%;
`;

const ActionItem = ({ product }) => {
    const [open, setOpen] = useState(false);

    const showDialog = () => {
        setOpen(true);
     }

  return (
    <Wrapper>
      <Box
        style={{
          // padding: "15px 20px",
          border: "1px solid #f0f0f0",
        }}
      >
        <Image style={{ width: "90%" }} src={product.detailUrl} alt="product" />
      </Box>
      <StyledButton onClick={() => showDialog()} style={{ background: "#fb641b" }} variant="contained">
        <Flash />
        Buy Now
          </StyledButton>
        <DialogBox  open = {open} setOpen = {setOpen} product = {product} />
    </Wrapper>
  );
};

export default ActionItem;
