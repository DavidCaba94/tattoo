import { FC } from "react";
import { useParams } from "react-router-dom";

const Post: FC = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Post {id}</h1>
    </div>
  );
};

export default Post;
