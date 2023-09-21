import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
//bug list
//string no input do valor cadastra
// pesquisar por nome '' dá ruim grande 
// editar para '' não poderia ser legal 


//let produtos = []
let produtos = [
  { nome: "Abacaxi", valor: 11 },
  { nome: "Bergamota", valor: 12 },
  { nome: "Limão", valor: 10 },
  { nome: "Damasco", valor: 17 },
  { nome: "Emeixa", valor: 55 },
]

export default function App() {

  const [entradaNome, setEntradaNome] = useState('')
  const [entradaValor, setEntradaValor] = useState('')

  function cadastrar() {

    if (entradaNome.trim() != '' && entradaValor.trim() != '') {

      if (typeof entradaValor.trim() != 'string') {



        let produto = {
          nome: entradaNome.trim(),
          valor: Number(entradaValor)
        }

        produtos.push(produto)

        setEntradaNome('')
        setEntradaValor('')

        console.log(produtos);

      }
    }
    else {
      alert("Insira Valores")
      setEntradaNome('')
      setEntradaValor('')
  }
  }

  function pesquisar() {

    if (entradaNome == '') {

      alert('Invalido')

    } else {

      for (let i = 0; i < produtos.length; i++) {

        if (produtos[i].nome.toUpperCase() == entradaNome.toUpperCase()) {


          setEntradaValor(produtos[i].valor.toString())
          return produtos[i]
        }
      }
    }

  }

  function editar() {

    if (entradaNome != '' && entradaValor != '') {
      let produto = pesquisar()
      produto.valor = Number(entradaValor)




    } else {
      alert('Não é possivel editar com espaço vazio')
      setEntradaNome('')
      setEntradaValor('')
    }
  }
  function apagar() {


    produtos.splice(produtos.indexOf(pesquisar()), 1)

    setEntradaNome('')
    setEntradaValor('')

  }



  return (


    <View style={styles.container}>

      <Text style={styles.textoTitulo}> CRUD </Text>
      <TextInput

        value={entradaNome}
        onChangeText={setEntradaNome}
        style={styles.inputs}
        placeholder='Nome...'

      />

      <TextInput

        value={entradaValor}
        onChangeText={setEntradaValor}
        style={styles.inputs}
        placeholder='valor...'

      />

      <View style={styles.linha}>

        <TouchableOpacity style={styles.botao} onPress={cadastrar}>

          <Text style={styles.textoBotao}>Cadastra</Text>

        </TouchableOpacity>


        <TouchableOpacity style={styles.botao} onPress={pesquisar}>

          <Text style={styles.textoBotao}>Pesquisar</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={editar}>

          <Text style={styles.textoBotao}>Editar</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={apagar}>

          <Text style={styles.textoBotao}>Apagar</Text>

        </TouchableOpacity>



      </View>

      <View>
        {produtos.map((produto, index) => (
          <Text key={index}>{produto.nome} - R${produto.valor.toFixed(2)}</Text>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f3e8d',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    gap: 20,

  },
  textoTitulo: {
    color: '#fff'
  },

  inputs: {

    borderWidth: 2,
    borderRadius: 3,
    padding: 5,
    paddingRight: 100,
    borderColor: '#fff',

  },

  botao: {

    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    borderColor: '#fff',

  },

  textoBotao: {

    color: '#fff'

  },

  linha: {

    flexDirection: 'row',
    gap: 7,

  }

});