import express from 'express';

interface IJSONProps<T> {
  req: express.Request;
  res: express.Response;
  data?: T;
  message?: string;
  status?: number;
}

export default class JSONResponse {
  constructor() {}
  static success<T>({ res, data, message, status }: IJSONProps<T>) {
    return res.status(200).json({
      data: data || null,
      message: message || 'Action Performed Successfully',
      status: true,
    });
  }

  static failure<T>({ req, res, data, message, status }: IJSONProps<T>) {
    return res.status(status || 500).json({
      data: data || null,
      message: message || 'Action Failed',
      status: false,
    });
  }
}
