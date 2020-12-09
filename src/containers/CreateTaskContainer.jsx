import React, { useState } from "react";
import { connect } from "react-redux";
import CreateTask from "../components/CreateTask";
import { addTask } from "../redux/action-creators/tasksAction";
import useStatus from "../hooks/useStatus";

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
  };
};

const CreateTaskContainer = ({ addTask }) => {
  const [status] = useStatus();
  const [task, setTask] = useState({ name: "", status });
  const [invalidLength, setInvalidLength] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setInvalidLength(value.length > 10);
    setTaskName(value);
    setTask({ ...task, name: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!taskName || invalidLength) return;
    addTask(task);
    setTaskName("");
    setTask({ ...task, name: "" });
    setInvalidLength(false);
  };

  const openSnackbar = () => {
    if (invalidLength) setOpen(true);
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway" || !invalidLength) {
      return;
    }
    setOpen(false);
  };

  return (
    <CreateTask
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      invalidLength={invalidLength}
      taskName={taskName}
      openSnackbar={openSnackbar}
      closeSnackbar={closeSnackbar}
    />
  );
};

export default connect(null, mapDispatchToProps)(CreateTaskContainer);
