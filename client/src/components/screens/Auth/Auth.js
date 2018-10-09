import React from 'react' ;
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import style from '../../../styles/styles' ;
import { connect } from 'react-redux';
import { change_input } from '../../actions' ;



class Auth extends React.Component {


  render(){
    return(
      <SafeAreaView style={style.flex1}>
        <View style={[style.containerCenter, style.padding20, {justifyContent:'flex-end'}]}>
            <TextInput
              style={styles.textInput}
              value={this.props.email}
              onChangeText = {(value)=>this.props.change_input({key:'email', value})}
              autoCorrect={false}
            />

            <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Contacts')}>
              <Text style={{ color:'white',textAlign:'center',fontSize:16, fontWeight:'600' }}> Submit </Text>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  const { email } = state.auth ;
  return { email } ;
}

const styles = {
  textInput:{ width:'100%', height:50, backgroundColor:'#ffffff', fontSize:18, paddingHorizontal:10, borderRadius:5, marginBottom:20},
  button:{ width:'100%', height:50, backgroundColor:'#273E6F', paddingHorizontal:10, borderRadius:5, justifyContent:'center'},
}

export default connect(mapStateToProps,{ change_input })(Auth) ;
