import React from 'react';
import { Text, TouchableHighlight ,StyleSheet } from 'react-native';

const TapBarItem = ({ type, title, setType, border, selected }) => {
    return ( 
        <TouchableHighlight underlayColor="#efefef" onPress={setType} style={[
            styles.item, selected ? styles.selected : null,
            border ? styles.border : null,
            type === title ? styles.selected : null
        ]}>
            <Text style={[styles.itemText, type === title ? styles.bold : null]} >{title}</Text>
        </TouchableHighlight>
       
    );
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        borderLeftWidth: 1,
        borderLeftColor: '#dddddd'
    },
    selected: {
        backgroundColor: '#ffffff',
        fontSize: 16
    },
    bold: {
        fontWeight: 'bold'
    },
    itemText: {
        color: '#777777'
    }
})
 
export default TapBarItem;