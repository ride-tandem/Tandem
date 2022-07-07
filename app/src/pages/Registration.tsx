import {
  IonButton,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonToast
} from '@ionic/react'
import { useState } from 'react'
import { setUser } from '../firebase/database'
import { AUTH_PROVIDER_EMAIL, registerUserWithEmailAndPassword } from '../firebase/firebase'

const Registration: React.FC = () => {
  const [present] = useIonToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerUser = (): void => {
    void registerUserWithEmailAndPassword(email, password)
      .then(user => {
        if (user.uid != null && user.uid.length > 0) {
          const userName = user.displayName != null ? user.displayName : email
          void setUser({
            id: user.uid,
            name: userName,
            email: email,
            authProvider: AUTH_PROVIDER_EMAIL
          })
        } else { console.log('Error: auth has no uid.') }
      })
    void present('User Registered', 1500)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registration</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonHeader collapse='condense'>
        <IonToolbar>
          <IonTitle size='large'>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonItem>
        <IonLabel position='floating'>Email</IonLabel>
        <IonInput
          type='email'
          onIonChange={(e) => setEmail(e.detail.value ?? '')}
          autofocus
          required
        />
      </IonItem>
      <IonItem>
        <IonLabel position='floating'>Password</IonLabel>
        <IonInput
          type='password'
          onIonChange={(e) => setPassword(e.detail.value ?? '')}
          minlength={8}
          required
        />
      </IonItem>

      <IonButton routerLink='/login'>Already a member?</IonButton>
      <IonButton onClick={registerUser}>Register</IonButton>
    </IonPage>
  )
}

export default Registration
