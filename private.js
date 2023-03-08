fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.querySelector("#api-table tbody");
    data.forEach((item) => {
      const row = tableBody.insertRow();
      const idCell = row.insertCell();
      const nameCell = row.insertCell();
      const emailCell = row.insertCell();
      const phoneCell = row.insertCell();
      idCell.setAttribute("data-title", "ID");
      nameCell.setAttribute("data-title", "Nom");
      emailCell.setAttribute("data-title", "Email");
      phoneCell.setAttribute("data-title", "Téléphone");
      idCell.textContent = item.id;
      nameCell.textContent = item.name;
      emailCell.textContent = item.email;
      phoneCell.textContent = item.phone;
    });
  })
  .catch((error) => console.error(error));
document.querySelector("nav ul li a[disabled]").removeAttribute("disabled");
