"use client";
import { useGetSemesterDataById } from "@/hooks/useSemester";
import { Progress } from "antd";

interface CourseProps {
  courseId: string;
}

export default function Program({ courseId }: CourseProps) {
  const { data, isLoading, isError } = useGetSemesterDataById(courseId);
  console.log(data);

  if (isLoading) {
    return <p>Loading course...</p>;
  }
  if (isError) {
    return <p>Error fetching course data</p>;
  }

  return (
    <div className="flex cursor-pointer flex-col rounded-md border-2 border-l-0 border-neutral-50 bg-neutral-100 hover:border-neutral-100 hover:bg-neutral-200">
      <div className="flex cursor-pointer flex-col rounded-md border-2 border-l-0 border-neutral-50 bg-neutral-100 hover:border-neutral-100 hover:bg-neutral-200 ">
        <div className="flex flex-col gap-6 rounded-md border-l-8 border-[#FDC044] p-4">
          <div className="flex w-full justify-between ">
            <div className="flex flex-col text-sm md:text-base">
              <p className="font-bold">Materia</p>
              <p className="text-[#505050]">Codigo materia</p>
            </div>
            <Progress
              type="circle"
              percent={70}
              size={48}
              strokeColor="#FDC044"
              className="font-bold"
            />
          </div>
          <div className="flex w-full justify-between text-xs md:text-sm">
            <p>Dias de aula</p>
            <p>Hybrid</p>
          </div>
        </div>
      </div>
    </div>
  );
}
