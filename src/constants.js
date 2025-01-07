import chalk from "chalk";

export const HEADER = `
${chalk.bold.blue("Hey! Welcome to Namandeep's CLI Resume! 👋")}
`;

export const MENU_OPTIONS = [
  "View Personal Info",
  "View Skills",
  "View Projects",
  "Contact Me",
  "Exit",
];

export const PERSONAL_INFO = `
${chalk.bold("Name:")} Namandeep Singh
${chalk.bold("Role:")} Associate Software Engineer
${chalk.bold("Company:")} Refyne India
${chalk.bold("Location:")} Bangalore
`;

export const SKILLS = `
${chalk.bold("Languages:")} C++, JavaScript, TypeScript, Python
${chalk.bold("Frameworks:")} Node.js, Express.js, NestJS
${chalk.bold("Databases:")} MySQL, MongoDB, PostgreSQL
${chalk.bold("Others:")} Docker, AWS, CI/CD
`;

export const PROJECTS = `
1. ${chalk.cyan(
  "Petscoob:"
)} E-commerce platform for pet products, grooming, and daycare bookings.
2. ${chalk.cyan(
  "Slack Bot:"
)} A tool-performing bot for querying data and making multiple tool calls.
3. ${chalk.cyan(
  "Collection Portal:"
)} A backend system with secure interceptors for managing user data.
4. ${chalk.cyan(
  "Blog Site:"
)} A personal blog to share technical knowledge about architecture and backend development.
`;

export const CONTACT = `
${chalk.bold("Twitter:")} https://twitter.com/yourhandle
${chalk.bold("Email:")} your-email@example.com
${chalk.bold("Blog:")} https://yourblog.com
${chalk.bold("Portfolio:")} https://yourportfolio.com
`;
