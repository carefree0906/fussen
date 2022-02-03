$(document).ready(function () {
    // 漢堡選單
    $(document).ready(function () {
        $('.header .showmenu').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('menu-show');
        });
    });
    // 收合 
    $('.header .showmenu').click(function (e) {
        e.preventDefault();
        $('.menu-show').toggleClass('active')
    })

});


/*按下menu按鈕後，動態在body加上class為.menu-show，
並找到.menu show裡的.menu高度變成500px*/
/*$(document).ready(function () {
    $('.showmenu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
});*/