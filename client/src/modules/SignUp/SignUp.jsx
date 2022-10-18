import React from 'react';
import {
  TextField,
  Button, 
  Link, 
  Grid, 
  Box, 
  Alert, 
  Container
} from '@mui/material';
import Logo from "../../components/Logo";
import styles from './SignUp.module.scss';

const SignUpLayout = ({ handleSubmit, formObj, setName, setLastName, setEmail, setPassword, error }) => 
  <Container className={styles.container} component="main" maxWidth="xs">
      <Logo width="100%" height="100px" />
      <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={formObj.name}
                onChange={ e => setName(e.target.value) }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={formObj.lastName}
                onChange={ e => setLastName(e.target.value) }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formObj.email}
                onChange={ e => setEmail(e.target.value) }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formObj.password}
                onChange={ e => setPassword(e.target.value) }
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          { error && <Alert severity="error"><div className="error">{ error }</div></Alert> }
      </Box>
  </Container>;

export default SignUpLayout;