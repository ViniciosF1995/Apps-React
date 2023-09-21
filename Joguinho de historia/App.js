import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

let emoji = ['💰', '🪙', '⬇️', '😎', '🤑', '☠️', '🥸', '🤡', '🤠', '🐄', '👻', '🦁', '👮‍♂️', '👨‍🌾', '🧜‍♂️', '🤸‍♂️', '🌵', '🛖', '🪂', '👽', '🎃', '🧑‍🚀', '🗽', '❌', '☃️']
let lixeira = []

export default function App() {

  const [emojiEscolhido, setEmojiEscolhido] = useState('🎮')
  const [depositoEmoji, setDepositoEmoji] = useState('')

  let i 
  
  function sorteia() {
    
    
    
    i = Math.floor(Math.random() * emoji.length)
    
   let temp =  emoji.splice(i,1)
    setDepositoEmoji(depositoEmoji + temp)
    //setEmojiEscolhido(emoji[i])
    lixeira.push(temp)
    
    
  }
  
  function reiniciar() {
    
    emoji=[...emoji,...lixeira]
    lixeira = []
    setDepositoEmoji('')
    //setEmojiEscolhido('🎮')

  }

  return (
    <ScrollView style={styles.scrol}>

      <View style={styles.container}>


        <Text style={styles.textoTitulo}>Use sua imaginação e crie sua história com amigos</Text>





        <Text style={styles.texto1}>{emojiEscolhido}</Text>

        <TouchableOpacity style={styles.botao} onPress={sorteia}>

          <Text style={styles.texto2} >Sortear</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={reiniciar}>

          <Text style={styles.texto2}> Reiniciar </Text>

        </TouchableOpacity>

        <View>

          <Text style={styles.deposito}>

            {depositoEmoji}


          </Text>

        </View>


        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66b5ff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    borderBottom: 10,
  },
  scrol: {
    flex: 1,
    backgroundColor: '#66b5ff',
    paddingTop: 70,
    
  },

  textoTitulo: {

    fontSize: 25,
    alignItems: 'center',
    color: '#2137cf',
    fontStyle: 'italic',
    fontWeight: 'bold',

  },

  texto1: {

    fontSize: 190,
  },

  deposito: {
    fontSize: 30,
  

  },
  botao: {

    backgroundColor: '#2137cf',
    color: '#2137cf',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff',
    padding: 20,
    borderRadius: 30,

  },
  texto2: {

    fontSize: 17,
    color: '#fff',
    alignItems: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',

  },

});



