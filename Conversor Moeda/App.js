import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [entradaReal, setEntrada] = useState('');
  const [saidaDolar, setSaidaDolar] = useState('0.00');

  const [entradaDolar, setEntradaDolar] = useState('');
  const [saidaReal, setSaidaReal] = useState('0.00');

  const [EntradaRealEuro, setEntradaRealEuro] = useState('');
  const [saidaEuro, setSaidaEuro] = useState('0.00');

  const [entradaEuro, setEntradaEuro] = useState('');
  const [saidaRealEuro, setSaidaRealEuro] = useState('0.00');

  const [entradaRealLibras, setEntradaRealLibras] = useState('');
  const [saidaRealLibras, setSaidaRealLibras] = useState('0.00');

  const [entradaLibrasReal, setEntradaLibrasReal] = useState('');
  const [saidaLibrasReal, setSaidaLibrasReal] = useState('0.00');

  const [entradaRealFranco, setEntradaRealFranco] = useState('');
  const [saidaRealFranco, setSaidaRealFranco] = useState('0.00');

  const [entradaFrancoReal, setEntradaFrancoReal] = useState('');
  const [saidaFrancoReal, setSaidaFrancoReal] = useState('0.00');


  function converterR_D() {

    let dolar = Number(entradaReal) / 4.89
    setSaidaDolar(dolar.toFixed(2))

  }

  function converterD_R() {

    let Real = Number(entradaDolar) * 4.89
    setSaidaReal(Real.toFixed(2))

  }

  function converterR_E() {

    let Real_Euro = Number(EntradaRealEuro) / 5.37
    setSaidaEuro(Real_Euro.toFixed(2))

  }
  function converterE_R() {

    let Euro_Real = Number(entradaEuro) * 5.37
    setSaidaRealEuro(Euro_Real.toFixed(2))

  }
  function converterR_L() {

    let libras_Real = Number(entradaRealLibras) / 6.20
    setSaidaRealLibras(libras_Real.toFixed(2))
  }
  function converterL_R() {

    let real_Libras = Number(entradaLibrasReal) * 6.20
    setSaidaLibrasReal(real_Libras.toFixed(2))

  }
  function converterR_F() {

    let real_Franco = Number(entradaRealFranco) / 5.58
    setSaidaRealFranco(real_Franco.toFixed(2))

  }
  function converterF_R() {

    let franco_Real = Number(entradaFrancoReal) * 5.58
    setSaidaFrancoReal(franco_Real.toFixed(2))

  }

  return (
    <ScrollView>

      <View style={styles.container}>


        <Text style={styles.textoTitulo}> Conversor de Moedas </Text>

        <View style={styles.cards}>

          <Text style={styles.textoCard}>Real para Dolar </Text>
          <TextInput
            style={styles.input}
            value={entradaReal}
            onChangeText={setEntrada}
            keyboardType='numeric'
          />

          <TouchableOpacity style={styles.botao} onPress={converterR_D}>
            <Text style={styles.textoBotao}>Calcular 💰</Text>

          </TouchableOpacity>

          <Text style={styles.emoji}> 🇺🇲 U${saidaDolar}</Text>

        </View>


        <View style={styles.cards}><Text style={styles.textoCard}>Dolar para Real</Text>

          <TextInput
            style={styles.input}
            value={entradaDolar}
            onChangeText={setEntradaDolar}
            keyboardType='numeric'
          />
          <TouchableOpacity style={styles.botao} onPress={converterD_R}>
            <Text style={styles.textoBotao}>Calcular 💰</Text>

          </TouchableOpacity>

          <Text style={styles.emoji}> 🇧🇷 R${saidaReal}</Text>



        </View>

        <View style={styles.cards}><Text style={styles.textoCard}>Real para Euro</Text>

          <TextInput
            style={styles.input}
            value={EntradaRealEuro}
            onChangeText={setEntradaRealEuro}
            keyboardType='numeric'
          />
          <TouchableOpacity style={styles.botao} onPress={converterR_E}>
            <Text style={styles.textoBotao}>Calcular 💰</Text>

          </TouchableOpacity>

          <Text style={styles.emoji}> 🇪🇺 €{saidaEuro}</Text>



        </View>

        <View style={styles.cards}><Text style={styles.textoCard}>Euro para Real</Text>

          <TextInput
            style={styles.input}
            value={entradaEuro}
            onChangeText={setEntradaEuro}
            keyboardType='numeric'
          />
          <TouchableOpacity style={styles.botao} onPress={converterE_R}>
            <Text style={styles.textoBotao}>Calcular 💰</Text>

          </TouchableOpacity>

          <Text style={styles.emoji}> 🇧🇷 R${saidaRealEuro}</Text>


        </View>

        <View style={styles.cards}><Text style={styles.textoCard}>Real para Libras</Text>

          <TextInput
            style={styles.input}
            value={entradaRealLibras}
            onChangeText={setEntradaRealLibras}
            keyboardType='numeric'
          />
          <TouchableOpacity style={styles.botao} onPress={converterR_L}>
            <Text style={styles.textoBotao}>Calcular 💰</Text>

          </TouchableOpacity>

          <Text style={styles.emoji}> 🇬🇧 £{saidaRealLibras}</Text>

        </View>

        <View style={styles.cards}><Text style={styles.textoCard}>Libras para Real</Text>

          <TextInput
            style={styles.input}
            value={entradaLibrasReal}
            onChangeText={setEntradaLibrasReal}
            keyboardType='numeric'
          />
          <TouchableOpacity style={styles.botao} onPress={converterL_R}>
            <Text style={styles.textoBotao}>Calcular 💰</Text>

          </TouchableOpacity>

          <Text style={styles.emoji}> 🇧🇷 R${saidaLibrasReal}</Text>

        </View>

        <View style={styles.cards}><Text style={styles.textoCard}>Real para Franco Suiço </Text>

          <TextInput
            style={styles.input}
            value={entradaRealFranco}
            onChangeText={setEntradaRealFranco}
            keyboardType='numeric'
          />
          <TouchableOpacity style={styles.botao} onPress={converterR_F}>
            <Text style={styles.textoBotao}>Calcular 💰</Text>

          </TouchableOpacity>

          <Text style={styles.emoji}> 🇨🇭 Fr{saidaRealFranco}</Text>

        </View>
        <View style={styles.cards}><Text style={styles.textoCard}>Franco Suiço para Real</Text>

            <TextInput
              style={styles.input}
              value={entradaFrancoReal}
              onChangeText={setEntradaFrancoReal}
              keyboardType='numeric'
            />
            <TouchableOpacity style={styles.botao} onPress={converterF_R}>
              <Text style={styles.textoBotao}>Calcular 💰</Text>

            </TouchableOpacity>

            <Text style={styles.emoji}> 🇧🇷 R${saidaFrancoReal}</Text>

          

        </View>


        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f3e8d',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
    gap: 10,
  },
  input: {

    borderWidth: 2,
    width: 100,
    borderRadius: 10,
    padding: 6,
    color: '#fff',
    borderColor: '#fff',
    textAlign: 'center',
    fontSize: '15'

  },

  cards: {
    width: '90%',
    height: 200,
    backgroundColor: '#1358ab',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,


  },

  textoTitulo: {

    fontSize: 30,
    color: '#fff',

  },

  textoCard: {

    fontSize: 25,
    textAlign: 'center',
    color: '#fff',

  },
  botao: {

    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: '#fff'


  },
  textoBotao: {

    fontSize: 15,
    textAlign: 'center',
    color: '#fff',

  },
  emoji: {

    fontSize: 24,
    textAlign: 'center',
    color: '#fff',

  },


});
