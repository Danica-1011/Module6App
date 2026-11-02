import React, { useState } from 'react';
import { Text, Pressable, TouchableOpacity, StyleSheet } from 'react-native';

export function LikePressable() {
  const [liked, setLiked] = useState(false);

  return (
    <Pressable
      onPress={() => setLiked(!liked)}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? '#c0392b' : '#e74c3c' },
      ]}
    >
      <Text style={styles.text}>{liked ? '♥ Liked' : '♡ Like'}</Text>
    </Pressable>
  );
}

export function LikeTouchable() {
  const [liked, setLiked] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setLiked(!liked)}
      style={[styles.button, { backgroundColor: '#3498db' }]}
    >
      <Text style={styles.text}>{liked ? '♥ Liked' : '♡ Like'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  text: { color: 'white', fontSize: 16 },
});