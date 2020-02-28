function fetchResults(searchTerm) {
  var url = 'http://www.googleapis.com/books/v1/volumes?q=' + searchTerm;
  $.get(url, function(data) {
     // Display results on the page.
  });
}
 
fetchResults('peanut butter sandwich'); 