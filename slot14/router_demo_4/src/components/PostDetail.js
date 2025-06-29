import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button, Alert } from 'react-bootstrap';
import { apiService } from '../services/api';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPost();
  }, [id]);

  const loadPost = async () => {
    try {
      setLoading(true);
      const data = await apiService.getPost(id);
      setPost(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Đang tải...</h2>;
  if (error) return <Alert variant="danger">Lỗi: {error}</Alert>;
  if (!post) return <Alert variant="warning">Không tìm thấy bài viết</Alert>;

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
          <Card.Text>
            <small className="text-muted">
              Tác giả: {post.author} | Ngày tạo: {post.createdAt}
            </small>
          </Card.Text>
          <div className="d-flex gap-2">
            <Button as={Link} to="/posts" variant="secondary">
              Quay lại danh sách
            </Button>
            <Button as={Link} to={`/posts/edit/${post.id}`} variant="warning">
              Chỉnh sửa
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostDetail;