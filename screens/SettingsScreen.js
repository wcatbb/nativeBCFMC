import React from 'react';
import { List, Divider, Switch, Checkbox, TouchableRipple, useTheme } from 'react-native-paper';
import { PreferencesContext } from '../shared/PreferencesContext';
import * as WebBrowser from 'expo-web-browser';


const SettingsScreen = () => {
    const theme = useTheme();
    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
    const [textsChecked, setTextsChecked] = React.useState(false);
    const [pushChecked, setPushChecked] = React.useState(false);
    const handlePress = (href) => {
        WebBrowser.openBrowserAsync(href);
    }

    return (
        <List.AccordionGroup>
            <List.Accordion
                title='Visualization'
                left={props => <List.Icon {...props} icon='sunglasses' />}
                id="1">
                <List.Item title='Dark Mode' right={() =>
                    <Switch
                        value={isThemeDark}
                        onValueChange={toggleTheme}
                    />}
                />
            </List.Accordion>
            <Divider bold={true} />
            <List.Accordion
                title='Notifications'
                left={props => <List.Icon {...props} icon='music-box-multiple' />}
                id="2">
                <List.Item title='SMS' right={() =>
                    <Checkbox
                        status={textsChecked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setTextsChecked(!textsChecked);
                            console.log('SMS Notifications');
                        }}
                    />}
                />
                <List.Item title='Push' right={() =>
                    <Checkbox
                        status={pushChecked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setPushChecked(!pushChecked);
                            console.log('Push Notifications');
                        }}
                    />}
                />
            </List.Accordion>
            <Divider bold={true} />
            <List.Accordion
                title='Account'
                left={props => <List.Icon {...props} icon='account-music' />}
                id="3">
                <TouchableRipple
                    onPress={() => console.log('Change Password')}
                >
                    <List.Item title='Change Password' left={props =>
                        <List.Icon {...props} icon='form-textbox-password' />}
                    />
                </TouchableRipple>
                <TouchableRipple
                    onPress={() => console.log('Logout')}
                >
                    <List.Item title='Logout' titleStyle={{ color: theme.colors.error }} left={props =>
                        <List.Icon {...props}
                        color={theme.colors.error}
                        icon='logout' />}
                    />
                </TouchableRipple>
            </List.Accordion>
            <Divider bold={true} />
            <List.Accordion
                title='Help & Policies'
                left={props => <List.Icon {...props} icon='music-clef-treble' />}
                id="4">
                <TouchableRipple
                    onPress={() => console.log('Contact Us')}
                >
                    <List.Item title='Contact Us' />
                </TouchableRipple>
                <TouchableRipple
                    onPress={() => handlePress('https://wcatbb.github.io/reactBCFMC/terms.html')}
                >
                    <List.Item title='Terms and Conditions' right={props =>
                        <List.Icon {...props} icon='chevron-right' />}
                    />
                </TouchableRipple>
                <TouchableRipple
                    onPress={() => handlePress('https://wcatbb.github.io/reactBCFMC/privacy.html')}
                >
                    <List.Item title='Privacy Policy' right={props =>
                        <List.Icon {...props} icon='chevron-right' />}
                    />
                </TouchableRipple>
            </List.Accordion>
        </List.AccordionGroup>
    )
}

export default SettingsScreen