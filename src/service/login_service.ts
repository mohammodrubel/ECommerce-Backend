import httpStatus from 'http-status'
import AppError from '../error/App_Error'
import { T_login } from '../interface/login_interface'
import { Registration } from '../model/registration_model'
import bcrypt from 'bcrypt'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'

const loginusers = async (payload: T_login) => {
  const isUserExist = await Registration.findOne({ email: payload.email })
  // cheking user exist
  if (!isUserExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'this user is not found')
  }
  // checking user deleted
  const isDeleted = isUserExist?.isDeleted
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'this user is Deleted!')
  }
  //check status
  const status = isUserExist?.status
  if (status === 'blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'this user is already Blocked!')
  }
  //check password
  const isPasswordMatchd = await bcrypt.compare(
    payload.password,
    isUserExist.password,
  )
  if (!isPasswordMatchd) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      'password did not matched!try again',
    )
  }
  //create token and send to user
  const jwtPayload = {
    email: isUserExist?.email,
    status: isUserExist?.status,
    role: isUserExist?.role,
    isDeleted: isUserExist?.isDeleted,
  }
  const accessToken = jwt.sign(jwtPayload, config.access__token as string, {
    expiresIn: '10s',
  })
  const refreshToken = jwt.sign(jwtPayload, config.refresh__token as string, {
    expiresIn: '30d',
  })
  return {
    accessToken,
    refreshToken,
  }
}

const refreshTokenService = async (token: string) => {
  // check token is exist
  if (!token) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'you are not Authorized')
  }
  // check token is verify
  const decoded = jwt.verify(
    token,
    config.refresh__token as string,
  ) as JwtPayload
  const { email } = decoded
  const user = await Registration.findOne({ email: email })
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'user not found')
  }
  // checking user deleted
  const isDeleted = user?.isDeleted
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'this user is Deleted!')
  }
  //check status
  const status = user?.status
  if (status === 'blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'this user is already Blocked!')
  }

   //create token and send to user
   const jwtPayload = {
    email: user?.email,
    status: user?.status,
    role: user?.role,
    isDeleted: user?.isDeleted,
  }
  const accessToken = jwt.sign(jwtPayload, config.access__token as string, {
    expiresIn: '10d',
  })

  return {accessToken}
}

export const loginService = {
  loginusers,
  refreshTokenService,
}
