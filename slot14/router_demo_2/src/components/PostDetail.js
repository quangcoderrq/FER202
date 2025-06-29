import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/posts.json')
      .then((response) => response.json())
      .then((data) => {
        const foundPost = data.find(p => p.id === id);
        setPost(foundPost);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi khi tải bài viết:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Đang tải...</h2>;
  if (!post) return <h2>Không tìm thấy bài viết</h2>;

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
          <Button as={Link} to="/posts" variant="secondary">
            Quay lại danh sách
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostDetail;