"use client";
import { Semester } from "@/api/semesterClient";
import { formatDateAsYear } from "@/hooks/formatDate";
import { useGetAllSemesters } from "@/hooks/useSemester";
import { Button, Select } from "antd";
import { useEffect, useState } from "react";
import Program from "../Program";

export default function SelectCourse() {
  const { data, isLoading, isError } = useGetAllSemesters();
  const [semesterData, setSemesterData] = useState<Semester[]>([]);
  const [selectedSemesterCourses, setSelectedSemesterCourses] = useState<
    string[]
  >([]);

  useEffect(() => {
    if (data) {
      setSemesterData(data.data);
    }
  }, [data]);

  if (isLoading) {
    return <p>loading...</p>;
  }
  if (isError) {
    return <p>Error fetching data</p>;
  }

  const selectSemester = (semester: Semester) => {
    setSelectedSemesterCourses(semester.courses);
    console.log(semester.courses);
  };

  return (
    <div className="flex w-full max-w-screen-lg flex-col gap-6 self-center p-6">
      <div>
        <Select
          placeholder="season"
          size="large"
          className="w-40"
          options={semesterData.map((semester) => ({
            value: semester._id,
            // semester.season + " - " + formatDateAsYear(semester.startDate),
            id: semester._id,
            semester: semester,
          }))}
          onChange={(value, option) => selectSemester(option.semester)}
        />
      </div>

      {selectedSemesterCourses.map((courseId) => (
        <Program key={courseId} courseId={courseId} />
      ))}

      <Button>Add new courses</Button>
    </div>
  );
}
