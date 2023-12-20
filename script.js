const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all the elements with the class "price"
  const priceElements = document.querySelectorAll('.price');

  // Initialize the total price
  let totalPrice = 0;

  // Loop through each price element and add its value to the total price
  priceElements.forEach((priceElement) => {
    totalPrice += parseInt(priceElement.textContent, 10);
  });

  // Check if a total row already exists
  const existingTotalRow = document.querySelector('.total-row');

  if (existingTotalRow) {
    // Update the content of the existing total row
    existingTotalRow.cells[0].textContent = `Total Price: Rs ${totalPrice}`;
  } else {
    // Create a new row for the total price
    const table = document.querySelector('table');
    const newRow = table.insertRow(-1); // Insert at the end of the table
    newRow.classList.add('total-row');

    // Create a cell in the new row
    const cell = newRow.insertCell(0);
    cell.colSpan = 2; // Span both columns
    cell.textContent = `Total Price: Rs ${totalPrice}`;
  }
};

getSumBtn.addEventListener("click", getSum);
