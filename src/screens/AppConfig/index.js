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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  
  const handleConfigSave = async () => {
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
            //active={activeMenu == 'signup'}
            //onPress={()=>setActiveMenu('configSave')}
            //underlayColor="transparent"  
          >
            <MenuItemText>Configurações</MenuItemText>
          </MenuItem>
        </Menu>


        <Input value={props.name}
          //editable={!loading}
          onChangeText={t=>setName(t)}
          //placeholder="Nome"
          //placeholderTextColor="#999"
        />
      <Input
        //editable={!loading}
        value={props.email}
        onChangeText={t=>setEmail(t)}
        //keyboardType="email-address"
        //placeholder="E-mail"
        //placeholderTextColor="#999"
        autoCapitalize="none"
      />

      <Input value={props.password}
        //editable={!loading} 
        onChangeText={t=>setPassword(t)}
        //placeholder="Senha"
        //placeholderTextColor="#999"
        secureTextEntry={true}
      />

        <ActionButton onPress={handleConfigSave}>
            <ActionButtonText>Salvar</ActionButtonText>
        </ActionButton>

      </Container>  
    );
  }

const mapStateToProps = (state) => {
  return {
      token:state.userReducer.token,
      name:state.userReducer.name
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    setToken:(token)=>dispatch({type:'SET_TOKEN', payload:{token}}),
    setName:(name)=>dispatch({type:'SET_NAME', payload:{name}})
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);