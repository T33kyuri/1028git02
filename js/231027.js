// jQueryの練習 （$マークはjQueryを使っている）

// img要素を取得する
let img = document.getElementById("my_img");
// img要素を取得する
let my_text ;

const imgs = ["じゃんけん_グー.png", "じゃんけん_チョキ.png", "じゃんけん_パー.png"];  // 画像ファイル名
let index ;  // インデックス番号
let index2 ;  // インデックス番号
// functionの仕様 idは「#」、classは「.」、pやh1などは「無し」    
// 初期画像の表示

index = 4  ;  //選択無しの時のエラー表示

// gu の クリックを監視（on） 
$("#gu").on("click", function () {
  // ここに処理を書きます🤗
  index = 0
  $("#my").attr("src", "img/" + imgs[index]);
  $("#my_text").html("グー");
  // この下は消さない
});

// cho の クリックを監視（on） 
$("#cho").on("click", function () {
  // ここに処理を書きます🤗
  index = 1
  $("#my").attr("src", "img/" + imgs[index]);
  $("#my_text").html("チョキ");
  // この下は消さない
});

// pa の クリックを監視（on） 
$("#pa").on("click", function () {
  // ここに処理を書きます🤗
  index = 2
  $("#my").attr("src", "img/" + imgs[index]);
  $("#my_text").html("パー");
  // この下は消さない
});


// コピペ
  // 変数に要素を入れる
  var open = $('.modal-open'),
    close = $('.modal-close'),
    container = $('.modal-container');

$(function(){
  // //開くボタンをクリックしたらモーダルを表示する
  // open.on('click',function(){ 
  //   container.addClass('active');
  //   return false;
  // });

  //閉じるボタンをクリックしたらモーダルを閉じる
  close.on('click',function(){  
    container.removeClass('active');
    $("#cp").removeAttr("src");
    $("#cp_text").html("");
    $("#my").removeAttr("src");
    $("#my_text").html("");
    index = 4  ;  //選択無しの時のエラー表示

    });

  //モーダルの外側をクリックしたらモーダルを閉じる
  // $(document).on('click',function(e) {
  //   if(!$(e.target).closest('.modal-body').length) {
  //     container.removeClass('active');
  //   }
  // });
});

// vs の クリックを監視（on） 
$("#vs").on("click", function () {
  // ここに処理を書きます🤗
  index2 = Math.floor(Math.random()*3);
  $("#cp").attr("src", "img/" + imgs[index2]);
  $("#cp_text").html("グー");

  if (index===index2) {
      $(".comment") .html("引き分け");
    }else if ((index===0&&index2===1)||(index===1&&index2===2)||(index===2&&index2===0)) {
      $(".comment") .html("あなたの勝ち");
    }else if ((index===1&&index2===0)||(index===2&&index2===1)||(index===0&&index2===2)) {
      $(".comment") .html("あなたの負け");
    }else if ((index===4)) {
      $(".comment") .html("自分の手を<br/>決めてください");
    }else{
        $(".comment") .html("error");
  }


    //一秒遅らせて実行
  $(container).delay(500).queue(function(){
    container.addClass('active').dequeue();
  });
  return false;

  // この下は消さない
});


