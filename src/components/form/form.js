import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import stylesForm from "./formStyle";

export default function Form() {
  const [exercicio, setExercicio] = useState(null);
  const [peso, setPeso] = useState(null);
  const [lista, setLista] = useState([]);

  const handleReset = () => {
    setExercicio(null);
    setPeso(null);
  };
  const handleSubmit = () => {
    setLista([...lista, { exercicio, peso }]);
    setExercicio("");
    setPeso("");
  };
  return (
    <View style={stylesForm.formContext}>
      <View>
        <View style={stylesForm.formTextAltura}>
          <Text style={stylesForm.formText}>
            Exercício{" "}
            <View style={stylesForm.larguraTela}>
              <TextInput
                style={stylesForm.input}
                placeholder="Ex: Supino Reto"
                onChangeText={setExercicio}
                value={exercicio}
              />
            </View>
          </Text>
        </View>
        <View style={stylesForm.formTextAltura}>
          <Text style={stylesForm.formText}>
            Carga{" "}
            <View style={stylesForm.larguraTela}>
              <TextInput
                style={stylesForm.input}
                keyboardType="numeric"
                placeholder="Ex: 40kg "
                onChangeText={setPeso}
                value={peso}
              />
            </View>
          </Text>
        </View>
      </View>
      <Button title="Adicionar" onPress={handleSubmit} />
      <FlatList
        data={lista}
        renderItem={({ item }) => (
          <View style={stylesForm.listItem}>
            <Text style={stylesForm.listText}>
              Exercício: {item.exercicio} - Carga: {item.peso}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
