import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, Platform, TouchableOpacity } from "react-native";

export default function Signin() {

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const refInput2 = useRef();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {Platform.OS === "ios" ? (
        <View style={styles.statusBarIOS}></View>
      ) : (
        <View style={styles.statusBarAndroid}></View>
      )}

      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/download (4).jpg")}
      >
        <View style={styles.loginContainer}>
          <Text style={styles.title}>WhatsApp</Text>
          
          <TextInput
            onSubmitEditing={() => refInput2.current.focus()}
            onChangeText={(value) => setPhoneNumber(value)}
            blurOnSubmit={false}
            keyboardType="phone-pad"
            placeholder="Phone number"
            placeholderTextColor="#999"
            style={styles.input}
          />
          <TextInput
          ref={refInput2}
            onChangeText={(value) => setPassword(value)}
            keyboardType="default"
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity
            onPress={() => {
              if (phoneNumber.length > 0 && password.length > 0) {
                alert("Sign in with phone: " + phoneNumber + "\n" + "Password: " + password);
              }else{
                alert("Please enter your phone number and password");
              }
            }}
            style={styles.signInButton}
          >
            <Text style={styles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => alert("Create new account button pressed")}
            style={styles.createAccountButton}
          >
            <Text style={styles.createAccountText}>Create new account</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  statusBarIOS: {
    height: 54,
    width: "100%",
    backgroundColor: "#075E54",
  },
  statusBarAndroid: {
    height: 24,
    width: "100%",
    backgroundColor: "#075E54",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    height: 300,
    width: "85%",
    backgroundColor: "#ffffffd9",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#075E54",
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    marginBottom: 15,
    fontSize: 16,
    paddingLeft: 15,
    color: "#333",
    borderColor: "#ddd",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 5,
  },
  signInButton: {
    backgroundColor: "#075E54",
    height: 45,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 5,
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  createAccountButton: {
    marginTop: 15,
  },
  createAccountText: {
    color: "#075E54",
    fontSize: 14,
    fontWeight: "500",
  },
});


