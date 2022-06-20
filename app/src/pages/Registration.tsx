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
import { registerUserWithEmailAndPassword } from '../firebase/firebase'

const Registration: React.FC = () => {
  const [present] = useIonToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerUser = () => {
    registerUserWithEmailAndPassword(email, password)
    present('User Registered', 1500)
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
          onIonChange={(e) => setEmail(e.detail.value || '')}
          autofocus
          required
        />
      </IonItem>
      <IonItem>
        <IonLabel position='floating'>Password</IonLabel>
        <IonInput
          type='password'
          onIonChange={(e) => setPassword(e.detail.value || '')}
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
