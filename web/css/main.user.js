function ProduktID() { 
  var i, id, div;
  var arg = arguments;
  var max = arguments.length;
    
  for (id = 0; id < max; id++) {
    div = document.createElement("div");
      div.setAttribute("id", arg[id]);
      div.setAttribute("class", "bannerID");
      div.innerHTML =
            '<div class="banner_shadow">\n' +
              '<div id="PRODUKT_IMG">\n' +
                '<img class="ID_IMG" id="IMG_' + id +'"/>\n' +
              '</div>\n' +
              '<div class="POPIS" id="POPIS">\n' +
                '<h5 class="NADPIS" id="NADPIS_' + id + '"></h5>\n' +
                 '<div id="OPIS_' + id + '"></div>\n' +
              '</div>\n' +
              '<div id="DOWN">\n' +
                '<div id="DOWN_R">\n' +                  
                  '<span id="PRICE"><div id="' + id + '"></div></span>\n' +
                  '<a target="_blank" class="KUP" id="KUP_' + id + '">\n' +
                  '<i id="KUP_PRED"></i> Kúp\n' +
                  '<i id="KUP_ZA"></i></a>\n' +
                '</div>\n' +
                '<a href="http://s.click.aliexpress.com/e/vR7maIuzV">\n' +
                  '<img src="/ArduinoPoSlovensky/Produkty/images/ali.png" target="_blank" id="IMG_ALI"/></a>\n' + 
                '<div class="star-ratings-sprite"><span style="width:1%" id="STAR_' + id + '" class="star-ratings-sprite-rating"></span></div><div id="SCORE_' + id + '"></div>\n' +        
              '</div>\n' +
          '</div>\n'
      document.getElementById("inner").appendChild(div);
  }    

  $.getJSON('https://freenetszm.github.io/ArduinoPoSlovensky/Produkty/css/main.json', function(name) {
     for (i = 0; i < max; i++) {
        id = arg[i];
        document.getElementById("NADPIS_" + i).innerHTML = name[id][0];
        document.getElementById("OPIS_" + i).innerHTML = name[id][1];
        document.getElementById("KUP_" + i).href = name[id][2];      
     }
  });  
  
  for (i = 0; i < max; i++) {    
    (function(i) {
      id = arg[i];
      $.getJSON('https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getPromotionProductDetail/38404?fields=salePrice,discount,evaluateScore&localCurrency=EUR&productId=' +id, function(data) {
      if (data.result == undefined) {document.getElementById(i).innerHTML = "Dočasne nedostupné &nbsp&nbsp";}
        else {
            if (data.result.discount == "0%") {document.getElementById(i).innerHTML = data.result.salePrice + "&nbsp&nbsp";}
              else {document.getElementById(i).innerHTML = "aktuálna zľava: " + data.result.discount + "&nbsp&nbsp&nbsp" + data.result.salePrice + "&nbsp&nbsp";}
            }
      document.getElementById("STAR_" + i).style.width = (data.result.evaluateScore * 20) + "%";
      document.getElementById("SCORE_" + i).innerHTML = data.result.evaluateScore;       
      });      
      $.getJSON('https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getAppPromotionProduct/38404?productId=' +id, function(img) {
        if (img.result == undefined) {document.getElementById("IMG_" + i).src = "https://freenetszm.github.io/ArduinoPoSlovensky/Produkty/images/aliexpress.jpg";} 
          else {document.getElementById("IMG_" + i).src = img.result.image220;}  
      });   
    })(i);
  } 
}
