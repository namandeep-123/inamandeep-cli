#!/usr/bin/env node

import { displayHeader } from "../src/utils/asciiArt.js";
import { promptMenu } from "../src/utils/promptMenu.js";

// Main function to start the CLI
(async function main() {
  const terminalWidth = process.stdout.columns;
  if (terminalWidth > 105) {
    await displayHeader(); // Display animated ASCII art
  }
  promptMenu();
})();
