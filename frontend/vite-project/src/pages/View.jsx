import React, { useEffect, useState } from 'react';
import { getPost } from '../api/PostApi';
import { useParams } from 'react-router-dom';

function View() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(id).then(setPost);
  }, [id]);

  if (!post) return <p>불러오는 중...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default View;
