import { createSlice } from '@reduxjs/toolkit'
import AuthRepository from "@/app/data/repositories/AuthRepository";
import { AuthState } from './state';

const initialState: AuthState = {
  loading: false,
  token: null,
  user: null,
};

export const layout = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload: { provider } }) => {
      state.loading = true
      try {
        AuthRepository.login(provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = provider.credentialFromResult(result);
            state.token = credential.accessToken;
    
            // The signed-in user info.
            state.user = result.user;
            // SessionStorage.set(constants.storage.session.USER, result.user)
            // SessionStorage.set(constants.storage.session.AUTH_TOKEN, credential.accessToken)
            // SessionStorage.set(constants.storage.session.AUTH_EXPIRATION, result._tokenResponse.oauthExpireIn)
          })
    
      } catch (error) {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
    
        // The email of the user's account used.
        // const email = error.customData.email;
    
        // The AuthCredential type that was used.
        // const credential = provider.credentialFromError(error);
      }
      state.loading = false
    },
    logout: () => {
      AuthRepository.logout()
        .then(() => {
          // SessionStorage.remove(constants.storage.session.USER)
          // SessionStorage.remove(constants.storage.session.AUTH_TOKEN)
          // SessionStorage.remove(constants.storage.session.AUTH_EXPIRATION)
          // this.router.push({ name: constants.routes.login.name })
        })
    }
  },
})

export const { actions, selectors } = layout
export const { login, logout } = actions

export default layout.reducer