import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  UserCredential,
} from "firebase/auth";
import Firebase from "@/app/providers/firebase";

class AuthRepository {
  login(provider: string): Promise<UserCredential> {
    let ProviderClass: any = null;
    if (provider === `google`) ProviderClass = GoogleAuthProvider;
    if (provider === `facebook`) ProviderClass = FacebookAuthProvider;
    if (provider === `apple`) ProviderClass = OAuthProvider;
    if (provider === `github`) ProviderClass = GithubAuthProvider;
    if (provider === `microsoft`) ProviderClass = OAuthProvider;
    if (provider === `twitter`) ProviderClass = TwitterAuthProvider;

    const providerInstance = new ProviderClass();
    return signInWithPopup(Firebase.auth, providerInstance);
  }

  logout() {
    return signOut(Firebase.auth);
  }
}

export default new AuthRepository();
