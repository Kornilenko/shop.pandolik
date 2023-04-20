// Находим все ссылки в пагинации
const paginationLinks = document.querySelectorAll('.pagination a');

// Для каждой ссылки добавляем обработчик событий клика
paginationLinks.forEach(link => {
  link.addEventListener('click', e => {
  e.preventDefault(); // Отменяем переход по ссылке по умолчанию
  const clickedLink = e.target; // Получаем ссылку, по которой кликнули
  const pageNumber = clickedLink.innerText; // Получаем номер страницы
  console.log(`Вы перешли на страницу ${pageNumber}`); // Выводим номер страницы в консоль

  // Меняем текущий URL на URL, соответствующий нажатой ссылке
  window.location.href = clickedLink.href;
});