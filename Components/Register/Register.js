import { currentUser } from "@/redux/features/userSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";


const Register = () => {
    const dispatch= useDispatch()
    const router = useRouter()
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const role = form.role.value;
        const userData = {
            name,
            email,
            password,
            // role
        }
        console.log(name, email, password)
        console.log(userData)
        fetch("http://localhost:5000/user/api/v1/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.isExist) {
           
            console.log(data);
          } else {
            dispatch(currentUser(data.result));
     
            router.push("/");
          }
        });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />

                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select className="input" name='role'>
                                    <option value="buyer">Buyer</option>
                                    <option value="admin">Admin</option>
                                </select>

                            </div> */}
                            <div className="form-control mt-6">
                                <button className="btn focus:shadow-outline border-none focus:outline-none bg-orange-400">Register</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;