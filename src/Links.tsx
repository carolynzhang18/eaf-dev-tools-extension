import React from "react";
import { Grid, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaptopIcon from '@mui/icons-material/Laptop';
import ChecklistIcon from '@mui/icons-material/Checklist';
import labels from "./labels";

type LinkButtonProps = {
  ariaLabel: string;
  url: string;
  children: React.ReactElement;
}

const LinkButton = ({ariaLabel, url, children}: LinkButtonProps) => {
  return (
    <IconButton aria-label={ariaLabel} onClick={() => window.open(url, "_blank")?.focus()}>
      {children}
    </IconButton>
  );
}

const Links = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={4}>
          <LinkButton ariaLabel={labels.github} url="https://github.com/uwblueprint/extend-a-family">
            <GitHubIcon />
          </LinkButton>
          <br />
          {labels.github}
        </Grid>
        <Grid item xs={4}>
          <LinkButton ariaLabel={labels.taskBoard} url="https://www.notion.so/uwblueprintexecs/7e51fde5f22d448b8226f2cfa4dd93d5?v=b2dc0dba06574651a8b6063bdd0d74e0">
            <LaptopIcon />
          </LinkButton>
          <br />
          {labels.taskBoard}
        </Grid>
        <Grid item xs={4}>
          <LinkButton ariaLabel={labels.accessibilityChecklist} url="https://www.notion.so/uwblueprintexecs/Accessibility-Dev-Checklist-f0769541d27d4fb29f539fae0a0df67c">
            <ChecklistIcon />
          </LinkButton>
          <br />
          {labels.accessibilityChecklist}
        </Grid>
      </Grid>
  );
}

export default Links;
