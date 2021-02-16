import { Button, Divider, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Confirmation = ({ message }) => {
  return (
    <>
      <div>
        <Typography variant='h6'>{message}</Typography>
        <br />
        <Divider />
        <br />
        <Typography variant='subtitle2' gutterBottom>
          {message === "Successful Payment"
            ? "Your booking reference : Rgh8787878lkj"
            : ""}
        </Typography>
      </div>
      <br />
      <Button component={Link} to='/' variant='outlined' type='button'>
        Back to Home Page
      </Button>
    </>
  );
};

export default Confirmation;
