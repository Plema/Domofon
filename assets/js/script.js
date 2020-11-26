var customSelect = $('.selectIpv');
jcf.setOptions('customSelect', {
  wrapNative: false,
  wrapNativeOnMobile: false,
  fakeDropInBody: false,
  maxVisibleItems: 4
});

jcf.replace(customSelect);


var rangeCust = $('.rangeCust');
jcf.setOptions('rangeCust', {
  min: 0,
  max: 20,
  step: 1,
});
jcf.replace(rangeCust);


$('.rangeCust').change(function() {
  var range = $(this).val();
  console.log(range);
  var val = $(this).parent().parent().find('.val-range').html(range)
});


var fileCust = $('.fileCust');
jcf.setOptions('rangeCust', {
  placeholderText: 'Файл не выбран',
  buttonText: 'Выберите файл'
});
jcf.replace(fileCust);



$(document).ready(function(){
  // $("#includedContent").load("left-menu.html");



  $(document).on('click', '.navL > li', function() {
    $(".navL > li").removeClass("act-li"),
    $(this).addClass("act-li")
  });

  $(document).on('click', '.hidden > p', function() {
    $(".hidden > p").removeClass("active-li"),
    $(this).addClass("active-li")
  });
});

