import { useForm } from "../hooks/useForm";
import { LOGIN_URL } from "../config";
import { useAuthContext } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom";

export default function Login() {

    const { logIn } = useAuthContext();
    const history = useHistory();

    const formInitialState = {email: "shaok@email.com", password: "1234"};
    const [form, handleInputChange] = useForm(formInitialState);


    const handleSubmit = async e => {
        e.preventDefault();
        
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(LOGIN_URL, options);
        const data = await response.json();
        
        console.log(data);

        if (response.status === 200) {
            logIn(data.token, data.user);
            history.push("/dashboard");
        } else {
            alert("Credenciales incorrectas")
        }

    }

    return (
        <div className="container w-25 mt-5">
            <form onSubmit={handleSubmit} method="POST">
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Email address</label>
                    <input onChange={handleInputChange} value={form.email} name="email" type="email" className="form-control" id="inputEmail" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input onChange={handleInputChange} value={form.password} name="password" type="password" className="form-control" id="inputPassword" required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}
