// @ts-nocheck
import React from "react";
import classes from "./mint.module.scss";
import axios from "axios";

type State = "loading" | "noQuestions" | "done";
type QuestionsProps = { readonly state?: State };
type GetQuestionsRes = {
  data: [];
};

async function getQuestions() {
  try {
    // 👇️ const data: GetQuestions
    const { data, status } = await axios.get<GetQuestionsRes>(
      "https://moodring.p.rapidapi.com/quizzes/1",
      {
        headers: {
          Accept: "application/json",
          "X-RapidAPI-Host": "moodring.p.rapidapi.com",
          "X-RapidAPI-Key": `${process.env.RAPID_API}`,
        },
      }
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log("response status is: ", status);

    console.log(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

getQuestions();

export const Questions: React.FC<QuestionsProps> = ({ state = "loading" }) => {
  const State = {
    loading: () => {
      /* Your loading code here */
    },
    noQuestions: () => {
      /* Your failed code here */
    },
    done: () => {
      /* Your done code here */
    },
  } as Record<State, Fc>[State];
};
// return (
//   <div className={classes.questions}>
//     <State />
//   </div>
// )
// };

export default Questions;
