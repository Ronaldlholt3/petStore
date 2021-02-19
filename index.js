var shop = [
    {
      title: 'Tigers',
      image: 'https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGlnZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      price: '$7,500-15,000',
      description: "It's a tiger"
    },
    {
      title: 'Tigers',
      image: 'https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGlnZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      price: '$7,500-15,000',
      description: "It's a tiger"
    },
    {
      title: 'Tigers',
      image: 'https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGlnZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      price: '$7,500-15,000',
      description: "It's a tiger"
    }
    ];
    var postHTML = ""
    for (var i=0; i < shop.length; i++){
       var container = '<div class="card ' + "\">"
      var heading = '<div class="card-body">'+ "<h5 class=\'card-title\'>'" + shop[i].title + '</h5>'
        var image = '<img  class=\'card-img-top\'  src="' + shop[i].image + '"/>'
        var price = '<p> $' + shop[i].price + '</p>'

     

        var description = '<div class="card-footer"><small class="text-muted">'+ shop[i].description + '</p></small></div></div></div>'
        var concatThis = container + image + heading + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML

//     <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>