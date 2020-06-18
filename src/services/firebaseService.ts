import firebase from '../config/firebase';
import loggerService from './loggerService';
import { COLLECTIONS } from '../common/infrastructure/constants'

const db = firebase.firestore();
const chatCollection = db.collection(COLLECTIONS.CHAT);

export const getCommentsBySlug = (slug: string) => {
  return chatCollection
    .where(`slug`, `==`, slug)
    .get()
    .then((comments) => {
      return Promise.resolve(
        comments.docs.map((item) => ({ id: item.id, ...item.data() }))
      );
    })
    .catch((error) => {
      loggerService.error(`Error getting movie list`, error);
    });
};