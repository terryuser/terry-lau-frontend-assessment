export type QuestionDetailsType = {
  id: string | number;
  questions: string;
  helperText?: string;
  answers: {
    label: string;
    value: string | boolean | number;
  }[];
  multiSelect?: boolean;
};
