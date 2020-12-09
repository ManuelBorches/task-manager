import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import style from "../assets/index.module.css";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "50px",
      backgroundColor: "rgba(255, 255, 255, 0.767)",
    },
  },
  buttonEdit: {
    "&:hover": {
      cursor: "pointer",
      color: "blue",
    },
  },
  errorMessage: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function CreateTask({
  handleChange,
  handleSubmit,
  invalidLength,
  taskName,
  closeSnackbar,
  openSnackbar,
}) {
  const classes = useStyles();
  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <TextField
          placeholder="Enter your task"
          className={classes.textField}
          id="outlined-basic"
          variant="outlined"
          size="small"
          autoFocus={true}
          fullWidth={true}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {invalidLength || !taskName ? (
                  <AddCircleIcon color="disabled" fontSize="large" />
                ) : (
                  <AddCircleIcon
                    fontSize="large"
                    className={classes.buttonEdit}
                    onClick={handleSubmit}
                  />
                )}
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
          value={taskName}
        ></TextField>
      </form>
      {invalidLength ? (
        <Snackbar
          className={style.snackbar}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          open={openSnackbar}
          onClose={closeSnackbar}
          message="Task should not be greater than 10 characters!"
        />
      ) : null}
    </>
  );
}
