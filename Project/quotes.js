// Array of words
var words = ['A healthy outside starts from the inside.',
'Love yourself enough to live a healthy lifestyle',
 'Take care of your body. It is the only place you have to live.',
  'Your body deserves the best.',
'The ingredients of health and long life, and great temperance, open air, easy labor, and little care.',
'What you eat literally becomes you. You have a choice in what you are made of.',
'Your body will be around a lot longer than that expensive handbag. Invest in yourself.',
'You cannot expect to look like a million bucks if you eat from the dollar menu.',
'There is no diet that will do what eating healthy does. Skip the diet. Just eat healthy.',
'Before healing others, heal yourself.',
'After dinner rest a while; after supper walk a mile.',
'Prevention is better than cure.',
'The body is like a piano, and happiness is like music. It is needful to have the instrument in good order.'];
//Array of address
var addr=['https://ak7.picdn.net/shutterstock/videos/2870227/thumb/1.jpg','https://www.pinnaclespecialtyhospital.com/wp-content/uploads/pinnacle-doctor-patient-tulsa.jpg','https://previews.123rf.com/images/rocketclips/rocketclips1411/rocketclips141104219/33803213-hispanic-woman-doctor-talking-to-patient-in-hospital-bed.jpg','https://cosmos-magazine.imgix.net/file/spina/photo/10429/170516_OlderDoctor_Full.jpg?fit=clip&w=835'];
// Function that executes every 2000 milliseconds
 var t = setInterval(function() {
  // Random number generator
 var randomNumber = Math.round( Math.random() * (words.length-1) );
  // Random number for image
 var imagernumber = Math.round( Math.random() * (addr.length-1) );
  //adding color
  var res = words[randomNumber].fontcolor("Blue");
  // Change the word in the span for a random one in the array of words
document.getElementById('changing').innerHTML = res;
document.getElementById('imgchange').src = addr[imagernumber];
}, 3000);
