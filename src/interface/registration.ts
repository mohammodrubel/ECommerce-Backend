export type T_Registration = {
    email:string;
    password:string;
    status:'active' | 'blocked';
    role:'user' | 'admin' | 'moderator';
    isDeleted:boolean
}