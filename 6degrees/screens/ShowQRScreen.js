import { View, Text } from "react-native";
// import RNQRGenerator from 'rn-qr-generator';
import QRCode from 'react-native-qrcode-svg';

import { app } from "../firebase/config";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const ShowQRScreen = ({ navigation }) => {
  // RNQRGenerator.generate({
  //   value: 'https://github.com/gevgasparyan/rn-qr-generator',
  //   height: 100,
  //   width: 100,
  // })
  // lucas.z.cai@gmail.com
  //   .then(response => {
  //     const { uri, width, height, base64 } = response;
  //     this.setState({ imageUri: uri });
  //     console.log('QR code image uri', uri);
  //   })
  //   .catch(error => console.log('Cannot create QR code', error));
  const auth = getAuth(app);
  var user = auth.currentUser;
  var uid = user.uid;

  console.log("current user", user)
  console.log("current uid", uid)

  return (
    <View style={{height: "100%", alignItems:"center", justifyContent: "center"}} >
      <Text>Show QR Code</Text>
      <QRCode
        value={uid}
        size = {200}
        />
    </View>
  );
};

export default ShowQRScreen;
