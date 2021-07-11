$(function() {

    $('#calendar').fullCalendar();

});



const element = document.querySelector('ul[role="tablist"]');
const block = document.querySelector('.open');

element.addEventListener('click', (event) => {
    const isActive = event.target.closest('.click_link').classList.contains('close__btn');

    block.classList.toggle('active', isActive);
});

$(document).ready(function() {
    $(document).on("click", ".square-radio", function() {
        $(this).toggleClass("square-radio--clicked");
    });
});