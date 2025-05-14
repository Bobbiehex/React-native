import { Text, View, StyleSheet, } from 'react-native';
import { Link } from 'expo-router'; 
// import Logo from '../assets/img/react-logo.png';

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Image source={Logo} style={styles.img}/> */}
      <Text style={styles.text}>Home screen</Text>
      <Text style={styles.title}>The number one</Text>
      <Text style={styles.text}>Reading list app</Text>
      <Link href="/about" style={styles.button}>About Page</Link>
      <Link href="/contact" style={styles.link}>Contact Page</Link>
      
      <View>
        <Text style={styles.card}>This is a card view</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffff'
  },
  card: {
    marginTop: 10,
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 5,
    boxShadow: '4px 4px rgb(0,0,0,0.1)',
  },
  img: {
    marginVertical: 20
  },
   link: {
    marginVertical: 10,
    color: '#fff',
  },
});
