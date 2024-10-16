document.querySelector(".jsFilter").addEventListener("click", function () {
  document.querySelector(".filter-menu").classList.toggle("active");
});

document.querySelector(".grid").addEventListener("click", function () {
  document.querySelector(".list").classList.remove("active");
  document.querySelector(".grid").classList.add("active");
  document.querySelector(".products-area-wrapper").classList.add("gridView");
  document
    .querySelector(".products-area-wrapper")
    .classList.remove("tableView");
});

document.querySelector(".list").addEventListener("click", function () {
  document.querySelector(".list").classList.add("active");
  document.querySelector(".grid").classList.remove("active");
  document.querySelector(".products-area-wrapper").classList.remove("gridView");
  document.querySelector(".products-area-wrapper").classList.add("tableView");
});


// Function to set the active sidebar item
function setActive(clickedItem) {
  // Get all sidebar list items
  const items = document.querySelectorAll('.sidebar-list-item');

  // Remove "active" class from all items
  items.forEach(item => {
      item.classList.remove('active');
  });

  // Add "active" class to the clicked item
  clickedItem.classList.add('active');

  // Store the active item's index in local storage
  localStorage.setItem('activeSidebarItem', clickedItem.innerText.trim());
}

// When the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Retrieve the stored active item from local storage
  const activeItemText = localStorage.getItem('activeSidebarItem');
  
  // If there's an active item stored, set it as active
  if (activeItemText) {
      // Find the sidebar item that matches the stored text
      const storedItem = [...document.querySelectorAll('.sidebar-list-item')].find(item => item.innerText.trim() === activeItemText);
      
      if (storedItem) {
          storedItem.classList.add('active'); // Add active class to the found item
      }
  }
});

