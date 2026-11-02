import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileCard from './components/ProfileCard';
import ModuleSearch from './components/ModuleSearch';
import { LikePressable, LikeTouchable } from './components/LikeButton';

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard />
      <LikePressable />
      <LikeTouchable />
      <ModuleSearch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});