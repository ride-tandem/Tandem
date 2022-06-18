import {
  IonButton,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { registerUserWithEmailAndPassword } from "../firebase/firebase";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    registerUserWithEmailAndPassword(email, password);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registration</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonItem>
        <IonLabel position="floating">Email</IonLabel>
        <IonInput
          type="email"
          onIonChange={(e) => setEmail(e.detail.value || "")}
          autofocus
          required
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput
          type="password"
          onIonChange={(e) => setPassword(e.detail.value || "")}
          minlength={8}
          required
        />
      </IonItem>
      <IonButton onClick={registerUser}>Register</IonButton>
    </IonPage>
  );
};

export default Tab1;
