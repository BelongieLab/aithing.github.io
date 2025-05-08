const wallpapers = [
  'wallpapers/aurora.png'
  // Add more wallpaper filenames here
];

const wallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
document.body.style.backgroundImage = `url('${wallpaper}')`;

fetch('messages.txt')
  .then(response => response.text())
  .then(text => {
    const messages = text.trim().split('\n').filter(Boolean);
    const message = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('random-message').textContent = message;
  })
  .catch(err => {
    document.getElementById('random-message').textContent = '...';
    console.error('Failed to load messages:', err);
  });
