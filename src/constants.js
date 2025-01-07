import chalk from "chalk";
import { cristal } from "gradient-string";

export const HEADER = `
${chalk.bold.blue("Hey! Welcome to Namandeep's CLI Resume! 👋")}
`;

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

export const EXPERIENCE = `
${chalk.cyan("Refyne - ASDE")}:
  – Implemented a robust payment infrastructure for B2C transactions using Cashfree, 
  enabling seamless payment link gen- eration for various NBFCs based on lender-specific 
  configurations.

  – Restructured and optimized the eNACH system to support multiple NBFCs, enabling 
  lender-specific automation for loan repayment. Reduced manual interventions, improving 
  the efficiency of the process for 30,000 to 40,000 users per month.

  – Developed a NOC (No Objection Certificate) request system, allowing users to apply 
  for NOCs upon loan repayment. Automated the generation and delivery of NOCs, blocked 
  user transactions, and restricted salary top-ups post-repayment.

${chalk.cyan("Refyne - Backend Intern")}:
  – Optimized report generation function by cutting processing time from 2-3 mins to under 
  10-20 seconds, and successfully converted the method from asynchronous to synchronous, 
  enhancing system efficiency and user experience.

  – Created a comprehensive backend for a collection portal from scratch, including the
  implementation of API interceptors to ensure secure data access and modifications, 
  allowing only authorized users to view or modify specific data.

  – Developed a Slack bot that leverages GPT to interpret queries, retrieve data from MongoDB,
  and generate intelligent responses through multi-step tool calls

 ${chalk.cyan("FastHR.Ai - Backend Intern")}:
  – Improved authentication and user onboarding experience by integrating Single Sign-On 
  (SSO) with providers like Google, LinkedIn, and GitHub.

  – Enhanced user communication and HR-related email management by automating email 
  sending from user accounts through the Gmail and Outlook APIs.

${chalk.cyan("FastHR.Ai - Backend Intern")}:
  – Developed a robust authentication system using Node.js and JWT tokens, 
  where users verify their identity through Aadhar card and OTP verification.

  – Created a user-friendly dashboard displaying personal details and previous 
  records for easy user access.

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
${chalk.cyan("X:")} https://x.com/inamandeep
${chalk.cyan("Email:")} namandeepsingh557@gmail.com
${chalk.cyan("Blog:")} https://blog.inamandeep.com
${chalk.cyan("Portfolio:")} https://yourportfolio.com
`;

export const MENU_OPTIONS = [
  "View Personal Info",
  "View Skills",
  "View Projects",
  "Contact Me",
  "Experience",
  "Exit",
];
