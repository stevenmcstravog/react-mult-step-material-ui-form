import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function SocialForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Social Accounts
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TextField
            id="facebook"
            name="facebook"
            label="Facebook"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="twitter"
            name="twitter"
            label="Twitter"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="linkedIn"
            name="linkedIn"
            label="LinkedIn"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SocialForm;