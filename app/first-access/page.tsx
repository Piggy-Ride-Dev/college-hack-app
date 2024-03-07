"use client";
import { useGetAllInstitutions } from "@/hooks/useInstitution";
import { Button, Select } from "antd";

interface College {
  _id: string;
  name: string;
}

interface Program {
  code: string;
  collegeID: College;
  name: string;
  _id: string;
}

export default function firstAccess() {
  const { data: institutions } = useGetAllInstitutions();

  function getUniqueColleges(colleges: any[]): College[] {
    const uniqueCollegesMap: Map<string, College> = new Map();

    colleges?.forEach((college) => {
      const collegeID = college.collegeID._id;
      if (!uniqueCollegesMap.has(collegeID)) {
        uniqueCollegesMap.set(collegeID, college.collegeID);
      }
    });

    return Array.from(uniqueCollegesMap.values());
  }

  const uniqueColleges: College[] = getUniqueColleges(institutions);

  const options = uniqueColleges.map((college) => ({
    label: college.name,
    value: college._id,
  }));

  const programOptions = institutions?.map((item: Program) => ({
    label: item.name,
    value: item._id,
  }));

  return (
    <main>
      <div className="flex flex-col justify-between h-full p-6">
        <div className="flex flex-col gap-8 px-6">
          <h1 className="text-2xl">Let's Get Started!</h1>
          <p>First, tell me your Institution and Program</p>
          <div className="flex flex-col gap-2 w-full">
            <span>Institution</span>
            <Select size="large" options={options} />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <span>Program</span>
            <Select size="large" options={programOptions} />
          </div>
        </div>
        <Button size="large" type="primary" block>
          Next
        </Button>
      </div>
    </main>
  );
}
