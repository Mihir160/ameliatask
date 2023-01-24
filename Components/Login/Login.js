import { currentUser } from "@/redux/features/userSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const router=useRouter();
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userData = {
          email,
          password,
        };
        console.log(userData);
      fetch("http://localhost:5000/user/api/v1/login", {
          method:"POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.length>0) {
              console.log(data);
              dispatch(currentUser(data));
           
              router.push("/");
            } else {
               console.log('error')
            }
          });
  }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn focus:shadow-outline border-none focus:outline-none bg-orange-400">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;