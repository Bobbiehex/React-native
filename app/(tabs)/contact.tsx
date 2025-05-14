import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact Page</Text>
      <Link href="/" style={styles.link}>Back Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
   link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    color: '#fff',
  },
});
