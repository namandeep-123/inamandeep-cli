import inquirer from "inquirer";
import { displayResumeSection } from "./displayResume.js";
import { MENU_OPTIONS } from "../constants.js";

export async function promptMenu() {
  let exit = false;

  while (!exit) {
    const { option } = await inquirer.prompt([
      {
        type: "list",
        name: "option",
        message: "Choose an option:",
        choices: MENU_OPTIONS,
      },
    ]);

    switch (option) {
      case "View Personal Info":
        displayResumeSection("Personal Info");
        break;
      case "View Skills":
        displayResumeSection("Skills");
        break;
      case "View Projects":
        displayResumeSection("Projects");
        break;
      case "Contact Me":
        displayResumeSection("Contact");
        break;
      case "Exit":
        console.log("Goodbye! 👋");
        exit = true;
        break;
    }
  }
}
