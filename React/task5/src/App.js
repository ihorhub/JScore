
import './App.css';
import {NavLink, Route, Switch} from "react-router-dom";
import Users from "./component/users/users";
import UserIdPost from "./component/users/userIdPost";
import Posts from "./component/posts/posts";
import PostIdComment from "./component/posts/postIdComment";
import Comments from "./component/comments/comments";

function App() {
  return (
      <div>
<div>

  <NavLink exact to={'/'}>Home</NavLink>
  <NavLink to={'/Users'}>Users</NavLink>
  <NavLink to={'/posts'}>Posts</NavLink>
  <NavLink to={'/comments'}>Comments</NavLink>
</div>
     <div>
       <Switch>
           <Route path={'/comments'} component={Comments}/>
           <Route path={'/posts/:id'} component={PostIdComment}/>
           <Route path={'/posts'} component={Posts}/>
           <Route path={'/users/:id'} component={UserIdPost}/>
           <Route path={'/users'} component={Users}/>
<Route path={'/'} exact render={()=><h1>MAIN COMPONENT</h1>}/>
       </Switch>
     </div>
    </div>
  );
}

export default App;
