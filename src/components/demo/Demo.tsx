// Types
import { FC } from "react";

// Components
import { CustomForm } from "@components/form";

// Constants
import { questions } from "@constants/questions";

const Demo: FC = () => {
  return (
    <div className="md:flex sm:block justify-center gap-5 p-10">
      <CustomForm questionsInfo={questions} />
      <CustomForm defaultDisabled={true} questionsInfo={questions} />
    </div>
  );
};

export { Demo };
