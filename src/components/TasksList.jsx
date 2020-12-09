import React from "react";
import style from "../assets/index.module.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CheckIcon from "@material-ui/icons/Check";
import TextField from "@material-ui/core/TextField";
// avatar icons
import NotInterestedIcon from "@material-ui/icons/NotInterested"; // pending
import CheckCircleIcon from "@material-ui/icons/CheckCircle"; // finished
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"; // in progress
import CancelIcon from "@material-ui/icons/Cancel"; // suspend
import DeleteIcon from "@material-ui/icons/Delete"; // delete

export default function TasksList({
  tasks,
  handleEdit,
  enableEditing,
  editing,
  taskName,
  changeValue,
  taskEditing,
  invalidLength,
  handleDelete,
  handleStatus,
}) {
  return (
    <div className={style.container}>
      <div style={{ width: "100%" }}>
        <List style={{ padding: 0 }}>
          {tasks &&
            tasks.map((task, index) => (
              <div className={style.task}>
                <ListItem key={index} className={style.taskItem}>
                  <ListItemAvatar>
                    {task.status === "pending" ? (
                      <Avatar style={{ backgroundColor: "#FFCE33" }}>
                        <NotInterestedIcon />
                      </Avatar>
                    ) : task.status === "in progress" ? (
                      <Avatar style={{ backgroundColor: "#2734B4" }}>
                        <PlayCircleOutlineIcon />
                      </Avatar>
                    ) : task.status === "finished" ? (
                      <Avatar style={{ backgroundColor: "#1F8A23" }}>
                        <CheckCircleIcon />
                      </Avatar>
                    ) : task.status === "suspend" ? (
                      <Avatar style={{ backgroundColor: "#C61A1A" }}>
                        <CancelIcon />
                      </Avatar>
                    ) : null}
                  </ListItemAvatar>
                  {editing && taskEditing === index ? (
                    <>
                      <form noValidate autoComplete="off">
                        <TextField
                          id="standard-basic"
                          label="Standard"
                          value={taskName}
                          onChange={changeValue}
                        />
                      </form>

                      <IconButton
                        disabled={invalidLength}
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleEdit(index)}
                      >
                        <CheckIcon />
                      </IconButton>
                    </>
                  ) : (
                    <>
                      <ListItemText primary={task.name} />
                      {task.status !== "finished" ? (
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => enableEditing(task.name, index)}
                        >
                          <EditOutlinedIcon />
                        </IconButton>
                      ) : null}
                    </>
                  )}
                </ListItem>
                <div className={style.appear}>
                  {task.status === "pending" && !editing ? (
                    <>
                      <IconButton
                        className={style.inprogress}
                        onClick={() => handleStatus(index, "in progress")}
                      >
                        <PlayCircleOutlineIcon fontSize="large" />
                      </IconButton>

                      <IconButton
                        className={style.delete}
                        onClick={() => handleDelete(index)}
                      >
                        <DeleteIcon fontSize="large" />
                      </IconButton>
                    </>
                  ) : task.status === "in progress" && !editing ? (
                    <>
                      <IconButton
                        className={style.finished}
                        onClick={() => handleStatus(index, "finished")}
                      >
                        <CheckCircleIcon fontSize="large" />
                      </IconButton>

                      <IconButton
                        className={style.suspend}
                        onClick={() => handleStatus(index, "suspend")}
                      >
                        <CancelIcon fontSize="large" />
                      </IconButton>
                    </>
                  ) : task.status === "suspend" && !editing ? (
                    <>
                      <IconButton
                        className={style.inprogress}
                        onClick={() => handleStatus(index, "in progress")}
                      >
                        <PlayCircleOutlineIcon fontSize="large" />
                      </IconButton>

                      <IconButton
                        className={style.delete}
                        onClick={() => handleDelete(index)}
                      >
                        <DeleteIcon fontSize="large" />
                      </IconButton>
                    </>
                  ) : null}
                </div>
              </div>
            ))}
        </List>
      </div>
    </div>
  );
}
