import React from "react";
import { Text, View, StyleSheet} from "react-native";

class ClassComponent extends React.Component{
    render(){
        return(
            <View>
                <Text style={stylesCustom.textInside}>{this.props.message}</Text>
            </View>
        )
    }
}

let stylesCustom = StyleSheet.create({
    textInside: {
        backgroundColor: "#000",
        color: "#fff"
    }
})

export default ClassComponent