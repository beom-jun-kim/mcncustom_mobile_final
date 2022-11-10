/**
 * 카테고리 리스트 상품 정렬
 */
var aUrl = location.href.split('?');
var sQueryString = aUrl[1];

/**
 * 파라미터가 있을경우에만 처리
 */
$(document).ready(function(){
    if (sQueryString && sQueryString.indexOf('sort_method') > -1) {
        for (var i=0; i<$('#selArray option').length; i++) {
            if ($('#selArray option:eq('+i+')').val().indexOf(sQueryString) > -1) {
                $('#selArray option:eq('+i+')').attr("selected", true);
            }
        }
    }
});

$('#selArray').change(function() {
    if ($('#selArray').val()) {
        location.href=$('#selArray').val();
    }
});

function goThumg(url) {
    location.href = url+'?'+sQueryString;
}

// ======================= 대분류 페이지에서 중분류에게만 li sytle 주기 =========================
if (window.location.href.indexOf('cate_no=51') > -1) {
    $('.xans-product-menupackage .menuCategory li.xans-product-displaysubcategory').addClass('active');
}
if (window.location.href.indexOf('cate_no=55') > -1) {
    $('.xans-product-menupackage .menuCategory li.xans-product-displaysubcategory').addClass('active');
}
// =================== 대분류 페이지에서 중분류에게만 li sytle 주기 최종완료 =====================


// ================================== 제작가능상품 시작. ==================================== 

/* 제작가능 상품 소분류 카테고리 1~14 없애기 및 li style */
/* 포트폴리오 소분류 카테고리 1~14 및 li style 없애기 */
for (i = 60; i <= 69; i++) {

    if (window.location.href.indexOf('cate_no=' + i ) > -1) {
        $('.portpolio__title--clothes:nth-child(1~14) a').addClass('active');
        $('.xans-product-menupackage .menuCategory li.xans-product-displaysubcategory:nth-child(n+15)').css({'width':'20%','text-align':'center','padding':'2px','box-sizing':'border-box','height':'28px','line-height':'28px'});        
    };
}
if (window.location.href.indexOf('cate_no=53') > -1) {
    $('.portpolio__title--clothes:nth-child(1~14) a').addClass('active');
    $('.xans-product-menupackage .menuCategory li.xans-product-displaysubcategory:nth-child(n+15)').css({'width':'20%','text-align':'center','padding':'2px','box-sizing':'border-box','height':'28px','line-height':'28px'});
}

/* 제작가능상품 중분류 동기카테고리 li style */
if (window.location.href.indexOf('cate_no=57') > -1) {
    $('.xans-product-menupackage .menuCategory li.xans-product-displaysubcategory').css({'width':'20%','text-align':'center','padding':'2px','box-sizing':'border-box','height':'28px','line-height':'28px'});
}
if (window.location.href.indexOf('cate_no=59') > -1) {
    $('.xans-product-menupackage .menuCategory li.xans-product-displaysubcategory').css({'width':'20%','text-align':'center','padding':'2px','box-sizing':'border-box','height':'28px','line-height':'28px'});
}

/* 제작가능상품 중분류 동기카테고리 살리기 (1~14 없애야하는 곳에만 코드준거)*/
if (window.location.href.indexOf('cate_no=56') > -1) {
    $('.portpolio__title--clothes:nth-child(1~14) a').addClass('active');
    $('.xans-product-menupackage .menuCategory li.xans-product-displaysubcategory:nth-child(n+15)').css({'width':'20%','text-align':'center','padding':'2px','box-sizing':'border-box','height':'28px','line-height':'28px'});
}
if (window.location.href.indexOf('cate_no=58') > -1) {
    $('.portpolio__title--clothes:nth-child(1~14) a').addClass('active');
    $('.xans-product-menupackage .menuCategory li.xans-product-displaysubcategory:nth-child(n+15)').css({'width':'20%','text-align':'center','padding':'2px','box-sizing':'border-box','height':'28px','line-height':'28px'});
}

// ================================== 제작가능상품 최종완료. ==================================== 


// ================================== 포트폴리오 시작. ==================================== 
/* 소분류 페이지에서 1~14없애기, li style 주기 */
for (i = 356; i <= 371; i++) {

    if (window.location.href.indexOf('cate_no=' + i ) > -1) {
        $('.portpolio__title--clothes:nth-child(1~14) a').addClass('active');
        $('.xans-product-menupackage .menuCategory li.xans-product-displaysubcategory:nth-child(n+15)').css({'width':'20%','text-align':'center','padding':'2px','box-sizing':'border-box','height':'28px','line-height':'28px'});        
    };
}
for (i = 71; i <= 72; i++) {

    if (window.location.href.indexOf('cate_no=' + i ) > -1) {
        $('.portpolio__title--clothes:nth-child(1~14) a').addClass('active');
        $('.xans-product-menupackage .menuCategory li.xans-product-displaysubcategory:nth-child(n+15)').css({'width':'20%','text-align':'center','padding':'2px','box-sizing':'border-box','height':'28px','line-height':'28px'});        
    };
}
for (i = 86; i <= 115; i++) {

    if (window.location.href.indexOf('cate_no=' + i ) > -1) {
        $('.portpolio__title--clothes:nth-child(1~14) a').addClass('active');
        $('.xans-product-menupackage .menuCategory li.xans-product-displaysubcategory:nth-child(n+15)').css({'width':'20%','text-align':'center','padding':'2px','box-sizing':'border-box','height':'28px','line-height':'28px'});        
    };
}
for (i = 120; i <= 121; i++) {

    if (window.location.href.indexOf('cate_no=' + i ) > -1) {
        $('.portpolio__title--clothes:nth-child(1~14) a').addClass('active');
        $('.xans-product-menupackage .menuCategory li.xans-product-displaysubcategory:nth-child(n+15)').css({'width':'20%','text-align':'center','padding':'2px','box-sizing':'border-box','height':'28px','line-height':'28px'});        
    };
}
if (window.location.href.indexOf('cate_no=84' ) > -1) {
    $('.portpolio__title--clothes:nth-child(1~14) a').addClass('active');
    $('.xans-product-menupackage .menuCategory li.xans-product-displaysubcategory:nth-child(n+15)').css({'width':'20%','text-align':'center','padding':'2px','box-sizing':'border-box','height':'28px','line-height':'28px'});        
};
if (window.location.href.indexOf('cate_no=126' ) > -1) {
    $('.portpolio__title--clothes:nth-child(1~14) a').addClass('active');
    $('.xans-product-menupackage .menuCategory li.xans-product-displaysubcategory:nth-child(n+15)').css({'width':'20%','text-align':'center','padding':'2px','box-sizing':'border-box','height':'28px','line-height':'28px'});        
};

/* 포트폴리오 중분류 동기 카테고리 살리기 */
if (window.location.href.indexOf('cate_no=70') > -1) {
    $('.xans-product-menupackage .menuCategory li.xans-product-displaysubcategory').css({'width':'20%','text-align':'center','padding':'2px','box-sizing':'border-box','height':'28px','line-height':'28px'});
}
for (i = 73; i <= 82; i++) {
    if (window.location.href.indexOf('cate_no=' + i ) > -1) {
        $('.xans-product-menupackage .menuCategory li.xans-product-displaysubcategory').css({'width':'20%','text-align':'center','padding':'2px','box-sizing':'border-box','height':'28px','line-height':'28px'});
    };
}
// ================================== 포트폴리오 최종완료. ==================================== 