import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

const Preload = (props) => {
    if(!props.token) {
        // Login
        props.navigation.dispatch(StackActions.reset({
            //key: null,
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'Login'})
            ]
        }));
    } else {
        // Home
        props.navigation.dispatch(StackActions.reset({
            //key: null,
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'HomeDrawer'})
            ]
        }));
    }
    return null;
}

const mapStateToProps = (state) => {
    return {
        token:state.userReducer.token
    };
}

export default connect(mapStateToProps)(Preload);