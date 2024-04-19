import { auth } from '@/firebase/config';
import { signOut } from 'firebase/auth';
import React from 'react';

const SignOutButton = () => {
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            console.log('You have been signed out');
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    };

    return (
        <button onClick={handleSignOut} className="px-6 py-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">
            Sign Out
        </button>
    );
};

export default SignOutButton;
