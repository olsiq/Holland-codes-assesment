import React from "react";
import "../styles/controls.css";
import "../components/functions/shuffle";
import Button from "@mui/material/Button";
import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Alert } from "@mui/material";

//set the transition variable.it makes the the prompt to appear from buttom up
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function Controls({
  x,
  changeX,
  changeRealistic,
  changeInvestigative,
  changeArtistic,
  changeSocial,
  changeEnterprising,
  changeConventional,
  counterRealistic,
  counterInvastigative,
  counterArtistic,
  counterSocial,
  counterEnterprising,
  counterConventional,
  tempR,
  tempI,
  tempA,
  tempS,
  tempE,
  tempC,
  changeR,
  changeI,
  changeA,
  changeS,
  changeE,
  changeC,
  reset,
}) {
  //open & close dialog state
  const [open, setOpen] = useState(false);
  //open & close alert state
  const [openAlert, setOpenAlert] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    // console.log("pressed by mistake,canceled");
    setOpen(false);
  };

  //confirming to reset
  const handleClose = () => {
    changeX(0);
    changeRealistic(0);
    changeInvestigative(0);
    changeArtistic(0);
    changeSocial(0);
    changeEnterprising(0);
    changeConventional(0);
    changeR(null);
    changeI(null);
    changeA(null);
    changeS(null);
    changeE(null);
    changeC(null);
    reset(true);
    setOpen(false);
  };

  const handleResetClick = () => {
    // console.log("reset Button pressed");

    handleClickOpen();
  };

  //alert

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleNextClick = () => {
    const i = null;
    if (
      tempR === i ||
      tempI === i ||
      tempA === i ||
      tempS === i ||
      tempE === i ||
      tempC === i
    ) {
      //alert("answer all the questions");
      setOpenAlert(true);
    } else {
      changeX((prevValue) => prevValue + 1);

      changeRealistic(counterRealistic + tempR);
      changeInvestigative(counterInvastigative + tempI);
      changeArtistic(counterArtistic + tempA);
      changeSocial(counterSocial + tempS);
      changeEnterprising(counterEnterprising + tempE);
      changeConventional(counterConventional + tempC);
      changeR(null);
      changeI(null);
      changeA(null);
      changeS(null);
      changeE(null);
      changeC(null);
      window.scrollTo(0, 1);
    }
  };

  return (
    <div className='control-wraper'>
      <div className='reset' id='reset'>
        <Button
          variant='outlined'
          className='reset-btn'
          onClick={handleResetClick}
        >
          RESET
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          //when clicked outside of the dialog run the handleCancel function
          onBackdropClick={handleCancel}
          aria-describedby='alert-dialog-slide-description'
        >
          <DialogTitle>{"Reset Confirmation"}</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-slide-description'>
              Confirming to reset the assesment will erase all previous progress
              and start the assesment from the begining
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button onClick={handleClose}>Confirm</Button>
          </DialogActions>
        </Dialog>
      </div>

      <div id='next-btn'>
        <Button
          onClick={() => {
            handleNextClick();
          }}
          variant='outlined'
          color='success'
        >
          {x === 10 ? "Show results" : "NEXT"}
        </Button>
        <Dialog
          open={openAlert}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseAlert}
          aria-describedby='alert-dialog-slide-description'
        >
          <Alert
            severity='error'
            aria-describedby='alert-dialog-slide-description'
          >
            Answer all the questions to continue!
          </Alert>
        </Dialog>
      </div>

      <div className='progress-bar'>
        <div className='progress-section'>
          <p>Progress {x}/10</p>
          <progress max='10' value={x}></progress>
        </div>
      </div>
    </div>
  );
}
