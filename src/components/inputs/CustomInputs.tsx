// Types
import { FC } from "react";
import type { GetProp } from "antd";
import { QuestionDetailsType } from "@/types/questionTypes";

//Components
import { Form, Checkbox, Radio } from "antd";

// Context
import { useFormCustomContext } from "@hoc/FormCustomContext";

const CustomInputs: FC<QuestionDetailsType> = (props) => {
  const { id, questions, helperText, answers, multiSelect, ...others } = props;

  const { disabled } = useFormCustomContext();

  const onMultiSelectChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log(id, "checked = ", checkedValues);
  };

  const onSingleSelectChange: GetProp<typeof Radio, "onChange"> = ({
    target,
  }) => {
    console.log(id, "selected = ", target.value);
  };

  return (
    <div className="custom-form-item" {...others}>
      <p className="font-bold text-lg">{questions}</p>
      {helperText && <span className="text-[#616161]">{helperText}</span>}
      <Form.Item noStyle name={id}>
        {multiSelect ? (
          <Checkbox.Group
            className="custom-checkbox-group"
            disabled={disabled}
            options={answers}
            onChange={onMultiSelectChange}
          />
        ) : (
          <Radio.Group
            className="custom-radio-group"
            onChange={onSingleSelectChange}
          >
            {answers.length &&
              answers.map(({ label, value }, idx) => (
                <Radio key={idx} disabled={disabled} value={value}>
                  {label}
                </Radio>
              ))}
          </Radio.Group>
        )}
      </Form.Item>
    </div>
  );
};

export { CustomInputs };
