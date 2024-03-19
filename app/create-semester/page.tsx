"use client";
import { createSemesterData, uploadSemesterDocs } from "@/api/semesterClient";
import { InboxOutlined } from "@ant-design/icons";
import {
  Alert,
  Button,
  DatePicker,
  Form,
  FormInstance,
  Select,
  Upload,
  UploadProps,
} from "antd";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";

export interface TermProps {
  season: string;
  startDate: string;
  files: any[];
}

interface FileInfo {
  lastModified: number;
  lastModifiedDate: string;
  name: string;
  originFileObj: { uid: string };
  percent: number;
  response: string;
  size: number;
  status: string;
  type: string;
  uid: string;
  xhr: {};
}

interface SubmitButtonProps {
  form: FormInstance;
}

export default function createSemester() {
  const availableSeasons = ["Summer", "Fall", "Winter"];
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileList, setFileList] = useState<any[]>([]);
  const { push } = useRouter();

  const props: UploadProps = {
    name: "files",
    beforeUpload: (file) => {
      const isValidFormat =
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        file.type === "application/msword" ||
        file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

      const isSizeValid = file.size / 1024 / 1024 <= 6;

      if (!isValidFormat) {
        setError(`${file.name} is not a valid format.`);
        return false;
      }

      if (!isSizeValid) {
        setError(`${file.name} exceeds the maximum file size of 6MB.`);
        return false;
      }
      setError(null);
      return true;
    },
  };

  const normFile = (e: any) => {
    const files = Array.isArray(e) ? e : e?.fileList;
    setFileList(files);

    const fileList = e?.fileList;

    const hasUnexpectedType = fileList.some((file: FileInfo) => {
      return !(
        (
          file.type ===
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || // .docx
          file.type === "application/msword" || // .doc
          file.type === "application/pdf" || // .pdf
          file.type ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ) // .xlsx
      );
    });
    const isSizeValid = fileList.every((file: FileInfo) => {
      return file.size / 1024 / 1024 <= 6;
    });

    if (hasUnexpectedType || !isSizeValid) {
      return [];
    }
    return fileList;
  };

  const { mutateAsync: mutateAsyncA } = useMutation(createSemesterData);
  const { mutateAsync: mutateAsyncB } = useMutation(uploadSemesterDocs);

  const executeMutations = async (values: TermProps) => {
    try {
      setLoading(true);
      const { season, files, startDate } = values;

      values["startDate"] = format(
        new Date(values["startDate"]),
        "yyyy-MM-dd'T'HH:mm:ssxxx",
      );

      const formData = new FormData();
      files.forEach((file) => {
        formData.append("files", file.originFileObj);
      });

      const semester = await mutateAsyncA({ season, startDate });
      const semesterId = semester.data._id;

      await mutateAsyncB({
        id: semesterId,
        formData,
      });

      setLoading(false);
      push("/home");
    } catch (error) {
      setError("There was a problem uploading files, try again.");
      setLoading(false);
    }
  };

  const onFinish = (values: TermProps) => {
    executeMutations(values);
  };

  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setError("");
  };

  const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
    form,
    children,
  }) => {
    const [isSubmittable, setIsSubmittable] = useState<boolean>(false);

    const values = Form.useWatch([], form);

    useEffect(() => {
      form
        .validateFields({ validateOnly: true })
        .then(() => setIsSubmittable(true))
        .catch(() => setIsSubmittable(false));
    }, [form, values]);

    return (
      <Button
        size="large"
        type="primary"
        htmlType="submit"
        loading={loading}
        block
        disabled={!isSubmittable}
      >
        {children}
      </Button>
    );
  };

  return (
    <main>
      <div className="flex w-full max-w-screen-lg flex-col gap-6 self-center p-6">
        <h1 className="text-2xl font-bold">Creating a semester</h1>
        {error && (
          <Alert
            message="Error"
            description={error}
            type="error"
            closable
            onClose={onClose}
          />
        )}
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="season"
            label="Semester"
            rules={[{ required: true, message: "Please select a season." }]}
          >
            <Select
              variant="filled"
              options={availableSeasons.map((season) => ({
                label: season,
                value: season,
              }))}
            />
          </Form.Item>

          <Form.Item
            name="startDate"
            label="Starting Date"
            rules={[{ required: true, message: "Please select a date." }]}
          >
            <DatePicker className="w-full" variant="filled" />
          </Form.Item>

          <Form.Item
            name="files"
            valuePropName="fileList"
            label="Documents"
            getValueFromEvent={normFile}
            rules={[
              {
                required: true,
                message: "Please select at least one document.",
              },
            ]}
          >
            <Upload.Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag files to this area to upload
              </p>
              <p className="ant-upload-hint">
                Only <span className="font-bold">.doc, .docx, .pdf</span>, and{" "}
                <span className="font-bold">.xlsx</span> files, maximum of 6MB.
              </p>
            </Upload.Dragger>
          </Form.Item>

          <Form.Item>
            <SubmitButton form={form}>Next</SubmitButton>
          </Form.Item>
        </Form>
      </div>
    </main>
  );
}
