import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SocialPost() {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.userName}>Crisiano Ronaldo</Text>
      <Image 
        source={{ uri: 'https://i.pinimg.com/736x/04/d0/21/04d0215c17829202c29e0cd899dd38a2.jpg' }} 
        style={styles.postImage} 
      />
      <Text style={styles.postDescription}>
        Cristiano Ronaldo mais conhecido como o SR. Champions, Melhor jogador do mundo em busca dos 1000 gols
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
    alignItems: 'center',
    justifyContent:'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  postImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',

  },
});
