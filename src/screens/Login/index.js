import React, { useState } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { StatusBar, Platform, Text } from 'react-native';
import useDevsUberApi from '../../useDevsUberApi';
import {
  Container,
  Header,
  HeaderTitle,
  Menu,
  MenuItem,
  MenuItemText,
  Input,
  ActionButton,
  ActionButtonText
} from './styled';

const Page = (props) => {
  const api = useDevsUberApi();

  const [activeMenu, setActiveMenu] = useState('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async() => {
    if(email && password) {
      const res = await api.signin(email, password);

      if(res.error) {
        alert(res.error);
      } else {
        
        // 1. guardar o token no reducer
        props.setToken(res.token);
        alert(res.token);
        // 2. redirecionar para o Home
      }
      //console.log(res.token);
    }
  }
  const handleSignUp = () => {

  }

    return (
      
      <Container behavior={Platform.OS === 'ios'?'padding':null}>
        <StatusBar barStyle="light-content" />
        <Header>
          <HeaderTitle>DevsUber</HeaderTitle>
        </Header>
        <Menu>
          <MenuItem
            active={activeMenu == 'signin'}
            onPress={()=>setActiveMenu('signin')}
            underlayColor="transparent"  
          >
            <MenuItemText>Login</MenuItemText>
          </MenuItem>
          <MenuItem
            active={activeMenu == 'signup'}
            onPress={()=>setActiveMenu('signup')}
            underlayColor="transparent"  
          >
            <MenuItemText>Cadastrar</MenuItemText>
          </MenuItem>
        </Menu>

      {activeMenu == 'signup' &&
        <Input value={name}
          onChangeText={t=>setName(t)}
          placeholder="Nome"
          placeholderTextColor="#999"
        />
      }
      <Input
        value={email}
        onChangeText={t=>setEmail(t)}
        keyboardType="email-address"
        placeholder="E-mail"
        placeholderTextColor="#999"
        autoCapitalize="none"
      />

      <Input value={password} 
        onChangeText={t=>setPassword(t)}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry={true}
      />

      {activeMenu == 'signin' &&
        <ActionButton onPress={handleSignIn}>
          <ActionButtonText>Login</ActionButtonText>
        </ActionButton>
      }

      {activeMenu == 'signup' &&
        <ActionButton onPress={handleSignUp}>
          <ActionButtonText>Cadastrar</ActionButtonText>
        </ActionButton>
      }
      <Text>TOKEN: {props.token}</Text>

      </Container>
  
    );
  }

const mapStateToProps = (state) => {
  return {
      token:state.userReducer.token
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    setToken:(token)=>dispatch({type:'SET_TOKEN', payload:{token:token}})
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);