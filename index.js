const { promises: fs } = require("fs");
const path = require("path");

// Read the template and store it as a variable
async function main() {
    const template = (
        await fs.readFile(path.join(process.cwd(), "./README.raw.md"))
    ).toString("utf-8");
}
main();

// Creating a simple object to use
const elian = {
    name: "Elian",
    age: 21
}

// Inject the content
const staticReadme = readmeTemplate
    .replace("{{name}}", elian.name)
    .replace("{{age}}", elian.age)

// Let's write the file
await fs.writeFile("README.md", staticReadme);
