// https://www.abeautifulsite.net/whipping-file-inputs-into-shape-with-bootstrap-3

$(function() {

  $(document).on('change', ':file', function() {
    var label = $(this).val().replace(/\\/g, '/').replace(/.*\//, '')
    $(this).parents('.input-group').find(':text').val(label)
  })

})
