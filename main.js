
$.ajax({
  method: 'GET',
  url: 'http://demo.com',
  success: (result) => {
   // result is whatever the URL sends back from the request
     const data = result
  },
  error: function(err) {
   // if any errors occur during the process you can check out the
   // the error by logging the 'err' argument
  }
};
