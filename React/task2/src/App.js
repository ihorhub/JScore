import logo from './logo.svg';
import './App.css';
import {ApiServis} from "./service/ApiServis";
import Posts from "./component/post/posts";
import Comments from "./component/comment/comments";

function App() {

  return (
    <div>
      <Posts/>
      <Comments/>
    </div>
  );
}

export default App;
