import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Comment } from '../../../types';

interface Props {
  comments: Comment[];
}

interface RenderItem {
  item: Comment;
}

const MovieListComponent = ({ comments }: Props) => {
  const renderItem = ({ item: comment }: RenderItem) => (
    <ListItem
      title={comment.text}
      subtitle={comment.author}
      leftAvatar={{
        source: {
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        },
      }}
      bottomDivider
    />
  );

  return (
    <FlatList<Comment>
      data={comments}
      renderItem={renderItem}
      keyExtractor={(comment) => comment.id}
    />
  );
};

export default MovieListComponent;
