
const treeContainer = document.getElementById("tree-container");
let tree = "";

tree += " ".repeat(9) + "*\n"; // Estrella en la parte superior

for (let i = 0; i < 10; i++) {
    tree += " ".repeat(9 - i) + "0".repeat(2 * i + 1) + "\n";
}

treeContainer.textContent = tree;