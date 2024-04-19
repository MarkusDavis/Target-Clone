import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/AuthContext';
import { ShoppingCartContext } from '@/context/ShoppingCartContext';
import Layout from '@/components/Layout/Layout';

export default function SignUpPage() {
  const { signUp } = useContext(AuthContext);
  const { clearCart } = useContext(ShoppingCartContext);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      clearCart();
      router.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}