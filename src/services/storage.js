import AsyncStorage from '@react-native-async-storage/async-storage'

const KEY = '@lista_compras';

export const adicionarItems = async (items) => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(items));
  } catch (error) {
    console.log(error);
  }
};

export const carregarItems = async () => {
  try {
    const data = await AsyncStorage.getItem(KEY);
    //operador ternario se data for verdadeiro(nao estiver vazia) "?" é convertido para json, se nao ":" retorna um array vazio
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};