const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input values
  const newItemName = document.getElementById('itemName').value;
  const newItemDesc = document.getElementById('itemDesc').value;

  // Create new li element
  const li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItemName));

  // Create description element
  const desc = document.createElement('p');
  desc.className = 'list-group-item';
  desc.appendChild(document.createTextNode(newItemDesc));

  // Append description to li
  li.appendChild(desc);

  // Create del button element
  const deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Create edit button element
  const editBtn = document.createElement('button');

  // Add classes to edit button
  editBtn.className = 'btn btn-primary btn-sm float-right edit';

  // Append text node
  editBtn.appendChild(document.createTextNode('EDIT'));

  // Append button to li
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  const text = e.target.value.toLowerCase();
  // Get lis
  const items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    const itemName = item.firstChild.textContent;
    console.log(itemName);
    const itemDesc = item.firstChild.nextSibling.textContent;
    console.log(itemDesc);
    if(itemName.toLowerCase().indexOf(text) != -1 || itemDesc.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
