import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 formContext: {
    backgroundColor: '#ffffff',
    padding: 10,
 },
 formTextAltura: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
 },
 formText: {
    fontSize: 18,
    color: '#333333',
 },
 larguraTela: {
    width: '70%',
 },
 input: {
    //deve ocupar toda tela
    justifyContent: 'space-between',
    //retirar borda
    borderWidth: 0,
    borderBottomWidth: 0,
    paddingLeft: 10,
 },
});