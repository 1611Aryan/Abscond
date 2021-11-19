import { Document, model, Schema } from "mongoose"
import bcrypt from "bcrypt"

export type questionI = {
  name: string
  questions: {
    qno: number
    sets: {
      question: string
      drive?: string
      image?: string
      id: string
      answer: string
      type: "text" | "image" | "text-drive" | "download" | "search"
    }[]
  }[]
}

const QuestionSchema = new Schema<questionI>(
  {
    name: {
      type: String,
      required: true,
    },
    questions: {
      type: [
        {
          qno: Number,
          sets: [
            {
              question: String,
              drive: String,
              image: String,
              id: String,
              answer: String,
              type: String,
            },
          ],
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
