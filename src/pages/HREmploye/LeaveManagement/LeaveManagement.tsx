import React from 'react'
import HREmployee from '../HREmployee';

interface LayoutType {
  id: number;
  name: string;
}

const LeaveManagement = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  return (
    <>
      {
        layout === "opened" ? <HREmployee /> : ''
      }
      <div className="mt-2 mb-4 p-3">
        LeaveManagement
      </div>
    </>
  )
}

export default LeaveManagement