$(document).on('change', '#micropost_picture', function() {
  // file size validation
  var fileSizeInMB = this.files[0].size / 1024 / 1024
  if (fileSizeInMB > 5) {
    alert('Maximum file size is 5MB. Please choose a smaller file.')
    $(this).val('')
    $('#file_name').val('')
  }

  // show a file name in the readonly input field
  var label = $(this).val().split('\\').pop()
  $('#file_name').val(label)

  // show unselect-picture button
  $('.unselect-picture').removeClass('hidden')
})

$(document).on('click', '.unselect-picture button', function() {
  $('.unselect-picture').addClass('hidden')
  // clear the selected picture
  $('#micropost_picture').val('')
  $('#file_name').val('')
  // prevent default and propagation
  return false
})
