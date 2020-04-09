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
    })
})
});