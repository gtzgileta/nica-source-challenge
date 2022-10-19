import React from 'react';
import {
  TextField,
  Button, 
  Link, 
  Grid, 
  Box, 
  Alert, 
  Container,
  MenuItem,
  Typography
} from '@mui/material';
import styles from './NewVideo.module.scss';

const NewVideo = ({ handleSubmit, formObj, setImage, setVideo, setTitle, error, setRole }) => 
  <Container className={styles.container} component="main" maxWidth="xs">
      <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
          <Typography align="center" variant="h2" gutterBottom>New Video</Typography>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={formObj.title}
                onChange={ e => setTitle(e.target.value) }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="video_url"
                label="Video URL"
                name="video_url"
                value={formObj.video}
                onChange={ e => setVideo(e.target.value) }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Image Source"
                type="img_src"
                value={formObj.image}
                onChange={ e => setImage(e.target.value) }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="published"
                label="Published"
                select
                value={formObj.role}
                onChange={ e => setRole(e.target.value) }
              >
                <MenuItem value="published">Published</MenuItem>
                <MenuItem value="unpublished">Unpublished</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Add video
          </Button>
          { error && <Alert severity="error"><div className="error">{ error }</div></Alert> }
      </Box>
  </Container>;

export default NewVideo;