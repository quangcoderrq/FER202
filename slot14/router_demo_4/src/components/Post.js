import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button, Alert } from 'react-bootstrap';
import { apiService } from '../services/api';

function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const data = await apiService.getPosts();
      setPosts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
      try {
        await apiService.deletePost(id);
        setPosts(posts.filter(post => post.id !== id));
      } catch (error) {
        alert('Lỗi khi xóa bài viết: ' + error.message);
      }
    }
  };

  if (loading) return <h2>Đang tải...</h2>;
  if (error) return <Alert variant="danger">Lỗi: {error}</Alert>;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Danh sách bài viết</h2>
        <Button as={Link} to="/posts/new" variant="success">
          Tạo bài viết mới
        </Button>
      </div>
      
      <Row>
        {posts.map(post => (
          <Col md={4} key={post.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                  {post.content.substring(0, 100)}...
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">
                    Tác giả: {post.author} | {post.createdAt}
                  </small>
                </Card.Text>
                <div className="d-flex gap-2">
                  <Button as={Link} to={`/post/${post.id}`} variant="primary" size="sm">
                    Xem chi tiết
                  </Button>
                  <Button as={Link} to={`/posts/edit/${post.id}`} variant="warning" size="sm">
                    Chỉnh sửa
                  </Button>
                  <Button 
                    onClick={() => handleDelete(post.id)} 
                    variant="danger" 
                    size="sm"
                  >
                    Xóa
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Post;