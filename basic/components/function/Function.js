import React from 'react';
import {View, Text} from 'react-native';

const FunctionComponent = (props) => {
    return(
        <View>
            <Text style={props.styles}>{props.message}</Text>
        </View>
    )
}

export default FunctionComponent;