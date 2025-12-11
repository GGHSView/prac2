import { View, Text, StyleSheet } from 'react-native';

const Skills = () => {

  return (
    <View style={styles.skills}>
      <Text style={styles.skill}>Visual</Text>
      <Text style={styles.skill}>Adobe</Text>
      <Text style={styles.skill}>Pomogite</Text>
    </View>
  );
};

const styles = StyleSheet.create ({
  skill: {
    color: '#fff',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#614051',
  },
  skills: {
    marginTop: 12,
    gap: 10,
    flexDirection: 'row',
  },
});

export default Skills;