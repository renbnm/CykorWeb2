import React from 'react';

function PostForm({ formData, setFormData, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="제목"
        value={formData.title}
        onChange={e => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <br />
      <textarea
        placeholder="내용"
        value={formData.content}
        onChange={e => setFormData({ ...formData, content: e.target.value })}
        required
      />
      <br />
      <button type="submit">저장</button>
    </form>
  );
}

export default PostForm;
