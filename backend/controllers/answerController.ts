import asyncHandler from 'express-async-handler'
import { Response } from 'express'
import { IRequest, ISubmission } from '../types'
import Submission from '../models/Submission'

// @desc    Get today's answer
// @route   GET /api/answers
// @access  Private
export const getAnswer = asyncHandler(async (req: IRequest, res: Response) => {
  const submission = await Submission.findOne({
    user: req.user._id,
    updatedAt: { $gte: new Date() },
  })

  if (submission) {
    res.json(submission)
  } else {
    res.status(404)
    throw new Error('You have not completed the screening today')
  }
})

// @desc    Submit answers for today
// @route   POST /api/answers
// @access  Private
export const submitAnswer = asyncHandler(
  async (req: IRequest, res: Response) => {
    const { answers, emailed } = req.body

    const submission: ISubmission = await Submission.create({
      user: req.user._id,
      answers,
      emailed,
    })

    if (submission) {
      res.status(201).json(submission)
    } else {
      res.status(400)
      throw new Error('Unable to submit')
    }
  }
)
