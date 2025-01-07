import chalk from "chalk";
import { cristal } from "gradient-string";

export const PERSONAL_INFO = `
${chalk.bold("Name:")} Namandeep Singh
${chalk.bold("Role:")} Associate Software Developer Engineer 
${chalk.bold("Company:")} Refyne India
${chalk.bold("Location:")} Bangalore
`;

export const SKILLS = `
${chalk.bold(cristal("Languages"))}:
  - C++, JavaScript, TypeScript, Python

${chalk.bold(cristal("Frameworks"))}:
  - Node.js, Express.js, NestJS
  - NextJs, ReactJs, React Native

${chalk.bold(cristal("Databases"))}:
  - MySQL, MongoDB, PostgreSQL

${chalk.bold(cristal("Others"))}:
  - Docker, Kubernetes, AWS, CI/CD, Nginx
`;

export const PROJECTS = `
${chalk.bold(cristal("1. Petscoob"))}:
   ${chalk.cyanBright("An e-commerce platform for pet products and services.")}
   ${chalk.yellow("Features:")} Grooming centers, Pet Products.

${chalk.bold(cristal("2. Leetcode Cli"))}:
   ${chalk.cyanBright("A npm package to fetch leetcode, gfg all stats")}
   ${chalk.yellow("Features:")} animated cli, open urls.

${chalk.bold(cristal("3. PremGames"))}:
   ${chalk.cyanBright(
     "integrates game API to provide you with a vast library of games from various genres and platforms"
   )}
   ${chalk.yellow("Features:")} show Upcoming games, search system.

${chalk.bold(cristal("4. Blog Site"))}:
   ${chalk.cyanBright(
     "Personal blog sharing backend and architecture insights."
   )}
   ${chalk.yellow("Features:")} Docusaurus-based, deployed on Vercel.
`;

export const CONTACT = `
${chalk.bold("X:")} https://x.com/inamandeep
${chalk.bold("Email:")} namandeepsingh557@gmail.com
${chalk.bold("Blog:")} https://blog.inamandeep.com
${chalk.bold("Portfolio:")} https://yourportfolio.com
`;

export const MENU_OPTIONS = [
  "View Personal Info",
  "View Skills",
  "View Projects",
  "Contact Me",
  "Exit",
];
