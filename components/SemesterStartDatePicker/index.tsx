"use client";
import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";

interface SemesterStartDatePickerProps {
  setTermData: React.Dispatch<
    React.SetStateAction<{
      term: string;
      date?: Date;
      files: string[];
    }>
  >;
  termData: {
    term: string;
    date?: Date;
    files: string[];
  };
}

export default function SemesterStartDatePicker({
  setTermData,
  termData,
}: SemesterStartDatePickerProps) {
  const onChange: DatePickerProps["onChange"] = (
    date: Date | undefined,
    dateString: string | string[],
  ) => {
    setTermData({ ...termData, date: date });
    console.log(date, dateString);
  };

  return (
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
}
