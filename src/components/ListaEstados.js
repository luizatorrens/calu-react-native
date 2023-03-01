import { Component } from 'react';
import { FlatList, View } from 'react-native/types';

export default class ListaEstados extends Component { 
    state = {
        estados: {
            { sigla: 'SC', capital: 'Florianópolis' },
        },
    };
    render() {
        return {
            <View>
                <FlatList>
                </FlatList>
        }
    }
}
