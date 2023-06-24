import React from "react";
import Chart from "react-apexcharts";
import { Card, Form } from "react-bootstrap";
import { ApexOptions } from "apexcharts";
import { ApexLinearChartData } from "../../../charts/data";

// components

// types
// import { ApexLinearChartData } from "./data";

interface BarChartProps {
  basicBarChartData: ApexLinearChartData;
  showLoader?: boolean;
}

const Leads = ({ basicBarChartData }: BarChartProps) => {
  const options: ApexOptions = {
    chart: {
      height: 380,
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  const series = [
    {
      data: basicBarChartData.data || [],
    },
  ];

  return (
    <div className="mt-4">
      <Card>
        <Card.Body>
          <h4 className="header-title mt-0 mb-3">Total Leads in this year</h4>
          <Chart
            options={options}
            series={series}
            type="bar"
            height={380}
            className="apex-charts"
            dir="ltr"
          />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <h4 className="header-title mt-0 mb-3">Monthly Leads</h4>
          <hr />
          <div className="w-25">
            <Form.Select  className="fw-bold">
              <option>Nothing Selected</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
            </Form.Select>
          </div>

          <Chart
            options={options}
            series={series}
            type="bar"
            height={380}
            className="apex-charts"
            dir="ltr"
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Leads;
