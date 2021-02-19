import React, { useState, useEffect } from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';
import Geocoder from 'react-native-geocoding';
import { MapsAPI } from '../config';

const ModalArea = styled.View`
    flex: 1;
    background-color: #FFF;
`;
const ModalHeader = styled.View`
    flex-direction: row;
    padding: 20px;
    align-items: center;
`;

const ModalClose = styled.TouchableHighlight`
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: #EEE;
    border-radius: 20px;
    border: 1px solid #DDD;
`;

const ModalCloseText = styled.Text`
    font-weight: bold;
`;

const ModalInput = styled.TextInput`
    flex: 1;
    margin-left: 15px;
    font-size: 14px;
    color: #000;
    border: 1px solid #DDD;
    border-radius: 10px;
    height: 50px;
    padding-left: 15px;
`;

const ModalResults = styled.View``;
const ModalResult = styled.TouchableHighlight`
    padding: 15px;
`;
const ModalResultText = styled.Text`
    color: #000;
    font-size: 14px;
`;

let timer;

export default (props) => {

    const [results, setResults] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(()=>{
        Geocoder.init(MapsAPI, {language:'pt-br'});
    }, []);

    useEffect(()=>{
        if(searchText) {
            // fazer a pesquisa...
            if(timer) {// espera um segundo após digitar
                clearTimeout(timer);
            }
            timer = setTimeout(async ()=>{
                const geo = await Geocoder.from(searchText);

                if(geo.results.length > 0) {
                    let tempResults = [];
                    for(let i in geo.results) {
                        tempResults.push({
                            address:geo.results[i].formatted_address,
                            latitude:geo.results[i].geometry.location.lat,
                            longitude:geo.results[0].geometry.location.lng
                        });
                    }
                    setResults(tempResults);
                }
            }, 1000);            
        }
    }, [searchText]);

    const handleCloseAction = () => {
        props.visibleAction(false);
    }

    const handleClose = () => {
        setResults([]);
        setSearchText('');
    }

    const handleResultClick = (item) => {
        props.clickAction(props.field, item);
        props.visibleAction(false);
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}avenida paulista
            visible={props.visible}
            onShow={handleClose}
        >
            <ModalArea>
                <ModalHeader>
                    <ModalClose onPress={handleCloseAction} >
                        <ModalCloseText>X</ModalCloseText>
                    </ModalClose>
                    <ModalInput
                        value={searchText}
                        onChangeText={t=>setSearchText(t)}
                        autoFocus={true}
                        placeholder={props.title}
                        placeholderTextColor="#999"    
                    />
                </ModalHeader>
                <ModalResults>
                    {results.map((i,k)=>(
                        <ModalResult key={k} onPress={()=>handleResultClick(i)} >
                            <ModalResultText>{i.address}</ModalResultText>
                        </ModalResult>
                    ))}
                </ModalResults>
            </ModalArea>            
        </Modal>
    );
}