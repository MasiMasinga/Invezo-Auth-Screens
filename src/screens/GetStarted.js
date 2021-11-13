import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from 'react-native';

const GetStarted = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
            <View style={{ backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', marginTop: 70 }}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={{ height: 100, width: 130 }}
                />
            </View>
            <View style={{ backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', marginTop: 35 }}>
                <Image
                    source={require('../../assets/images/placer.png')}
                    style={{ height: 150, width: 165 }}
                />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 40, alignItems: 'center', justifyContent: 'center', }}>
                    {'\n'}   Let's find good {'\n'}tickers to invest in.
                </Text>
            </View>
            <View style={{ padding: 10, alignItems: "center", justifyContent: "center", backgroundColor: 'white' }}>
                <TouchableOpacity style={{ height: 55, width: 330, padding: 15, backgroundColor: '#dbfb51', alignItems: 'center', borderRadius: 25, }}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 10, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity style={{ height: 55, width: 330, padding: 15, backgroundColor: 'white', alignItems: 'center', borderRadius: 25, borderColor: 'black', borderWidth: 2 }}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ fontSize: 12, marginBottom: 15, alignItems: 'center', justifyContent: 'center', }}>
                    {'\n'}       By signing up you accept the{'\n'}Terms of <Text style={{ fontWeight: 'bold' }}>Service</Text> and <Text style={{ fontWeight: 'bold' }}>Privacy Policy</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default GetStarted;