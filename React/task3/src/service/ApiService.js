export class ApiService {
    _url = `https://jsonplaceholder.typicode.com`

    getUsers(){
        return fetch(`${this._url}/users`).then(res =>res.json() )
    }
 getUserById(id){
     return fetch(`${this._url}/users?id=${id}`).then(res=>res.json())
}
}
