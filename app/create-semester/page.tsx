import FileDragger from "@/components/FileDragger";
import SemesterPicker from "@/components/SemesterPicker";
import { Button, Select } from "antd";

export default function createSemester() {
  return (
    <main>
      <div className="flex w-full max-w-screen-lg flex-col gap-6 self-center p-6">
        <h1 className="text-2xl font-bold">Creating a semester</h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="new-semester" className="text-sm ">
              Semester
            </label>
            <Select placeholder="" variant="filled" />
          </div>
          <SemesterPicker />
          <FileDragger />
          <Button
            className="mt-6"
            size="large"
            type="primary"
            block
            disabled={true}
          >
            Next
          </Button>
        </div>
      </div>
    </main>
  );
}
