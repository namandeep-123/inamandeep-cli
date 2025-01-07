import {
  HEADER,
  PERSONAL_INFO,
  SKILLS,
  PROJECTS,
  CONTACT,
} from "../constants.js";

export function displayResumeSection(section) {
  console.clear(); // Clear the console for a fresh view
  console.log(HEADER);

  switch (section) {
    case "Personal Info":
      console.log(PERSONAL_INFO);
      break;
    case "Skills":
      console.log(SKILLS);
      break;
    case "Projects":
      console.log(PROJECTS);
      break;
    case "Contact":
      console.log(CONTACT);
      break;
  }

  console.log("\nPress Enter to return to the menu...");
}
