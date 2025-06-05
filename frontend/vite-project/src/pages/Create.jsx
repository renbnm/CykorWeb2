import React, { useState } from 'react';
import { createPost } from '../api/PostApi';
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';

function Create() {
  const [formData, setFormData] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    await createPost(formData);
    navigate('/');
  };

  return (
    <div>
      <h2>✍ 글 작성</h2>
      <PostForm formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />
    </div>
  );
}

export default Create;
