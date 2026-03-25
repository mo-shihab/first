const toggleBtn = document.getElementById('theme-toggle');

// Apply saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️ Light Mode';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');

  // Update button label
  toggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Night Mode';

  // Save preference to localStorage
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});