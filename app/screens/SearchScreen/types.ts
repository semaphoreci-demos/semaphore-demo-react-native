import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'router/types';

type SearhScreenRouteProp = RouteProp<RootStackParamList, 'Search'>;

type SearhScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Search'
>;

export type SearhScreenProps = {
  route: SearhScreenRouteProp;
  navigation: SearhScreenNavigationProp;
};
