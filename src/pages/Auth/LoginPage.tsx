import { useDispatch, useSelector } from "react-redux";
import { login, setToken, setUser } from "@/store/auth";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import firebase from "@/app/providers/firebase";
import { RootState } from "@/store/state";

function LoginPage() {
  // const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  if (user) {
    return <Navigate to="/dashboard" /> 
  }


  onAuthStateChanged(firebase.auth, async (userRet) => {
    if (userRet) {
      const token = await userRet.getIdToken();
      dispatch(setUser(userRet.toJSON()));
      dispatch(setToken(token));
    }
  });

  return (
    <>
      {/* <h1>Login Page</h1> */}
      <button
        className="btn-primary"
        onClick={() => dispatch(login({ provider: 'google' }))}
      >Login Google</button>
    </>
  )
}

export default LoginPage
