import { QuestionDetailsType } from "@type/questionTypes";
/**
 * values for toolsUsed. Please note that the values are stored in a string, not an array
 * 0:	Redux
 * 1:	Lodash
 * 2:	Ant design
 * 3:	Webpack
 * 4:	Other
 */

export const questions: QuestionDetailsType[] = [
  {
    id: "isProficient",
    questions: "Are you proficient in ReactJS development?",
    answers: [
      {
        label: "No",
        value: false,
      },
      {
        label: "Yes",
        value: true,
      },
    ],
    multiSelect: false,
  },
  {
    id: "toolsUsed",
    questions: "Which tools do you use?",
    helperText: "Please select all that apply.",
    answers: [
      {
        label: "Redux",
        value: 0,
      },
      {
        label: "Lodash",
        value: 1,
      },
      {
        label: "Ant design",
        value: 2,
      },
      {
        label: "Webpack",
        value: 3,
      },
      {
        label: "Other",
        value: 4,
      },
    ],
    multiSelect: true,
  },
];
