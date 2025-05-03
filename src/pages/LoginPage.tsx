export function LoginPage() {
    return (
        <div>
            <h1>FloSports Back Office Login</h1>
            <form className="form">
                <div className="input-group email">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        required
                        autoComplete="email"
                        autoFocus
                     />
                </div>

                <div className="input-group email">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        placeholder="Password"
                        required
                     />
                </div>

                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}