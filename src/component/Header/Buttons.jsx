import {Box, Typography, styled} from '@mui/material'
import { Link } from 'react-router-dom';
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// css
const BoxContainer = styled(Box)`
display:flex;
`;

const LinkStyle = styled(Link)`
text-decoration:none;
color:inherit;
// background:pink;
margin-right:30px;
`

const BoxWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  margin-left:auto;
`;

const Buttons = () => {
  return (
    <>
      <BoxWrapper>
        <LinkStyle to="/">
          <Typography variant="h6">Home</Typography>
        </LinkStyle>
        <LinkStyle to="#">
          <Typography variant="h6">About</Typography>
        </LinkStyle>

        <LinkStyle>
          <BoxContainer>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon color="inherit" />
            </Badge>
            <Typography variant="h6" style={{ marginLeft: 5 }}>
              Cart
            </Typography>
          </BoxContainer>
        </LinkStyle>
        <LinkStyle>
          <Typography variant="h6" color="inherit">
            Login
          </Typography>
        </LinkStyle>
      </BoxWrapper>
    </>
  );
};

export default Buttons;
