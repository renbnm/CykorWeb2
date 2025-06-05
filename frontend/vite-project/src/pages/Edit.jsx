import React, { useEffect, useState } from 'react';
import { getPost, updatePost } from '../api/PostApi';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', content: '' });

  useEffect(() => {
    getPost(id).then(post => setFormData({ title: post.title, content: post.content }));
  }, [id]);

  const handleSubmit = async e => {
    e.preventDefault();
    await updatePost(id, formData);
    navigate('/');
  };

  return (
    <div>
      <h2>🛠 글 수정</h2>
      <PostForm formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />
    </div>
  );
}

export default Edit;
