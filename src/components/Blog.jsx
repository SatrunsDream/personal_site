import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building a Portfolio with React",
      date: "2024-01-15",
      excerpt: "Learn how to create a modern portfolio website using React and modern web technologies.",
      readTime: "5 min read"
    },
    {
      title: "Data Visualization with D3.js",
      date: "2024-01-10",
      excerpt: "Exploring the power of D3.js for creating interactive data visualizations.",
      readTime: "8 min read"
    }
  ];

  return (
    <section id="blog" className="blog">
      <h2>Latest Blog Posts</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <article key={index} className="blog-card">
            <div className="blog-header">
              <h3>{post.title}</h3>
              <div className="blog-meta">
                <span className="date">{post.date}</span>
                <span className="read-time">{post.readTime}</span>
              </div>
            </div>
            <p>{post.excerpt}</p>
            <a href="#" className="read-more">Read More →</a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog; 