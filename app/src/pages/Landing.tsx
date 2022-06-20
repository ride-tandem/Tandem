import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import { logout } from '../firebase/firebase'

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Landing Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Welcome to Tandem!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={logout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Tab3
