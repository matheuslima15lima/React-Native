import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../Home/Home';
import { Profile } from '../Profile/Profile';
import { ContentIcon, TextIcon } from './Style';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { PerfilM } from '../PerfilM/PerfilM';
import { HomePacient } from '../HomePacient/HomePacient';
const BottomTab = createBottomTabNavigator();
export const Main = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="Pagina do paciente"
            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: "#FFFFFF", height: 80, paddingTop: 10 },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,

                tabBarIcon: ({ focused }) => {
                    if (route.name === "Pagina do paciente") {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome name="calendar" size={18} color={"#4E4B59"} />
                                {focused && <TextIcon>Agenda</TextIcon>}
                            </ContentIcon>
                        )
                    }
                    else {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome5 name="user-circle" size={18} color={"#4E4B59"} />
                                {focused && <TextIcon>Perfil</TextIcon>}
                            </ContentIcon>
                        )

                    }
                }
            })}
        >
            <BottomTab.Screen
                name="Pagina do paciente"
                component={HomePacient}
            />

            <BottomTab.Screen
                name="PerfilM"
                component={PerfilM}

            />
        </BottomTab.Navigator>
    )
}