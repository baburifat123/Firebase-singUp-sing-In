import { useContext, useState } from "react";
import { CreatContext } from "../Context";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const Sing_Up = () => {
  const data = useContext(CreatContext);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleSignUp = () => {
    data.singUpEmailandPass(email, pass);
    data.putData('rifat', { email, pass });
  };

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <div>
        <h1>Vite + React</h1>
        <h2>Sign Up</h2>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" />
        <input onChange={(e) => setPass(e.target.value)} value={pass} type="password" />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
      <div>
        <h2>Sign In with Google</h2>
        <button onClick={handleSignInWithGoogle}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default Sing_Up;
