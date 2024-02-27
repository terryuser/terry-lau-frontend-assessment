import { FC } from "react";
import { Button } from "antd";

import { useFormCustomContext } from "@hoc/FormCustomContext";

const SubmitBtn: FC = () => {
  const { disabled } = useFormCustomContext();

  return (
    <Button className="custom-submit-btn" disabled={disabled} htmlType="submit">
      Process
    </Button>
  );
};

export { SubmitBtn };
