var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}
document.getElementById('aboutLink').addEventListener('click', function() {
    window.location.href = 'tim.html';
  });
  document.getElementById('aboutLink').addEventListener('click', function() {
    window.location.href = 'index.html';
  });
  document.getElementById('aboutLink').addEventListener('click', function() {
    window.location.href = 'tentang.html';
  });
document.getElementById('aboutLink').addEventListener('click', function() {
    window.location.href = 'portofolio.html';
  });
