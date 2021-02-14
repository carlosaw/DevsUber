const initialState = {
    token:'',
    name:''
};

export default (state = initialState, action) => {

    switch(action.Type) {
        case 'SET_NAME':
            return { ...state, name:action.payload.name };
            break;
        case 'SET_TOKEN':
            return { ...state, token:action.payload.token };
            break;
    }

    return state;
}