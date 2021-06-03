

export default function Login() {
    return (
        <div className="container w-25 mt-5">
            <form action="#" method="POST">
                <div className="mb-3">
                    <label for="inputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" name="inputEmail"/>
                </div>
                <div className="mb-3">
                    <label for="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" name="inputPassword"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
