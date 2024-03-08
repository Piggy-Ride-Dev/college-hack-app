import FileDragger from "@/components/FileDragger";
import SemesterPicker from "@/components/SemesterPicker";
import { Button, Select } from "antd";

export default function createSemester() {
  return (
    <main>
      <div className="w-full max-w-screen-lg self-center p-6">
        <h1 className="text-2xl">Creating a semester</h1>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="new-semester">Semester</label>
            <Select />
          </div>
          <SemesterPicker />
          <FileDragger />
        </div>
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
    </main>
  );
}
