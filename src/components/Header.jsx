import React from "react";
import style from "../assets/index.module.css";

export default function Header({ generalStatus }) {
  return (
    <>
      <h1 className={style.title}>TASK MANAGER</h1>
      <h3 className={style.subtitle}>
        General Status:
        {generalStatus === "pending" ? (
          <p className={style.pending_status}>{generalStatus.toUpperCase()}</p>
        ) : generalStatus === "in progress" ? (
          <p className={style.inprogress_status}>
            {generalStatus.toUpperCase()}
          </p>
        ) : generalStatus === "finished" ? (
          <p className={style.finished_status}>{generalStatus.toUpperCase()}</p>
        ) : generalStatus === "suspend" ? (
          <p className={style.suspend_status}>{generalStatus.toUpperCase()}</p>
        ) : (
          <p className={style.off_status}>{generalStatus.toUpperCase()}</p>
        )}
      </h3>
    </>
  );
}
