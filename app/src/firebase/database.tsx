import { db } from './firebase'
import { collection, addDoc } from 'firebase/firestore'

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

export const addUser = async (user: Omit<User, 'id'>): Promise<string> => {
  return await new Promise((resolve, reject) => {
    addDoc(collection(db, DB_COL_USERS), user)
      .then(val => resolve(val.id))
      .catch(err => {
        console.error('Error adding user: ', err)
        reject(err)
      })
  })
}
