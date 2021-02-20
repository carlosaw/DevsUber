import React, { useState } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { StatusBar, Platform, Text, ActivityIndicator } from 'react-native';
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
  ActionButtonText,
  LoadingArea
} from './styled';

const Page = (props) => {
  const api = useDevsUberApi();

  const [activeMenu, setActiveMenu] = useState('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async() => {
    if(email && password) {
      setLoading(true);
      const res = await api.signin(email, password);
      setLoading(false);

      if(res.error) {
        alert(res.error);
      } else {        
        // 1. guardar o token no reducer
        props.setToken(res.token);
        props.setName(res.name);
        // 2. redirecionar para o Home
        props.navigation.dispatch(StackActions.reset({
          //key: null,
          index:0,
          actions:[
              NavigationActions.navigate({routeName:'HomeDrawer'})
          ]
        }));
      }
    }
  }
  const handleSignUp = async () => {
    if(name && email && password) {
      setLoading(true);
      const res = await api.signup(name, email, password);
      setLoading(false);

      if(res.error) {
        alert(res.error);
      } else {        
        // 1. guardar o token no reducer
        props.setToken(res.token);
        props.setName(res.name);
        // 2. redirecionar para o Home
        props.navigation.dispatch(StackActions.reset({
          //key: null,
          index:0,
          actions:[
              NavigationActions.navigate({routeName:'HomeDrawer'})
          ]
        }));
      }
      //console.log(res);
    }
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
          editable={!loading}
          onChangeText={t=>setName(t)}
          placeholder="Nome"
          placeholderTextColor="#999"
        />
      }
      <Input
        editable={!loading}
        value={email}
        onChangeText={t=>setEmail(t)}
        keyboardType="email-address"
        placeholder="E-mail"
        placeholderTextColor="#999"
        autoCapitalize="none"
      />

      <Input value={password}
        editable={!loading} 
        onChangeText={t=>setPassword(t)}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry={true}
      />

      {activeMenu == 'signin' &&
        <ActionButton disabled={loading} onPress={handleSignIn}>
          <ActionButtonText>Login</ActionButtonText>
        </ActionButton>
      }

      {activeMenu == 'signup' &&
        <ActionButton onPress={handleSignUp}>
          <ActionButtonText>Cadastrar</ActionButtonText>
        </ActionButton>
      }

      {loading &&
        <LoadingArea>
          <ActivityIndicator size="large" color="#FFF" /> 
        </LoadingArea>
      }
      </Container>
  
    );
  }

const mapStateToProps = (state) => {
  return {
      token:state.userReducer.token,
      //name:state.userReducer.name
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    setToken:(token)=>dispatch({type:'SET_TOKEN', payload:{token}}),
    setName:(name)=>dispatch({type:'SET_NAME', payload:{name}})
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);