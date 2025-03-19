import React from "react";
import { Tabs } from "antd";
import "./AllTabs.css"; // Add custom styles here
import RentTAb from "./RentTAb";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: "RENT",
    children: <RentTAb />, // Empty to match design
  },
  {
    key: "2",
    label: "BUY",
    children: "",
  },
  {
    key: "3",
    label: "POST",
    children: "",
  },
];

const AllTabs = () => (
  <Tabs
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
    className="custom-tabs"
  />
);

export default AllTabs;
