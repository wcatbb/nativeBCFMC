import React from 'react';
import { useTheme, Appbar, Menu } from 'react-native-paper';
import { PreferencesContext } from '../shared/PreferencesContext';
import { getHeaderTitle } from '@react-navigation/elements';

const Header = ({ navigation, route, options, back }) => {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.surface,
        },
      }}
    >
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default Header;