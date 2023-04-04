import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Pressable} from 'react-native';
import {Link} from 'expo-router';
import styles from '../estilo';

export default function Cadastro() {
    return (
        <View style={styles.container}>
            <Text style={styles.title2}>Cadastro de Endereço</Text>
            <TextInput
            style={styles.input} 
            placeholder={'00000-000'}/>
            <TextInput
            style={styles.input}
            placeholder={'logradouro'} />
            <TouchableOpacity>
                <Text style={styles.subtitle}>Buscar Dados</Text>
            </TouchableOpacity>
        </View>
    )
}