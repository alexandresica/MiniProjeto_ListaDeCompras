import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Item({ data, itemRemovido, itemMarcado }) {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => itemMarcado(data.id)} style={styles.btn}>
                <Text style={[styles.nome, data.comprado && styles.comprado]}>
                    {data.nome}
                </Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => itemRemovido(data.id)} style={styles.btnDelete}>
                <Text style={{ color: 'white' }}>Excluir</Text>
            </TouchableOpacity>
        </View>
    );
            
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2
  },
  nome: { fontSize: 16 },
  comprado: {
    textDecorationLine: 'line-through',
    color: '#aaa'
  },
  btnDelete: {
    backgroundColor: '#ff4444',
    padding: 8,
    borderRadius: 5
  }
});