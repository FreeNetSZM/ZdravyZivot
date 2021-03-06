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
                '<a href="http://www.zelenyzivot.sk/?a_aid=5551fa25d8bf9&a_bid=e470c965">\n' +
                  '<img src="/ZdravyZivot/web/images/zelenyzivot.png" target="_blank" id="IMG_ALI"/></a>\n' + 
                '<div class="star-ratings-sprite"><span style="width:99%" id="STAR_' + id + '" class="star-ratings-sprite-rating"></span></div><div id="SCORE_' + id + '"></div>\n' +        
              '</div>\n' +
          '</div>\n'
      document.getElementById("inner").appendChild(div);
  }    

  $.getJSON('https://freenetszm.github.io/ZdravyZivot/web/css/main.json', function(name) {
     for (i = 0; i < max; i++) {
        id = arg[i];
        document.getElementById("NADPIS_" + i).innerHTML = name[id]["PRODUCTNAME"];
        document.getElementById("OPIS_" + i).innerHTML = name[id]["DESCRIPTION"];
        document.getElementById("KUP_" + i).href = name[id]["URL"] + "?a_aid=5551fa25d8bf9&a_bid=e470c965";     
        document.getElementById("IMG_" + i).src = name[id]["IMGURL"];  
        document.getElementById(i).innerHTML = name[id]["PRICE_VAT"].toFixed(2) + "&nbsp€&nbsp&nbsp"; 
     }
  });  
}
