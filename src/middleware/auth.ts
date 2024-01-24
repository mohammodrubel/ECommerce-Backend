import httpStatus from 'http-status';
import { Request, Response, NextFunction } from 'express'; // Import Request and Response types from Express
import AppError from '../error/App_Error';
import catchAsync from '../utils/CatchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { T_User_Role } from '../interface/Global_interface';

// Extend the Request type to include the user property
declare global {
  namespace Express {
    interface Request {
      user: {
        email: string;
        status: string;
        role: string;
        isDeleted: boolean;
      };
    }
  }
}

const auth = (...requiredRole:(string | T_User_Role)[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are unauthorized');
    }

    try {
      const decoded = jwt.verify(token, config.access__token as string) as JwtPayload;

      const { email, status, role, isDeleted } = decoded;
        if(requiredRole.length && !requiredRole.includes(role)){
            throw new AppError(httpStatus.UNAUTHORIZED, 'You are unauthorized');
        }
      req.user = {
        email,
        status,
        role,
        isDeleted,
      };

      next();
    } catch (err) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }
  });
};

export default auth;
