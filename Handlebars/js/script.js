//$(function(){//doc ready
//     
//})();
  var cast = {
      "characters":[
      {
            "name":"Jhon Snow",
            "shortcode":"jon-snow",
            "actor":"Kit Harrington",
            "house":"Stark",
            "location":"The Wall"
      },
      {
            "name":"Tyrion Lanister",
            "shortcode":"jon-snow",
            "actor":"Peter Dinklage",
            "house":"lanister",
            "location": undefined  
      },
      {
            "name":"Brine ot Tarth",
            "shortcode":"jon-snow",
            "actor":"Gwendoline Christie",
            "house":"Clegane",
            "location": null
      },
      {
            "name": "Eddard Stark",
            "shortcode": "jon-snow",
            "actor": "Sean Bean",
            "house":"Stark",
            "location":""
      },
      {
            "name":"Sandor Clegane",
            "shortcode":"jon-snow",
            "actor":"Rory McCann",
            "house":"Clegane",
            "location":"Unknown"
      }
    ]     
  }
  
  $(document).ready(function(){
       var characterTemplate = $("#character-template").html();
    //      console.log(compiledCharacterTemplate({name: "R ich"}));
       var compiledCharacterTemplate = Handlebars.compile(characterTemplate);  
//      console.log(compiledCharacterTemplate({
//            "name":"Jhon Snow",
//            "shortcode":"jon-snow",
//            "actor":"Kit Harrington",
//            "house":"Stark",
//            "location":"The Wall"}));
      
 //     console.log(compiledCharacterTemplate(cast.characters[0]));
   //this two procedure give the same output
      
      
      //this is for task one
      //$(".character-list-container").html(compiledCharacterTemplate(cast.characters[0]));
     $(".character-list-container").html(compiledCharacterTemplate(cast));
  });
  
  
  