/*
 * OpenGenus Coin: The coin for charity
 * Supports 11 services currently
 */

(function(){
  function load(script) 
  {
    document.write('<'+'script src="'+script+'" type="text/javascript"><' + '/script>');
  }

  load("code.js");
  load("functions.js");

  // AMAZON SITES
  load("services/mycchk/mycchk_in.js");
  load("services/mycchk/mycchk_com.js");
  load("services/mycchk/mycchk_ca.js");

})();
