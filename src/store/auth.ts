import { createSlice } from '@reduxjs/toolkit'
import AuthRepository from "@/app/data/repositories/AuthRepository";
import store from "@/store";
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
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },

    login: (state, { payload: { provider } }) => {
      state.loading = true
      try {
        AuthRepository.login(provider)
          .then(async (credentials) => {
            // The signed-in user info.
            store.dispatch({ type: `auth/setUser`, payload: credentials.user.toJSON() });
            credentials.user.getIdToken()
              .then(token => store.dispatch({ type: `auth/setToken`, payload: token }));
            // SessionStorage.set(constants.storage.session.USER, result.user)
            // SessionStorage.set(constants.storage.session.AUTH_TOKEN, credential.accessToken)
            // SessionStorage.set(constants.storage.session.AUTH_EXPIRATION, result._tokenResponse.oauthExpireIn)
          })
    
      } catch (error) {
        console.log('error :>> ', error);
        console.error(error);
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
});

export const { actions, selectors } = layout
export const { login, logout, setToken, setUser } = actions

export default layout.reducer