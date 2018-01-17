$(document).ready(function(){
  var quote;
  var author;

  function getNewQuote(){
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format : 'jsonp'
      },
      success: function(response) {
        console.log(response);
        quote = response.quoteText;
        author = response.quoteAuthor;
        $('#quote').text('"' + quote + '"');
        if (author) {
          $('#author').text('As said by ' + author + '.');
        } else {
          $('#author').text('- Unknown');
        }
      }
    });
  }
  getNewQuote();

  $('#get-another-quote-button').on('click', function(e){
    e.preventDefault();
    getNewQuote();
  })

  $('#tweet').on('click', function(e){
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' "' + author + '"'));
  })
  
});