var cp_buy = document.querySelector( '.cp-buy' )
var cp_buy_list = document.querySelector( '.cp-buy-list' )
cp_buy.onmouseenter = function (){
    cp_buy_list.style.display = 'block'
}
cp_buy.onmouseleave = function (){
    cp_buy_list.style.display = 'none'
}
var user_ser = document.querySelector( '.user-ser' )
var user_ser_list = document.querySelector( '.user-ser-list' )
user_ser.onmouseenter = function (){
    user_ser_list.style.display = 'block'
}
user_ser.onmouseleave = function (){
    user_ser_list.style.display = 'none'
}

//头部导航下拉框
var topnav_else = document.querySelectorAll( '.top-nav-else' )
var life_list = document.querySelectorAll( '.life-list' )
// topnav_else.forEach( function(index){
//     topnav_else[index].onmouseenter = function (){
//         life_list[index].style.display = 'block'
//     }
// } )
for (var i = 0; i < topnav_else.length; i++) {
    topnav_else[i].index = i;
    topnav_else[i].onmouseenter = function (){
        life_list[this.index].style.display = 'flex'
    }
    topnav_else[i].onmouseleave = function (){
        life_list[this.index].style.display = 'none'
    }
}

//轮播图
var mySwiper = new Swiper ('.swiper-container', {
    autoplay:true,
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  }) 