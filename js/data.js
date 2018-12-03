//images of girls
let listOfBaes = 
"<ul id='container'>" +
"<li><div class='show'><img src='../images/bae1.jpg' alt='test_image' class='img_char'><p class='name_char'>Shikori Miyokava<br><span class='about_me'><br/> Help me get better at languages! <br> I speak some Vietnamese, Japanese, Korean, and I really want to learn Mandarin! </span> </p></div></li>" +
"<li><div class='bae_list'><img src='../images/bae2.jpg' alt='test_image' class='img_char'><p class='name_char'>Alice <br><span class='about_me'><br/> Help me get better at languages! <br> I speak some Vietnamese, Japanese, Korean, and I really want to learn Mandarin! </span></p></div></li>" +
"<li><div class='bae_list'><img src='../images/bae3.jpg' alt='test_image' class='img_char'><p class='name_char'>Karen <br><span class='about_me'><br/> I am into cheesy pick-up lines.  <br> People often describes me as athletic, funny, bold, and sociable. </span></p></div></li>" +
"<li><div class='bae_list'><img src='../images/bae4.png' alt='test_image' class='img_char'><p class='name_char'>Lizzy <span class='about_me'><br/> Help me get better at languages! <br> I speak some Vietnamese, Japanese, Korean, and I really want to learn Mandarin! </span></p></div></li>" +
"<li><div class='bae_list'><img src='../images/bae5.jpeg' alt='test_image' class='img_char'><p class='name_char'>Emma <span class='about_me'><br/> Help me get better at languages! <br> I speak some Vietnamese, Japanese, Korean, and I really want to learn Mandarin! </span></p></div></li>" +
"<li><div class='bae_list'><img src='../images/bae6.jpeg' alt='test_image' class='img_char'><p class='name_char'>Chloe <span class='about_me'><br/> Help me get better at languages! <br> I speak some Vietnamese, Japanese, Korean, and I really want to learn Mandarin! </span></p></div></li>" +
"<li><div class='bae_list'><img src='../images/bae7.jpeg' alt='test_image' class='img_char'><p class='name_char'>Ellie  <span class='about_me'><br/> Help me get better at languages! <br> I speak some Vietnamese, Japanese, Korean, and I really want to learn Mandarin! </span></p></div></li>" + 
"<li><div class='bae_list'><img src='../images/bae8.jpeg' alt='test_image' class='img_char'><p class='name_char'>Rochelle  <span class='about_me'><br/> Help me get better at languages! <br> I speak some Vietnamese, Japanese, Korean, and I really want to learn Mandarin! </span></p></div></li>" + 
"<li><div class='bae_list'><img src='../images/bae9.jpg' alt='test_image' class='img_char'><p class='name_char'>Angela  <span class='about_me'><br/> Help me get better at languages! <br> I speak some Vietnamese, Japanese, Korean, and I really want to learn Mandarin! </span></p></div></li>" + 
"<li><div class='bae_list'><img src='../images/bae10.jpg' alt='test_image' class='img_char'><p class='name_char'>Sara  <span class='about_me'><br/> Help me get better at languages! <br> I speak some Vietnamese, Japanese, Korean, and I really want to learn Mandarin! </span></p></div></p></div></li>" 
"</ul>";

//let someOtherData = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
let galleryOfBaes = 
[{
  src: '../images/bae1.jpg',
  alt: 'test_image',
  class: 'gallery_bae'
},
{
  src: '../images/bae2.jpg',
  alt: 'test_image',
  class: 'gallery_bae'
},
{
  src: '../images/bae3.jpg',
  alt: 'test_image',
  class: 'gallery_bae'
},
{
  src: '../images/bae4.png',
  alt: 'test_image',
  class: 'gallery_bae'
},
{
  src: '../images/bae5.jpeg',
  alt: 'test_image',
  class: 'gallery_bae'
},
{
  src: '../images/bae6.jpeg',
  alt: 'test_image',
  class: 'gallery_bae'
},
{
  src: '../images/bae7.jpeg',
  alt: 'test_image',
  class: 'gallery_bae'
},
{
  src: '../images/bae8.jpeg',
  alt: 'test_image',
  class: 'gallery_bae'
},
{
  src: '../images/bae9.jpg',
  alt: 'test_image',
  class: 'gallery_bae'
},
{
  src: '../images/bae10.jpg',
  alt: 'test_image',
  class: 'gallery_bae'
}];

module.exports = {
  // HTML
  getlistOfBaes: function() {
    console.log("called: getlistOfBaes");
    return listOfBaes;
  },
  
  getgalleryOfBaes: function() {
    console.log("called: getgalleryOfBaes");
    return galleryOfBaes;
  }
  // getlistofGuys: function() {
  //   console.log("called: getlistofGuys");
  //   return listofGuys;
  // }
};

//
//
//module.exports = {
//  getHTML: function () {
//      console.log("called: getHTML");
//      // Note: this could be from a DB, for now it's just hard-coded
//      return someData;
//  },
//  getJSON: function () {
//      console.log("called: getJSON");
//      // Note: this could be from a DB, for now it's just hard-coded
//      return someOtherData;
//  }
//};