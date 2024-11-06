import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Account = () => {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  const handleDeposit = () => {
    dispatch({ type: "DEPOSIT", payload: 10 });
  };
  const handleWithdraw = () => {
    dispatch({ type: "WITHDRAW", payload: 10 });
  };
  return (
    <>
      <h1>Bank account</h1>
      <p>Balance: ${balance}</p>
      <button onClick={handleDeposit}>Deposit 10$</button>
      <button onClick={handleWithdraw}>WithDraw 10$</button>
    </>
  );
};

export default Account;
