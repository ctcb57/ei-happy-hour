import React from "react";

const ErrorMessage = ({ isError, message }) => {
  if (!isError) {
    return null;
  }

  return (
    <div className="uk-alert-danger" data-uk-alert>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;