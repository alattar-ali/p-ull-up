import styles from './login.module.css';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Welcome Back!</h2>

        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />

        <button className={styles.signin}>Sign in</button>

        <button className={styles.google}>
        <FcGoogle size={30} />
          Sign in with Google
        </button>

        <p className={styles.signup}>
          First time? <a href="/signup">Create Account</a>
        </p>
      </div>
    </div>
  );
}