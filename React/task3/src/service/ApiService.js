export class ApiService {
    _userUrl='https://jsonplaceholder.typicode.com/users'
    _useridUrl='https://jsonplaceholder.typicode.com/posts/?userId='

getUsers(){
        return ( fetch(this._userUrl)).then(res => res.json() )
}
async getUserById(id){
        return (await fetch(`${this._userUrl}/${id}`)).json()
}
}
