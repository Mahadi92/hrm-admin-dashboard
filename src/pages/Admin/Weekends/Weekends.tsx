import React, { useState } from "react";
import DatePicker, { DateObject, } from "react-multi-date-picker";
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import FeatherIcon from "feather-icons-react";

const Weekends: React.FC = () => {
  const [value, setValue] = useState<DateObject | DateObject[] | null>();

  console.log('dates', value)
  const handleChange = (selectedDate: DateObject | DateObject[] | null) => {
    setValue(selectedDate);
  };

  return (
    <div className="mt-4 ">
      <div className="bg-white">
        <Button style={{ cursor: 'none' }} className="lgnbtn w-100 fs-4 fw-bold rounded-0">Add Weekends</Button>
        <div className="w-100 d-flex justify-content-center align-items-center flex-column">
          <div className="w-100 d-flex justify-content-center align-items-center mt-3">
          </div>
          <DatePicker value={value} onChange={handleChange} multiple style={{ width: '20rem', height: '50px' }} />
          <Button className="lgnbtn mt-3 mb-3 fw-bold">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default Weekends;
