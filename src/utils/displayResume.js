import chalk from "chalk";
import { passion } from "gradient-string";
import { sleep } from "./helpers.js";

const LINE_BREAK = "\n" + "-".repeat(50) + "\n";

export async function displayResumeSection(section, content, animated = true) {
  console.clear();

  const header = passion(`\n  ${section.toUpperCase()}  \n`);
  console.log(header);
  console.log(chalk.dim(LINE_BREAK)); // Divider

  if (animated) {
    for (const line of content.split("\n")) {
      console.log(line);
      await sleep(100); // Add a delay for each line
    }
  } else {
    console.log(content);
  }

  console.log(chalk.dim(LINE_BREAK));
  await sleep(500);
  console.log(chalk.green("\nPress Enter to return to the menu..."));
}
