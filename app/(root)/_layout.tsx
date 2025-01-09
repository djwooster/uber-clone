import { Tabs } from "expo-router";

const Layout = () => (
  <Tabs
    initialRouteName="index"
    screenOptions={{ tabBarActiveTintColor: "red" }}
  >
    <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: () => <HomeIcon />,
      }}
    />
  </Tabs>
);

export default Layout;
