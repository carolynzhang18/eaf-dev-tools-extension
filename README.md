# EAF Dev Tools Extension
A Chrome extension with helpful utility functions and links for project development at [Extend-A-Family (EAF)](https://github.com/uwblueprint/extend-a-family)! 🫶

## Add Extension to Chrome

1. Download the zip file containing the extension: [eaf-dev-tools-extension-1.0.zip](https://github.com/carolynzhang18/eaf-dev-tools-extension/raw/main/eaf-dev-tools-extension-1.0.zip)
2. Unzip the downloaded file.
3. In your Chrome browser, go to [chrome://extensions/](chrome://extensions/).
4. Enable the "Developer mode" toggle in the top right corner of the screen. Three new buttons should appear in the top left corner of the page.
5. Click on the "Load unpacked" button. This should prompt you to select an extension directory.
6. Select your `eaf-dev-tools-extension-1.0` folder. You should now see a new extension "EAF Dev Tools" has been added to your list of extensions.
7. Click on the "Details" button for the extension and enable the "Pin to toolbar" toggle for easy access.

Voila! ✨

## Info: Verify Accessibility Plugin
This plugin runs a snapshot of the current page through [Axe](https://github.com/dequelabs/axe-core), a website accessibility testing engine, and identifies problems by injecting the DOM with information about rule violations.

![Screenshot 2024-06-23 at 10 55 3](https://github.com/carolynzhang18/eaf-dev-tools-extension/assets/82423082/4fc1a480-62ad-4c17-b794-974e990f3817)

To use this plugin:
1. Go to a frontend page (`http://localhost:3000/<page>`).
2. Open the extension and click the "Verify Accessibility" button under "Utilities". This will run the plugin.
3. Each violation is outlined by a rectangle. A red rectangle means this is a critical/serious violation, while an orange rectangle means this is a moderate/minor violation.
4. Click on a rectangle to get more details about the violation and potential fixes for the error. You'll then be asked if you want to open the external help page associated with this error, which contains more information and examples.
