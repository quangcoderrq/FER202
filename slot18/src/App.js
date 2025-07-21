import './App.css';
import { Route, Routes } from "react-router-dom";
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import DeletePost from './components/DeletePost';

function App() {
  return (
    <div>
      <h1>Quản lý Bài Viết</h1>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/delete/:id" element={<DeletePost />} />
      </Routes>
    </div>
  );
}

export default App;
