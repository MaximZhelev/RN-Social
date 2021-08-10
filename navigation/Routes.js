import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {

  
    return (
      <NavigationContainer>
         <AuthStack/>
      </NavigationContainer>
    );
};

export default Routes;