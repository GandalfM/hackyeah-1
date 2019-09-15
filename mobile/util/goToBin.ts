import { Linking, ToastAndroid } from 'react-native';

export default function goToBin(latitude, longitude) {
    console.log('About to navigate to', { latitude, longitude });
    var url = `https://www.google.com/maps/dir/?api=1&travelmode=walking&dir_action=navigate&destination=${latitude}, ${longitude}`;
    ToastAndroid.show('Navigating to the selected bin', ToastAndroid.SHORT);

    Linking.canOpenURL(url).then(supported => {
        if (!supported) {
            console.log(`Can't handle url: ${url}`);
        } else {
            return Linking.openURL(url);
        }
    }).catch(err => console.error('An error occurred', err));
}
