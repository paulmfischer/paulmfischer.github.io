console.log('working!');
const toggleSidebar = () => {
  document.querySelector('#sidebar').classList.toggle('hidden');
  document.querySelector('#sidebar').classList.toggle('flex');
};

(function() {
  const displayButton = document.querySelector('#display-navigation');
  if (displayButton) {
    displayButton.addEventListener('click', toggleSidebar);
  }
  const closeSidebarButton = document.querySelector('#close-sidebar');
  if (closeSidebarButton) {
    closeSidebarButton.addEventListener('click', toggleSidebar);
  }
  console.log('buttons found!', displayButton, closeSidebarButton);
})();