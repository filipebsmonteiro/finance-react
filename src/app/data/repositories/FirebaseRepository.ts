import { DatabaseReference, child, get, push, ref, remove, set } from "firebase/database";
import Firebase from "@/app/providers/firebase";
import Store from "@/store";


export class FirebaseRepository {
  protected userId: string | undefined;
  protected firebasePath: string;
  protected firebaseRef: DatabaseReference;
  protected oneToMany: boolean;

  constructor(path: string) {
    // const { user } = useSelector((state: any) => state.auth)
    const { auth: { user } } = Store.getState()
    this.userId = user?.uid; // Firebase.auth.currentUser.uid;

    if (!path) console.error(`Defina o Path para a Classe que herda FirebaseRepository`);
    this.firebasePath = path.includes('$userId')
      ? path.split('$userId').join(`${this.userId}`)
      : path;
    this.firebaseRef = ref(Firebase.database, `${this.firebasePath}`);
    this.oneToMany = true;
  }

  parseObjToArray(obj: object) {
    return Object.entries(obj).map(([id, value]) => ({ id, ...value }));
  }

  get() {
    return new Promise((resolve, reject) => {
      get(child(ref(Firebase.database), `${this.firebasePath}`))
        .then((snapshot) => {
          if (this.oneToMany) {
            if (snapshot.exists()) resolve(this.parseObjToArray(snapshot.val()));
            resolve([]);
          }

          if (snapshot.exists()) resolve(snapshot.val());
          resolve(null);
        })
        .catch(error => reject(error));
    })
  }

  post(params: unknown): Promise<void> | Promise<void>[] { 
    if (Array.isArray(params)) {
      return params.map(childToBeAdded => {
        return set(push(this.firebaseRef), childToBeAdded);
      })
    }

    if (this.oneToMany) return set(push(this.firebaseRef), params)

    return set(this.firebaseRef, params)
  }

  put(id: string | number, params: unknown): Promise<void> {
    return set(ref(Firebase.database, `${this.firebasePath}/${id}`), params)
  }

  delete(id: string | number): Promise<void> {
    return remove(ref(Firebase.database, `${this.firebasePath}/${id}`))
  }

}
