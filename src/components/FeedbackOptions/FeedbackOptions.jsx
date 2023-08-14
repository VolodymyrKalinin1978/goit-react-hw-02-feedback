import React from "react";
import PropTypes from "prop-types";
// import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ feedback, onGiveFeedback }) => {
  return (
    <button
      type="button"
     
      data-feedback={feedback}
      onClick={onGiveFeedback}
    >
      {feedback}
    </button>
  );
};

const LeaveFeeddack = ({ options, onGiveFeedback }) => {
  return (
    <div >
      {options.map((option) => (
        <FeedbackOptions
          feedback={option}
          onGiveFeedback={() => onGiveFeedback(option)}
          key={option.toString()}
        />
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onGiveFeedback: PropTypes.func.isRequired,
};

export default LeaveFeeddack;
