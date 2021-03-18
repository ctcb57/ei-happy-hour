import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDwVwoo-IqWWOgw93AbiOenXmTKhdZMDv0",
    authDomain: "ei-happy-hour.firebaseapp.com",
    projectId: "ei-happy-hour",
    storageBucket: "ei-happy-hour.appspot.com",
    messagingSenderId: "1026948233785",
    appId: "1:1026948233785:web:9d6d3e31e82af3983d6be8",
    measurementId: "G-KWKMCC3T34"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}

export const logOut = () => {
    auth.signOut().then(() => {
        console.log('signed out')
    }).catch((err) => {
        console.log(err.message)
    })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName } = user;
      try {
        await userRef.set({
          displayName,
          email,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };



  

  

