/**
 *
 * Home Screen
 *
 */

import React, {useState} from 'react';
import {ScrollView, Text, View, Switch} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Button from 'theme/Button';

import {SEARCH} from 'router/routeNames';

import {HomeScreenProps} from './types';
import styles from './style';

function HomeScreen(props: HomeScreenProps): React.ReactChild {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}
      testID="homeScreen">
      <Header />
      {global.HermesInternal == null ? null : (
        <View style={styles.engine}>
          <Text style={styles.footer}>Engine: Hermes</Text>
        </View>
      )}
      <View style={styles.body}>
        <View style={styles.buttonContainer}>
          <Button
            testID="searchButton"
            label={'Search Countries'}
            type="accent"
            flex
            large
            onPress={() => {
              props.navigation.navigate(SEARCH, {});
            }}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Switch
            testID="toggle"
            value={isToggled}
            onValueChange={handleToggle}
            // onChange={() => handleToggle()}
          />
          <Text style={styles.sectionTitle}>Step One</Text>
          <Text style={styles.sectionDescription}>
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>See Your Changes</Text>
          <Text style={styles.sectionDescription}>
            <ReloadInstructions />
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Debug</Text>
          <Text style={styles.sectionDescription}>
            <DebugInstructions />
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Learn More</Text>
          <Text style={styles.sectionDescription}>
            Read the docs to discover what to do next:
          </Text>
        </View>
        <LearnMoreLinks />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
