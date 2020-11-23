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