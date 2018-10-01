import React from 'react' ;
import { createStackNavigator } from 'react-navigation';
import { Auth } from './components/screens';

class Router extends React.Component {
  render(){
    return(
      <RootNavigator />
    );
  }
}


const RootNavigator = createStackNavigator(
  {
    Auth:{
      screen:Auth
    },
  },
  {
    headerMode: 'none',
    cardStyle: { shadowColor:'transparent'}
  }
);

export default Router ;
