import figlet from "figlet";
import { sleep } from "./helpers.js";
import { pastel } from "gradient-string";

export async function displayHeader() {
  console.clear();

  const ascii = figlet.textSync("Namandeep's Resume", {
    font: "Slant",
    horizontalLayout: "default",
    verticalLayout: "default",
  });

  console.log(pastel.multiline(ascii));
  await sleep(100);
}
