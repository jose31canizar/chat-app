import React from 'react' ;
import { createStackNavigator } from 'react-navigation';
import { Auth, Contacts } from './components/screens';

class Router extends React.Component {
  render(){
    return(
      <RootNavigator />
    );
  }
}


const RootNavigator = createStackNavigator(
  {
    Auth:{ screen:Auth },
    Contacts:{ screen:Contacts },
  },
  {
    headerMode: 'none',
    cardStyle: { shadowColor:'transparent'}
  }
);

export default Router ;
