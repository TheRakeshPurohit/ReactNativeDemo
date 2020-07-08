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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function NewUser({navigation}) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [hidepassword, setHidepassword] = useState(true);

  const managePasswordVisibility = () => {
    setHidepassword(!hidepassword);
  };

  // const changeHandler = (event) => {
  //   //this.setState({[event.target.name]: event.target.value});
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    console.warn(name, email, hidepassword, password);
  };

  return (
    <View style={styles.NewUser}>
      <KeyboardAvoidingView behavior="position">
        <Icon name="check-circle" style={styles.icon} />
        <Text style={styles.title}> Sign Up Now!</Text>
        <Text style={styles.tagline}>
          Provide your information to get started
        </Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Name"
            style={styles.inputbox}
            value={name}
            onChangeText={(value) => setName(value)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Email"
            style={styles.inputbox}
            value={email}
            name="email"
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View style={styles.inputpass}>
          <View>
            <TextInput
              placeholder="Password"
              style={styles.inputbox}
              name="password"
              secureTextEntry={hidepassword}
              value={password}
              onChangeText={(value) => setPassword(value)}
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
    marginVertical: 5,
    fontSize: 24,
    color: '#6a097d',
    //fontWeight: 'bold',
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
    marginTop: '24%',
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
    margin: 10,
  },
  inputpass: {
    backgroundColor: '#DADADA',
    borderRadius: 9,
    justifyContent: 'space-between',
    margin: 10,
    height: '10%',
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
    marginBottom: '10%',
    color: '#D288A0',
  },
});

export default NewUser;
