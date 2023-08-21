import * as express from 'express';

export interface IExpressRequest<T = any> extends express.Request<T> {}

export interface IExpressResponse extends express.Response {}
export interface IExpressNextFunction extends express.NextFunction {}

export type MiddlewareType = {
  req: express.Request;
  res: express.Response;
  next: express.NextFunction;
};

export interface IError<T = unknown> extends Error {
  success: boolean;
  data: T;
  status: number;
}
