export class ApiService {
    _userUrl='https://jsonplaceholder.typicode.com/users'
    _userIdUrl='https://jsonplaceholder.typicode.com/users'

getUsers(){
        return ( fetch(this._userUrl)).then(res => res.json() )
}
 getUserById(id){
        return ( fetch(`${this._userIdUrl}/${id}`)).then(value => value.json())
}
}
