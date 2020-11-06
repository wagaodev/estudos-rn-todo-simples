import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';

import styles from './style';

const Home = () => {

  const [ingredient, setIngredient] = useState('');
  const [ isPress, setIsPress ] = useState(false);
  const [list, setList ] = useState([]);

  const handleSubmit = () => {
    if(ingredient.trim()){
      setList([...list, ingredient]);
      setIngredient('');
    }
  };

  const buttonProps = {
    activeOpacity: 1,
    underlayColor: '#022442',
    style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: (event) => handleSubmit(event)

  }

  const handleRenderIngredient = ({ item }) => {
    return(
      <View style={styles.containerItem}>
        <Text style={styles.item}>{item}</Text>
      </View>
    )
  } 
    
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Faça um Bolo</Text>
      <TextInput
        autoCompleteType="off"
        autoCorrect={false}
        style={styles.input}
        placeholder="Digite um ingrediente"
        value={ingredient}
        onChangeText={setIngredient}
      />
      <TouchableHighlight {...buttonProps}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableHighlight>
      <FlatList
        data={list}
        keyExtractor={item => item}
        renderItem={handleRenderIngredient}
      />
    </SafeAreaView>
  )
};


export default Home;