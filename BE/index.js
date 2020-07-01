const express = require('express');
const app = express();

// *******
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/:name1/:name2', (req, res) => {
  var name1 = req.params.name1;
  var name2 = req.params.name2;
  res.send('Hello, '+name1+' and Hello, '+name2);
});

app.get('/products', (req, res) => {
  var products = [
    [
      {
        name : "product1",
        model : "01",
        image : "https://lh3.googleusercontent.com/proxy/60ZTbOmpCWuADif5gPrl6Qeo4xM-eBmgDKMzQhuXbedfRjCh-hGYyTDx69M3LhCJeMITKdCpOjO7XzQYd7OEhCoo-GMuKcO3KMGuEcX1CkytkIClcJgrlTO6e7q9wMegQw3Vu4KnNf6uCScb-LihMw2hSw",
        price : 10
      },
      {
        name : "product2",
        model : "02",
        image : "https://lh3.googleusercontent.com/proxy/xuiLVjrcbtwOAPu5QZoUPLvwqsSe9ujgC-Yc1w8EmbuJYJ8QGVm6H7nPlKEwR0_Ht5khWpFBnbtZAN9t-8A2fZdunNr2w_e-ud9rngnGZzCfJow",
        price : 20
      },
      {
        name : "product3",
        model : "03",
        image : "https://i.ytimg.com/vi/NpuAhhgA4Dk/maxresdefault.jpg",
        price : 30
      },
      {
        name : "product4",
        model : "04",
        image : "https://www.pholfoodmafia.com/wp-content/uploads/2017/10/45HomemadeRaisinBreadB.jpg",
        price : 40
      }
    ],
    [
      {
        name : "product5",
        model : "05",
        image : "https://food.mthai.com/app/uploads/2012/07/%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%9B%E0%B8%B1%E0%B8%87%E0%B8%9B%E0%B8%AD%E0%B8%99%E0%B8%94%E0%B9%8C-300x241.jpg",
        price : 50
      },
      {
        name : "product6",
        model : "06",
        image : "https://mpics.mgronline.com/pics/Images/562000012456502.JPEG",
        price : 60
      }
    ]
  ];
  
  res.json(products);

});

app.listen(8080, 'localhost');