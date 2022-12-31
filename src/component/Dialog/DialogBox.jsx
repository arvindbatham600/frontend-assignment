import { Dialog, TextField, styled, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useNavigate } from "react-router-dom";

// css
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 500px;
  padding: 20px;
`;

const ConfirmButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const Text = styled(TextField)`
  margin: 5px 0;
`;

const initialData = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  dateOfBirth: "",
  address: "",
};

const DialogBox = ({ open, setOpen, product }) => {
  const [data, setData] = useState(initialData);
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmBox = () => {
    setConfirm(false);
  };

  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const confirmOrder = (e) => {
    e.preventDefault();
    setOpen(false);
    console.log(data.firstname);
    setConfirm(true);
    setTimeout(() => {
      setConfirm(false);
      navigate("/");
    }, 5000);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <Wrapper>
          <form onSubmit={confirmOrder}>
            <Text
              onChange={(e) => onInputChange(e)}
              fullWidth
              required
              variant="outlined"
              label="Enter Firstname"
              name="firstname"
            />
            <Text
              variant="outlined"
              fullWidth
              required
              label="Enter Lastname"
              onChange={(e) => onInputChange(e)}
              name="lastname"
            />
            <Text
              variant="outlined"
              fullWidth
              required
              label="Enter Phone Number"
              onChange={(e) => onInputChange(e)}
              name="phone"
              type="number"
            />
            <Text
              variant="outlined"
              fullWidth
              required
              label="Enter Email"
              onChange={(e) => onInputChange(e)}
              name="email"
              type="email"
            />
            <Text
              variant="outlined"
              fullWidth
              required
              label="Enter Date of Birth(dd/mm/yyyy)"
              onChange={(e) => onInputChange(e)}
              name="dateOfBirth"
              //   type="date"
            />

            <Text
              variant="outlined"
              fullWidth
              required
              label="Delivery Address"
              onChange={(e) => onInputChange(e)}
              name="address"
            />

            <ConfirmButton fullWidth type="submit">
              {" "}
              Confirm Order
            </ConfirmButton>
          </form>
        </Wrapper>
      </Dialog>
      <Box>
        <Dialog open={confirm} onClose={handleConfirmBox}>
          <DialogTitle
            sx={{
              fontFamily: "Iosevka",
              color: "success.main",
              fontWeight: "bold",
              backgroundColor: "black",
            }}
            id="alert-dialog-title"
          >
            <Button
              disableElevation
              disableRipple
              color="success"
              startIcon={<CheckCircleRoundedIcon />}
            >
              Order Confirmed Successfully!
            </Button>
          </DialogTitle>
          <DialogContent sx={{ margin: 1 }}>
            <DialogContentText
              sx={{
                color: "black",
              }}
              id="alert-dialog-description"
            >
              Thank You {data.firstname}! Your order ({product.title.shortTitle}
              ) is Confirmed. Your order will be delivered to {data.address}{" "}
              within 5-6 days.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

export default DialogBox;
