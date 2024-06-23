import Grid from "@mui/material/Grid";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaptopIcon from '@mui/icons-material/Laptop';
import ChecklistIcon from '@mui/icons-material/Checklist';

const Links = () => {
  return (
    <Grid container spacing={1}>
        <Grid item xs={4}>
          <GitHubIcon />
          GitHub
        </Grid>
        <Grid item xs={4}>
          <LaptopIcon />
          Task Board
        </Grid>
        <Grid item xs={4}>
          <ChecklistIcon />
          Accessibility Checklist
        </Grid>
      </Grid>
  );
}

export default Links;
