import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/style/Login.scss'
import { loginApi, registerApi } from '../api/authApi.js';
import { useAuth } from '../api/AuthContext.js';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login, role } = useAuth();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError('');
        const trimmedUsername = username.trim();
        const trimmedPassword = password.trim();
        const trimmedEmail = email.trim();

        if (isLogin) {
            // Xử lý đăng nhập
            try {
                const data = await loginApi(trimmedUsername, trimmedPassword);
                if (data.result.token) {
                    login(data.result);
                    setIsLogin(true);         
                } else {
                    setError("Username or password is incorrect");
                }
            } catch (err: any) {

            }
        } else {
            // Xử lý đăng ký
            try {
                await registerApi(
                    trimmedUsername,
                    trimmedPassword,
                    trimmedEmail,
                );
                alert("Đăng ký thành công! Bạn có thể đăng nhập ngay.");
                setIsLogin(true); // chuyển về form login
            } catch (err: any) {

            }
        }
    };

    useEffect(() => {
        if (role) { // Kiểm tra nếu role đã được cập nhật
            switch (role) {
                case 'ADMIN':
                    navigate('/AdminHome')
                    break;
                case 'USER':
                    navigate('/');
                    break;
                default:
                    alert("Login failed! Check your username and password.");
                    break;
            }
        }
    }, [role, navigate]);



    return (
        <div className='auth-page'>
            <div className="auth-form">
                <h2>{isLogin ? 'Login' : 'REGISTER'}</h2>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    )}
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        required
                    />
                    <div className="password-field">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            required
                        />
                        <span
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </span>
                    </div>
                    <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
                </form>

                {error && <p className="error">{error}</p>}

                <div className="auth-options">
                    {isLogin && <button className="forgot">Forgot password?</button>}
                    <button className="toggle" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Create an account' : 'Already have an account?'}
                    </button>
                    <div className="google-login">
                        <button className="google-btn">
                            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
