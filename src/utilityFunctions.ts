import { axe } from 'jest-axe';

export async function getActiveTabId() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab.id;
}

export async function runAccessibilityTest() {
  const tabId = await getActiveTabId();
  if (!tabId) {
    alert("ERROR: no active tab");
    return null;
  }

  // Get HTML of document
  const fromPageDom = await chrome.scripting.executeScript({
    target: { tabId },
    func: () => document.documentElement.outerHTML
  });
  const html = fromPageDom[0].result;
  if (!html) {
    alert("ERROR: no HTML available for testing");
    return;
  }

  // Run axe to determine violations
  const axeResult = await axe(html);
  const violations = axeResult.violations;
  
  if (violations.length === 0) {
    alert("All accessibility checks passed!");
    return;
  }

  // Trigger content script for injecting rectangles into DOM
  chrome.tabs.sendMessage(tabId, { violations });
}

export async function copyAccessToken() {
  const tabId = await getActiveTabId();
  if (!tabId) {
    alert("ERROR: no active tab");
    return null;
  }

  // Get authenticated user from localStorage
  const fromPageLocalStorage = await chrome.scripting.executeScript({
    target: { tabId },
    func: () => localStorage["localhost:AUTHENTICATED_USER"]
  });
  const authenticatedUser = JSON.parse(fromPageLocalStorage[0].result);
  if (!authenticatedUser) {
    alert("ERROR: no authenticated user.\nCheck that you're logged in to the application.");
    return;
  }

  // Copy information to clipboard
  const accessToken = authenticatedUser.accessToken;
  await navigator.clipboard.writeText(accessToken);
  const role = authenticatedUser.role;
  alert(`Access token (role ${role}) copied to clipboard!`);
}
