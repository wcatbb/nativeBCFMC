import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';

const EntryScreen = () => {
    const theme = useTheme();

    return (
        <View style={styles.container}>
            <QRCode
                value="https://bcfmc.org/entry"
                size={200}
                backgroundColor={theme.colors.background}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default EntryScreen;