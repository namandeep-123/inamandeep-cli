import inquirer from "inquirer";
import ora from "ora";
import { displayResumeSection } from "./displayResume.js";
import {
  PERSONAL_INFO,
  SKILLS,
  PROJECTS,
  CONTACT,
  MENU_OPTIONS,
  EXPERIENCE,
  HEADER,
} from "../constants.js";
import { fruit } from "gradient-string";

export async function promptMenu() {
  let exit = false;

  while (!exit) {
    console.log(HEADER);
    const { option } = await inquirer.prompt([
      {
        type: "list",
        name: "option",
        message: "Choose an option:",
        choices: MENU_OPTIONS,
      },
    ]);

    const spinner = ora("Loading...").start();
    await new Promise((resolve) => setTimeout(resolve, 800));
    spinner.stop();

    switch (option) {
      case "View Personal Info":
        await displayResumeSection("PERSONAL INFO", PERSONAL_INFO);
        break;
      case "View Skills":
        await displayResumeSection("SKILLS", SKILLS);
        break;
      case "View Projects":
        await displayResumeSection("PROJECTS", PROJECTS);
        break;
      case "Experience":
        await displayResumeSection("EXPERIENCE", EXPERIENCE);
        break;
      case "Contact Me":
        await displayResumeSection("CONTACT", CONTACT);
        break;
      case "Exit":
        console.log(fruit("Goodbye! 👋 See you next time!"));
        exit = true;
        break;
    }
  }
}
