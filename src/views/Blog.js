import { Link } from "react-router-dom";

export function Blog() {
    return(
        <div>
            <h1>Blog</h1>
            <Link to="/blog/post/1"><div>Post 1</div></Link>
            <Link to="/blog/post/2"><div>Post 2</div></Link>
            <Link to="/blog/post/3"><div>Post 3</div></Link>
            <Link to="/blog/post/4"><div>Post 4</div></Link>
            <Link to="/blog/post/5"><div>Post 5</div></Link>
        </div>
    );
}