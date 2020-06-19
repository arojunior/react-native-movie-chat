import { useState, useEffect } from 'react';
import { Comment } from '../../types';
import firebaseService from '../../services/firebaseService';

export const useComments = (slug: string) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const unsubscribe = firebaseService.getCommentsBySlug({ slug, setComments });
    return () => {
      unsubscribe();
    }
  }, [setComments]);

  return comments;
};

export const addComment = (comment: Comment) => {
  return firebaseService.addComment({
    ...comment,
    author: `Anonymous`,
    date: new Date(),
  });
};
