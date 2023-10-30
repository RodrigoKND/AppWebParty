import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './login.css';
export default function LoginUser() {
    return (
        <header>
            <div className='barcolor'></div>
            <div style={{
                display: 'flex',
                justifyContent: 'center', marginTop: '3%'
            }}>
                <div
                    style={{
                        border: '3px solid purple',
                        width: '80vh',
                        color: 'purple',
                        padding: '20px'
                    }}>
                    <div>
                        <label style={{ fontSize: '45px', fontWeight: '500' }}>Bienvenido</label>
                        <div>
                            <label style={{ fontSize: '40px', fontWeight: '400' }}>UX</label>
                        </div>
                        <img src='/partyTime.png' height='200px' style={{
                            marginTop: '40px'
                        }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                        <GoogleOAuthProvider clientId="14303105359-73c365kj22pak6nvsnrnfmldq8tv7pkc.apps.googleusercontent.com">
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    console.log(credentialResponse);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </GoogleOAuthProvider>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <input type='checkBox' />
                        <label style={{ color: 'blue' }}>Aceptar los terminos y condiciones</label>
                    </div>
                </div>

            </div>
            <svg width="422" height="422" xmlns="http://www.w3.org/2000/svg">
                <circle cx="211" cy="211" r="200" fill="purple" />
            </svg>

        </header>
    );
}