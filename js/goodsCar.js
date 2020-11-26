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
                            <input type="checkbox">
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
    $( '.selectAll' ).click(function (){
        if ( $('.selectAll').prop('checked') ) {
            $('.carList li input').each(function (index,item){
                $(item).prop('checked',true)
            })
        } else {
            $('.carList li input').each(function (index,item){
                $(item).prop('checked',false)
            })
        }
    });
    $( '.carList li input' ).each(function (index,item){
        $(item).click(function(){
            var flag = true;
            $( '.carList li input' ).each(function(ind,ite){
                if (!$(ite).prop('checked')) {
                    $( '.selectAll' ).prop('checked',false)
                    flag = false;
                    return false;
                }
                if (flag) {
                    $( '.selectAll' ).prop('checked',true)
                }
            })
        })
    });
    //删除单条
    $( '.delOne' ).each(function (index,item){
        $(item).click(function (){
            // console.log($('.totalPrice span').eq(index).text());
            // console.log(totalPrice);
            $(this).parent().parent().remove()
            // totalPrice -= Number($('.totalPrice span').eq(index).text())
            // $( '.num' ).text(totalPrice)
        })
    })
    //批量删除
    $( '.delSome' ).click(function (){
        $( '.carList li input:checked' ).each(function (index,item){
            totalPrice -= $('.totalPrice span').eq(index).text()
            $('.num').text(totalPrice)
            $(item).parent().remove()
        })
    })
    //购物车价钱计算
    var goodsNum
    var onePrice
    var totalPrice = 0
    $( '.carList li .num-count' ).each(function (index,item){
        totalPrice += Number($('.carList li .totalPrice span').eq(index).text())
        $( '.num' ).text(totalPrice)
        $('.carList li .num-count .less').eq(index).click(function (){
            totalPrice -= Number($('.carList li .onePrice span').eq(index).text())
            goodsNum = Number( $('.carList li .num-count .nowNum').eq(index).text() )
            onePrice = Number ( $('.carList li .onePrice span').eq(index).text() )
            goodsNum--
            if ( goodsNum <= 0 ) {
                goodsNum = 0;
            }
            $('.carList li .num-count .nowNum').eq(index).text(goodsNum)
            $('.carList li .totalPrice span').eq(index).text(goodsNum*onePrice)
            $( '.num' ).text(totalPrice)
        })
        $('.carList li .num-count .more').eq(index).click(function (){
            totalPrice += Number($('.carList li .onePrice span').eq(index).text())
            goodsNum = Number( $('.carList li .num-count .nowNum').eq(index).text() )
            onePrice = Number ( $('.carList li .onePrice span').eq(index).text() )
            goodsNum++
            if ( goodsNum >= 99 ) {
                goodsNum = 99;
            }
            $('.carList li .num-count .nowNum').eq(index).text(goodsNum)
            $('.carList li .totalPrice span').eq(index).text(goodsNum*onePrice)
            $( '.num' ).text(totalPrice)
        })
    })
}