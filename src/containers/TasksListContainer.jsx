import React, { useState } from "react";
import { connect } from "react-redux";
import {
  editTask,
  deleteTask,
  editTaskStatus,
} from "../redux/action-creators/tasksAction";
import TasksList from "../components/TasksList";

const mapStateToProps = (state) => {
  return {
    tasks: state.task.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editTask: (task) => dispatch(editTask(task)),
    editTaskStatus: (task) => dispatch(editTaskStatus(task)),
    deleteTask: (task) => dispatch(deleteTask(task)),
  };
};

const TaskListContainer = ({ tasks, editTask, deleteTask, editTaskStatus }) => {
  const [editing, setEditing] = useState(false);
  const [taskEditing, setTaskEditing] = useState(null);
  const [invalidLength, setInvalidLength] = useState(false);
  const [taskName, setTaskName] = useState("");

  const handleEdit = (index) => {
    if (invalidLength) return;
    editTask({ index, name: taskName });
    setEditing(false);
  };

  const handleSubmit = (event, index) => {
    event.preventDefault();
    handleEdit(index);
  };

  const enableEditing = (taskName, index) => {
    setTaskEditing(index);
    setTaskName(taskName);
    setEditing(true);
  };

  const handleDelete = (index) => {
    deleteTask(index);
  };

  const changeValue = (event) => {
    const value = event.target.value;
    setInvalidLength(value.length < 1 || value.length > 10);
    if (invalidLength && value.length > 10) return;
    setTaskName(value);
  };

  const handleStatus = (index, status) => {
    editTaskStatus({ index, status });
  };

  return (
    <TasksList
      tasks={tasks}
      handleEdit={handleEdit}
      enableEditing={enableEditing}
      editing={editing}
      taskName={taskName}
      changeValue={changeValue}
      taskEditing={taskEditing}
      invalidLength={invalidLength}
      handleDelete={handleDelete}
      handleStatus={handleStatus}
      handleSubmit={handleSubmit}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
