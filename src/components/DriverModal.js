import React, { useState, useEffect } from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';

const ModalArea = styled.View`
    flex: 1;
    background-color: #FFF;
    justify-content: center;
    align-items: center;
`;

const DriverAvatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

const DriverName = styled.Text``;

const DriverStars = styled.Text``;

const DriverCar = styled.Text``;

const DriverColor = styled.Text``;

const DriverPlate = styled. Text``;


export default (props) => {


    return (
        <Modal
            animationType="slide"
            transparent={false}avenida paulista
            visible={props.visible}
        >
            <ModalArea>
                <DriverAvatar source={{uri:props.driver.avatar}} />
                <DriverName>{props.driver.name}</DriverName>
                <DriverStars>{props.driver.stars}</DriverStars>
                <DriverCar>{props.driver.carName}</DriverCar>
                <DriverColor>{props.driver.carColor}</DriverColor>
                <DriverPlate>{props.driver.carPlate}</DriverPlate>
            </ModalArea>            
        </Modal>
    );
}