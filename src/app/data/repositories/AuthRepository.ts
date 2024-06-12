import {
  AuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  reauthenticateWithPopup,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  TwitterAuthProvider,
  UserCredential,
} from "firebase/auth";
import Firebase from "@/app/providers/firebase";


class AuthRepository {
  async login(provider: string): Promise<UserCredential> {
    // provider = `apple`, `microsoft`
    let ProviderClass: AuthProvider = new OAuthProvider(provider);
    
    if (provider === `google`) ProviderClass = new GoogleAuthProvider();
    // if (provider === `facebook`) ProviderClass = new FacebookAuthProvider();
    // if (provider === `github`) ProviderClass = new GithubAuthProvider();
    // if (provider === `twitter`) ProviderClass = new TwitterAuthProvider();
    
    // const ProviderClass: AuthProvider = new GoogleAuthProvider();
    // const credentials = await signInWithPopup(Firebase.auth, ProviderClass)
    //   .then(result => console.log(result))
    //   .catch((err) => console.log('err :>> ', err));
    // return new Promise<UserCredential>(resolve => resolve(credentials))

    // return reauthenticateWithPopup(Firebase.auth, ProviderClass);
    return signInWithPopup(Firebase.auth, ProviderClass);
    // return signInWithRedirect(Firebase.auth, ProviderClass);
  }

  logout() {
    return signOut(Firebase.auth);
  }
}

export default new AuthRepository();
