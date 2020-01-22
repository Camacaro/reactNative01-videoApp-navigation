import React from 'react';
import { Text, StyleSheet, 
    TouchableHighlight, TouchableOpacity } from 'react-native';

// TouchableHighlight
// este componente funciona para cuando tengas el dedo
// encima del boton haga un cambio, como un background color

// TouchableOpacity
// funciona para que cuando despeguemos el botom haga algun destello

function PlayPause ( props ) {
    return(
        
        <TouchableHighlight 
            onPress={props.onPress} 
            style={styles.container}
            underlayColor = "red"
        > 
            {
                props.paused ?  
                    <Text style={styles.button}> PLAY </Text> 
                :
                    <Text style={styles.button}> PAUSE </Text>
            }
            
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'gray'
    },
    button: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    }
});

export default PlayPause;