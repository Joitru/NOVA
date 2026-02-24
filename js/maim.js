document.addEventListener('DOMContentLoaded', function() {
    const profileBtn = document.querySelector('.profile');
    
    if (profileBtn) {
        profileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const pages = ['login.html', 'winshlist.html', 'reg.html'];
            
            const randomIndex = Math.floor(Math.random() * pages.length);
            
            window.location.href = pages[randomIndex];
        });
    }
});
    const cards = document.querySelectorAll('.top-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            window.location.href = 'card.html';
        });
        
        card.style.cursor = 'pointer';
    });
