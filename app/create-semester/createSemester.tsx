"use client";
import FileDragger from "@/components/FileDragger";
import { Button, DatePicker, Form, FormProps, Select } from "antd";
import { useState } from "react";
import { TermProps } from "./page";

export default function createSemester() {
  const availableTerms = ["Summer", "Fall", "Winter"];

  const [termData, setTermData] = useState<TermProps>({
    term: "",
    files: [],
  });

  const handleChange = (value: string) => {
    setTermData({ ...termData, term: value });
  };

  const onFinish: FormProps<any>["onFinish"] = (values: any) => {
    console.log("Success:", values);
  };

  function handleSubmit(values: any) {
    console.log(`values: ${values}`);
  }

  return (
    <main>
      <div className="flex w-full max-w-screen-lg flex-col gap-6 self-center p-6">
        <h1 className="text-2xl font-bold">Creating a semester</h1>
        <Form className="flex flex-col gap-6" onFinish={onFinish}>
          <Form.Item label="select" className="flex flex-col">
            {/* <label htmlFor="new-semester" className="text-sm">
              Semester
            </label> */}
            <Select
              placeholder=""
              id="semester"
              variant="filled"
              onChange={handleChange}
              options={availableTerms.map((term) => ({
                label: term,
                value: term,
              }))}
            />
          </Form.Item>

          {/* <SemesterStartDatePicker
              termData={termData}
              setTermData={setTermData}
            /> */}

          <Form.Item name="date-picker" label="DatePicker">
            <DatePicker />
          </Form.Item>

          <FileDragger />

          <Form.Item label="Button">
            <Button
              className="mt-6 text-[#474747]"
              size="large"
              type="primary"
              htmlType="submit"
              block
            >
              Next
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
}
