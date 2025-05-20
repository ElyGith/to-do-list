    import { useState } from 'react'
    import { handleLogin } from '@/services/authService'
    import { useNavigate } from 'react-router-dom'

    export function LoginPage() {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [error, setError] = useState('')
        const navigate = useNavigate()


        const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            try {
                const response = await handleLogin(email, password);
                
                console.log('test response login => ',response);
                setError('');
                if(response.token){
                    navigate("/dashboard")
                    
                }

            } catch (err: any) {
                setError(err.message || 'Erreur lors de la connexion');
            }
        };

        return (
            <div className="flex flex-col items-center justify-center h-screen relative bg-gray-50">
                <form
                    onSubmit={onSubmit}
                    className="flex flex-col gap-4 bg-white shadow-lg p-8 rounded-xl w-80"
                >
                    <h2 className="text-2xl font-semibold text-center">Connexion</h2>

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="password"
                        placeholder="Mot de passe"
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition"
                    >
                        Se connecter
                    </button>
                </form>

                <button
                    // crée cette fonction dans ton composant
                    className="absolute bottom-6 left-6 text-blue-500 hover:underline text-sm"
                    onClick={() => navigate("/register")}
                    >
                
                    Créer un compte
                </button>
            </div>
        
        )
    }
