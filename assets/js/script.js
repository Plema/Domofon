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

  $( ".navL > li" ).click(function(event) {
    $( ".navL > li" ).removeClass('act-li')
    $(this).addClass('act-li')
  });

  $( ".hidden > p" ).click(function(event) {
    $( ".hidden > p" ).removeClass('active-li')
    $(this).addClass('active-li')
  });

});

