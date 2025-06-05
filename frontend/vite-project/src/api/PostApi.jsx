import axios from 'axios';

const API = '/posts';

export const getAllPosts = () => axios.get(API).then(res => res.data);
export const getPost = id => axios.get(`${API}/${id}`).then(res => res.data);
export const createPost = data => axios.post(API, data).then(res => res.data);
export const updatePost = (id, data) => axios.put(`${API}/${id}`, data).then(res => res.data);
export const deletePost = id => axios.delete(`${API}/${id}`).then(res => res.data);
