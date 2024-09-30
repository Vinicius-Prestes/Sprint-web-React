import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, FormContainer, Input, Button } from '../components/StyledComponents';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simular autenticação e salvar no localStorage
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('user', JSON.stringify({ email }));
      alert('Login realizado com sucesso!');
      navigate('/');
    } else {
      alert('Email ou senha incorretos');
    }
  };

  return (
    <LoginContainer>
      <FormContainer onSubmit={handleLogin}>
        <label>Email:</label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Senha:</label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Entrar</Button>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login