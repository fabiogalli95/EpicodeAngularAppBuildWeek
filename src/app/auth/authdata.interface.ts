export interface Authdata {
    accessToken: string,
    user:{
        name: string,
        id: number,
        password:string,
        email: string
    }
}
