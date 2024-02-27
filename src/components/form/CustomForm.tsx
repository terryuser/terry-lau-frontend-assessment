// Types
import { FC } from "react";
import { QuestionDetailsType } from "@type/questionTypes";

// Context
import FormCustomContextProvider from "@hoc/FormCustomContext";

// Components
import { Form } from "antd";
import { CustomInputs, EditableSwitcher, SubmitBtn } from "@components/inputs";

// Custom Hooks
import { convertArraysToStrings } from "@hooks/TransformData";

interface CustomFormPropsType {
  defaultDisabled?: boolean;
  questionsInfo: QuestionDetailsType[];
}

const CustomForm: FC<CustomFormPropsType> = ({
  defaultDisabled,
  questionsInfo,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("value", values);
    console.log(convertArraysToStrings(values));
  };

  return (
    <div className="bg-white my-2 px-[32px] py-[31px]">
      <FormCustomContextProvider defaultDisabled={defaultDisabled}>
        <Form form={form} onFinish={handleSubmit}>
          <EditableSwitcher />
          {questionsInfo.length &&
            questionsInfo.map((info, idx) => (
              <CustomInputs key={idx} {...info} />
            ))}

          <div className="text-center">
            <SubmitBtn />
          </div>
        </Form>
      </FormCustomContextProvider>
    </div>
  );
};

export { CustomForm };
