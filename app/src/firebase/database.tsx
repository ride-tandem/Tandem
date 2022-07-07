import { db } from './firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'

/** DATA MODEL
- users
  - id: string
    - name: string
- rides
  - id: string
    - title: string
    - startTime: datetime
**/

/** USERS */
const DB_COL_USERS = 'users'

export interface User {
  id: string
  name: string
  authProvider: string
  email: string
}

export const setUser = async (user: User): Promise<string> => {
  return await new Promise((resolve, reject) => {
    setDoc(doc(db, DB_COL_USERS, user.id), user)
      .then(() => resolve(user.id))
      .catch(err => reject(err))
  })
}

export const getUser = async (userId: string): Promise<User> => {
  return await new Promise((resolve, reject) => {
    getDoc(doc(db, DB_COL_USERS, userId))
      .then(snapshot => {
        if (snapshot.exists()) {
          const data = snapshot.data()
          resolve({
            id: userId,
            name: data.name,
            authProvider: data.authProvider,
            email: data.email
          })
        } else { reject(new Error('User id does not exist.')) }
      })
      .catch(err => reject(err))
  })
}
