//UCC size placeholder 추가
if ($('.uccUrlSize').val() != undefined) {
    $('#ucc_width').attr('placeholder', '넓이');
    $('#ucc_width').attr('value', '');
    $('#ucc_height').attr('placeholder', '높이');
    $('#ucc_height').attr('value', '');
}

$( document ).ready( function() { 
    $("input[type=text]").attr("placeholder", "아이디를 입력하세요"); 
    $("input[type=password]").attr("placeholder", "비밀번호를 입력하세요"); 
});