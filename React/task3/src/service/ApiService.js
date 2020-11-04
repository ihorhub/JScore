export class ApiService {
    _userUrl='https://jsonplaceholder.typicode.com/users'
    _useridUrl='https://jsonplaceholder.typicode.com/posts/?userId='

async getUsers(){
        return (await fetch(this._userUrl)).json()
}
async getUserById(id){
        return (await fetch(`${this._userUrl}/${id}`)).json()
}
}
