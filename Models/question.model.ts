import { Document, model, Schema } from "mongoose"
import bcrypt from "bcrypt"

export type questionI = {
  all: {
    qno: number
    questions: {
      question: string
      id: string
      answer: string
    }[]
  }[]
}

const QuestionSchema = new Schema<questionI>(
  {
    all: {
      type: [
        {
          qno: Number,
          questions: [{ question: String, id: String, answer: String }],
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Question = model<questionI & Document>("Question", QuestionSchema)

export default Question
