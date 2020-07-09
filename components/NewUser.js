import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function NewUser({navigation}) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [hidepassword, setHidepassword] = useState(true);
  const [nameError, setNameError] = useState(true);
  const [passError, setPassError] = useState(true);
  const [emailError, setEmailError] = useState(true);

  const managePasswordVisibility = () => {
    setHidepassword(!hidepassword);
  };

  // const changeHandler = (event) => {
  //   //this.setState({[event.target.name]: event.target.value});
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    if (nameError === false && passError === false && emailError === false) {
      console.warn(name, email, hidepassword, password);
      Alert.alert('Valid!');
    } else {
      Alert.alert('Invalid Credentials !');
    }
  };

  const checkUsername = (value) => {
    setName(value);
    if (value.length >= 5) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };

  const checkEmail = (value) => {
    setEmail(value);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(reg)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const checkPassword = (value) => {
    setPassword(value);
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (value.match(reg)) {
      setPassError(false);
    } else {
      setPassError(true);
    }
  };

  return (
    <View style={styles.NewUser}>
      <KeyboardAvoidingView behavior="position">
        <Icon name="check-circle" style={styles.icon} />
        <Text style={styles.title}> Sign Up Now!</Text>
        <Text style={styles.tagline}>
          Provide your information to get started
        </Text>
        <Text style={styles.label}>Username</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Username"
            style={styles.inputbox}
            value={name}
            maxLength={20}
            onChangeText={(value) => checkUsername(value)}
          />
        </View>
        {nameError ? (
          <Text style={styles.error}>
            Username requires atleat 5 characters.
          </Text>
        ) : (
          <Text style={styles.success}>Username is available !</Text>
        )}
        <Text style={styles.label}>Email</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Email"
            style={styles.inputbox}
            value={email}
            name="email"
            keyboardType="email-address"
            onChangeText={(value) => checkEmail(value)}
          />
        </View>
        {emailError ? (
          <Text style={styles.error}>Requires Valid Email Address! </Text>
        ) : (
          <Text style={styles.success}>Email Address is Valid !</Text>
        )}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputpass}>
          <View>
            <TextInput
              placeholder="Password"
              style={styles.inputbox}
              name="password"
              maxLength={20}
              secureTextEntry={hidepassword}
              value={password}
              onChangeText={(value) => checkPassword(value)}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.img}
              onPress={managePasswordVisibility}>
              <Image
                style={styles.eye}
                source={
                  hidepassword
                    ? require('../assets/images/eye_close_icon.png')
                    : require('../assets/images/eye_icon.png')
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        {passError ? (
          <Text style={styles.error}>
            Strong password is combination of atleat 8 chracters, atleat 1
            special charcater and atleat 1 Capital latter and a number.
          </Text>
        ) : (
          <Text style={styles.success}>Password is accpetable.</Text>
        )}
        <View style={styles.button}>
          <TouchableOpacity onPress={submitHandler}>
            <Text style={styles.submittext}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomline}>Already Registered? </Text>
          <Text
            style={styles.bottomlink}
            onPress={() => navigation.navigate('Home')}>
            Log In
          </Text>
          <Text style={styles.bottomline}> into your account now. </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  NewUser: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  inputbox: {
    marginHorizontal: 2,
    marginLeft: '3%',
    marginVertical: 5,
    fontSize: 24,
    color: '#6a097d',
    //fontWeight: 'bold',
    //backgroundColor: 'black',
  },
  title: {
    textAlign: 'center',
    fontSize: 33,
    color: '#D288A0',
  },
  tagline: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
  img: {
    //backgroundColor: 'blue',
    //resizeMode: 'contain',
  },
  bottomline: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 15,
  },
  eye: {
    //backgroundColor: 'red',
    tintColor: 'black',
    marginTop: '23%',
    marginRight: '2%',
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  submittext: {
    margin: 5,
    padding: 5,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#DADADA',
    borderRadius: 9,
    marginHorizontal: 10,
  },
  inputpass: {
    backgroundColor: '#DADADA',
    borderRadius: 9,
    justifyContent: 'space-between',
    marginHorizontal: 10,
    height: '8%',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#D288A0',
    borderRadius: 9,
    margin: 15,
  },
  bottom: {
    flexDirection: 'row',
    alignSelf: 'center',
    fontStyle: 'italic',
    margin: 5,
  },
  bottomlink: {
    color: '#D288A0',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
  },
  icon: {
    fontSize: 100,
    alignSelf: 'center',
    marginTop: '10%',
    marginBottom: '5%',
    color: '#D288A0',
  },
  error: {
    color: 'red',
    marginLeft: '5%',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  success: {
    color: 'green',
    marginLeft: '5%',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  label: {
    marginLeft: '5%',
  },
});

export default NewUser;
