const toggleButton = document.getElementById('themeButton');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  toggleButton.textContent = '☀️ Světlý režim';
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  const isDark = body.classList.contains('dark-theme');
  toggleButton.textContent = isDark ? '☀️ Světlý režim' : '🌙 Tmavý režim';

  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});