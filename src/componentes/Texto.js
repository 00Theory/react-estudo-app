import React from "react";
import { StyleSheet, Text } from 'react-native';

export default function Texto({ children, style }){
    let estilo = estilos.texto;

    if (style?.fontWeight === "bold"){ //Se tiver o '?', o if perguntará se tem style no texto, 
        // o que impede erros caso o texto não haja algum style
        estilo = estilos.textoNegrito;
    }
    return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
})