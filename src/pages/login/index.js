import './login.styles.css';

const LoginPage = () => {
    return (
        <div className="login-page">
            <form className="login-page__form">
                <h2>Login</h2>
                <label htmlFor="email">email</label>
                <input
                    name="email"
                    type="text"
                    placeholder="email@example.com"
                />

                <label htmlFor="password">password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    )
}

export default LoginPage;