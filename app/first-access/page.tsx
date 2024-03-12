"use client";
import { patchUserClient } from "@/api/userClient";
import { useGetAllInstitutions } from "@/hooks/useInstitution";
import { Button, Select } from "antd";
import { useState } from "react";
import { useMutation } from "react-query";

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
  const [selectCollege, setSelectCollege] = useState<string>("");
  const [selectProgram, setSelectProgram] = useState<string>("");

  const { data: institutions } = useGetAllInstitutions();

  const handleSelect1Change = (value: string) => {
    setSelectCollege(value);
    console.log(value);
  };

  const handleSelect2Change = (value: string) => {
    setSelectProgram(value);
    console.log(value);
  };

  const patchClientMutation = useMutation(
    async (data: any) => patchUserClient(data),
    {
      onSuccess: () => {
        console.log("Sucesso!");
      },
      onError: (error: any) => {
        console.log(
          `Um erro aconteceu. Por favor, tente novamente. Erro: ${error.response.data.message}`,
        );
      },
    },
  );

  const handleNextClick = async () => {
    const data = {
      college: selectCollege,
      program: selectProgram,
    };

    console.log(data);

    patchClientMutation.mutate(data);
  };

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
    value: college.name,
    id: college._id,
  }));

  const programOptions = institutions?.map((item: Program) => ({
    value: item.name,
    id: item._id,
  }));

  return (
    <main>
      <div className="flex h-full w-full max-w-screen-lg flex-col justify-between self-center p-6">
        <div className="flex flex-col gap-8 px-6">
          <h1 className="text-2xl">Let's Get Started!</h1>
          <p>First, tell me your Institution and Program</p>
          <div className="flex w-full flex-col gap-2">
            <span>Institution</span>
            <Select
              size="large"
              options={options}
              onChange={handleSelect1Change}
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <span>Program</span>
            <Select
              size="large"
              options={programOptions}
              onChange={handleSelect2Change}
            />
          </div>
        </div>
        <Button
          className="mt-6"
          size="large"
          type="primary"
          block
          // disabled={true}
          onClick={handleNextClick}
        >
          Next
        </Button>
      </div>
    </main>
  );
}
