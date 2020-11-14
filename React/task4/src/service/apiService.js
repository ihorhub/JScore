export class ApiService {
    _url = `https://jsonplaceholder.typicode.com`

    getUsers(){
        return(fetch(`${this._url}/users`)).then(res =>res.json() )
    }
    getUserId(id){
        return fetch(`${this._url}/posts?userId=${id}`)
    }
    getPosts(){
        return fetch(`${this._url}/posts`).then(value => value.json())
    }
    getPostId(id){
        return fetch(`${this._url}/comments?postId=${id}`).then(value => value.json())
    }
    getComments(){
        return fetch(`${this._url}/comments`).then(value => value.json())
    }

}



