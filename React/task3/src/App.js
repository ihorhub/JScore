import logo from './logo.svg';
import './App.css';
import SearchNameUsers from "./component/search-name-users";
import SearchIdUser from "./component/search-id user";

function App() {
  return (
    <div >
        <SearchIdUser/>
        <hr/>
      <SearchNameUsers/>
    </div>
  );
}

export default App;
