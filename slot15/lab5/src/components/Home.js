import React, { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 
    return () => clearInterval(timer); 
  }, []);

  const formattedTime = currentTime.toLocaleString('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div>
      <div className="intro-section text-center mb-4">
        <h1>Chào mừng đến với Quiz App</h1>
        <p className="lead">
          Chúc bạn một buổi sáng sớm tuyệt vời! Hiện tại là: {formattedTime} (Giờ Việt Nam).
        </p>
        <p>Khám phá kiến thức và tin tức thú vị với chúng tôi!</p>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner.png"
            alt="Slide 1"
            style={{ maxHeight: '530px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Thử sức với Quiz</h3>
            <p>Tham gia ngay để kiểm tra kiến thức của bạn!</p>
            <Button
              as={Link}
              to="/quiz"
              variant="primary"
              size="lg"
              className="mt-3"
              style={{ transition: 'all 0.3s' }}
              onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
              onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            >
              Bắt đầu Quiz
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner2.jpg"
            alt="Slide 2"
            style={{ maxHeight: '530px', objectFit: 'cover',maxWidth: '100%' }}
          />
          <Carousel.Caption>
            <h3>Cập nhật tin tức</h3>
            <p>Đọc những bài viết mới nhất về cuộc sống!</p>
            <Button
              as={Link}
              to="/news"
              variant="primary"
              size="lg"
              className="mt-3"
              style={{ transition: 'all 0.3s' }}
              onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
              onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            >
              Xem tin tức
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner3.jpg"
            alt="Slide 3"
            style={{ maxHeight: '530px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Liên hệ với chúng tôi</h3>
            <p>Gửi ý kiến hoặc câu hỏi của bạn!</p>
            <Button
              as={Link}
              to="/contact"
              variant="primary"
              size="lg"
              className="mt-3"
              style={{ transition: 'all 0.3s' }}
              onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
              onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            >
              Liên hệ
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;