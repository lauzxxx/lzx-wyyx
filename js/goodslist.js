$(function () {
    $.ajax({
        url: '../date/goods-list.json',
        type: 'get',
        dataType: 'json',
        success:function(json){
            var domStr = ''
            $.each(json,function(index,item){
                domStr += `
                <li class="m-item">
                    <a href='./goods-inf.html' class="m-item-hd" code="${item.code}"></a>
                    <div class="m-item-bd">
                        <h4>${item.title}</h4>
                        <p class="m-item-price">￥<span>${item.price}</span></p>
                        <hr>
                        <p class="desc">${item.name}</p>
                    </div>
                </li>
                `
            })
            $( '.m-itemList' ).html(domStr)
        }
    })
    $('#goodsArea-warp').on('click','.m-item-hd',function () {
        var code = $(this).attr('code')
        console.log(code);
        var goodsArr=[];
            goodsArr.push({code:code})
        localStorage.setItem('code',JSON.stringify(goodsArr))
      })
})
