$(document).ready(function(){
    // $('.add-icon').click(function(){
    //     $(this).find('fa-heart').toggleClass('d-none');
    // });
    $('.fa-heart').hide();
    $('.item-card-icon i').click(
        function() {
        // 滑鼠移入時要執行的內容
        event.preventDefault();
        $(this).siblings('.fa-heart').toggle();
    });
});