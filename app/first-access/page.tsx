"use client";
import { patchUserClient } from "@/api/userClient";
import { useGetAllInstitutions } from "@/hooks/useInstitution";
import { Button, Form, Select } from "antd";
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
  const [form] = Form.useForm();
  const { Item } = Form;

  const { data: institutions } = useGetAllInstitutions();
  const patchClientMutation = useMutation(
    async (data: any) => patchUserClient(data),
    {
      onSuccess: () => {
        console.log("Sucesso!");
      },
      onError: (error: any) => {
        console.log(
          `Um erro aconteceu. Por favor, tente novamente. Erro: ${error}`,
        );
      },
    },
  );

  const onSubmit = (data: any) => {
    const values = {
      college: data["college"],
      program: data["program"],
    };

    console.log("values", values);

    patchClientMutation.mutateAsync(values);
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
      <Form
        onFinish={onSubmit}
        form={form}
        layout="vertical"
        className="flex h-full w-full max-w-screen-lg flex-col justify-between self-center p-6"
      >
        <div className="flex flex-col gap-8 px-6">
          <h1 className="text-2xl">Let's Get Started!</h1>
          <p>First, tell me your Institution and Program</p>
          <Item
            name="college"
            label="Institution"
            valuePropName="id"
            className="flex w-full flex-col gap-2"
          >
            <Select size="large">
              {options.map((option) => (
                <Select.Option key={option.id} value={option.id}>
                  {option.value}
                </Select.Option>
              ))}
            </Select>
          </Item>
          <Item
            name="program"
            label="Program"
            className="flex w-full flex-col gap-2"
          >
            <Select size="large">
              {programOptions?.map((option: { id: any; value: any }) => (
                <Select.Option key={option.id} value={option.id}>
                  {option.value}
                </Select.Option>
              ))}
            </Select>
          </Item>
        </div>
        <Button
          className="mt-6 text-[#474747]"
          size="large"
          type="primary"
          htmlType="submit"
          block
        >
          Next
        </Button>
      </Form>
    </main>
  );
}
