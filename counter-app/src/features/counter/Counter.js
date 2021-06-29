//import classes from ".module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount,incrementAmount } from "./counterSlice";
import styles from "./Counter.module.css"
import { useState } from "react";

const Counter = () => {
  const [amount,setAmount]=useState();
  const value = useSelector(selectCount);
  const dispatch=useDispatch();
  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} onClick={()=>dispatch(increment())}>+</button>
        <span className={styles.value}>{value}</span>
        <button className={styles.button} onClick={()=>dispatch (decrement())}>-</button>
      </div>

    <div className={styles.row}>
      <input
      className={styles.textbox}
      aria-label="Set increment amount"
      value={amount}
      onChange={e=>setAmount(e.target.value)}
      />
   
      <button className={styles.button}>
            Add Amount
      </button>
      <button className={styles.button}>
            Add Async
      </button>
    </div>

    </div>
  );
};

export default Counter;