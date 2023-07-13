import React from 'react';
import { List, Divider, Switch, Checkbox, TouchableRipple, Text } from 'react-native-paper';
import { PreferencesContext } from '../shared/PreferencesContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as WebBrowser from 'expo-web-browser';


const SettingsScreen = () => {
    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
    const [textsChecked, setTextsChecked] = React.useState(false);
    const [pushChecked, setPushChecked] = React.useState(false);
    const handlePress = (href) => {
        WebBrowser.openBrowserAsync(href);
    }

    return (
        <List.Section>
            <List.Subheader>Visualization</List.Subheader>
            <List.Item title='Dark Mode' right={() =>
                <Switch
                    color={'#BB86FC'}
                    value={isThemeDark}
                    onValueChange={toggleTheme}
                />}
            />
            <Divider bold={true} />
            <List.Subheader>Notifications</List.Subheader>
            <List.Item title='SMS' right={() =>
                <Checkbox
                    status={textsChecked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setTextsChecked(!textsChecked);
                    }}
                />}
            />
            <List.Item title='Push' right={() =>
                <Checkbox
                    status={pushChecked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setPushChecked(!pushChecked);
                    }}
                />}
            />
            <Divider bold={true} />
            <List.Subheader>Account</List.Subheader>
            <List.Item title='Change Password' />
            <List.Item title='Logout' />
            <Divider bold={true} />
            <List.Subheader>Help & Policies</List.Subheader>
            <List.Item title='Contact Us' />
            <TouchableRipple
                onPress={() => handlePress('https://wcatbb.github.io/reactBCFMC/terms.html')}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <List.Item title='Terms and Conditions' right={() =>
                <Ionicons
                    name='chevron-forward'
                    size={24}
                    color='#BB86FC'
                />}
            />
            </TouchableRipple>
            <TouchableRipple
                onPress={() => handlePress('https://wcatbb.github.io/reactBCFMC/privacy.html')}
                rippleColor="rgba(0, 0, 0, .32)"
            >
            <List.Item title='Privacy Policy' right={() =>
                <Ionicons
                    name='chevron-forward'
                    size={24}
                    color='#BB86FC'
                />}
            />
            </TouchableRipple>
        </List.Section>
    )
}

export default SettingsScreen