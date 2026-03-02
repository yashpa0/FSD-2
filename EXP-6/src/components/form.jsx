import {
  TextField,
  Button,
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
  Box,
  Paper,
  Avatar
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useState } from 'react'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const temp = {}

    if (!email) temp.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(email))
      temp.email = 'Invalid email format'

    if (!password) temp.password = 'Password is required'
    else if (password.length < 6)
      temp.password = 'Minimum 6 characters'

    setErrors(temp)
    return Object.keys(temp).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      alert('Welcome Back!')
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 4,
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255,255,255,0.95)'
          }}
        >
          <Box textAlign="center" mb={2}>
            <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 1 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5" fontWeight={700}>
              Welcome Back
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Please login to continue
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="dense"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="dense"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />

            <FormControl margin="normal" fullWidth>
              <FormLabel>Account Type</FormLabel>
              <RadioGroup row defaultValue="user">
                <FormControlLabel
                  value="user"
                  control={<Radio size="small" />}
                  label="User"
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio size="small" />}
                  label="Admin"
                />
              </RadioGroup>
            </FormControl>

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Keep me signed in"
            />

            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                mt: 2,
                py: 1.3,
                borderRadius: 2,
                fontWeight: 600
              }}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}