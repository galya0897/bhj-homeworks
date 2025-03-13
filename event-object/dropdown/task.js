document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownValue = dropdown.querySelector('.dropdown__value');
        dropdownValue.addEventListener('click', (event) => {
            event.stopPropagation();
            const dropdownList = dropdown.querySelector('.dropdown__list');
            dropdownList.classList.toggle('dropdown__list_active');
        });

        const dropdownItems = dropdown.querySelectorAll('.dropdown__item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                const selectedText = event.target.textContent;
                dropdown.querySelector('.dropdown__value').textContent = selectedText;
                dropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
            });
        });
    });

    document.addEventListener('click', (event) => {
        const dropdownElement = event.target.closest('.dropdown');
        if (!dropdownElement) {
            document.querySelectorAll('.dropdown__list').forEach(list => {
                list.classList.remove('dropdown__list_active');
            });
        }
    });
});