import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function App() {

  const [imagemBiscoito, setImagemBiscoito] = useState(require('./imagens/biscoito.png'))

  const [textoFrases, setFrases] = useState('')


  let frases = ['A vida trará coisas boas se tiver paciência.', 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.', 'Não compense na ira o que lhe falta na razão.', 'Defeitos e virtudes são apenas dois lados da mesma moeda.', 'A maior de todas as torres começa no solo.', 'Não há que ser forte. Há que ser flexível.', 'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.', 'Espere pelo mais sábio dos conselhos: o tempo.', 'A vida trará coisas boas se tiveres paciência.', 'Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.', 'Compre outro Biscoito']


  function quebrarBiscoito() {

    setImagemBiscoito(require('./imagens/biscoitoAberto.png'))

    let n = Math.floor(Math.random() * frases.length)

    setFrases(`"` + frases[n] + `"`)

  }

  function reiniciar() {
    setFrases('')
    setImagemBiscoito(require('./imagens/biscoito.png'))

  }


  return (

    <View style={styles.container}>

      <Text style={styles.textoTitulo}> Biscoito da Sorte :) </Text>

      <Image

        style={styles.biscoito}
        source={imagemBiscoito}

      />
      <Text style={styles.textoH1}>{textoFrases}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebrarBiscoito}>
        <Text style={styles.TextoBotao}> Quebrar Biscoito </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao1} onPress={reiniciar}>
        <Text style={styles.TextoBotao1}> Reiniciar </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4ffff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    gap: 30,
  },

  textoTitulo: {
    fontSize: 40,
    color: '#004552',
    alignItems: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold'

  },

  textoH1: {
    fontSize: 25,
    color: '#004552',
    fontWeight: 150,
    alignItems: 'center',
    textAlign: 'center',
    fontStyle: 'italic',

  },
  textoH2: {
    fontSize: 25,
    color: '#89396c',
    alignItems: 'center'

  },

  botao: {
    backgroundColor: '#20b7d8',
    color: '#004552',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#004552',
    padding: 20,
    borderRadius: 30,  

  },
  botao1: {
    backgroundColor: '#20b7d8',
    color: '#004552',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#004552',
    padding: 20,
    borderRadius: 30,


  },
  TextoBotao:{

    fontSize: 17,
    color: '#fff',
    alignItems: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',


  },
  TextoBotao1:{

    fontSize: 15,
    color: '#fff',
    alignItems: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',


  },
  biscoito: {

    width: 200,
    height: 200,
    borderRadius: 20,


  },

});
