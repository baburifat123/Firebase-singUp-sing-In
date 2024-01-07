import { useContext, useState } from "react";
import { CreatContext } from "../Context";


const Sing_in = () => {
    const data = useContext(CreatContext);

    const [email,setEmail] = useState('');
    const [password,setPass] = useState('')
    const handleSignIn = () => {
        data.SingIn(email, password);
      };
    return (
        <div>
            <div>
          <h2>Sign In</h2>
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
          <input onChange={(e) => setPass(e.target.value)} type="password" />
          <button onClick={handleSignIn}>Sign In</button>
        </div> 
        </div>
    );
};

export default Sing_in;