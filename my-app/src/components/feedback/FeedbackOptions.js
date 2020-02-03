import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
      <>
    <h2>
    Please leave feedback
    </h2>
      <button name="good" type="submit" onClick={onLeaveFeedback}>
        Good
      </button>
      <button name="neutral" type="submit" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button name="bad" type="submit" onClick={onLeaveFeedback}>
        Bad
      </button>  
      <h2>Statistics</h2>

      </>
   
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes={
    onLeaveFeedback: PropTypes.func.isRequired
}