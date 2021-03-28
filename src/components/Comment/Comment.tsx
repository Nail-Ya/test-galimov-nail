import React from 'react';
import { Commentary } from '../../utils/types';
import './Comment.scss';

export type Props = {
  comment: Commentary;
};

const Comment: React.FC<Props> = ({ comment }) => (
  <li
    className="book__comment"
    key={comment.id}
  >
    <p className="book__text book__text_type_comment">
      <span className="book__text book__text_theme_gray">
        {comment.userName}:&nbsp;
      </span>
      {comment.date}
    </p>
    <p className="book__text">
      {comment.message}
    </p>
  </li>
);

export default Comment;
