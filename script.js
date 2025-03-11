// Menü öğelerine tıklanınca uyarı göster
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      alert('Sepete eklendi!');
    });
  });