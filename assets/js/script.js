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