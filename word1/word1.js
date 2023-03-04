$.ajax({
    url: 'http://example.com/api/data',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      // Handle the response data here
      console.log(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      // Handle any errors here
      console.log('Error:', textStatus, errorThrown);
    }
  });