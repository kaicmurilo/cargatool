import React, { useState } from "react";
import {
 View,
 StyleSheet,
 Image,
 TouchableOpacity,
 Text,
 Modal,
} from "react-native";
import Form from "../form/form";

export default function Main() {
 const [modalVisible, setModalVisible] = useState(false);
 const mostrarAdicionar = () => {
    setModalVisible(true);
 };

 const esconderAdicionar = () => {
    setModalVisible(false);
 };
 return (
    <View style={styles.container}>
      <View style={styles.centerImage}>
        <Image source={require("./splash.png")} style={styles.image} />
      </View>
      <View style={styles.menuBar}>
        <TouchableOpacity onPress={mostrarAdicionar}>
          <Text style={styles.addButtonText}>Novo</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={esconderAdicionar}
      >
        <View style={styles.modal}>
          <Form />
          <TouchableOpacity onPress={esconderAdicionar} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: "space-between",
 },
 centerImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
 },
 image: {
    width: 200,
    height: 200,
 },
 menuBar: {
    height: 50,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    borderRadius: 10,
 },
 addButtonText: {
    color: "white",
    fontSize: 18,
 },
 modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    justifyContent: "space-between",
    height: "80%", // Ajuste a altura do modal de acordo com a necessidade
 },
 closeButton: {
    alignItems: "center",
    justifyContent: "center",
 },
 closeButtonText: {
    color: "gray",
    fontSize: 18,
 },
});