import { Text, View, TouchableOpacity } from 'react-native';
import {
    Card,
    Title,
    Paragraph,
    List,
} from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = ({ navigation }) => (
    <TouchableOpacity
        onPress={() =>
            navigation?.push('Details', {
                title,
                content,
            })
        }
    >
        <Card>
            <Card.Content>
                <Title>{title='title'}</Title>
                <Paragraph>{content='content'}</Paragraph>
            </Card.Content>
        </Card>
    </TouchableOpacity>
);

const DetailsScreen = (props) => {
    const { title, content } = props?.route?.params;
    return (
        <List.Section>
            <List.Subheader>{title}</List.Subheader>
            <List.Item title={content} />
        </List.Section>
    );
};

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
};

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator
    screenOptions={{
        header: (props) => <Header {...props} />
      }}>
        <HomeStack.Screen name='Home' component={HomeScreen} />
        <HomeStack.Screen name='Details' component={DetailsScreen} />
    </HomeStack.Navigator>
)

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => (
    <SettingsStack.Navigator>
        <SettingsStack.Screen name='Settings' component={SettingsScreen} />
        <SettingsStack.Screen name='Details' component={DetailsScreen} />
    </SettingsStack.Navigator>
)

const Main = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused
                            ? 'ios-list'
                            : 'ios-list-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>
    );
}

export default Main;