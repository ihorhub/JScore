
import './App.css';
import {NavLink, Route, Switch} from "react-router-dom";
import Users from "./component/users";
import Posts from "./component/posts";
import Comments from "./component/comments";
import UserIdPost from "./component/userIdPost";

function App() {
  return (
    <div>
        <div>
            <NavLink exact to={'/'}>HOME</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
        </div>
        <div>

<Switch>
    <Route path={'/users/:id'} component={UserIdPost}/>
    <Route path={'/comments'} component={Comments}/>
    <Route path={'/posts'} component={Posts}/>
    <Route path={'/users'} component={Users}/>
    <Route path={'/'} exact render={() =><h1>MAIN COMPONENT</h1> }/>


    <Route  render={()=><h1 style={{color:'red'}}>404 ERR path</h1>}/>
</Switch>



        </div>

    </div>
  );
}

export default App;
