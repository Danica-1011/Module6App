import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

const MODULES = [
  'Module 1: Introduction to Mobile Development',
  'Module 2: JavaScript Essentials',
  'Module 3: React Fundamentals',
  'Module 4: State and Props',
  'Module 5: Hooks in Depth',
  'Module 6: React Native Core Components',
];

export default function ModuleSearch() {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search modules..."
        value={query}
        onChangeText={setQuery}
      />
      <ScrollView>
        {MODULES.filter((title) =>
          title.toLowerCase().includes(query.toLowerCase())
        ).map((title) => (
          <Text key={title} style={styles.item}>
            {title}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width: '100%' },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});