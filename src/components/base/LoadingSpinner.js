import React from "react";

const LoadingSpinner = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="uk-flex uk-flex-center">
      <span className="uk-margin-top" data-uk-spinner="ratio: 3"></span>
    </div>
  );
};

export default LoadingSpinner;