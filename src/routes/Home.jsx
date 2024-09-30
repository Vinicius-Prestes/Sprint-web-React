import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HomeContainer } from '../components/StyledComponents';

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <HomeContainer>
      {user ? (
        <>
          <h1>Bem-vindo, {user.email}!</h1>
          <button onClick={handleLogout}>Sair</button>
        </>
      ) : (
        <>
          <h1>Bem-vindo à página de esportes!</h1>
          <Link to="/login">Entrar</Link>
        </>
      )}
    </HomeContainer>
  );
};

export default Home