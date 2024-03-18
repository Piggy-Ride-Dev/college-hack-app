import CourseMap from "@/components/CourseMap";
import { Select } from "antd";

export default function Home() {
  return (
    <main>
      <div className="flex w-full max-w-screen-lg flex-col gap-6 self-center p-6">
        <div>
          <Select value={["season"]} />
        </div>

        {/* map das materias aqui */}
        <CourseMap />
      </div>
    </main>
  );
}
