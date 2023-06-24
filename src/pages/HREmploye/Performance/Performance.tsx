import React from 'react'
import HREmployee from '../HREmployee';

interface LayoutType {
  id: number;
  name: string;
}
const Performance = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  return (
    <>
      {
        layout === "opened" ? <HREmployee/> : ''
      }
      <div className="mb-4 p-3 mt-2">
        performance
      </div>
    </>
  )
}

export default Performance