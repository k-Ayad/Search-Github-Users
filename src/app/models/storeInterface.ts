export interface StoreInterface {
    users: {data:User[]} 
}


export interface Data {
    data : User[]
}
export interface User {
    login:string,
    avatar_url:string,
    html_url:string
}