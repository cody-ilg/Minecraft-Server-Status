import { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getWelcome } from '../apiClient.ts'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return <h1>{welcomeStatement}</h1>

  function handleClick() {
    console.log('Should auth')

    const firebaseConfig = {
      apiKey: 'AIzaSyBVjeubK4xNuHNqIP736X_KeXBFHexUapA',
      authDomain: 'chatgpt-app-fab5f.firebaseapp.com',
      projectId: 'chatgpt-app-fab5f',
      storageBucket: 'chatgpt-app-fab5f.appspot.com',
      messagingSenderId: '145057302713',
      appId: '1:145057302713:web:b9d95c1a40833a22773368',
      measurementId: 'G-9SBXLQSNRN',
    }

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    googleProvider.setCustomParameters({
      login_hint: 'user@example.com',
    })
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        // The signed-in user info.
        const user = result.user

        console.log(user)
        console.log(token)
        console.log(credential)

        // IdP data available using getAdditionalUserInfo(result)
      })
      .catch((error) => {
        console.log('Failed to sign in: ' + error.message)

        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }
  return <button onClick={handleClick}>Sign In</button>
}

export default App
