import { Tabs } from "expo-router";
import React from "react";
import { CircleUser } from "~/lib/icons/CircleUser";
import { LayoutList } from '~/lib/icons/LayoutList';
import { Wallet } from "~/lib/icons/Wallet";
export default function TabsLayout() {
    return (
        <Tabs initialRouteName="assets" screenOptions={{ headerShown: false }}>
            <Tabs.Screen name='assets' options={{
                title: 'Assets', tabBarIcon(props) {
                    return <LayoutList color={props.color} size={props.size} />;
                }
            }} />
            <Tabs.Screen name='trades' options={{
                title: 'Trades', tabBarIcon(props) {
                    return <CircleUser color={props.color} size={props.size} />;
                },
            }} />
            <Tabs.Screen name='wallet' options={{
                title: 'Wallet', tabBarIcon(props) {
                    return <Wallet color={props.color} size={props.size} />;
                },
            }} />
        </Tabs>
    );
}