export default function Post(){
    return(
        <div className="post">
          <div className="image">
            <img src="https://www.istockphoto.com/vector/loading-gm1357880487-431664933" alt=""></img>
          </div>
          <div className = "text">
          <h2>Welcome to my Website!
          </h2>
          <p className="info">
            <a className="author"> Ammar Mustafa </a>
            <time>2023-06-28</time>
            </p>
          <p className="summary"> I am a 3rd year Computer Engineering student. On this site you will find my projects and blogposts...</p>
        </div>
        </div>
      );
}