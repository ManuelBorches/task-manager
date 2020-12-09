import { useState } from "react";

const useStatus = () => {
  const statusOption = {
    'p': 'pending',
    's': 'suspend',
    'ip': 'in progress',
    'f': 'finished'
  }
  const [status, setStatus] = useState(statusOption['p']);
 
  const handleStatus =  (key) => setStatus(statusOption[key]);

  return [status, handleStatus];
};

export default useStatus;

// controlStatus

/* import useStatus from ".."

const [status, handleStatus] = useStatus()

console.log(status) // "pending"
handleStatus("iP")
console.log(status) // "in progress" */