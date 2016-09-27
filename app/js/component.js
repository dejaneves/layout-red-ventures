(function(){

  app.component('about', { templateUrl:'template/about.html', });
  app .component('foot', { templateUrl:'template/footer.html', });

  app.
    component('productsNewArmchair', {
      templateUrl:'template/product-news.html',
      controller: function() {
        this.collections = {
          "items":[
              {
                active:true,
                products:[
                  {
                    type: 'wood',
                    title: 'Armchair / Wood',
                    images:'images/Layer 3.svg',
                    description:'Modern Black Armchair',
                    price:'$ 350,00'
                  }, {
                    type: 'foam',
                    title: 'Armchair / Foam',
                    images:'images/Layer 6.svg',
                    description:'Modern Gray Armchair',
                    price:'$ 350,00'
                  }, {
                    type: 'foam',
                    title: 'Armchair / Foam',
                    images:'images/Layer 5.svg',
                    description:'Light Blue Armchair',
                    price:'$ 350,00'
                  }, {
                    type: 'wood',
                    title: 'Armchair / Wood',
                    images:'images/Layer 7.svg',
                    description:'Black and Wood Armchair',
                    price:'$ 350,00'
                  }
                ]
              },
              {
                active:false,
                products:[
                  {
                    type: 'wood',
                    title: 'Armchair / Wood',
                    images:'images/Layer 3.svg',
                    description:'Modern Black Armchair',
                    price:'$ 350,00'
                  },{
                    type: 'foam',
                    title: 'Armchair / Foam',
                    images:'images/Layer 6.svg',
                    description:'Modern Black Armchair',
                    price:'$ 350,00'
                  },{
                    type: 'foam',
                    title: 'Armchair / Foam',
                    images:'images/Layer 5.svg',
                    description:'Modern Black Armchair',
                    price:'$ 350,00'
                  },{
                    type: 'wood',
                    title: 'Armchair / Wood',
                    images:'images/Layer 7.svg',
                    description:'Modern Black Armchair',
                    price:'$ 350,00'
                  }
                ]
              }
          ]
        };
      }
    });

  app.
    component('productsBestOf', {
      templateUrl:'template/product-best.html',
      controller: function() {
        this.collections = {
          "items":[
              {
                active:true,
                products:[
                  {
                    type: 'wood',
                    title: 'Chair / Wood',
                    images:'images/Layer 8.svg',
                    description:'Wood Design Chair',
                    price:'$ 150,00'
                  }, {
                    type: 'foam',
                    title: 'Chair / Foam',
                    images:'images/layer-9.svg',
                    description:'Premium Design Chair',
                    price:'$ 150,00'
                  }, {
                    type: 'wood',
                    title: 'Chair / Wood',
                    images:'images/layer-10.svg',
                    description:'White and Wood Chair',
                    price:'$ 150,00'
                  }, {
                    type: 'wood',
                    title: 'Chair / Wood',
                    images:'images/layer-11.svg',
                    description:'Black and Wood Chair',
                    price:'$ 150,00'
                  }
                ]
              },
              {
                active:false,
                products:[
                  {
                    type: 'wood',
                    title: 'Chair / Wood',
                    images:'images/Layer 3.svg',
                    description:'Modern Black Armchair',
                    price:'$ 150,00'
                  },{
                    type: 'wood',
                    title: 'Chair / Wood',
                    images:'images/Layer 6.svg',
                    description:'Modern Black Armchair',
                    price:'$ 150,00'
                  },{
                    type: 'foam',
                    title: 'Chair / Foam',
                    images:'images/Layer 5.svg',
                    description:'Modern Black Armchair',
                    price:'$ 150,00'
                  },{
                    type: 'foam',
                    title: 'Chair / Foam',
                    images:'images/Layer 7.svg',
                    description:'Modern Black Armchair',
                    price:'$ 150,00'
                  }
                ]
              }

          ]
        };
      }
    });

})();
