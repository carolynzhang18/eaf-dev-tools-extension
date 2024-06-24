import { Grid, IconButton } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import labels from "./labels";
import { copyAccessToken, runAccessibilityTest } from "./utilityFunctions";

const Utilities = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <IconButton aria-label={labels.verifyAccessibility} onClick={async () => await runAccessibilityTest()}>
          <SubtitlesIcon />
        </IconButton>
        <br />
        {labels.verifyAccessibility}
      </Grid>
      <Grid item xs={4}>
        <IconButton aria-label={labels.copyAccessToken} onClick={async () => await copyAccessToken()}>
          <ContentCopyIcon />
        </IconButton>
        <br />
        {labels.copyAccessToken}
      </Grid>
    </Grid>
  );
}

export default Utilities;
