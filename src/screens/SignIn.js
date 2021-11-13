import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from 'react-native';

const SignIn = ({navigation}) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
            <View style={{ backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', marginTop: 55 }}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={{ height: 100, width: 130 }}
                />
            </View>
            <View style={{ backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                <Image
                    source={require('../../assets/images/placer.png')}
                    style={{ height: 150, width: 165 }}
                />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 35, alignItems: 'center', justifyContent: 'center', }}>
                    {'\n'}   Let's find good {'\n'}tickers to invest in.
                </Text>
            </View>
            <View style={{ padding: 5, alignItems: "center", justifyContent: "center", backgroundColor: 'white' }}>
                <TouchableOpacity style={{ height: 55, width: 330, padding: 15, backgroundColor: 'white', alignItems: 'center', borderRadius: 25, borderColor: 'black', borderWidth: 2 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../../assets/images/apple.png')}
                            style={{ height: 25, width: 25, marginRight: 10, }}
                        />
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>
                            Continue with Apple
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 10, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity style={{ height: 55, width: 330, padding: 15, backgroundColor: 'white', alignItems: 'center', borderRadius: 25, borderColor: 'black', borderWidth: 2 }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../../assets/images/facebook.png')}
                            style={{ height: 25, width: 25, marginRight: 10, }}
                        />
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>
                            Continue with Facebook
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 10, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity style={{ height: 55, width: 330, padding: 15, backgroundColor: 'white', alignItems: 'center', borderRadius: 25, borderColor: 'black', borderWidth: 2 }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../../assets/images/google.png')}
                            style={{ height: 25, width: 25, marginRight: 10, }}
                        />
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>
                            Continue with Google
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 10, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity style={{ height: 55, width: 330, padding: 15, backgroundColor: 'white', alignItems: 'center', borderRadius: 25, borderColor: 'black', borderWidth: 2 }}                >
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../../assets/images/email.png')}
                            style={{ height: 20, width: 25, marginRight: 10, }}
                        />
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>
                            Continue with Email
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SignIn;