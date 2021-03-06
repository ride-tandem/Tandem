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
import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import { getUser } from '../firebase/database'
import { loginWithEmailAndPassword } from '../firebase/firebase'

const Login: React.FC = () => {
  const [present] = useIonToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (): void => {
    void loginWithEmailAndPassword(email, password).then(() => {
      const userId = getAuth().currentUser?.uid
      if (userId != null) {
        void getUser(userId)
          .then(async val => await present('Login Successful: ' + val.name, 1500))
      }
    })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
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
      <IonButton routerLink='/registration'>Not a member?</IonButton>
      <IonButton onClick={handleLogin} routerLink='/landing'>
        Login
      </IonButton>
    </IonPage>
  )
}

export default Login
