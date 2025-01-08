function scrollMenu(amount) {
    const news = document.querySelector('.news-list');
    news.scrollBy({ left: amount, behavior: 'smooth' });
}