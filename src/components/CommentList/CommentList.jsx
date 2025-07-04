import React from 'react';
import CommentInfo from '../CommentInfo/CommentInfo';

const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
