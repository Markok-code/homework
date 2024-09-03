const bodyDiv = document.createElement("div");
document.body.appendChild(bodyDiv); 

const rowDiv = document.createElement("div");
for (let i = 1; i <= 10; i++) {
    let rowText = "";

    for (let j = 1; j <= 10; j++) {
        rowText += j * i + " ";
    }

    const rowDiv = document.createElement("div");
    rowDiv.textContent = rowText;
    bodyDiv.appendChild(rowDiv); 
}
