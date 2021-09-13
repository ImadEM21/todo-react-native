import React from 'react';
import { View, StyleSheet } from 'react-native';
import TapBarItem from './TabBarItem';

const TapBar = ({ type, setType }) => {
    return ( 
        <View style={styles.container}>
            <TapBarItem type={type} title="All" setType={() => setType("All")} />
            <TapBarItem type={type} title="Active" setType={() => setType("Active")} />
            <TapBarItem type={type} title="Complete" setType={() => setType("Complete")} />
        </View>
     );
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#DDDDDD'
    }
})
 
export default TapBar;