import { useState } from 'react';

export const useUpdateUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorUpdate, setError] = useState(null);

    const updateUser = async (userId, updatedData) => {
        const URL = `http://localhost:3333/auth/user/userUpdate/${userId}`;

        try {
            setLoading(true);
            const response = await fetch(URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error(`Erro ao atualizar usuário: ${response.statusText}`);
            }

            const updatedUser = await response.json();
            setUsers((prevUsers) =>
                prevUsers.map((user) => (user._id === userId ? updatedUser : user))
            );
        } catch (err) {
            setError(`Erro ao atualizar usuário: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return { users, loading, errorUpdate, updateUser };
};

export default useUpdateUser;
