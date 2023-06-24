import React from 'react'
import Admin from '../../Admin';



interface LayoutType {
  id: number;
  name: string;
}
const TimesheetOverview = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  return (
    <>
      {
        layout === "opened" ? <Admin/> : ''
      }
      <div className="mt-2 mb-4 p-3">
        TimesheetOverview
      </div>
    </>
  )
}

export default TimesheetOverview