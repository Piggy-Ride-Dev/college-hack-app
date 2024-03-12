"use client";
import FileDragger from "@/components/FileDragger";
import SemesterStartDatePicker from "@/components/SemesterStartDatePicker";
import { Button, Select } from "antd";
import { useState } from "react";

export interface TermProps {
  term: string;
  date?: Date;
  files: string[];
}

export default function createSemester() {
  const availableTerms = ["Summer", "Fall", "Winter"];

  const [termData, setTermData] = useState<TermProps>({
    term: "",
    files: [],
  });

  const handleChange = (value: string) => {
    setTermData({ ...termData, term: value });
  };

  function handleSubmit() {}

  return (
    <main>
      <div className="flex w-full max-w-screen-lg flex-col gap-6 self-center p-6">
        <h1 className="text-2xl font-bold">Creating a semester</h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="new-semester" className="text-sm">
              Semester
            </label>
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
          </div>

          <SemesterStartDatePicker
            termData={termData}
            setTermData={setTermData}
          />

          <FileDragger />

          <Button
            className="mt-6 text-[#474747]"
            size="large"
            type="primary"
            block
            disabled={true}
          >
            Next
          </Button>
        </form>
      </div>
    </main>
  );
}
