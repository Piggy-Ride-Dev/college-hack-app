"use client";
import FileDragger from "@/components/FileDragger";
import SemesterStartDatePicker from "@/components/SemesterStartDatePicker";
import { Button, DatePicker, Form, FormProps, Select, Space } from "antd";
import { useState } from "react";

export interface TermProps {
  term: string;
  date?: Date;
  files: string[];
}

export default function createSemester() {
  const availableTerms = ["Summer", "Fall", "Winter"];
  const [form] = Form.useForm();
  const { Item } = Form;

  const [termData, setTermData] = useState<TermProps>({
    term: "",
    files: [],
  });

  const handleChange = (value: string) => {
    console.log(value);
    form.setFieldsValue({ ...termData, term: value });
  };

  // function handleSubmit(values: any) {
  //   console.log(`values: ${values}`);
  // }

  const onSubmit = (data: any) => {
    const values = {
      semester: data["semester"],
      startDate: new Date(
        data["startDate"].format("YYYY-MM-DD HH:mm:ss"),
      ).toISOString(),
    };

    console.log(values);
  };

  return (
    <main>
      <div className="flex w-full max-w-screen-lg flex-col gap-6 self-center p-6">
        <h1 className="text-2xl font-bold">Creating a semester</h1>
        <Form
          className="flex flex-col gap-6"
          form={form}
          layout="vertical"
          onFinish={onSubmit}
        >
          <Item name="semester" label={"Semester"} className="flex flex-col">
            {/* <label htmlFor="new-semester" className="text-sm">
              Semester
            </label> */}
            <Select
              placeholder=""
              id="semester"
              variant="filled"
              // onChange={handleChange}
              options={availableTerms.map((term) => ({
                label: term,
                value: term,
              }))}
            />
          </Item>

          {/* <SemesterStartDatePicker
            termData={termData}
            setTermData={setTermData}
          /> */}

          <Item
            name="startDate"
            label={"Starting Date"}
            className="flex flex-col"
          >
            {/* <label htmlFor="semester-date" className="text-sm ">
              Starting Date
            </label> */}
            <DatePicker
              // onChange={onChange}
              id="semester-date"
              className="w-full"
              variant="filled"
            />
          </Item>

          <FileDragger />

          <Item name="button">
            <Button
              className="mt-6 text-[#474747]"
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
