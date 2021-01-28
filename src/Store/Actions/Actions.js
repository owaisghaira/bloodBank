import auth from "@react-native-firebase/auth";
import database from '@react-native-firebase/database';

export const create_user = (data) => {
    return (dispatch) => {
        // console.log(data.password)
        auth()
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(() => {
                console.log('User account created & signed in!');
                dispatch({ type: "USERDATA", data: data })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                console.error(error);
            });
    }
}

export const sign_in = (data) => {
    return (dispatch) => {
        auth().signInWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                dispatch({ type: "USERDATA", data: user })


            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = alert(error.message);
            });

    }
}
export const sign_out = () => {
    return (dispatch) => {
        const user = []
        auth().signOut()
            .then(() => {
                alert('Sign-out successful')
                dispatch({ type: "USEROUT", data: user })
            }).catch((error) => {
                alert(error)
            });
    }
}
// export const donor_post = (data) => {
//     return (dispatch) => {
//         database().ref('/').child("donors").push(data)
//             .then(() => {
//                 alert('added successful')
//                 // dispatch({ type: "ADDONOR", data: data })
//             }).catch((error) => {
//                 alert(error)
//             });
//     }
// }

export const donor_data = () => {
    let firedata = []
    return (dispatch) => {
        database().ref('/').child('donors').on('child_added', data => {
            firedata.push(data.val())
        })
        console.log(firedata)
        dispatch({ type: "DONORDATA", data: firedata })
            // .then(() => {
            // }).catch((error) => {
            //     alert(error)
            // });
    }
}