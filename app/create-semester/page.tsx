"use client";
import { createTerm } from "@/api/termClient";
import FileDragger from "@/components/FileDragger";
import { createTermMutation } from "@/hooks/useTerm";
import { Button, DatePicker, Form, Select } from "antd";
import { format } from "date-fns";
import { useMutation, useQueryClient } from "react-query";

export interface TermProps {
  term: string;
  start: string;
  files: string[];
}

export default function createSemester() {
  const availableTerms = ["Summer", "Fall", "Winter"];
  const [form] = Form.useForm();
  const { Item } = Form;

  const createTermMutation = useMutation(createTerm, {
    onSuccess: () => {
      console.log("Sucesso!");
    },
    onError: (error: any) => {
      console.log(
        `Um erro aconteceu. Por favor, tente novamente. Erro: ${error.response.data.message}`,
      );
    },
  });

  const onFinish = (data: TermProps) => {
    const { term, files } = data;

    const startDate = format(
      new Date(data["start"]),
      "yyyy-MM-dd'T'HH:mm:ssxxx",
    );

    const termData = {
      term,
      start: startDate,
      files,
    };

    const res = createTermMutation.mutate(termData);
    console.log(res);
  };

  return (
    <main>
      <div className="flex w-full max-w-screen-lg flex-col gap-6 self-center p-6">
        <h1 className="text-2xl font-bold">Creating a semester</h1>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Item name="term" label={"Semester"}>
            <Select
              placeholder=""
              id="semester"
              variant="filled"
              options={availableTerms.map((term) => ({
                label: term,
                value: term,
              }))}
            />
          </Item>

          <Item name="start" label={"Starting Date"}>
            <DatePicker
              id="semester-date"
              className="w-full"
              variant="filled"
            />
          </Item>

          <FileDragger />

          <Item name="button">
            <Button
              className="mt-6"
              size="large"
              type="primary"
              htmlType="submit"
              block
              // disabled={true}
            >
              Next
            </Button>
          </Item>
        </Form>
      </div>
    </main>
  );
}
