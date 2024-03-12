"use client";
import FileDragger from "@/components/FileDragger";
import SemesterStartDatePicker from "@/components/SemesterStartDatePicker";
import { Button, DatePicker, Form, FormProps, Select, Space } from "antd";
import { useState } from "react";

export interface TermProps {
  term: string;
  start: Date;
  files: string[];
}

export default function createSemester() {
  const availableTerms = ["Summer", "Fall", "Winter"];
  const [form] = Form.useForm();
  const { Item } = Form;

  const onSubmit = (data: TermProps) => {
    console.log(data);
    const { term, files } = data;

    const startDate = new Date(
      data["start"].format("YYYY-MM-DD HH:mm:ss"),
    ).toISOString();

    const termData = {
      term,
      start: startDate,
      files,
    };
  };

  return (
    <main>
      <div className="flex w-full max-w-screen-lg flex-col gap-6 self-center p-6">
        <h1 className="text-2xl font-bold">Creating a semester</h1>
        <Form form={form} layout="vertical" onFinish={onSubmit}>
          <Item name="term" label={"Semester"}>
            <Select
              placeholder=""
              id="semester"
              variant="filled"
              options={availableTerms.map((term) => ({
                label: term,
                value: term,
              }))}
            />
          </Item>

          <Item name="start" label={"Starting Date"}>
            <DatePicker
              id="semester-date"
              className="w-full"
              variant="filled"
            />
          </Item>

          <FileDragger />

          <Item name="button">
            <Button
              className="mt-6"
              size="large"
              type="primary"
              htmlType="submit"
              block
              // disabled={true}
            >
              Next
            </Button>
          </Item>
        </Form>
      </div>
    </main>
  );
}
