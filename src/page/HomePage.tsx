import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { forestPng, forestWebp } from "../../assets";

export const HomePage = () => {
    return (
        <ScrollView>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontSize: 20 }}>PNG Image</Text>
                <Image
                    style={{ width: 200, height: 200 }}
                    resizeMode="contain"
                    source={forestPng}
                />
                <View
                    style={{ height: 30 }}
                />
                <Text style={{ fontSize: 20 }}>Webp Image</Text>
                <Image
                    style={{ width: 200, height: 200 }}
                    resizeMode="contain"
                    source={forestWebp}
                />
            </View>
        </ScrollView>
    )
}