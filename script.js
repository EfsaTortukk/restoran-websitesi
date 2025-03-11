// Menü öğelerine tıklanınca uyarı göster
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      alert('Sepete eklendi!');
    });
  });
  document.getElementById('rezervasyon-formu').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('tesekkur-mesaji').style.display = 'block';
    setTimeout(() => {
      document.getElementById('tesekkur-mesaji').style.display = 'none';
    }, 3000); // 3 saniye sonra mesajı gizle
  });
  document.getElementById('hamburger-menu').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
  });