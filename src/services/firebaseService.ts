import firebase from '../config/firebase';
import { COLLECTIONS } from '../common/infrastructure/constants';
import { Comment } from '../types';

const db = firebase.firestore();
const chatCollection = db.collection(COLLECTIONS.CHAT);

interface GetComments {
  slug: string;
  setComments: (comments: Comment[]) => void;
}
const getCommentsBySlug = ({ slug, setComments }: GetComments) => {
  return chatCollection
    .where(`slug`, `==`, slug)
    .orderBy(`date`)
    .onSnapshot((snapshot) => {
      const toComments = snapshot.docs.map((item) => ({ id: item.id, ...item.data() })) as Comment[];
      setComments(toComments);
    });
};

const addComment = (comment: Comment) => {
  return chatCollection.add(comment);
};

export default {
  getCommentsBySlug,
  addComment,
};
