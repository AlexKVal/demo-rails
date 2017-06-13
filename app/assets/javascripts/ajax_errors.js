$(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
  console.log(ajaxSettings.type, ajaxSettings.url, ajaxSettings.data)

  console.log('--response-start----------------------------------------------')
  console.log(jqXHR.responseText)
  console.log('--response-end------------------------------------------------')

  if (thrownError) {
    console.error('thrownError:', thrownError)
  }
})
