fetch('websites.json')
  .then(response => {
    if (!response.ok) throw new Error("Error: No JSON found");
    return response.json();
  })
  .then(data => {
    const container = document.getElementById("buttons");

    data.forEach(company => {
      const button = document.createElement("button");
      button.className = "company-button";

      const img = document.createElement("img");
      img.src = `Company Logos/${company["Company Name"]}.png`;
      img.alt = company["Company Name"];
      img.className = "company-logo";

      const span = document.createElement("span");
      span.innerText = company["Company Name"];

      button.appendChild(img);
      button.appendChild(span);
      button.onclick = () => window.open(company["Careers Website"], '_blank');

      container.appendChild(button);
    });
  })
  .catch(error => {
    console.error("Loading data failed: ", error);
  });
