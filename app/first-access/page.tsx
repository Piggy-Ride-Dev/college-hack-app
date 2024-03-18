"use client";
import { patchUserClient } from "@/api/userClient";
import { useGetAllInstitutions } from "@/hooks/useInstitution";
import { Button, Form, FormInstance, Select } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { useMutation } from "react-query";

interface SubmitButtonProps {
  form: FormInstance;
}

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
  const { push } = useRouter();

  const { data: institutions } = useGetAllInstitutions();
  const patchClientMutation = useMutation(
    async (data: any) => patchUserClient(data),
    {
      onSuccess: () => {
        push("/create-semester");
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

    patchClientMutation.mutateAsync(values);
  };

  const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
    form,
    children,
  }) => {
    const [submittable, setSubmittable] = React.useState<boolean>(false);

    const values = Form.useWatch([], form);

    React.useEffect(() => {
      form
        .validateFields({ validateOnly: true })
        .then(() => setSubmittable(true))
        .catch(() => setSubmittable(false));
    }, [form, values]);

    return (
      <Button
        size="large"
        type="primary"
        htmlType="submit"
        block
        disabled={!submittable}
      >
        {children}
      </Button>
    );
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
            rules={[
              { required: true, message: "Please select a Institution." },
            ]}
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
            rules={[{ required: true, message: "Please select a Program." }]}
            className="flex w-full flex-col gap-2"
          >
            <Select size="large">
              {programOptions?.map((option: { id: string; value: string }) => (
                <Select.Option key={option.id} value={option.id}>
                  {option.value}
                </Select.Option>
              ))}
            </Select>
          </Item>
        </div>
        <SubmitButton form={form}>Next</SubmitButton>
      </Form>
    </main>
  );
}
