import { useState, useEffect } from 'react';

export const getUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const URL = `http://localhost:3333/auth/user/users`;

      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Erro ao buscar as usuários: ${response.statusText}`);
        }
        
        const data = await response.json();

        if (Array.isArray(data)) {
            const formattedUsers = data.map((user) => ({
            _id: user._id || 'N/A',
            name: user.name || 'N/A',
            user: user.user || 'N/A',
            email: user.email || 'N/A',
            password: user.password || 'N/A',
            permission: user.permission || 'N/A'
            }));

            setUsers(formattedUsers);
        } else {
            setUsers([]);
        }

        setLoading(false);
      } catch (err) {
        setError(`Erro ao carregar os usuários: ${err.message}`);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { users, loading, error };
};

export default getUsers;
