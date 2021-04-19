import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'router/types';

type SearchScreenRouteProp = RouteProp<RootStackParamList, 'Search'>;

type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Search'
>;

export type SearchScreenProps = {
  route: SearchScreenRouteProp;
  navigation: SearchScreenNavigationProp;
};
