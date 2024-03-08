"use client";
import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const SemesterPicker: React.FC = () => (
  <div className="flex flex-col">
    <label htmlFor="semester-date" className="text-sm ">
      Starting Date
    </label>
    <Space direction="vertical">
      <DatePicker
        onChange={onChange}
        id="semester-date"
        className="w-full"
        variant="filled"
      />
    </Space>
  </div>
);

export default SemesterPicker;
