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
import styles from './SignIn.module.scss';

const SignInLayout = ({ handleSubmit, formObj, setEmail, setPassword, error }) => 
    <Container className={styles.container} component="main" maxWidth="xs">
      <Logo width="100%" height="100px" />
        <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
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
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
            { error && <Alert severity="error"><div className="error">{ error }</div></Alert> }
        </Box>
    </Container>;

export default SignInLayout;