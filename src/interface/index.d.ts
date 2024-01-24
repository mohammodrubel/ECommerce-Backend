import { JwtPayload } from 'jsonwebtoken';
declare global{
    namespace Expresss {
        interface Request {
            user:JwtPayload
        }
    }
}