$.ajax({
    url: '../date/goods-list.json',
    type: 'get',
    dataType: 'json',
    success: function(json){
        var goodsArr = JSON.parse(localStorage.getItem('code'))
        var detailStr = ''
        $.each(json,function(index,obj){
            if (goodsArr[0].code === obj.code){
                detailStr += `
                <div class="m-slide">
                <div class="m-imgbox show">
                    <img src="${obj.img1}" alt="">
                    <div class="img-mask"></div>
                    <div class="max-box">
                      <img src="${obj.img1}" alt="">
                    </div>
                </div>
                <div class="m-imgbox">
                 <img src="${obj.img2}" alt="">
                 <div class="img-mask"></div>
                 <div class="max-box">
                   <img src="${obj.img2}" alt="">
                 </div>
               </div>
               <div class="m-imgbox">
                 <img src="${obj.img3}" alt="">
                 <div class="img-mask"></div>
                 <div class="max-box">
                   <img src="${obj.img3}" alt="">
                 </div>
               </div>
               <div class="m-imgbox">
                 <img src="${obj.img4}" alt="">
                 <div class="img-mask"></div>
                 <div class="max-box">
                   <img src="${obj.img4}" alt="">
                 </div>
               </div>
               <div class="m-imgbox">
                 <img src="${obj.img5}" alt="">
                 <div class="img-mask"></div>
                 <div class="max-box">
                   <img src="${obj.img5}" alt="">
                 </div>
               </div>
                <div class="small-imgbox">
                    <div class="smallImg">
                        <img src="${obj.img1}" alt="">
                    </div>
                    <div class="smallImg">
                       <img src="${obj.img2}" alt="">
                   </div>
                   <div class="smallImg">
                       <img src="${obj.img3}" alt="">
                   </div>
                   <div class="smallImg">
                       <img src="${obj.img4}" alt="">
                   </div>
                   <div class="smallImg">
                       <img src="${obj.img5}" alt="">
                   </div>
                </div>
                <div class="w-button">企业采购更优惠 ></div>
              </div>
              <div class="m-info">
              <div class="intro clearfix">
                  <div class="intro-l">
                      <h4>${obj.title}</h4>
                      <span class="desc">${obj.name}</span>
                  </div>
                  <div class="intro-r">
                      <p class="f-fz20">99.6%</p>
                      <span class="f-fz13">好评率 ></span>
                  </div>
              </div>
              <div class="u-formctr">
                  <div class="pr-box">
                      <span class="label label-1">价格</span>
                      <span class="rp">
                          <span class="rmb">￥</span>
                          <span class="num">${obj.price}</span>
                      </span>
                  </div>
                  <div class="pro">
                      <a href="#">
                          <img src="../img/goodsinfo-img.png" alt="">
                      </a>
                  </div>
                  <div class="saleLine">
                      <span class="label">促销</span>
                      <div class="allTag">全场换购</div>
                      <a href="#">低至三折超值换购</a>
                  </div>
                  <div class="shopBack">
                      <span class="label">购物返</span>
                      <a href="#">最高返29积分</a>
                  </div>
                  <div class="shopLim">
                       <span class="label">限制</span>
                       <i>该商品不可使用优惠券</i>
                   </div>
                   <div class="postage">
                       <span class="label">邮费</span>
                       <i>满99元免邮费</i>
                   </div>
                   <div class="shopSend">
                       <span class="label">配送</span>
                       <i>至</i>
                   </div>
                   <div class="shopServer clearfix">
                       <span class="label">服务</span>
                       <i>·网易自营品牌 ·免费配送到家 ·0天无忧退换 ·不可用券/红包 ·不享受企业折扣 ·不享受学生折扣 ·国内部分地区不可配送</i>
                   </div>
                   <div class="remaker">
                       <span class="label">备注</span>
                       <i>大家具送货安装及售后服务细则> ></i>
                   </div>
              </div>
              <div class="specProp clearfix">
                  <span class="main-color">主题颜色</span>
                  <div class="cont"></div>
              </div>
              <div class="goods-num clearfix">
                  <span class="goods-num-tit">数量</span>
                  <div class="num-count clearfix">
                      <div class="less">-</div>
                      <div class="nowNum">1</div>
                      <div class="more">+</div>
                  </div>
              </div>
              <div class="userDo">
                  <a href="./goodsCar.html" class="buyNow">立即购买</a>
                  <div class="addToCar" code="${obj.code}">加入购物车</div>
                  <div class="storeNow">收藏</div>
              </div>
          </div>
                `
            }
        })
        $( '.detailHd' ).html(detailStr)
        fn()
    }
    
})



function fn(){
    //移动切换图片
$( '.smallImg' ).each( function(index,item){
    $(item).mouseenter(function (){
        $( '.m-imgbox' ).eq( index ).addClass('show').siblings().removeClass('show')
    })
} );

//放大镜
$( '.m-imgbox' ).each(function (ind,ite){
    $(ite).mouseenter(function (){
        $( '.img-mask' ).eq(ind).addClass('active')
        $( '.max-box' ).eq(ind).addClass('active')
    })
    $(ite).mouseleave(function (){
        $( '.img-mask' ).eq(ind).removeClass('active')
        $( '.max-box' ).eq(ind).removeClass('active')

    })
    $(ite).mousemove(function (e){
        var maskLeft = e.pageX - $( '.m-imgbox' ).eq(ind).offset().left - $( '.img-mask' ).eq(ind).width()/2
        // console.log(maskLeft);
        var maskTop = e.pageY - $( '.m-imgbox' ).eq(ind).offset().top - $( '.img-mask' ).eq(ind).height()/2
        // console.log($( '.m-imgbox' ).offset().top);
        if (maskLeft < 0) {
            maskLeft = 0
          }
        if (maskLeft >= ($('.m-imgbox').eq(ind).width()-$('.img-mask').eq(ind).width())) {
        maskLeft = $('.m-imgbox').eq(ind).width()-$('.img-mask').eq(ind).width()
        }
        if (maskTop < 0) {
        maskTop = 0
        }
        if (maskTop >= ($('.m-imgbox').eq(ind).height()-$('.img-mask').eq(ind).height())) {
        maskTop = $('.m-imgbox').eq(ind).height()-$('.img-mask').eq(ind).height()
        }
        var scaleX = maskLeft/($('.m-imgbox').eq(ind).width() - $('.img-mask').eq(ind).width())
        var scaleY = maskTop/($('.m-imgbox').eq(ind).height() - $('.img-mask').eq(ind).height())
        $( '.img-mask' ).eq(ind).css('left',maskLeft)
        $( '.img-mask' ).eq(ind).css('top',maskTop)
        $( '.max-box img' ).eq(ind).css('left',-scaleX*maskLeft)
        $( '.max-box img' ).eq(ind).css('top',-scaleY*maskTop)
    })
});
//商品数量加减
var goodsNum = Number( $('.nowNum').text() )
$( '.less' ).click(function (){
    goodsNum--;
    if (goodsNum <= 0) {
        goodsNum = 0;
    }
    $('.nowNum').text(goodsNum)
})
$( '.more' ).click(function (){
    goodsNum++;
    if (goodsNum >= 99) {
        goodsNum = 99;
    }
    $('.nowNum').text(goodsNum)
})
//点击加入购物车
$('#j-app').on('click','.addToCar',function(){
    var code = $(this).attr('code')
    // console.log(code);
    if (localStorage.getItem('goods')){
        var goodsArr= JSON.parse(localStorage.getItem('goods'))
        //判断缓存中是否存在该商品
        var flag = false
        $.each(goodsArr,function (index,item){
            if (item.code === code) {
                var num = parseInt($('.nowNum').text())
                item.num += num
                flag = true
                return false
            }
            //不存在该商品
            if (!flag) {
                var num = parseInt($('.nowNum').text())
                goodsArr.push({code:code,num:num})
            }
        })
    } else {
        //本地无缓存
        var goodsArr = []
        var num = parseInt($('.nowNum').text())
        goodsArr.push({code:code,num:num})

    }
    // 刷新本地缓存
    localStorage.setItem('goods',JSON.stringify(goodsArr))
})
}