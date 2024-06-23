import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

async function copyAccessToken() {
  // Get the current active tab
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab.id) {
    alert("ERROR: no active tab");
    return;
  }

  // Execute script to read from localStorage
  const fromPageLocalStorage = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => localStorage["localhost:AUTHENTICATED_USER"]
  });

  const authenticatedUser = JSON.parse(fromPageLocalStorage[0].result);

  if (!authenticatedUser) {
    alert("ERROR: no authenticated user.\nCheck that you're logged in to the application.");
    return;
  }
  const role = authenticatedUser.role;
  const accessToken = authenticatedUser.accessToken;
  await navigator.clipboard.writeText(accessToken);
  alert(`Access token (for role ${role}) copied to clipboard!`);
}

const Utilities = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <IconButton aria-label="copy access token" onClick={async () => await copyAccessToken()}>
          <ContentCopyIcon />
        </IconButton>
        <br />
        Copy Access Token
      </Grid>
      <Grid item xs={4}>
        <VolumeUpIcon />
        Screenreader Test
      </Grid>
    </Grid>
  );
}

export default Utilities;
