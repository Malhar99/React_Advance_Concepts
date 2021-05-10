import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function Toast() {
  const { error } = useContext(GlobalContext);
  if (error !== undefined) {
    toast.error(error, { toastId: "Error" });
    return <ToastContainer position="bottom-right" autoClose={2000} />;
  }
  return <></>;
}

export default Toast;
