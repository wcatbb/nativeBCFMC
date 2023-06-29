import { TouchableOpacity } from 'react-native';
import {
    Card,
    Title,
    Paragraph,
    List,
} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';

const Stack = createStackNavigator();

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

const Main = () => {
    return (
        <>
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            header: (props) => <Header {...props} />,
          }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
        </>
    )
}
export default Main;