import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { useState } from 'react';



let inputs = [

{texto: 'BIN', placeholder: 'Base 2'},
{texto: 'OCT', placeholder: 'Base 8'},
{texto: 'DEC', placeholder: 'Base 10'},
{texto: 'HEX', placeholder: 'Base 16'},

]

export default function App() {


  return (


    <View style={styles.container}>

      <Header />
      <Body />
      <Footer />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0611ea',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitulo: {

    backgroundColor: '#0611ea',
    height: 65,
    width: '100%',
    justifyContent: 'space-around',
    alignItems:'center',
    marginTop: '15%',
    marginBottom: '5%',


  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding: 10,

    //gap: 75,


  },
  headerTexto: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 20,
    //flexDirection: 'row',

  },

  botaoGeral: {
    flexDirection: 'row',
    gap: 10,
  },
  Baixo:{
    width: '100%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-around',
    padding: 10,
    marginTop:25,
  },

  body: {

    backgroundColor: '#ffff',
    height: 65,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },

  bodyTitulo: {
    flex: 1,
    backgroundColor: '#ffff',
    height: 65,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  footerTitulo: {
    backgroundColor: '#0611ea',
    height: 65,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '5%',
  },




});


function Header() {

  return (
    <View style={styles.headerTitulo}>
      <View style={styles.header}>

        <Text style={styles.headerTexto}>Conversor de Base</Text>

        <View style={styles.botaoGeral}>
          <TouchableOpacity style={styles.botaoReset}>

            <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold', }}>Reset</Text>

          </TouchableOpacity>

         <TouchableOpacity style={styles.botaoPonto}>

            <Feather name='more-vertical'
              size={30}
              color='#fff'
            />

          </TouchableOpacity> 

        </View>
      </View>

      <View style={styles.Baixo}>
        <TouchableOpacity style={styles.botaoComum}>

          <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold', }}>Bases Comuns</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoBase}>

<Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold', }}>Todas as Bases</Text>

</TouchableOpacity>

      </View>
    </View>






  );

}

function Body() {
  return (
 
  <View style={{width:'100%', flex:1,}}>

    {inputs.map( (inpt, index) => (
      <Inputs texto={inpt.texto} placeholder={inpt.placeholder} key={index}/>
    ) )}

  </View>
 
  )
}

function Inputs(props){
  const [input, setInputs] = useState();
  const [conteudoBody, setConteudoBody] = useState(<Body/>)

  return (

    <View style={styles.body}>
      <View style={styles.texto}>
        <Text style={styles.texto}>{props.texto}</Text>
      </View>

      <TextInput
      multiline='true'
      value={input}
      onChangeText={setConteudoBody}
      style={styles.input}
      placeholder={props.placeholder}
      placeholderTextColor='#ccccc4'
      />

    </View>

  )
}

function Footer() {
  return (
    <View style={styles.fundoFooter}>
      <View style={styles.footer}>
        <Text style={{ fontSize: 20, color: 'white' }}>footer</Text>
      </View>
    </View>
  )
}

