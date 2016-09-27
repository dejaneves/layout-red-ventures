var app = angular.module('app', []);

(function(){ 'use strict';
  /**
  * Panel Hover
  */
  function panelHover(){
    function panelActive(el){
      var el = $(el.currentTarget);
      var active = el.attr('data-active');
      if( typeof active === 'undefined' || active === false )
      el.addClass('active')
    }

    function panelRemoveActive(el){
      var el = $(el.currentTarget);
      el.removeClass('active');
    }

    $(document).on('mouseenter','.col-center .panel',$.proxy(panelActive,this));
    $(document).on('mouseleave','.col-center .panel',$.proxy(panelRemoveActive,this));
  } panelHover();

  /**
  * Material Filter
  * @name filterProductsMaterial
  */
  function filterProductsMaterial(){
    var trigger = {
      selector: '.checkbox-material input[type="checkbox"]',
      eventListener: 'change'
    };

    function filterMaterial(event){
      var el = $(event.currentTarget),
      parent = el.closest('.checkbox-material'),
      items = [],
      panels = $('.products').find('.item').find('.item-material');

      parent.find('input[type="checkbox"]').each(function(i,item){
        if($(item).prop('checked')){
          items.push($(item).attr('data-type'));
        }
      });

      if(items.length){
        panels.each(function(i,panel){
          if( items.indexOf($(panel).attr('data-type')) === -1 ){
            $(panel).hide(200);
          } else {
            $(panel).show(200);
          }
        });
      } else {
        panels.each(function(i,panel){
          $(panel).show(200);
        });
      }
    }

    // Event Delegation
    $(document).on(trigger.eventListener,trigger.selector,$.proxy(filterMaterial,this));

  } filterProductsMaterial();

  /**
   * Type Filter
   * @name filterProductsType
   */
  function filterProductsType(){

    function filterType(event){
      var el = $(event.currentTarget),
      parent = el.closest('.checkbox-type'),
      items = [],
      panels = $('.products').find('.content-parent');

      parent.find('input[type="checkbox"]').each(function(i,item){
        if($(item).prop('checked')){
          items.push($(item).attr('data-type'));
        }
      });

      if(items.length){
        panels.each(function(i,panel){
          if( items.indexOf($(panel).attr('data-parent')) === -1 ){
            $(panel).hide(200);
          } else {
            $(panel).show(200);
          }
        });
      } else {
        panels.each(function(i,panel){
          $(panel).show(200);
        });
      }
    }

    // Event Delegation
    $(document).on('click','.checkbox-type input[type="checkbox"]',$.proxy(filterType,this));

  } filterProductsType();

  /**
   * Display all products
   * @name displayAllProducts
   */
  function displayAllProducts(){

    var filter       = $('.filter'),
    inputCheckbox    = 'input[type="checkbox"]',
    checkBoxParent   = filter.find('.checkbox-type ' + inputCheckbox),
    checkBoxChildren = filter.find('.checkbox-material ' + inputCheckbox);

    var panelsParent = $('.products').find('.content-parent'),
    panelsChildren   = $('.products').find('.item').find('.item-material');

    function filterAllproducts(){
      checkBoxParent.prop('checked',false);
      checkBoxChildren.prop('checked',false);

      panelsParent.show(200);
      panelsChildren.show(200);

    }
    $(document).on('click','.btn-all-products',$.proxy(filterAllproducts,this));

  } displayAllProducts();


})();
