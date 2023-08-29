import React from 'react';

const BlogPage = () => {
  const showMenu = () => {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";
  };

  const hideMenu = () => {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.right = "-200px";
  };

  return (
    <div className='blog'>
      <section className="sub-header">
        <nav className=" ">
          <a className="navbar-brand" href="index.html"></a>
          <button className="navbar-toggler" type="button" onClick={showMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          
        </nav>
        <h1 className="text-center mt-3"> Our work </h1>
      </section>
      
      <section className="blog-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2> </h2>
              <p className="text-center"> Coming Soon.... </p>
              <div className="comment-box">
                <h3 className="text-center"> Leave a Comment </h3>
                <form className="comment-form">
                  <input type="text" className="form-control mb-2" placeholder="Enter your Name" />
                  <input type="text" className="form-control mb-2" placeholder="Enter your Email" />
                  <textarea rows="5" className="form-control mb-2" placeholder="Your Comment"></textarea>
                  <button type="submit" className="btn btn-danger"> POST COMMENT </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default BlogPage;
