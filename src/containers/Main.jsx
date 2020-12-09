import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer";
import CreateTaskContainer from "../containers/CreateTaskContainer";
import TasksListContainer from "../containers/TasksListContainer";
import style from "../assets/index.module.css";

export default function Main() {
  return (
    <>
      <BrowserRouter>
        <div className={style.task_manager_container}>
          <HeaderContainer />
          <CreateTaskContainer />
          <TasksListContainer />
          {/* <Switch>
            <Route exact path="/" component={} />
          </Switch> */}
        </div>
      </BrowserRouter>
    </>
  );
}
