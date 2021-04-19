import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'router/types';

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export type HomeScreenProps = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};
