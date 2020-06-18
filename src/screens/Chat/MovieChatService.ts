import { useState, useEffect } from 'react';
import { Comment } from '../../types';
import { getCommentsBySlug } from '../../services/firebaseService';

export const useComments = (slug: string) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getCommentsBySlug(slug).then((data: any) => {
      setComments(data);
    });
  }, [setComments]);

  return comments;
};
