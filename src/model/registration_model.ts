import { Schema, model } from 'mongoose'
import { T_Registration } from '../interface/registration'
import bcrypt from 'bcrypt'
import httpStatus from 'http-status'

const registrationSchema = new Schema<T_Registration>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['active', 'blocked'],
      default: 'active',
    },
    role:{
      type:String,
      enum:['user' , 'admin' , 'moderator'],
      default:'user'
    },
    isDeleted:{
      type:Boolean,
      default:false
    }
  },
  {
    timestamps: true,
  },
)

registrationSchema.pre('save', async function (next) {
  const saltRounds = 10
  try {
    this.password = await bcrypt.hash(this.password, saltRounds)
  } catch (error) {
    console.error('Error hashing password:', error)
    const errorMessage = 'Error hashing password'
    const statusCode = httpStatus.INTERNAL_SERVER_ERROR
    throw new Error(`${statusCode}: ${errorMessage}`)
  }
  next()
})
// duplicate error check
registrationSchema.pre('save', async function (next) {
  const isEmailExist = await Registration.findOne({
    email: this.email,
  })

  if (isEmailExist) {
    throw new Error('this email already used')
  }
  next()
})

export const Registration = model<T_Registration>(
  'Registration',
  registrationSchema,
)
