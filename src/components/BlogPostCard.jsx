import React from 'react';

const BlogPostCard = ({ title, excerpt, imageUrl }) => {
  return (
    <div className="blog-post-card">
      <img src={imageUrl} alt={title} className="blog-post-image" />
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-excerpt">{excerpt}</p>
      <a href="#" className="read-more-link">
        Read more
      </a>
    </div>
  );
};

export default BlogPostCard;
