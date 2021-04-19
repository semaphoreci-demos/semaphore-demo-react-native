import React from 'react';
import {Country} from 'countries-list';

import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';

import style from './style';

type ListItemProps = {
  data: Country;
  onPress: (...args: unknown[]) => void;
  testID: string;
};

const ListItem: React.FC<ListItemProps> = props => (
  <TouchFeedback
    style={style.listItemContainer}
    testID={props.testID}
    onPress={props.onPress}>
    <Text style={style.listItemName}>{props.data.emoji}</Text>
    <Text style={style.listItemName}>
      ({props.data.phone}) {props.data.name}
    </Text>
  </TouchFeedback>
);

export default ListItem;
