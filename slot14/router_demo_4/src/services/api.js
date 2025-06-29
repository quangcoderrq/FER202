// services/api.js
const API_BASE_URL = 'http://localhost:3001';

export const apiService = {
  // Lấy tất cả bài viết
  getPosts: async () => {
    const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error('Không thể tải danh sách bài viết');
    }
    return response.json();
  },

  // Lấy bài viết theo ID
  getPost: async (id) => {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`);
    if (!response.ok) {
      throw new Error('Không thể tải bài viết');
    }
    return response.json();
  },

  // Tạo bài viết mới
  createPost: async (post) => {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error('Không thể tạo bài viết');
    }
    return response.json();
  },

  // Cập nhật bài viết
  updatePost: async (id, post) => {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) {
      throw new Error('Không thể cập nhật bài viết');
    }
    return response.json();
  },

  // Xóa bài viết
  deletePost: async (id) => {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Không thể xóa bài viết');
    }
    return true;
  }
};