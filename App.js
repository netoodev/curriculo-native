import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';

// Componentes de página
const PaginaInicial = () => {
  return (
    <View style={styles.home}>
      <Image style={styles.profilePic} source={require('./assets/netoodev-profile.jpg')}/>
      <Text style={styles.titleHome}>Olá, mundo!</Text>
      <Text style={styles.subHome}>Sou Neto, o Developer.</Text>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.github.com/netoodev')}>
          <Image style={styles.iconImg} source={require('./assets/github-logo.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com/in/netoodev')}>
          <Image style={styles.iconImg} source={require('./assets/linkedin-sign.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Pagina1 = () => {
  return (
    <View style={styles.pagina}>
      <View style={styles.paginaTitle}>
        <Text style={styles.subPagina}>Um pouco</Text>
        <Text style={styles.titlePagina}>Sobre mim</Text>
      </View>
      <View style={styles.mosaic}>
        <Image style={styles.mosaicImg} source={require('./assets/image1.jpeg')}/>
        <Image style={styles.mosaicImg} source={require('./assets/image2.webp')}/>
        <Image style={styles.mosaicImg} source={require('./assets/image3.jpg')}/>
        <Image style={styles.mosaicImg} source={require('./assets/image4.jpg')}/>
        <Image style={styles.mosaicImg} source={require('./assets/image5.jpg')}/>
      </View>
      <View style={styles.contentText}>
        <Text style={styles.textoPagina}>Graduando em <Text style={styles.textoDestaque}>Análise e Desenvolvimento de Sistemas</Text> na Faculdade Senac através do Programa Embarque Digital oferecido pela parceria entre a Prefeitura do Recife e o Porto Digital.</Text>
        <Text style={styles.textoPagina}>Possuo forte interesse na área de <Text style={styles.textoDestaque}>Desenvolvimento Web Full Stack</Text>, como também em Desenvolvimento Mobile. Sou um entusiasta quando se trata de aprender novas tecnologias e encarar desafios.</Text>
        <Text style={styles.textoPagina}>Atualmente, estou em busca da minha <Text style={styles.textoDestaque}>primeira experiência profissional na área de TI</Text>. Me considero um profissional dedicado, resiliente e adaptável a novas situações, o que me auxilia a superar eventuais dificuldades.</Text>
      </View>

    </View>
  );
};

const Pagina2 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina}>Conteúdo da Página 2</Text>
    </View>
  );
};

const Pagina3 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina}>Conteúdo da Página 3</Text>
    </View>
  );
};

const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Página 1':
        return <Pagina1 />;
      case 'Página 2':
        return <Pagina2 />;
      case 'Página 3':
        return <Pagina3 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image style={styles.headerIcon} source={require('./assets/nd-logo.png')}/>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text style={{color: '#8D69BF', fontSize: 42}}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 1')}>
            <Text style={styles.menuItemText}>Sobre mim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 2')}>
            <Text style={styles.menuItemText}>Habilidades</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 3')}>
            <Text style={styles.menuItemText}>Projetos</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerIcon: {
    width: 60,
    height: 60,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8D69BF',
  },
  menuIcon: {
    padding: 10,
  },
  menu: {
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#8D69BF',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  home: {
    marginTop: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  textoPagina: {
    fontSize: 22,
    color: '#351B59',
    fontWeight: '400',
    textAlign: 'left',
  },
  textoDestaque: {
    color: '#8D69BF',
  },
  profilePic: {
    width: 300,
    height: 300,
    borderRadius: 150
  },
  titleHome: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#8D69BF',
  },
  subHome: {
    fontSize: 32,
    fontWeight: '500',
    color: '#351B59',
  },
  iconsWrapper:{
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  iconImg: {
    width: 40,
    height: 40,
  },
  pagina: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  paginaTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 24,
  },
  titlePagina: {
    fontSize: 36,
    fontWeight: '500',
    color: '#8D69BF',
  },
  subPagina: {
    fontSize: 24,
    fontWeight: '400',
    color: '#351B59',
  },
  mosaic: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 80,
    gap: 5,
  },
  mosaicImg: {
    width: 80,
    height: 80,
  },
  contentText: {
    marginTop: 24,
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 16,
  }
});

export default App;
