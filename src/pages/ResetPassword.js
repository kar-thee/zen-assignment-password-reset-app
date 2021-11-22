import React from "react";
import { useParams } from "react-router";

const ResetPassword = () => {
  const { code } = useParams();
  console.log(code);
  return (
    <div>
      Dont' worry we can reset your password
      <div>code is {code ? JSON.stringify(code) : ""}</div>
    </div>
  );
};

export default ResetPassword;
