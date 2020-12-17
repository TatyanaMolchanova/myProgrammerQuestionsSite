export interface User {
    email: string;
    password: string;
    returnSecureToken?: boolean;
}

export interface FbAuthResponse {
    idToken: string
    expiresIn: string
}

export interface Post {
    id?: string
    title: string
    text: string
    author: string
    date: Date,
    rubric: any
}

export interface FbCreateResponse {
    name: string
}

export interface Category {
    id?: string
    category: string
    weight: number
}