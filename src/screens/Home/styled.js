import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #FF0000;
`;
export const IntineraryArea = styled.View`
    position: absolute;
    left: 10px;
    right: 10px;
    top: 50px;
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #999;
    border-color: #CCC;
    border-width: 1px;
`;

export const IntineraryItem = styled.TouchableHighlight`
    padding: 15px 20px;
    border-bottom-color: #DDD;
    border-bottom-width: 1px;
`; 

export const IntineraryLabel = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
`;

export const IntineraryPoint = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${props=>props.color};
`;

export const IntineraryTitle = styled.Text`
    margin-left: 10px;
    color: #999;
`;

export const IntineraryValue = styled.Text`
    color: #000;
    font-size: 12px;
`;
export const IntineraryPlaceholder = styled.Text`
    color: #555;
    font-size: 12px;
    text-align: center;
`;

export const RequestDetails = styled.View`
    flex-direction: row;
`;

export const RequestDetail = styled.View`
    flex: 1;
    align-items: center;
`;

export const RequestTitle = styled.Text`
    color: #999;
    font-weight:bold;
    font-size: 12px;
`;

export const RequestValue = styled.Text`
    color: #000;
    font-size: 12px;
`;

export const RequestButtons = styled.View`
    flex-direction: row;
`;

export const RequestButton = styled.TouchableHighlight`
    flex: 1;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: ${props=>props.color};
    margin: 20px 5px 0px 5px;
`;

export const RequestButtonText = styled.Text`
    font-size: 10px;
`;