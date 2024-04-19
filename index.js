import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Text , View} from 'react-native';
import Header from './src/Components/Header.js';
import GamesList from './src/Components/GamesList.js';

const App =()=>{
    return (
        <View>
            <Header title="Games"></Header>
            <GamesList/>
        </View>
    )
    
}

AppRegistry.registerComponent(appName, () => App);
