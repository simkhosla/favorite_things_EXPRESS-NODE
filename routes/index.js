var express = require('express');
var router = express.Router();

var books = [
  {"title" : "1984", "author" : "George Orwell", "cover_url" : "http://i.imgur.com/bbICuzb.jpg", "buy_link" : "http://www.amazon.com/gp/product/0451524934/ref=s9_al_bw_g14_ir01?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-4&pf_rd_r=02NR8RS8WWV8XYEEW3KC&pf_rd_t=101&pf_rd_p=2240892382&pf_rd_i=8192263011"},
  {"title" : "Alice In Wonderland", "author" : "Lewis Carroll", "cover_url" : "http://i.imgur.com/JmhawLx.jpg", "buy_link" : "http://www.amazon.com/gp/product/0553213458/ref=s9_al_bw_g14_ir13?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-4&pf_rd_r=02NR8RS8WWV8XYEEW3KC&pf_rd_t=101&pf_rd_p=2240892382&pf_rd_i=8192263011"},
  {"title" : "All The President's Men", "author" : "Woodward & Bernstein", "cover_url" : "http://i.imgur.com/RdCPtec.jpg", "buy_link" : "http://www.amazon.com/All-Presidents-Men-Bob-Woodward/dp/1476770514/ref=sr_1_1?s=books&ie=UTF8&qid=1451224973&sr=1-1&keywords=all+the+president%27s+men"},
  {"title" : "A Brief History of Time", "author" : "Stephen Hawking", "cover_url" : "http://i.imgur.com/THmCJO5.jpg", "buy_link" : "http://www.amazon.com/gp/product/0553380168/ref=s9_al_bw_g14_ir02?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-4&pf_rd_r=02NR8RS8WWV8XYEEW3KC&pf_rd_t=101&pf_rd_p=2240892382&pf_rd_i=8192263011"},
  {"title" : "Catch 22", "author" : "Joseph Heller", "cover_url" : "http://i.imgur.com/cCLA1iG.jpg", "buy_link" : "http://www.amazon.com/gp/product/1451626657/ref=s9_al_bw_g14_ir31?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-4&pf_rd_r=02NR8RS8WWV8XYEEW3KC&pf_rd_t=101&pf_rd_p=2240892382&pf_rd_i=8192263011"},
  {"title" : "Disappearing Spoon", "author" : "Sam Keane", "cover_url" : "http://i.imgur.com/CmOMMCq.jpg", "buy_link" : "http://www.amazon.com/Disappearing-Spoon-Madness-Periodic-Elements/dp/0316051632/ref=sr_1_1?s=books&ie=UTF8&qid=1451225041&sr=1-1&keywords=disappearing+spoon"},
  {"title" : "Guns, Germs, and Steel", "author" : "Jared Diamond", "cover_url" : "http://i.imgur.com/X5R4EUD.jpg", "buy_link" : "http://www.amazon.com/gp/product/0393061310/ref=s9_al_bw_g14_ir13?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-5&pf_rd_r=02NR8RS8WWV8XYEEW3KC&pf_rd_t=101&pf_rd_p=2240892442&pf_rd_i=8192263011"},
  {"title" : "Invisible Man", "author" : "Ralph Ellison", "cover_url" : "http://i.imgur.com/1YxdUJO.jpg", "buy_link" : "http://www.amazon.com/gp/product/0679732764/ref=s9_al_bw_g14_ir22?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-5&pf_rd_r=02NR8RS8WWV8XYEEW3KC&pf_rd_t=101&pf_rd_p=2240892442&pf_rd_i=8192263011"},
  {"title" : "Lolita", "author" : "Vladimir Nobokov", "cover_url" : "http://i.imgur.com/BDoBgTm.jpg", "buy_link" : "http://www.amazon.com/gp/product/0679410430/ref=s9_al_bw_g14_ir32?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-5&pf_rd_r=02NR8RS8WWV8XYEEW3KC&pf_rd_t=101&pf_rd_p=2240892442&pf_rd_i=8192263011"},
  {"title" : "On The Road", "author" : "Jack Kerouac", "cover_url" : "http://i.imgur.com/UzrGz1W.jpg", "buy_link" : "http://www.amazon.com/gp/product/014312028X/ref=s9_al_bw_g14_ir11?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-6&pf_rd_r=02NR8RS8WWV8XYEEW3KC&pf_rd_t=101&pf_rd_p=2255756342&pf_rd_i=8192263011"},
  {"title" : "Persepolis", "author" : "Marjane Satrapi", "cover_url" : "http://i.imgur.com/83OGfOq.jpg", "buy_link" : "http://www.amazon.com/gp/product/037571457X/ref=s9_al_bw_g14_ir13?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-6&pf_rd_r=02NR8RS8WWV8XYEEW3KC&pf_rd_t=101&pf_rd_p=2255756342&pf_rd_i=8192263011"},
  {"title" : "Silent Spring", "author" : "Rachel Carson", "cover_url" : "http://i.imgur.com/HdBCP5G.jpg", "buy_link" : "http://www.amazon.com/gp/product/0618249060/ref=s9_al_bw_g14_ir21?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-6&pf_rd_r=02NR8RS8WWV8XYEEW3KC&pf_rd_t=101&pf_rd_p=2255756342&pf_rd_i=8192263011"},
  {"title" : "The Little Prince", "author" : "Antoine de Saint-Exupéry", "cover_url" : "http://i.imgur.com/rkDBMMd.jpg", "buy_link" : "http://www.amazon.com/gp/product/0547978847/ref=s9_al_bw_g14_ir22?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=02NR8RS8WWV8XYEEW3KC&pf_rd_t=101&pf_rd_p=2255756282&pf_rd_i=8192263011"},
  {"title" : "To Kill a Mockingbird", "author" : "Harper Lee", "cover_url" : "http://i.imgur.com/I1P2K2P.jpg", "buy_link" : "http://www.amazon.com/gp/product/0446310786/ref=s9_al_bw_g14_ir31?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-8&pf_rd_r=02NR8RS8WWV8XYEEW3KC&pf_rd_t=101&pf_rd_p=2255766422&pf_rd_i=8192263011"},
  {"title" : "Where the Sidewalk Ends", "author" : "Shel Silverstein", "cover_url" : "http://i.imgur.com/sVIXf5L.jpg", "buy_link" : "http://www.amazon.com/Where-Sidewalk-Ends-Poems-Drawings/dp/0060256672/ref=sr_1_1?s=books&ie=UTF8&qid=1451225261&sr=1-1&keywords=where+the+sidewalk+ends"}
];

var foods = [
  {"name" : "Butter Chicken", "cuisine_type" : "Indian", "recipe_link" : "http://norecipes.com/recipe/butter-chicken-recipe", "img_url" : "http://i.imgur.com/1T16Qdo.jpg"},
  {"name" : "Ramen Burger", "cuisine_type" : "Asian Fusion", "recipe_link" : "https://www.google.de/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjJlo-EnPzJAhVHuBoKHZ1QCfMQFggjMAA&url=http%3A%2F%2Fallrecipes.com%2Frecipe%2F234111%2Framen-burger%2F&usg=AFQjCNH8Kc-YDNuYz1ECFNQAX8RSHjd7XA&bvm=bv.110151844,d.d2s", "img_url" : "http://i.imgur.com/NdBr4yK.jpg"},
  {"name" : "Fried Rice", "cuisine_type" : "Asian", "recipe_link" : "http://www.thekitchn.com/how-to-make-fried-ricecooking-lessons-from-the-kitchn_1-171785", "img_url" : "http://i.imgur.com/YddWLxn.jpg"},
  {"name" : "Cuban Black Bean Soup", "cuisine_type" : "Cuban", "recipe_link" : "http://www.thekitchn.com/recipe-cuban-black-bean-soup-98048", "img_url" : "http://i.imgur.com/62vHc50.jpg"},
  {"name" : "Steamed Eggs", "cuisine_type" : "Korean", "recipe_link" : "http://www.thekitchn.com/recipe-korean-style-steamed-egg-gyeran-jjimrecipes-167222", "img_url" : "http://i.imgur.com/ohrexSL.jpg"},
  {"name" : "Beef & Peanut Stew", "cuisine_type" : "African", "recipe_link" : "http://www.thekitchn.com/african-peanut-stew-recipes-from-the-kitchn-175978", "img_url" : "http://i.imgur.com/jSfJQOJ.jpg"},
  {"name" : "Vegitarian Pho", "cuisine_type" : "Vietnamese", "recipe_link" : "http://www.thekitchn.com/recipe-vegetarian-pho-107312", "img_url" : "http://i.imgur.com/NAgzGLL.jpg"},
  {"name" : "Shepherd's Pie", "cuisine_type" : "English", "recipe_link" : "http://www.thekitchn.com/winter-casserole-recipe-simple-shepherds-pie-recipes-from-the-kitchn-179722", "img_url" : "http://i.imgur.com/xtFrCxm.jpg"},
  {"name" : "Lamb Korma", "cuisine_type" : "Indian", "recipe_link" : "http://www.thekitchn.com/recipe-lamb-korma-recipes-from-the-kitchn-196350", "img_url" : "http://i.imgur.com/sYMXUVI.jpg"},
  {"name" : "Carbonara", "cuisine_type" : "Italian", "recipe_link" : "http://www.thekitchn.com/how-to-make-pasta-carbonara-170893", "img_url" : "http://i.imgur.com/iNghbrK.jpg"},
  {"name" : "Boeuf Bourguignon", "cuisine_type" : "French", "recipe_link" : "http://www.thekitchn.com/recipe-slow-cooker-boeuf-bourguignon-recipes-from-the-kitchn-196361", "img_url" : "http://i.imgur.com/E9I4xjC.jpg"},
  {"name" : "Enchiladas Verdes", "cuisine_type" : "Mexican", "recipe_link" : "http://www.thekitchn.com/authentic-mexican-recipe-enchi-126901", "img_url" : "http://i.imgur.com/Gtx2Mh7.jpg"},
  {"name" : "Sauerkraut, Potato & Cheese Pierogi", "cuisine_type" : "Polish", "recipe_link" : "http://www.thekitchn.com/freezer-recipe-potato-cheese-amp-sauerkraut-pierogi-recipes-from-the-kitchn-193986", "img_url" : "http://i.imgur.com/HVztw9N.jpg"},
  {"name" : "Thai Green Curry", "cuisine_type" : "Thai", "recipe_link" : "http://www.thekitchn.com/recipe-thai-green-coconut-chicken-curry-15663", "img_url" : "http://i.imgur.com/A4e18Q2.jpg"},
  {"name" : "Salmon & Nigiri Rice Balls", "cuisine_type" : "Japanese", "recipe_link" : "http://www.thekitchn.com/recipe-salmon-and-black-sesame-onigiri-japanese-rice-balls-recipes-from-the-kitchn-190352", "img_url" : "http://i.imgur.com/uHC6yGg.jpg"}
];

var albums = [
  {"title" : "Highway 61 Revisited", "artist": "Bob Dylan", "img_url" : "http://i.imgur.com/ma83H2F.jpg", "buy_link":"http://www.amazon.com/s/ref=nb_sb_ss_c_0_15?url=search-alias%3Dpopular&field-keywords=highway+61+revisited&sprefix=highway+61+revisited%2Caps%2C294"},
  {"title" : "Sgt. Pepper's Lonely Hearts Club Band", "artist" : "Beatles", "img_url" : "http://i.imgur.com/7lHR9ZA.jpg", "buy_link" : "http://www.amazon.com/Sgt-Peppers-Lonely-Hearts-Club/dp/B0025KVLTM/ref=sr_1_1?s=music&ie=UTF8&qid=1451225897&sr=1-1&keywords=sgt+pepper%27s+lonely+hearts+club+band"},
  {"title" : "Rubber Soul", "artist" : "Beatles", "img_url" : "http://i.imgur.com/qjoCVzf.jpg", "buy_link" : "http://www.amazon.com/Rubber-Soul-Beatles/dp/B0025KVLT2/ref=sr_1_1?s=music&ie=UTF8&qid=1451225880&sr=1-1&keywords=rubber+soul"},
  {"title" : "Exile on Main Street", "artist" : "Rolling Stones", "img_url" : "http://i.imgur.com/yTjzTmv.jpg", "buy_link" : "http://www.amazon.com/Exile-Street-Remastered-Rolling-Stones/dp/B0039TD826/ref=sr_1_1?s=music&ie=UTF8&qid=1451225939&sr=1-1&keywords=exile+on+main+street"},
  {"title" : "London Calling", "artist" : "The Clash", "img_url" : "http://i.imgur.com/oenZ0el.jpg", "buy_link" : "http://www.amazon.com/London-Calling-Clash/dp/B00004BZ0N/ref=sr_1_1?s=music&ie=UTF8&qid=1451225970&sr=1-1&keywords=london+calling"},
  {"title" : "Blonde on Blonde", "artist" : "Bob Dylan", "img_url" : "http://i.imgur.com/0EgbhM2.jpg", "buy_link" : "http://www.amazon.com/Blonde-DYLAN-BOB/dp/B00026WU8M/ref=sr_1_1?s=music&ie=UTF8&qid=1451226026&sr=1-1&keywords=blonde+on+blonde"},
  {"title" : "The Velvet Underground", "artist" : "The Velvet Undergound and Nico", "img_url" : "http://i.imgur.com/xn0evGR.jpg", "buy_link" : "http://www.amazon.com/Velvet-Underground-Nico/dp/B000002G7C/ref=sr_1_2?s=music&ie=UTF8&qid=1451226100&sr=1-2&keywords=velvet+underground"},
  {"title" : "Abbey Road", "artist" : "Beatles", "img_url" : "http://i.imgur.com/0Yf4LfV.jpg", "buy_link" : "http://www.amazon.com/Abbey-Road-Beatles/dp/B0025KVLUQ/ref=sr_1_1?s=music&ie=UTF8&qid=1451226127&sr=1-1&keywords=abbey+road"},
  {"title" : "Are You Experienced?", "artist" : "Jimi Hendrix Experience", "img_url" : "http://i.imgur.com/FFAETzO.jpg", "buy_link" : "http://www.amazon.com/Are-Experienced-Jimi-Hendrix-Experience/dp/B00FEDP65W/ref=sr_1_1?s=music&ie=UTF8&qid=1451226163&sr=1-1&keywords=are+you+experienced"},
  {"title" : "Blood on the Tracks", "artist" : "Bob Dylan", "img_url" : "http://i.imgur.com/8whKg9J.jpg", "buy_link" : "http://www.amazon.com/Blood-Tracks-DYLAN-BOB/dp/B00026WU7I/ref=sr_1_1?ie=UTF8&qid=1451226196&sr=8-1&keywords=blood+on+the+tracks"},
  {"title" : "Born To Run", "artist" : "Bruce Springsteen", "img_url" : "http://i.imgur.com/ygsXcPV.jpg", "buy_link" : "http://www.amazon.com/Born-Run-SPRINGSTEEN-BRUCE/dp/B00000255F/ref=sr_1_1?s=music&ie=UTF8&qid=1451226262&sr=1-1&keywords=born+to+run+bruce+springsteen"},
  {"title" : "Thriller", "artist" : "Michael Jackson", "img_url" : "http://i.imgur.com/zlUG8EY.jpg", "buy_link" : "https://www.amazon.com/gp/product/B0013D6LEM?ie=UTF8&keywords=Thriller&qid=1451226364&ref_=sr_1_2&s=music&sr=1-2"},
  {"title" : "The Complete Recordings", "artist" : "Robert Johnson", "img_url" : "http://i.imgur.com/x9ZYq79.jpg", "buy_link" : "http://www.amazon.com/gp/product/B0015LBJ9O?keywords=Complete%20Recordings%20Robert%20Johnson&qid=1451226406&ref_=sr_1_2&s=music&sr=1-2"},
  {"title" : "Rumors", "artist" : "Fleetwood Mac", "img_url" : "http://i.imgur.com/dMNZ22G.jpg", "buy_link" : "http://www.amazon.com/Rumours-FLEETWOOD-MAC/dp/B000002KGT/ref=sr_1_1?s=music&ie=UTF8&qid=1451226445&sr=1-1&keywords=rumors+fleetwood+mac"},
  {"title" : "Led Zeppelin", "artist" : "Led Zeppelin", "img_url" : "http://i.imgur.com/kechnSG.jpg", "buy_link" : "http://www.amazon.com/Led-Zeppelin-I-Deluxe-CD/dp/B00IXHBL7I/ref=sr_1_1?s=music&ie=UTF8&qid=1451226500&sr=1-1&keywords=led+zeppelin"}
]


/* main route */
router.get('/', function(req, res) {
  res.render('index', {
  books : books,
  foods : foods,
  albums : albums
  });
});



/*API Requests Down Below */

/* GET books data. */
router.get('/api/books', function(req , res) {
  res.json(books);
  console.log('GET /api/books');
});

/* GET foods data */
router.get('/api/foods', function(req , res) {
  res.json(foods);
  console.log('GET /api/foods');
});

/* GET albums data */
router.get('/api/albums', function(req , res) {
  res.json(albums);
  console.log('GET /api/albums');
});

module.exports = router;
