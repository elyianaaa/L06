import React, {useState} from "react";
import {TextInput, View, Text, Button} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import {datasource} from './Data.js';

const Add = ({navigation}) => {
    const [letter, setLetter] = React.useState("");
    const [type, setType] = React.useState("Vowels");
    return (
        <View style={{padding: 10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Letter:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText={text => setLetter(text)}/>
            </View>

            <View style={{padding: 10}}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        {label:"Vowels", value:"Vowels"},
                        {label:"Consonants", value:"Consonants"},
                    ]}
                    />
            </View>
            <Button title="SUBMIT"
                    onPress={() => {
                        let item = {key: letter};
                        let indexNum =1;
                        if (type == 'Vowels') {
                            indexNum = 0;
                    }
                        datasource[indexNum].data.push(item);
                        navigation.navigate("Home");
                    }
            }
            />
        </View>
);
};

    export default Add;
