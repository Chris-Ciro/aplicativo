import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignInScreen from './SignInScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import HomeScreen from './HomeScreen';
import CalendarioScreen from './CalendarioScreen';
import OracoesScreen from './OracoesScreen';
import BibliaScreen from './BibliaScreen';
import TercoScreen from './TercoScreen';
import SacramentosScreen from './SacramentosScreen';
import AcervoScreen from './AcervoScreen';
import KidsScreen from './KidsScreen';
import HistoriaScreen from './HistoriaScreen';
import SubOracoesScreen from './SubOracoes';
import MisteriosGozososScreen from './MisteriosGozososScreen'; 
import MisteriosDolorososScreen from './MisteriosDolorososScreen'; 
import MisteriosLuminososScreen from './MisteriosLuminososScreen'; 
import MisteriosGloriososScreen from './MisteriosGloriososScreen'; 

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} fraseDoDia={props.route?.params?.fraseDoDia} />}
        </Stack.Screen>
        <Stack.Screen name="Calendario" component={CalendarioScreen} />
        <Stack.Screen name="Oracoes" component={OracoesScreen} />
        <Stack.Screen name="SubOracoes" component={SubOracoesScreen} />
        <Stack.Screen name="Biblia" component={BibliaScreen} />
        <Stack.Screen name="Terco" component={TercoScreen} />
        <Stack.Screen name="Sacramentos" component={SacramentosScreen} />
        <Stack.Screen name="Acervo" component={AcervoScreen} />
        <Stack.Screen name="Kids" component={KidsScreen} />
        <Stack.Screen name="Historia" component={HistoriaScreen} />
        <Stack.Screen name="MisteriosGozosos" component={MisteriosGozososScreen} />
        <Stack.Screen name="MisteriosDolorosos" component={MisteriosDolorososScreen} />
        <Stack.Screen name="MisteriosGloriosos" component={MisteriosGloriososScreen} />
        <Stack.Screen name="MisteriosLuminosos" component={MisteriosLuminososScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
