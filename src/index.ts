import app from './app';
import NotFoundException from './exceptions/NotFoundException';
import {
  IExpressRequest,
  IExpressNextFunction,
  IExpressResponse,
  IError,
} from './types/express.type';
import JSONResponse from './utils/JSONResponse';

const PORT = process.env.PORT;

app.use(
  (req: IExpressRequest, res: IExpressResponse, next: IExpressNextFunction) => {
    const err = new NotFoundException();
    next(err);
  }
);

app.use(
  (
    err: IError,
    req: IExpressRequest,
    res: IExpressResponse,
    next: IExpressNextFunction
  ) => {
    err.success = false;
    err.status = err.status || 500;
    err.message = err.message || 'Something went wrong';
    err.data = err.data || err.stack || null;
    JSONResponse.failure({
      req,
      res,
      data: err.data,
      message: err.message,
      status: err.status,
    });
  }
);

app.listen(PORT, () => {
  console.log(`express is up and running on ${PORT}`);
});
