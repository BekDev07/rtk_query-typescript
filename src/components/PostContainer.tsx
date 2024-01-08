import React, { useEffect, useState } from "react";
import { postApi } from "../service/postService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

const PostContainer = () => {
  const [limit, setLimit] = useState(100);
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = postApi.useFetchAllPostsQuery(limit, {
    // pollingInterval: 2000,
    // refetchOnFocus: true,
  });
  const [createPost, { isLoading: createPostLoading, error: createPostError }] =
    postApi.useCreatePostMutation();

  const [deletePost, {}] = postApi.useDeletePostMutation();
  const [updatePost, {}] = postApi.useUpdatePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title } as IPost);
  };

  useEffect(() => {
    // setTimeout(() => {
    //   setLimit(3);
    // }, 2000);
    // eslint-disable-next-line
  }, []);

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Add New Post</button>
        {isLoading && <p>loading...</p>}
        {error && <p>Failed loading</p>}
        {posts &&
          posts.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              remove={handleRemove}
              update={handleUpdate}
            />
          ))}
      </div>
    </div>
  );
};

export default PostContainer;
