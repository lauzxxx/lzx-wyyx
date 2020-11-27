$(function(){
    if (localStorage.getItem('goods')){
        var goodsArr = JSON.parse(localStorage.getItem('goods'))
        $.ajax({
            url:'../date/goods-list.json',
            type:'get',
            dataType:'json',
            success:function(json){
                var domStr = ''
                // console.log(111);
                $.each(goodsArr,function(index,item){
                    $.each(json,function(ind,obj){
                        if ( item.code === obj.code ){
                            domStr += `
                            <li>
                            <input type="checkbox" class="one">
                            <div class="list-imgBox">
                                <img src="${obj.img1}" alt="">
                            </div>
                            <span class="itemName">${obj.title}</span>
                            <span class="onePrice">￥<span>${obj.price}</span></span>
                            <span class="num-count clearfix">
                                <div class="less">-</div>
                                <div class="nowNum">${item.num}</div>
                                <div class="more">+</div>
                            </span>
                            <span class="totalPrice">￥<span></span></span>
                            <span class="userDo">
                                <a href="#">移入收藏夹</a><br>
                                <a href="#" class="delOne">删除</a>
                            </span>
                        </li>
                            `
                        }
                    })
                })
                $('.carList').html(domStr)
                changeAll()
            }
        })
    } else {
        var noGoods = '<li class="noGoods"><span>购物车还是空的！</span></li>'
        $('.carList').html(noGoods)
    }
})
//全选全不选
function changeAll (){
    var tPrice = 0
    var oPrice
    var pPrice = 0
    var goodsNum
    function tpSum(){
        $('.totalPrice span').each(function(index,item){
            pPrice += Number($(item).text())
        })
        $('.num').text(pPrice)
        pPrice = 0
    }
    $('.carList li').each(function(index,item){
        oPrice = $('.carList li .onePrice span').eq(index).text()
        tPrice = $('.carList .nowNum').eq(index).text()*oPrice
        $('.carList .totalPrice span').eq(index).text(tPrice)
        tpSum()
    })
    //事件委托
    $('#goodsCar').on('click',function(e){
        var target = e.target
        //全选的点击
        if (target.className == 'selectAll'){
            if ( $('.selectAll').prop('checked') ) {
                $('.carList li input').each(function (index,item){
                    $(item).prop('checked',true)
                })
            } else {
                $('.carList li input').each(function (index,item){
                    $(item).prop('checked',false)
                })
            }
        }
        //单个选中按钮的点击
        if (target.className == 'one') {
            var flag = true
            $('.one').each(function(index,item){
                if (!$(item).prop('checked')) {
                    $('.selectAll').prop('checked',false)
                    flag = false
                    return false
                }
                if (flag) {
                    $( '.selectAll' ).prop('checked',true)
                }
            })
        }
        //删除一条按钮的点击
        if (target.className == 'delOne'){
            $(target).parent().parent().remove()
            var li = document.querySelectorAll('.carList li')
            if (li.length < 1){
                $('.carList').html('<li class="noGoods"><span>购物车还是空的！</span></li>')
            }
            tpSum()
            //判断全选
            flag = true
            $('.one').each(function(index,item){
                if (!$(item).prop('checked')) {
                    $('.selectAll').prop('checked',false)
                    flag = false
                    return false
                }
                if (flag) {
                    $( '.selectAll' ).prop('checked',true)
                }
            })
        }
        //批量删除
        if (target.className == 'delSome'){
            $( '.carList li input:checked' ).each(function (index,item){
                $(item).parent().remove()
                tpSum()
            })
            var li = document.querySelectorAll('.carList li')
            if (li.length < 1){
                $('.carList').html('<li class="noGoods"><span>购物车还是空的！</span></li>')
            }
            //判断全选
            flag = true
            $('.one').each(function(index,item){
                if (!$(item).prop('checked')) {
                    $('.selectAll').prop('checked',false)
                    flag = false
                    return false
                }
                if (flag) {
                    $( '.selectAll' ).prop('checked',true)
                }
            })
        }
        //点击-后价钱的计算

        // console.log(target.className);
    })
    // 购物车价钱计算
    $( '.carList li .num-count' ).each(function (index,item){
        tPrice += Number($('.carList li .totalPrice span').eq(index).text())
        // $( '.num' ).text(tPrice)
        $('.carList li .num-count .less').eq(index).click(function (){
            tPrice -= Number($('.carList li .onePrice span').eq(index).text())
            goodsNum = Number( $('.carList li .num-count .nowNum').eq(index).text() )
            oPrice = Number ( $('.carList li .onePrice span').eq(index).text() )
            goodsNum--
            if ( goodsNum <= 0 ) {
                goodsNum = 0;
            }
            $('.carList li .num-count .nowNum').eq(index).text(goodsNum)
            $('.carList li .totalPrice span').eq(index).text(goodsNum*oPrice)
            tpSum()
            // $( '.num' ).text(tPrice)
        })
        $('.carList li .num-count .more').eq(index).click(function (){
            tPrice += Number($('.carList li .onePrice span').eq(index).text())
            goodsNum = Number( $('.carList li .num-count .nowNum').eq(index).text() )
            oPrice = Number ( $('.carList li .onePrice span').eq(index).text() )
            goodsNum++
            if ( goodsNum >= 99 ) {
                goodsNum = 99;
            }
            $('.carList li .num-count .nowNum').eq(index).text(goodsNum)
            $('.carList li .totalPrice span').eq(index).text(goodsNum*oPrice)
            tpSum()
            // $( '.num' ).text(tPrice)
        })
    })
}