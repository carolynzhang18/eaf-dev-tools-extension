# EAF Dev Tools Extension
A Chrome extension with helpful plugins and links for project development at [Extend-A-Family (EAF)](https://github.com/uwblueprint/extend-a-family)! 🫶

## Add Extension to Chrome
Add the extension from the following link: [EAF Dev Tools](https://chromewebstore.google.com/detail/eaf-dev-tools/ifeedhkbcdhijdhagjjjbbiicjafdccl?authuser=0&hl=en). You can pin it to your extensions toolbar for easy access.

Voila! ✨


## Info: Verify Accessibility Plugin
This plugin runs a snapshot of the current page through [Axe](https://github.com/dequelabs/axe-core), a website accessibility testing engine, and identifies problems by injecting the DOM with information about rule violations.

![Screenshot 2024-06-23 at 10 55 3](https://github.com/carolynzhang18/eaf-dev-tools-extension/assets/82423082/4fc1a480-62ad-4c17-b794-974e990f3817)

To use this plugin:
1. Go to a frontend page (`http://localhost:3000/<page>`).
2. Open the extension and click the "Verify Accessibility" button under "Utilities". This will run the plugin.
3. Each violation is outlined by a rectangle. A red rectangle means this is a critical/serious violation, while an orange rectangle means this is a moderate/minor violation.
4. Click on a rectangle to get more details about the violation and potential fixes for the error. You'll then be asked if you want to open the external help page associated with this error, which contains more information and examples.
