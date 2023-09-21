import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { useState } from 'react';


let postagens = [
  { imagem: 'youtube', texto: 'Ae galera, saiu video novo no canal. Passa lá pra ver eu destruindo no portugol!🔮📺 \nyuoutube.com/devManoJuca \n#fullStackPortugol #portugolehprogramacao #respeitaosdev #tmj' },
  { imagem: 'arrow-up-right', texto: 'Cada linha de código é uma oportunidade para transformar lógica em realidade. Codando para criar o futuro. 💻✨ #DesenvolvimentoInovador' },
  { imagem: 'cloud-off', texto: 'Bug? Isso é apenas um quebra-cabeça esperando para ser resolvido. Encontrando soluções elegantes no mundo da programação. 🐛🔍 #DebuggingLife' },
  { imagem: 'database', texto: 'Na estrada da programação, cada erro é uma lição e cada desafio é uma chance de crescimento. A busca pela eficiência nunca para. ⚡👩‍💻 #CaminhoDoDev' },
  { imagem: 'codesandbox', texto: 'Linhas de código se tornam pontes entre a imaginação e a realidade digital. Construindo possibilidades infinitas com as mãos no teclado. 🌉💡 #ArquitetoDeCodigo' },
  { imagem: 'coffee', texto: 'Café, código, repetir. A rotina de um dev é uma dança constante entre criatividade e lógica. 🚀☕ #CodigoCriativo' },
  { imagem: 'codepen', texto: 'Só os devs entendem a satisfação de um código limpo e bem documentado. Aquela sensação de realização é imbatível. 📝✅ #CodigoElegante' },
  { imagem: 'alert-triangle', texto: 'No universo binário, os desafios se transformam em oportunidades para inovação. Codando hoje o mundo de amanhã. 🌐👨‍💻 #FuturoDoCodigo' },
  { imagem: 'activity', texto: 'Enxergando além das linhas de código, vislumbrando um ecossistema de tecnologia em constante evolução. 🌍📱 #VisaoTech' },
  { imagem: 'award', texto: 'A comunidade de desenvolvedores é como um vasto playground virtual, onde ideias se tornam colaborações e projetos incríveis. 🤝🌈 #ComunidadeDev' },
  { imagem: 'aperture', texto: 'Cada algoritmo é uma jornada de resolução de problemas, uma trilha para aprimorar habilidades e chegar a soluções brilhantes. 🗺️✨ #AlgoritmoExplorador' }
]

export default function App() {

  const [conteudoFeed, setConteudoFeed] = useState(<Feed />);
  // const [conteudoPerfil, setConteudoPerfil] = useState(<Perfil />);

  function mostrarFeed() {

    setConteudoFeed(<Feed />)
  }

  function mostrarPerfil() {

    setConteudoFeed(<Perfil />)


  }

  function cadastrarPostagem() {

    setConteudoFeed(<Cadastrar />)
  }



  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.headerTitulo}>
          <Text style={{ fontSize: 20, color: 'white' }}>Rede Social Pública</Text>
        </View>

        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Feather
              name='heart'
              size={30}
              color='#ffe0ff'
            />
          </TouchableOpacity >

          <TouchableOpacity>
            <Feather
              name='message-circle'
              size={30}
              color='#ffe0ff'
            />
          </TouchableOpacity >
        </View>

      </View>

      <View style={styles.feed}>

        <ScrollView>
          {conteudoFeed}
        </ScrollView>

      </View>

      <View style={styles.footer}>

        <TouchableOpacity onPress={mostrarFeed}>
          <FontAwesome
            name='home'
            size={45}
            color='#ffe0ff'
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={mostrarPerfil}>
          <FontAwesome
            name='user'
            size={45}
            color='#ffe0ff'
          />
        </TouchableOpacity >

        <TouchableOpacity onPress={cadastrarPostagem}>
          <Feather
            name='plus-square'
            size={45}
            color='#ffe0ff'
          />
        </TouchableOpacity>


      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#771e75',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    backgroundColor: '#771e75',
    height: 65,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: '10%'

  },

  feed: {
    flex: 1,
    backgroundColor: '#ffcdff',
    height: 65,
    width: '100%',

  },

  footer: {

    backgroundColor: '#771e75',
    height: 65,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'

  },

  novaPostagem: {
    gap: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'

  },

  input: {
    marginTop: 30,
    padding: 50,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: '#771e75'
  },

  headerTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '60%',
  },

  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 20
  }

});

function Feed() {
  return (
    <View>
      {/* <Post imagem={postagens[0].imagem} texto={postagens[0].texto}/> */}
      {postagens.map((post, index) => (
        <Post imagem={post.imagem} texto={post.texto} key={index} />
      ))}
    </View>
  )
}

function Post(props) {
  return (
    <View style={{ alignItems: 'center', padding: 20 }}>
      <Feather
        name={props.imagem}
        size={160}
        color='#771e75'
      />
      <Text>{props.texto}</Text>
    </View>
  )
}

function Perfil() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Feather
        name='user-check'
        size={160}
        color='#771e75'
      />
      <Text>Perfil</Text>
    </View>


  )
}

function Cadastrar() {
  const [inputImagem, setInputImagem] = useState();
  const [inputTexto, setInputTexto] = useState()

  function postagemCadastrada() {

    let postar = {
      imagem: inputImagem,
      texto: inputTexto
    }
    postagens.unshift(postar)

    setInputImagem('')
    setInputTexto('')

    console.log(postagens);


  }
  return (

    <View style={styles.novaPostagem}>
      <TextInput
        multiline='true'
        value={inputImagem}
        onChangeText={setInputImagem}
        placeholder='Escreva um novo Post'
        style={styles.input}
      />
      <TextInput
        multiline='true'
        value={inputTexto}
        onChangeText={setInputTexto}
        placeholder='Escreva um novo Post'
        style={styles.input}
      />
      <TouchableOpacity style={{ alignItems: 'center', padding: 5, borderColor:'#771e75', borderWidth: 2, borderRadius: 10, backgroundColor: '#ffe0ff', }} onPress={postagemCadastrada}>
        <Text>Cadastar Post</Text>
      </TouchableOpacity>
    </View>

  )
}