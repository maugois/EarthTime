// Em createUser.jsx
import { useState, useEffect } from 'react';

export const useCreateUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorCreate, setError] = useState(null);

    const createUser = async (newUserData) => {
        const URL = "http://localhost:3333/auth/user/userPost";

        try {
            setLoading(true);
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUserData),
            });

            if (!response.ok) {
                throw new Error(`Erro ao criar usuário: ${response.statusText}`);
            }

            const createdUser = await response.json();
            setUsers((prevUsers) => [...prevUsers, createdUser]);
        } catch (err) {
            setError(`Erro ao criar usuário: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return { users, loading, errorCreate, createUser };
};

export default useCreateUser;
