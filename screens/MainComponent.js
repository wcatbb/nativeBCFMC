import { View, TouchableOpacity } from 'react-native';
import {
    Card,
    Title,
    Text,
    Paragraph,
    List,
} from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import SettingsScreen from './SettingsScreen';

const Tab = createMaterialBottomTabNavigator();

const Home = ({ navigation }) => (
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
                <Title>{title = 'title'}</Title>
                <Paragraph>{content = 'content'}</Paragraph>
            </Card.Content>
        </Card>
    </TouchableOpacity>
);

const Details = (props) => {
    const { title, content } = props?.route?.params;
    return (
        <List.Section>
            <List.Subheader>{title}</List.Subheader>
            <List.Item title={content} />
        </List.Section>
    )
};

const Profile = () => {
    return (
        <Text>Profile!</Text>
    )
};

const Settings = () => {
    return (
        <SettingsScreen />
    )
};

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator
        screenOptions={{
            header: (props) => <Header {...props} />
        }}>
        <HomeStack.Screen name='Home' component={Home} />
        <HomeStack.Screen name='Details' component={Details} />
    </HomeStack.Navigator>
);

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => (
    <SettingsStack.Navigator
        screenOptions={{
            header: (props) => <Header {...props} />
        }}>
        <SettingsStack.Screen name='Settings' component={Settings} />
    </SettingsStack.Navigator>
);

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
    <ProfileStack.Navigator
        screenOptions={{
            header: (props) => <Header {...props} />
        }}>
        <ProfileStack.Screen name='Profile' component={Profile} />
    </ProfileStack.Navigator>
);

const Main = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;

                    if (route.name === 'HOME') {
                        iconName = focused
                            ? 'trophy'
                            : 'trophy-outline';
                        } else if (route.name === 'PROFILE') {
                            iconName = focused
                                ? 'person'
                                : 'person-outline';
                        } else if (route.name === 'SETTINGS') {
                        iconName = focused
                            ? 'settings'
                            : 'settings-outline';
                        }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={24} color={color} />;
                }
            })}
        >
            <Tab.Screen name='HOME' component={HomeStackScreen} />
            <Tab.Screen name='PROFILE' component={ProfileStackScreen} />
            <Tab.Screen name='SETTINGS' component={SettingsStackScreen} />
        </Tab.Navigator>
    )
};

export default Main;