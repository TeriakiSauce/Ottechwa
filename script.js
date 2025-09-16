fetch('websites.json')
  .then(response => {
    if (!response.ok) throw new Error("Error: No JSON found");
    return response.json();
  })
  .then(data => {
    const tableBody = document.getElementById("company-rows");

    data.forEach(company => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = company["Company Name"];

      const linkCell = document.createElement("td");
      const link = document.createElement("a");
      link.href = company["Careers Website"];
      link.target = "_blank";

      const img = document.createElement("img");
      img.src = `Company Logos/${company["Company Name"]}.png`;
      img.alt = company["Company Name"];
      img.className = "company-logo";
      img.onerror = () => { img.style.display = "none"; };

      link.appendChild(img);
      linkCell.appendChild(link);

      row.appendChild(nameCell);
      row.appendChild(linkCell);

      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Loading data failed: ", error);
  });
