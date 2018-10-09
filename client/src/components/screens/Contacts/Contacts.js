import React from 'react' ;
import { View, SafeAreaView, Text } from 'react-native' ;
import style from '../../../styles/styles' ;

class Contacts extends React.Component {

  render(){
    return(
      <SafeAreaView style={[style.flex1]}>
        <View style={[style.containerCenter]}>
          <Text>Hi I have contacts!</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default Contacts ;
