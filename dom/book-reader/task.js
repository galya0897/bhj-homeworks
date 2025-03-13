document.addEventListener('DOMContentLoaded', function () {
    const fontSizeControls = document.querySelectorAll('.font-size');
    const bookElement = document.getElementById('book');

    function handleFontSizeChange(event) {
        event.preventDefault();

        fontSizeControls.forEach(button =>
            button.classList.remove('font-size_active')
        );

        event.currentTarget.classList.add('font-size_active');

        bookElement.classList.remove('book_fs-big', 'book_fs-small');

        const size = event.currentTarget.dataset.size;
        if (size === 'big') {
            bookElement.classList.add('book_fs-big');
        } else if (size === 'small') {
            bookElement.classList.add('book_fs-small');
        }
    }

    fontSizeControls.forEach(button => {
        button.addEventListener('click', handleFontSizeChange);
    });
});