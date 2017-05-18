$(function () {

  $('#micropost_picture').on('change', function() {
    var label = $(this).val().split('\\').pop()
    $('#file_name').val(label)

    var fileSizeInMB = this.files[0].size / 1024 / 1024
    if (fileSizeInMB > 5) {
      alert('Maximum file size is 5MB. Please choose a smaller file.')
    }
  })

})
