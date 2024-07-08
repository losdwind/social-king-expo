import { Tabs } from "expo-router";
import React from "react";
import { CircleUser } from "~/lib/icons/CircleUser";
import {LayoutList} from '~/lib/icons/LayoutList';
import { Wallet } from "~/lib/icons/Wallet";
export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name='home' options={{ title: 'Home', tabBarIcon(props) {
                return <LayoutList color={props.color} size={props.size} />;
            }, }} />
            <Tabs.Screen name='my' options={{ title: 'My' , tabBarIcon(props) {
                return <CircleUser color={props.color} size={props.size} />;
            },}} />
            <Tabs.Screen name='wallet' options={{ title: 'Wallet', tabBarIcon(props) {
                return <Wallet color={props.color} size={props.size} />;
            }, }} />
        </Tabs>
    );
}