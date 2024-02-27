import { FC } from "react";
import { Switch } from "antd";
import { useFormCustomContext } from "@hoc/FormCustomContext";

const EditableSwitcher: FC = () => {
  const { disabled, setDisabled } = useFormCustomContext();

  const onChange = (checked: boolean) => {
    setDisabled(!checked);
  };

  return (
    <div className="flex justify-between mb-2">
      <p className="text-base">Editable:</p>
      <Switch
        className="custom-switch"
        checked={!disabled}
        onChange={onChange}
      />
    </div>
  );
};

export { EditableSwitcher };
