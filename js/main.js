$('.left-card').on('click', function() {
    var list = $(this).siblings('.left-card-list-parent');
    if (!list.hasClass('active')) {
        $('.left-card-list-parent').removeClass('active');
    }
    list.toggleClass('active');
})


$('.checked-test').on('click', function(event) {
    $('#tests-modal').modal('show')
})

$('.comments-toggle-link').on('click', function() {
    var list = $(this).closest('.comments-parent').find('.comments-toggle-list');
    list.toggleClass('active');
})

$("#edit-profile").on("click", function() {
    $(".edit-profile__modal").fadeIn();
})

$(".edit-profile__modal").on("click", function(e) {
    if (e.target == document.querySelector(".edit-profile__modal")) {
        $(".edit-profile__modal").fadeOut();
    }
});

$(".edit-profile__close-btn").on("click", function(e) {
    $(".edit-profile__modal").fadeOut();
});