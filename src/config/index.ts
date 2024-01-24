import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.join(process.cwd(), '.env'),
})

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  node_env: process.env.NODE_ENV,
  access__token:process.env.JWT_ACCESS_TOKEN,
  refresh__token:process.env.JWT_REFRESH_TOKEN
}
