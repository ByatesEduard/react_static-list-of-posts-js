import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ post }) => {
  return (
    <div className="Post">
      <h2 className="Post__title">{post.title}</h2>
      <p className="Post__body">{post.body}</p>

      <UserInfo user={post.user} />
      <CommentList comments={post.comments} />
    </div>
  );
};

export default PostInfo;
