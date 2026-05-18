const backdrop = document.getElementById('modal-backdrop');
const modalImage = backdrop.querySelector('.modal-image');
const modalTitle = backdrop.querySelector('.modal-title');
const modalDescription = backdrop.querySelector('.modal-description');
const modalLink = backdrop.querySelector('.modal-link');

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const templateId = card.dataset.modal;
        const template = document.getElementById(templateId);
        const cardImg = card.querySelector('.card-image');

        modalImage.src = cardImg.src;
        modalImage.alt = cardImg.alt;
        modalTitle.textContent = card.querySelector('.card-title').textContent;
        modalDescription.innerHTML = template ? template.innerHTML : '';
        modalLink.href = card.dataset.link;

        backdrop.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
}

backdrop.querySelector('.modal-close').addEventListener('click', closeModal);
backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });