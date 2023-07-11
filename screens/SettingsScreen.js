import React from 'react';
import { List, Divider, Switch } from 'react-native-paper';
import { PreferencesContext } from '../shared/PreferencesContext';


const SettingsScreen = () => {
    const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

    return (
        <List.Section>
            <List.Subheader>Visualization</List.Subheader>
            <List.Item title='Dark Mode' right={() =>
                <Switch
                    color={'gold'}
                    value={isThemeDark}
                    onValueChange={toggleTheme}
                />}
            />
            <Divider bold={true} />
            <List.Subheader>Notifications</List.Subheader>
            <List.Item title='SMS' />
            <List.Item title='Push' />
            <Divider bold={true} />
            <List.Subheader>Account</List.Subheader>
            <List.Item title='Change Password' />
            <List.Item title='Logout' />
            <Divider bold={true} />
            <List.Subheader>Help & Policies</List.Subheader>
            <List.Item title='Contact Us' />
            <List.Item title='Terms and Conditions' />
            <List.Item title='Privacy Policy' />
            <List.Item title='Rate This App' />
        </List.Section>
        
    )
}

export default SettingsScreen