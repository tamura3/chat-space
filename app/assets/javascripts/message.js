$(function(){ 
    function buildHTML(message){
      if ( message.image ) {
        var html =
          `<li class="mainChat__content__message">
            <div class="mainChat__content__message__upper">
              <p class="mainChat__content__message__upper__user">
                ${message.user_name}
              </p>
              <p class="mainChat__content__message__upper__date">
                ${message.created_at}
              </p>
            </div>
            <p class="mainChat__content__message__text">
              ${message.content}
            </p>
            <img src=${message.image} >
          </li>`
        return html;
      } else {
        var html =
          `<li class="mainChat__content__message">
            <div class="mainChat__content__message__upper">
              <p class="mainChat__content__message__upper__user">
                ${message.user_name}
              </p>
              <p class="mainChat__content__message__upper__date">
                ${message.created_at}
              </p>
            </div>
            <p class="mainChat__content__message__text">
              ${message.content}
            </p>
          </li>`
        return html;
      };
    }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.mainChat__content').append(html);
      $('.mainChat__content').animate({ scrollTop: $('.mainChat__content')[0].scrollHeight});
      $('form')[0].reset();
      $(".mainChat__bottom__submitBtn").prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });

  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    var last_message_id = $('.mainChat__content__message:last').data("message-id");
    $.ajax({
      //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
      url: "api/messages",
      //ルーティングで設定した通りhttpメソッドをgetに指定
      type: 'get',
      dataType: 'json',
      //dataオプションでリクエストに値を含める
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log('success');
    })
    .fail(function() {
      alert('error');
    });
  };
  
});