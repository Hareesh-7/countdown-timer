import React, { useState } from "react";
import Form from "./Form";
import InputField from "./InputField";
import Button from "../button/Button";
import ErrorMessage from "../output/ErrorMessage";
import "./DateInputForm.css";

const DateInputForm = ({ onDateSelect, onCancel, isCountDownActive }) => {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isCountDownActive) {
      const selectedDate = new Date(date);
      const currentDate = new Date();
      const maxDate = new Date(currentDate);
      maxDate.setDate(maxDate.getDate() + 100);

      if (selectedDate < currentDate) {
        setError("Selected date is less than the current date and time.");
      } else if (selectedDate > maxDate) {
        setError("Selected date is more than 100 days from now.");
      } else {
        setError("");
        onDateSelect(date);
      }
    } else {
      onCancel();
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="form-container">
        <InputField
          type="datetime-local"
          value={date}
          onChange={handleChange}
        />
        <Button type="submit">
          {isCountDownActive ? "Cancel Timer" : "Start Timer"}
        </Button>
      </Form>
      {error && <ErrorMessage message={error} />}
    </>
  );
};

export default DateInputForm;
