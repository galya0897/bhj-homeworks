const tabsContainers = document.querySelectorAll('.tabs');

function handleTabSwitch(event) {
    const container = event.currentTarget.closest('.tabs');

    if (!event.currentTarget.classList.contains('tab_active')) {
        container.querySelectorAll('.tab').forEach(tab =>
            tab.classList.remove('tab_active'));

        container.querySelectorAll('.tab__content').forEach(content =>
            content.classList.remove('tab__content_active'));

        event.currentTarget.classList.add('tab_active');

        const tabIndex = Array.from(container.querySelectorAll('.tab'))
            .indexOf(event.currentTarget);

        container.querySelectorAll('.tab__content')
        [tabIndex].classList.add('tab__content_active');
    }
}

tabsContainers.forEach(container => {
    container.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', handleTabSwitch);
    });
});