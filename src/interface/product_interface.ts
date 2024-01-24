import mongoose from "mongoose";


// export type T_review = {
//     userId: mongoose.Types.ObjectId;
//     comment: string;
//     userRating: number;
// }

export type T_product = {
    productName: string;
    category: 'Headphone'|
    'Laptop'|
    'Gaming'|
    'Monitor'|
    'Tablet Pc'|
    'Printer'|
    'Camera'|
    'Sound System';
    price: number;
    currency: string;
    description: string;
    image: string;
    totalStock: number;
    quantity:number
    // reviews: [T_review];
};

