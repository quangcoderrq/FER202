import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/posts.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Không thể tải dữ liệu');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi khi tải bài viết:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Đang tải...</h2>;
  if (error) return <h2>Lỗi: {error}</h2>;

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <Row>
        {posts.map(post => (
          <Col md={4} key={post.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content.substring(0, 100)}...</Card.Text>
                <Link to={`/post/${post.id}`} className="btn btn-primary">
                  Xem chi tiết
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Post;