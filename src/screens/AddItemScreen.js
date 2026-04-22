import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { carregarItems, adicionarItems } from '../services/storage';

export default function AddItemScreen({ navigation }) {
  const [nome, setNome] = useState('');

  async function salvar() {
    if (!nome) return;
    
    const atual = await carregarItems();
    const novoItem = {
      id: Date.now().toString(),
      nome: nome,
      comprado: false
    };
    
    await adicionarItems([...atual, novoItem]);
    navigation.goBack();
  }
 
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome do produto..."
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Salvar na Lista" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center' 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    marginBottom: 20, 
    borderRadius: 5 
  }
});