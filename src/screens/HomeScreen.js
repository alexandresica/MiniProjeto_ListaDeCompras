import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { adicionarItems, carregarItems } from '../services/storage';
import  Item  from '../components/Item';

export default function HomeScreen({ navigation }) {
    const [lista, setLista] = useState([]);


    useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const dados = await carregarItems();
      setLista(dados);
    });
    return unsubscribe;
    }, [navigation]);

    //funçao que usa o filtro map para gerar uma nova lista com a propriedade do item comprado
    async function itemMarcado(id){
        //percorre a lista verifica se o id do item é igual ao recebido no parametro e retorna uma propriedade usando um operador ternario
        const novaLista = lista.map(item => item.id === id ? { ...item, comprado: !item.comprado } : item);
        setLista(novaLista);
        await adicionarItems(novaLista);
    }

    async function itemRemovido(id) {
    const novaLista = lista.filter(item => item.id !== id);
    setLista(novaLista);
    await adicionarItems(novaLista);
  }

  async function limparLista() {
    const novaLista = [];
    setLista(novaLista);
    await adicionarItems(novaLista);
  }

  const restantes = lista.filter(i => !i.comprado).length;

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Minha Lista ({restantes} itens restantes)</Text>
      
      <FlatList
        data={lista}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Item data={item} itemRemovido={itemRemovido} itemMarcado={itemMarcado} />
        )}
      />

        <View>
            <Button style={styles.footer}
                title="Adicionar Item" 
                onPress={() => navigation.navigate('Adicionar')} 
            />
        </View>

        <View style={styles.footer}>
            <Button 
                color= 'red'
                title="Limpar" 
                onPress={() => limparLista() } 
            />
        </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: { 
    flex: 1,  
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    marginTop: 25
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginVertical: 20 
  },
  footer: {
    marginBottom: 10,
    marginTop: 10,
  }
});