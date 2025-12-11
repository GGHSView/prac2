import { Pressable, Text, StyleSheet } from 'react-native';

const Footer = () => {

  return (
    <Pressable style={styles.boxBtn}>
      <Text style={styles.textBtn}>Подписаться</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create ({
  textBtn: {
    fontSize: 15,
    fontWeight: 600,
    color: '#fff',
  },
  boxBtn: {
    marginTop: 15,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#0F9D7F',
  },
});

export default Footer;