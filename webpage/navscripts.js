document.addEventListener('DOMContentLoaded', function () {
  // JavaScript for dropdowns
  document.querySelectorAll('.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevents the document click event from closing the dropdown
      var isActive = this.classList.contains('active');
      document.querySelectorAll('.dropdown').forEach(function (otherDropdown) {
        otherDropdown.classList.remove('active');
        otherDropdown.querySelector('svg').classList.remove('rotate180'); // Reset arrow position
        otherDropdown.querySelector('.dropbtn').classList.remove('active-color'); // Remove active color
      });
      if (!isActive) {
        this.classList.add('active');
        this.querySelector('svg').classList.add('rotate180'); // Rotate arrow for clicked menu
        this.querySelector('.dropbtn').classList.add('active-color'); // Add active color
      }
    });
  });

  document.addEventListener('click', function (event) {
    document.querySelectorAll('.dropdown').forEach(function (dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
        dropdown.querySelector('svg').classList.remove('rotate180'); // Reset arrow position
        dropdown.querySelector('.dropbtn').classList.remove('active-color'); // Remove active color
      }
    });
  });
});
