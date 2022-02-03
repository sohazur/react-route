import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Culture from "./components/Culture/Culture";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/friend/:friendId" element={<FriendDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about/culture" element={<Culture />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
