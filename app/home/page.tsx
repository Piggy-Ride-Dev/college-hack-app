import CourseMap from "@/components/CourseMap";
import { Button, Select } from "antd";

export default function Home() {
  return (
    <main>
      <div className="flex w-full max-w-screen-lg flex-col gap-6 self-center p-6">
        <div>
          <Select placeholder="season" />
        </div>

        {/* map das materias aqui - onClick abre a materia*/}
        <CourseMap />

        <Button>Add new courses</Button>
      </div>
    </main>
  );
}
