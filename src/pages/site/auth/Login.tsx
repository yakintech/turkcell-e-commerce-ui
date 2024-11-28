import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { baseService } from '../../../api/baseService';
import { useDispatch } from 'react-redux';
import { setClientAuth } from '../../../store/features/auth/ClientAuthSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        //email and password validation. required and type
        if (!email || !password) {
            alert('Lütfen email ve şifrenizi giriniz');
            return;
        }
        if (!email.includes('@')) {
            alert('Lütfen geçerli bir email adresi giriniz');
            return;
        }

        baseService.post('/client/login', { email, password })
            .then(res => {
                dispatch(setClientAuth({ isClientAuthenticated: true, clientEmail: email, clientId: res.id }));
                navigate('/');
                
            })
            .catch(err => {
                alert('Giriş başarısız');
            })

    };

    return (
        <Container maxWidth="sm">
            <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
                <Typography variant="h4" gutterBottom>
                    Kullanıcı Girişi
                </Typography>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleLogin} sx={{ mt: 2 }}>
                    Giriş
                </Button>
            </Box>
        </Container>
    );
}

export default Login;