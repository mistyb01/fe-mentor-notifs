const markAllAsReadLink = document.getElementById('mark-read');
markAllAsReadLink.addEventListener('click', markAllAsRead);
function markAllAsRead() {
    const notifCards = document.getElementsByClassName('notif');
    Array.from(notifCards).forEach(card => {
        if (card.classList.contains('new')) {
            card.classList.remove('new');
        }
    });
    const dots = document.getElementsByClassName('dot');
    Array.from(dots).forEach(dot => dot.parentNode.removeChild(dot));
    const notifNumber = document.getElementById('notif-number');
    console.log(notifNumber);
    notifNumber.innerHTML = '0';
}

