export class ApiService {
    _userUrl='https://jsonplaceholder.typicode.com/users'
    _userIdUrl='https://jsonplaceholder.typicode.com/posts?userId='
    _postUrl='https://jsonplaceholder.typicode.com/posts'
    _postIdUrl='https://jsonplaceholder.typicode.com/comments?postId='
    _commentUrl='https://jsonplaceholder.typicode.com/comments'

    getUsers(){
        return(fetch(this._userUrl)).then(res =>res.json() )
    }
    getUserId(id){
        return(fetch(`${this._userIdUrl}/${id}`)).then(value => value.json())
    }
    getPosts(){
        return(fetch(this._postUrl)).then(value => value.json())
    }
    getPostId(id){
        return(fetch(`${this._postIdUrl}/${id}`)).then(value => value.json())
    }
    getComments(){
        return(fetch(this._commentUrl)).then(value => value.json())
    }

}
