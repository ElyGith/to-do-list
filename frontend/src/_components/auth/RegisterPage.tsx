import { useState } from 'react'
import { handleRegister } from '@/services/authService'

export function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await handleRegister(email, password);
            setError('');
        } catch (err: any) {
            setError(err.message || 'Erreur lors de la connexion');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <h2>Connexion</h2>
            {error && <p>{error}</p>}
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className='hover:text-2xl'>Se connecter</button>
        </form>
    )
}
