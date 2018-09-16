import React , { Component } from 'react';
import { Text , View , TextInput } from 'react-native';
import styles from './../css/login';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginBox}>
                    <Text style={styles.loginTitle}>ورود</Text>

                    <View style={styles.inputGroups}>
                        <Text style={styles.formLabel}>ایمیل :</Text>
                        <TextInput
                        underlineColorAndroid="transparent"
                        style={styles.formInput}
                        placeholder="ایمیل یا نام کاربری خود را وارد کنید"
                        />
                    </View>
                    <View style={styles.inputGroups}>
                        <Text style={styles.formLabel}>رمز عبور :</Text>
                        <TextInput
                        underlineColorAndroid="transparent"
                        style={styles.formInput}
                        placeholder="ایمیل یا نام کاربری خود را وارد کنید"
                        />
                    </View>
                </View>
            </View>
        )
    }
}