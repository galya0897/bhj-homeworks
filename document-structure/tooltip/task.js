const hasTooltips = document.getElementsByClassName('has-tooltip');

for (element of hasTooltips) {
    let tooltip = document.createElement('div');
    tooltip.innerText = element.getAttribute('title');
    tooltip.classList.add('tooltip');
    element.insertAdjacentElement('afterEnd', tooltip);

    const tooltipLeft = element.getBoundingClientRect().left;
    tooltip.style.left = tooltipLeft + 'px';
    tooltip.style.position = 'absolute';

    element.addEventListener('click', function (e) {
        e.preventDefault();
        const tooltipList = document.querySelectorAll('.tooltip');

        if (!tooltip.classList.contains('tooltip_active')) {
            for (let index = 0; index < tooltipList.length; index++) {
                tooltipList[index].classList.remove('tooltip_active');
            }
            tooltip.classList.add('tooltip_active');
        } else {
            tooltip.classList.remove('tooltip_active');
        }
    })
}