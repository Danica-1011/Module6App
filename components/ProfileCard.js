import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Juan Dela Cruz</Text>
      <Text style={styles.role}>Mobile Development Instructor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',      // centers horizontally
    justifyContent: 'center',  // centers vertically
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  avatar: {
    width: 100,                // remote images NEED a fixed width/height
    height: 100,
    borderRadius: 50,          // half of width = perfect circle
    marginBottom: 10,
  },
  name: { fontSize: 20, fontWeight: 'bold' },
  role: { fontSize: 14, color: '#666' },
});