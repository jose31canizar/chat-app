import React from 'react' ;
import { SafeAreaView, View, Text } from 'react-native';
import style from '../../../styles/styles' ;


class Auth extends React.Component {

  render(){
    return(
      <SafeAreaView style={style.flex1}>
        <View style={[style.containerCenter]}>
          <Text>Hi There Iam Auth</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Auth ;
