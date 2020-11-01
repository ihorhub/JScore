export class ApiServis {
    _postUrl='https://jsonplaceholder.typicode.com/posts'
    _commentUrl='https://jsonplaceholder.typicode.com/comments'


    async  getPosts(){
        return (await fetch(this._postUrl)).json()
    }
    async getComments(){
        return (await  fetch(this._commentUrl)).json()
    }
}
