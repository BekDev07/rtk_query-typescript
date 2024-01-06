import React from "react";
import { postApi } from "../service/postService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const { data: posts, isLoading, error } = postApi.useFetchAllPostsQuery(10);

  return (
    <div>
      <div className="post__list">
        {isLoading && <p>loading...</p>}
        {error && <p>Failed loading</p>}
        {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default PostContainer;
