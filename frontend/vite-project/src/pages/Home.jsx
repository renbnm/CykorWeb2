import React, { useEffect, useState } from 'react';
import { getAllPosts, deletePost } from '../api/PostApi';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  const handleDelete = async id => {
    await deletePost(id);
    setPosts(posts.filter(p => p._id !== id));
  };

  return (
    <div>
      <h2>게시판</h2>
      <button onClick={() => navigate('/create')}>글 작성</button>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <Link to={`/view/${post._id}`}>{post.title}</Link>
            <button onClick={() => navigate(`/edit/${post._id}`)}>수정</button>
            <button onClick={() => handleDelete(post._id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
