import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#34495e',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row',
    },
    loginBox : {
        backgroundColor : '#fff',
        flex : 1,
        margin : 20,
        borderRadius : 5,
        elevation : 10,
        paddingBottom : 20
    },
    loginTitle : {
        marginTop : 2,
        textAlign : 'center',
        fontSize : 18 ,
    },
    inputGroups : {
        marginTop: 30,
        marginRight : 20,
        marginLeft : 20
    },
    formLabel : {
        fontSize : 16,
        marginBottom : 10
    },
    formInput : {
        borderRadius : 2,
        textAlign : 'right',
        borderWidth: 0.5,
        borderColor: 'rgba(0,0,0,.2)',
        padding : 5
    }
});

export default styles;