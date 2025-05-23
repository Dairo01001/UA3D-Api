import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { AnyZodObject, ZodError } from 'zod'

export const validateResource =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        const message = error.errors.map((error) => error.message).join(', ')

        res.status(StatusCodes.BAD_REQUEST).json({ message })
      }
    }
  }
