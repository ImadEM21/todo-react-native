import React from 'react';
import { StyleSheet, Text, View } from "react-native";


const Heading = () => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.headerText}>Todos</Text>
        </View>
     );
};

const styles = StyleSheet.create({
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    headerText: {
      textAlign: "center",
      fontSize: 72,
      color: 'rgba(175, 47, 47, 0.25)',
      fontWeight: 100
    },
  });
 
export default Heading;