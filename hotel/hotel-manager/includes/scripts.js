if (document.getElementById("Country") != null) {
  var Countries = ['Afghanistan','Albania','Algeria','American Samoa','Andorra','Angola','Anguilla','Antarctica','Antigua','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bosnia','Botswana','Bouvet Island','Brazil','British Indian Ocean Territory','Brunei Darussalam','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Cayman Islands','Central African Republic','Chad','Chile','China','Christmas Island','Cocos (Keeling) Islands','Colombia','Comoros','Congo','Congo','Cook Islands','Costa Rica','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','France','French Guiana','French Polynesia','French Southern Territories','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Holy See','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Korea','Kuwait','Kyrgyzstan','Latvia','Lebanon','Lesotho','Liberia','Liechtenstein','Lithuania','Luxembourg','Macau','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','Netherlands Antilles','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','Niue','Norfolk Island','Northern Mariana Islands','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcairn','Poland','Portugal','Puerto Rico','Qatar','Reunion','Romania','Russian Federation','Rwanda','Saint Kitts And Nevis','Saint Lucia','Saint Vincent And The Grenadines','Samoa','San Marino','Sao Tome And Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Georgia','Spain','Sri Lanka','St. Helena','St. Pierre And Miquelon','Sudan','Suriname','Svalbard And Jan Mayen Islands','Swaziland','Sweden','Switzerland','Syrian Arab Republic','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tokelau','Tonga','Trinidad And Tobago','Tunisia','Turkey','Turkmenistan','Turks And Caicos Islands','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','United States Minor Outlying Islands','Uruguay','Uzbekistan','Vanuatu','Venezuela','Viet Nam','Virgin Islands (British)','Virgin Islands (U.S.)','Wallis And Futuna Islands','Western Sahara','Yemen','Yugoslavia','Zambia','Zimbabwe'];

  for (var i = 0; i < Countries.length; i++) {
    var option = document.createElement("option");
    option.innerHTML = Countries[i];
    option.setAttribute("value", Countries[i]);
    document.getElementById("Country").appendChild(option);
  }
}


$(document).ready(function() {

  $(".sidebar li a").each(function() {
    if (this.href == window.location.href) {
      $(this).addClass("activated");
    }
  });

});
