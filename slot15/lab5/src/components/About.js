import React from 'react';

function About() {
  return (
    <div className="about-container p-4">
      <div className="jumbotron bg-light p-5 rounded-3 shadow-sm text-center">
        <h1 className="display-5 fw-bold text-primary">Giới thiệu về Quiz App</h1>
        <p className="lead fs-4 mt-3">
          Chào mừng bạn đến với Quiz App! Chúng tôi mang đến trải nghiệm kiểm tra kiến thức độc đáo và cập nhật tin tức mới nhất.
        </p>
        <p className="fs-5">
          Ứng dụng của chúng tôi cung cấp các bài quiz đa dạng và những bài viết hấp dẫn về nhiều chủ đề khác nhau.
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-center mb-4 fs-3 fw-bold">Đội ngũ của chúng tôi</h2>
        <p className="text-center fs-5">
          Chúng tôi là một nhóm đam mê giáo dục và công nghệ, luôn nỗ lực mang đến nội dung chất lượng cho bạn.
        </p>
      </div>
    </div>
  );
}

export default About;