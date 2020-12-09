import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";

const mapStateToProps = (state) => {
  return { tasks: state.task.tasks };
};

const HeaderContainer = ({ tasks }) => {
  const getGeneralStatus = (tasks) => {
    let generalStatus;
    if (tasks.length) {
      generalStatus = tasks[0].status;
      if (tasks.every((el) => el.status === generalStatus))
        return generalStatus;
      else if (tasks.some((el) => el.status === "in progress"))
        return (generalStatus = "in progress");
    }
    return (generalStatus = "off");
  };

  return <Header generalStatus={getGeneralStatus(tasks)} />;
};

export default connect(mapStateToProps, null)(HeaderContainer);
