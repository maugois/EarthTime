import { useState } from 'react';

export const useDeleteUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorDelete, setError] = useState(null);

    const deleteUser = async (userId) => {
        const URL = `http://localhost:3333/auth/user/userDelete/${userId}`;

        try {
            setLoading(true);
            const response = await fetch(URL, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Erro ao deletar usuário: ${response.statusText}`);
            }

            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
        } catch (err) {
            setError(`Erro ao deletar usuário: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return { users, loading, errorDelete, deleteUser };
};

export default useDeleteUser;
