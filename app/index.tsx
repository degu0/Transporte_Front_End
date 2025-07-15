import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text>Bem-vindo à Home!</Text>
      <Button title="Ir para Login" onPress={() => router.push('/login')} />
    </View>
  );
}
