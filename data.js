// ============ FOOD DATABASE (values per 100g edible portion) ============
const FOODS = [

  // ======================= INDIAN FOOD PACK 1 =======================

// RICE
{ id:"basmatirice", icon:"🍚", name:"Basmati Rice (Cooked)", cat:"Rice", kcal:121, protein:3.5, carbs:25.2, fat:0.4, fiber:0.4, sugar:0.1, micros:["Manganese","Selenium"] },
{ id:"jeerarice", icon:"🍚", name:"Jeera Rice", cat:"Rice", kcal:148, protein:3.1, carbs:28.6, fat:2.4, fiber:0.8, sugar:0.2, micros:["Iron"] },
{ id:"vegpulao", icon:"🍚", name:"Vegetable Pulao", cat:"Rice", kcal:156, protein:3.8, carbs:27.8, fat:3.4, fiber:2.2, sugar:1.8, micros:["Vitamin A"] },
{ id:"curdrice", icon:"🍚", name:"Curd Rice", cat:"Rice", kcal:129, protein:3.5, carbs:19.8, fat:4.2, fiber:0.5, sugar:2.2, micros:["Calcium"] },
{ id:"lemonrice", icon:"🍚", name:"Lemon Rice", cat:"Rice", kcal:176, protein:3.3, carbs:30.4, fat:4.6, fiber:1.3, sugar:0.8, micros:["Vitamin C"] },

// BREADS
{ id:"phulka", icon:"🫓", name:"Phulka", cat:"Indian Breads", kcal:275, protein:9.2, carbs:55, fat:2.4, fiber:7.5, sugar:1, micros:["Iron"] },
{ id:"naan", icon:"🫓", name:"Naan", cat:"Indian Breads", kcal:310, protein:9.1, carbs:52, fat:7.2, fiber:2.4, sugar:3, micros:["Calcium"] },
{ id:"butternaan", icon:"🫓", name:"Butter Naan", cat:"Indian Breads", kcal:344, protein:8.7, carbs:51, fat:11, fiber:2.5, sugar:3.2, micros:["Vitamin A"] },
{ id:"alooparatha", icon:"🫓", name:"Aloo Paratha", cat:"Indian Breads", kcal:265, protein:6.4, carbs:34.5, fat:11.5, fiber:4.2, sugar:2.1, micros:["Iron"] },
{ id:"paneerparatha", icon:"🫓", name:"Paneer Paratha", cat:"Indian Breads", kcal:301, protein:10.4, carbs:28.2, fat:16.2, fiber:3.6, sugar:2.4, micros:["Calcium"] },

// BREAKFAST
{ id:"poha", icon:"🍛", name:"Poha", cat:"Breakfast", kcal:130, protein:2.6, carbs:25.5, fat:2.4, fiber:1.8, sugar:1.2, micros:["Iron"] },
{ id:"upma", icon:"🍛", name:"Upma", cat:"Breakfast", kcal:148, protein:4.1, carbs:24.5, fat:4.2, fiber:2.3, sugar:1.8, micros:["Vitamin B"] },
{ id:"idli", icon:"🥮", name:"Idli", cat:"Breakfast", kcal:146, protein:4.5, carbs:30.4, fat:0.7, fiber:2.1, sugar:0.4, micros:["Iron"] },
{ id:"masaladosa", icon:"🥞", name:"Masala Dosa", cat:"Breakfast", kcal:220, protein:5.8, carbs:30.8, fat:8.5, fiber:2.8, sugar:2.2, micros:["Iron"] },
{ id:"meduvada", icon:"🍩", name:"Medu Vada", cat:"Breakfast", kcal:332, protein:8.2, carbs:31.6, fat:19.2, fiber:5.3, sugar:1.5, micros:["Protein"] },

// DALS
{ id:"toordal", icon:"🥣", name:"Toor Dal", cat:"Pulses", kcal:116, protein:7.2, carbs:20.5, fat:1.2, fiber:5.2, sugar:1.6, micros:["Folate"] },
{ id:"masoordal", icon:"🥣", name:"Masoor Dal", cat:"Pulses", kcal:114, protein:9.1, carbs:19.7, fat:0.4, fiber:7.8, sugar:1.7, micros:["Iron"] },
{ id:"uraddal", icon:"🥣", name:"Urad Dal", cat:"Pulses", kcal:118, protein:8.3, carbs:19.6, fat:0.7, fiber:6.5, sugar:1.2, micros:["Magnesium"] },
{ id:"chanadal", icon:"🥣", name:"Chana Dal", cat:"Pulses", kcal:160, protein:8.9, carbs:27.4, fat:2.2, fiber:7.6, sugar:2.4, micros:["Iron"] },

// VEGETABLES
{ id:"bhindi", icon:"🌿", name:"Bhindi", cat:"Vegetables", kcal:33, protein:1.9, carbs:7.5, fat:0.2, fiber:3.2, sugar:1.5, micros:["Vitamin C"] },
{ id:"lauki", icon:"🥒", name:"Bottle Gourd", cat:"Vegetables", kcal:14, protein:0.6, carbs:3.4, fat:0.1, fiber:1.2, sugar:2.1, micros:["Vitamin C"] },
{ id:"karela", icon:"🥬", name:"Bitter Gourd", cat:"Vegetables", kcal:17, protein:1, carbs:3.7, fat:0.2, fiber:2.8, sugar:1.8, micros:["Vitamin C"] },
{ id:"methi", icon:"🥬", name:"Fenugreek Leaves", cat:"Vegetables", kcal:49, protein:4.4, carbs:6, fat:0.9, fiber:4.5, sugar:0.9, micros:["Iron"] },
{ id:"drumstick", icon:"🌿", name:"Drumstick", cat:"Vegetables", kcal:37, protein:2.1, carbs:8.5, fat:0.2, fiber:3.2, sugar:2.5, micros:["Vitamin C"] },

// DAIRY
{ id:"lassi", icon:"🥛", name:"Sweet Lassi", cat:"Beverages", kcal:98, protein:3.3, carbs:15.2, fat:2.8, fiber:0, sugar:13.2, micros:["Calcium"] },
{ id:"skimmilk", icon:"🥛", name:"Skim Milk", cat:"Dairy & Eggs", kcal:35, protein:3.4, carbs:5.1, fat:0.2, fiber:0, sugar:5.1, micros:["Calcium"] },
{ id:"buffalomilk", icon:"🥛", name:"Buffalo Milk", cat:"Dairy & Eggs", kcal:97, protein:3.8, carbs:5.2, fat:6.9, fiber:0, sugar:5.2, micros:["Calcium"] },

// SNACKS
{ id:"samosa", icon:"🥟", name:"Samosa", cat:"Snacks", kcal:308, protein:5.2, carbs:34.1, fat:17.1, fiber:3.6, sugar:2.4, micros:["Iron"] },
{ id:"kachori", icon:"🥟", name:"Kachori", cat:"Snacks", kcal:364, protein:7.1, carbs:39.2, fat:19.3, fiber:4.1, sugar:2.1, micros:["Iron"] },
{ id:"vadapav", icon:"🍔", name:"Vada Pav", cat:"Street Food", kcal:286, protein:6.7, carbs:36.8, fat:12.4, fiber:4.3, sugar:2.5, micros:["Iron"] },
{ id:"pavbhaji", icon:"🍔", name:"Pav Bhaji", cat:"Street Food", kcal:183, protein:4.8, carbs:22.7, fat:8.5, fiber:4.1, sugar:3.2, micros:["Vitamin C"] },
{ id:"panipuri", icon:"🥣", name:"Pani Puri", cat:"Street Food", kcal:180, protein:4.2, carbs:32.1, fat:3.8, fiber:2.4, sugar:2.1, micros:["Iron"] }
  , // FRUITS
  { id:"apple", icon:"🍎", unit:"apple", unitGrams:182, name:"Apple", cat:"Fruits", kcal:52, protein:0.3, carbs:14, fat:0.2, fiber:2.4, sugar:10, micros:["Vitamin C","Potassium"] },
  { id:"banana", icon:"🍌", unit:"banana", unitGrams:118, name:"Banana", cat:"Fruits", kcal:89, protein:1.1, carbs:23, fat:0.3, fiber:2.6, sugar:12, micros:["Vitamin B6","Potassium","Vitamin C"] },
  { id:"orange", icon:"🍊", unit:"orange", unitGrams:131, name:"Orange", cat:"Fruits", kcal:47, protein:0.9, carbs:12, fat:0.1, fiber:2.4, sugar:9, micros:["Vitamin C","Folate"] },
  { id:"mango", icon:"🥭", name:"Mango", cat:"Fruits", kcal:60, protein:0.8, carbs:15, fat:0.4, fiber:1.6, sugar:14, micros:["Vitamin C","Vitamin A","Folate"] },
  { id:"strawberry", icon:"🍓", name:"Strawberry", cat:"Fruits", kcal:32, protein:0.7, carbs:7.7, fat:0.3, fiber:2, sugar:4.9, micros:["Vitamin C","Manganese"] },
  { id:"blueberry", icon:"🫐", name:"Blueberry", cat:"Fruits", kcal:57, protein:0.7, carbs:14.5, fat:0.3, fiber:2.4, sugar:10, micros:["Vitamin K","Vitamin C","Manganese"] },
  { id:"papaya", icon:"🍈", name:"Papaya", cat:"Fruits", kcal:43, protein:0.5, carbs:11, fat:0.3, fiber:1.7, sugar:7.8, micros:["Vitamin C","Vitamin A","Folate"] },
  { id:"pomegranate", icon:"🍎", name:"Pomegranate", cat:"Fruits", kcal:83, protein:1.7, carbs:19, fat:1.2, fiber:4, sugar:14, micros:["Vitamin C","Vitamin K","Folate"] },
  { id:"grapes", icon:"🍇", name:"Grapes", cat:"Fruits", kcal:69, protein:0.7, carbs:18, fat:0.2, fiber:0.9, sugar:16, micros:["Vitamin K","Vitamin C"] },
  { id:"watermelon", icon:"🍉", name:"Watermelon", cat:"Fruits", kcal:30, protein:0.6, carbs:8, fat:0.2, fiber:0.4, sugar:6, micros:["Vitamin C","Vitamin A"] },

  // VEGETABLES
  { id:"spinach", icon:"🥬", name:"Spinach", cat:"Vegetables", kcal:23, protein:2.9, carbs:3.6, fat:0.4, fiber:2.2, sugar:0.4, micros:["Iron","Vitamin K","Vitamin A","Folate"] },
  { id:"broccoli", icon:"🥦", name:"Broccoli", cat:"Vegetables", kcal:34, protein:2.8, carbs:6.6, fat:0.4, fiber:2.6, sugar:1.7, micros:["Vitamin C","Vitamin K","Folate"] },
  { id:"carrot", icon:"🥕", unit:"carrot", unitGrams:61, name:"Carrot", cat:"Vegetables", kcal:41, protein:0.9, carbs:10, fat:0.2, fiber:2.8, sugar:4.7, micros:["Vitamin A","Vitamin K"] },
  { id:"sweetpotato", icon:"🍠", unit:"sweet potato", unitGrams:130, name:"Sweet Potato", cat:"Vegetables", kcal:86, protein:1.6, carbs:20, fat:0.1, fiber:3, sugar:4.2, micros:["Vitamin A","Vitamin C","Potassium"] },
  { id:"potato", icon:"🥔", unit:"potato", unitGrams:173, name:"Potato", cat:"Vegetables", kcal:77, protein:2, carbs:17, fat:0.1, fiber:2.2, sugar:0.8, micros:["Vitamin C","Potassium","Vitamin B6"] },
  { id:"tomato", icon:"🍅", unit:"tomato", unitGrams:123, name:"Tomato", cat:"Vegetables", kcal:18, protein:0.9, carbs:3.9, fat:0.2, fiber:1.2, sugar:2.6, micros:["Vitamin C","Potassium","Vitamin K"] },
  { id:"bellpepper", icon:"🫑", unit:"bell pepper", unitGrams:119, name:"Bell Pepper", cat:"Vegetables", kcal:31, protein:1, carbs:6, fat:0.3, fiber:2.1, sugar:4.2, micros:["Vitamin C","Vitamin A"] },
  { id:"cauliflower", icon:"🥦", name:"Cauliflower", cat:"Vegetables", kcal:25, protein:1.9, carbs:5, fat:0.3, fiber:2, sugar:1.9, micros:["Vitamin C","Vitamin K","Folate"] },
  { id:"beetroot", icon:"🟣", name:"Beetroot", cat:"Vegetables", kcal:43, protein:1.6, carbs:10, fat:0.2, fiber:2.8, sugar:7, micros:["Folate","Manganese","Potassium"] },
  { id:"kale", icon:"🥬", name:"Kale", cat:"Vegetables", kcal:49, protein:4.3, carbs:9, fat:0.9, fiber:3.6, sugar:2.3, micros:["Vitamin K","Vitamin A","Vitamin C","Calcium"] },
  { id:"onion", icon:"🧅", unit:"onion", unitGrams:110, name:"Onion", cat:"Vegetables", kcal:40, protein:1.1, carbs:9.3, fat:0.1, fiber:1.7, sugar:4.2, micros:["Vitamin C","Vitamin B6"] },
  { id:"garlic", icon:"🧄", name:"Garlic", cat:"Vegetables", kcal:149, protein:6.4, carbs:33, fat:0.5, fiber:2.1, sugar:1, micros:["Vitamin C","Vitamin B6","Manganese"] },
  { id:"cucumber", icon:"🥒", unit:"cucumber", unitGrams:301, name:"Cucumber", cat:"Vegetables", kcal:15, protein:0.7, carbs:3.6, fat:0.1, fiber:0.5, sugar:1.7, micros:["Vitamin K","Potassium"] },
  { id:"pumpkin", icon:"🎃", name:"Pumpkin", cat:"Vegetables", kcal:26, protein:1, carbs:6.5, fat:0.1, fiber:0.5, sugar:2.8, micros:["Vitamin A","Potassium"] },

  // GRAINS & CEREALS
  { id:"brownrice", icon:"🍚", name:"Brown Rice (cooked)", cat:"Grains", kcal:123, protein:2.7, carbs:26, fat:1, fiber:1.6, sugar:0.4, micros:["Magnesium","Selenium","Vitamin B6"] },
  { id:"whiterice", icon:"🍚", name:"White Rice (cooked)", cat:"Grains", kcal:130, protein:2.7, carbs:28, fat:0.3, fiber:0.4, sugar:0.1, micros:["Manganese"] },
  { id:"oats", icon:"🌾", name:"Oats (dry)", cat:"Grains", kcal:389, protein:16.9, carbs:66, fat:6.9, fiber:10.6, sugar:0, micros:["Manganese","Phosphorus","Iron"] },
  { id:"wholewheatbread", icon:"🍞", unit:"slice", unitGrams:32, name:"Whole Wheat Bread", cat:"Grains", kcal:247, protein:13, carbs:41, fat:3.4, fiber:7, sugar:5, micros:["Selenium","Manganese","B Vitamins"] },
  { id:"quinoa", icon:"🌾", name:"Quinoa (cooked)", cat:"Grains", kcal:120, protein:4.4, carbs:21, fat:1.9, fiber:2.8, sugar:0.9, micros:["Magnesium","Iron","Folate"] },
  { id:"corn", icon:"🌽", name:"Corn", cat:"Grains", kcal:96, protein:3.4, carbs:21, fat:1.5, fiber:2.4, sugar:4.5, micros:["Vitamin C","Folate","Thiamin"] },
  { id:"barley", icon:"🌾", name:"Barley (cooked)", cat:"Grains", kcal:123, protein:2.3, carbs:28, fat:0.4, fiber:3.8, sugar:0.8, micros:["Selenium","Manganese"] },

  // LEGUMES & PULSES
  { id:"lentils", icon:"🫘", name:"Lentils (cooked)", cat:"Legumes", kcal:116, protein:9, carbs:20, fat:0.4, fiber:7.9, sugar:1.8, micros:["Folate","Iron","Manganese"] },
  { id:"chickpeas", icon:"🫘", name:"Chickpeas (cooked)", cat:"Legumes", kcal:164, protein:8.9, carbs:27, fat:2.6, fiber:7.6, sugar:4.8, micros:["Folate","Manganese","Iron"] },
  { id:"kidneybeans", icon:"🫘", name:"Kidney Beans (cooked)", cat:"Legumes", kcal:127, protein:8.7, carbs:22.8, fat:0.5, fiber:6.4, sugar:0.3, micros:["Folate","Iron","Potassium"] },
  { id:"soybeans", icon:"🌱", name:"Soybeans (cooked)", cat:"Legumes", kcal:173, protein:16.6, carbs:9.9, fat:9, fiber:6, sugar:3, micros:["Iron","Folate","Vitamin K"] },
  { id:"greenpeas", icon:"🫛", name:"Green Peas", cat:"Legumes", kcal:81, protein:5.4, carbs:14, fat:0.4, fiber:5.7, sugar:5.7, micros:["Vitamin K","Vitamin C","Folate"] },

  // DAIRY & EGGS
  { id:"milk", icon:"🥛", name:"Milk (whole)", cat:"Dairy & Eggs", kcal:61, protein:3.2, carbs:4.8, fat:3.3, fiber:0, sugar:5, micros:["Calcium","Vitamin D","Vitamin B12"] },
  { id:"greekyogurt", icon:"🥣", name:"Greek Yogurt (plain)", cat:"Dairy & Eggs", kcal:59, protein:10, carbs:3.6, fat:0.4, fiber:0, sugar:3.6, micros:["Calcium","Vitamin B12","Probiotics"] },
  { id:"cheddar", icon:"🧀", name:"Cheddar Cheese", cat:"Dairy & Eggs", kcal:403, protein:25, carbs:1.3, fat:33, fiber:0, sugar:0.5, micros:["Calcium","Vitamin B12","Zinc"] },
  { id:"egg", icon:"🥚", unit:"egg", unitGrams:50, name:"Egg (whole)", cat:"Dairy & Eggs", kcal:155, protein:13, carbs:1.1, fat:11, fiber:0, sugar:1.1, micros:["Vitamin B12","Vitamin D","Choline","Selenium"] },

  // MEAT & POULTRY
  { id:"chickenbreast", icon:"🍗", name:"Chicken Breast (cooked)", cat:"Meat & Poultry", kcal:165, protein:31, carbs:0, fat:3.6, fiber:0, sugar:0, micros:["Vitamin B6","Niacin","Selenium"] },
  { id:"beef", icon:"🥩", name:"Lean Beef (cooked)", cat:"Meat & Poultry", kcal:250, protein:26, carbs:0, fat:15, fiber:0, sugar:0, micros:["Iron","Zinc","Vitamin B12"] },
  { id:"turkey", icon:"🍗", name:"Turkey Breast (cooked)", cat:"Meat & Poultry", kcal:135, protein:30, carbs:0, fat:1, fiber:0, sugar:0, micros:["Niacin","Vitamin B6","Selenium"] },
  { id:"pork", icon:"🥓", name:"Pork Loin (cooked)", cat:"Meat & Poultry", kcal:242, protein:27, carbs:0, fat:14, fiber:0, sugar:0, micros:["Thiamin","Selenium","Zinc"] },

  // FISH & SEAFOOD
  { id:"salmon", icon:"🐟", name:"Salmon (cooked)", cat:"Fish & Seafood", kcal:208, protein:22, carbs:0, fat:13, fiber:0, sugar:0, micros:["Omega-3","Vitamin D","Vitamin B12","Selenium"] },
  { id:"tuna", icon:"🐟", name:"Tuna (canned in water)", cat:"Fish & Seafood", kcal:116, protein:26, carbs:0, fat:1, fiber:0, sugar:0, micros:["Selenium","Vitamin B12","Niacin"] },
  { id:"shrimp", icon:"🍤", name:"Shrimp (cooked)", cat:"Fish & Seafood", kcal:99, protein:24, carbs:0.2, fat:0.3, fiber:0, sugar:0, micros:["Selenium","Vitamin B12","Iodine"] },
  { id:"sardines", icon:"🐟", name:"Sardines (canned)", cat:"Fish & Seafood", kcal:208, protein:24.6, carbs:0, fat:11.5, fiber:0, sugar:0, micros:["Calcium","Vitamin D","Omega-3"] },

  // NUTS & SEEDS
  { id:"almonds", icon:"🌰", name:"Almonds", cat:"Nuts & Seeds", kcal:579, protein:21.2, carbs:21.6, fat:49.9, fiber:12.5, sugar:4.4, micros:["Vitamin E","Magnesium","Manganese"] },
  { id:"walnuts", icon:"🌰", name:"Walnuts", cat:"Nuts & Seeds", kcal:654, protein:15.2, carbs:13.7, fat:65.2, fiber:6.7, sugar:2.6, micros:["Omega-3","Manganese","Copper"] },
  { id:"chiaseeds", icon:"🌱", name:"Chia Seeds", cat:"Nuts & Seeds", kcal:486, protein:16.5, carbs:42, fat:30.7, fiber:34.4, sugar:0, micros:["Calcium","Omega-3","Manganese"] },
  { id:"flaxseeds", icon:"🌱", name:"Flaxseeds", cat:"Nuts & Seeds", kcal:534, protein:18.3, carbs:29, fat:42.2, fiber:27.3, sugar:1.6, micros:["Omega-3","Manganese","Thiamin"] },
  { id:"peanuts", icon:"🥜", name:"Peanuts", cat:"Nuts & Seeds", kcal:567, protein:25.8, carbs:16, fat:49.2, fiber:8.5, sugar:4.7, micros:["Niacin","Manganese","Vitamin E"] },
  { id:"cashews", icon:"🌰", name:"Cashews", cat:"Nuts & Seeds", kcal:553, protein:18.2, carbs:30.2, fat:43.9, fiber:3.3, sugar:5.9, micros:["Copper","Magnesium","Zinc"] },

  // OILS & FATS
  { id:"oliveoil", icon:"🫒", name:"Olive Oil", cat:"Oils & Fats", kcal:884, protein:0, carbs:0, fat:100, fiber:0, sugar:0, micros:["Vitamin E","Vitamin K"] },
  { id:"butter", icon:"🧈", name:"Butter", cat:"Oils & Fats", kcal:717, protein:0.9, carbs:0.1, fat:81, fiber:0, sugar:0.1, micros:["Vitamin A","Vitamin E"] },
  { id:"coconutoil", icon:"🥥", name:"Coconut Oil", cat:"Oils & Fats", kcal:862, protein:0, carbs:0, fat:100, fiber:0, sugar:0, micros:["MCTs"] },

  // ======================= INDIAN FOOD PACK 2 =======================

// CURRIES & MAIN COURSE
{ id:"butterchicken", icon:"🍛", name:"Butter Chicken", cat:"Curries & Dishes", kcal:220, protein:15.5, carbs:6.2, fat:15.4, fiber:1.1, sugar:3.2, micros:["Protein","Vitamin B12"] },
{ id:"chickencurry", icon:"🍛", name:"Chicken Curry", cat:"Curries & Dishes", kcal:185, protein:18.4, carbs:4.5, fat:10.4, fiber:0.9, sugar:2.1, micros:["Protein","Iron"] },
{ id:"chickentikka", icon:"🍗", name:"Chicken Tikka", cat:"Curries & Dishes", kcal:170, protein:27.2, carbs:2.4, fat:5.2, fiber:0.2, sugar:1.1, micros:["Protein","Vitamin B6"] },
{ id:"tandoorichicken", icon:"🍗", name:"Tandoori Chicken", cat:"Curries & Dishes", kcal:195, protein:28.5, carbs:1.8, fat:8.1, fiber:0.2, sugar:0.8, micros:["Protein","Iron"] },
{ id:"chillichicken", icon:"🍗", name:"Chilli Chicken", cat:"Curries & Dishes", kcal:215, protein:19.5, carbs:9.4, fat:11.2, fiber:1.4, sugar:4.5, micros:["Vitamin C"] },

{ id:"kadaipaneer", icon:"🧀", name:"Kadai Paneer", cat:"Curries & Dishes", kcal:205, protein:10.8, carbs:7.6, fat:15.2, fiber:2.2, sugar:3.1, micros:["Calcium"] },
{ id:"matarpaneer", icon:"🧀", name:"Matar Paneer", cat:"Curries & Dishes", kcal:188, protein:9.5, carbs:10.4, fat:12.3, fiber:3.1, sugar:3.8, micros:["Calcium","Vitamin A"] },
{ id:"shahipaneer", icon:"🧀", name:"Shahi Paneer", cat:"Curries & Dishes", kcal:245, protein:10.2, carbs:8.3, fat:20.1, fiber:1.3, sugar:4.2, micros:["Calcium"] },
{ id:"paneertikka", icon:"🧀", name:"Paneer Tikka", cat:"Curries & Dishes", kcal:220, protein:17.5, carbs:5.2, fat:15.6, fiber:1.4, sugar:2.1, micros:["Protein","Calcium"] },

{ id:"aloogobi", icon:"🥔", name:"Aloo Gobi", cat:"Curries & Dishes", kcal:108, protein:2.9, carbs:14.8, fat:4.4, fiber:3.5, sugar:3.2, micros:["Vitamin C"] },
{ id:"aloomatar", icon:"🥔", name:"Aloo Matar", cat:"Curries & Dishes", kcal:112, protein:3.2, carbs:15.5, fat:4.3, fiber:3.8, sugar:3.6, micros:["Vitamin A"] },
{ id:"jeeraaloo", icon:"🥔", name:"Jeera Aloo", cat:"Curries & Dishes", kcal:125, protein:2.4, carbs:18.1, fat:5.1, fiber:2.8, sugar:1.4, micros:["Potassium"] },
{ id:"dumaloo", icon:"🥔", name:"Dum Aloo", cat:"Curries & Dishes", kcal:155, protein:3.1, carbs:17.6, fat:8.2, fiber:2.6, sugar:2.4, micros:["Vitamin C"] },

{ id:"bhindimasala", icon:"🥬", name:"Bhindi Masala", cat:"Curries & Dishes", kcal:82, protein:2.4, carbs:8.8, fat:4.1, fiber:3.9, sugar:2.5, micros:["Vitamin C"] },
{ id:"bainganbharta", icon:"🍆", name:"Baingan Bharta", cat:"Curries & Dishes", kcal:95, protein:2.3, carbs:10.2, fat:5.1, fiber:4.2, sugar:4.5, micros:["Potassium"] },
{ id:"cabbagesabzi", icon:"🥬", name:"Cabbage Sabzi", cat:"Curries & Dishes", kcal:58, protein:2.1, carbs:7.2, fat:2.5, fiber:2.8, sugar:3.1, micros:["Vitamin K"] },
{ id:"methialoo", icon:"🥬", name:"Methi Aloo", cat:"Curries & Dishes", kcal:105, protein:2.8, carbs:15.4, fat:3.8, fiber:3.5, sugar:2.1, micros:["Iron"] },
{ id:"laukichana", icon:"🥒", name:"Lauki Chana", cat:"Curries & Dishes", kcal:88, protein:4.6, carbs:11.2, fat:2.8, fiber:3.9, sugar:2.4, micros:["Folate"] },

{ id:"fishcurry", icon:"🐟", name:"Fish Curry", cat:"Curries & Dishes", kcal:162, protein:19.6, carbs:3.8, fat:7.1, fiber:0.5, sugar:1.2, micros:["Omega-3"] },
{ id:"prawncurry", icon:"🍤", name:"Prawn Curry", cat:"Curries & Dishes", kcal:148, protein:21.5, carbs:3.2, fat:5.4, fiber:0.4, sugar:1.4, micros:["Selenium"] },
{ id:"eggcurry", icon:"🥚", name:"Egg Curry", cat:"Curries & Dishes", kcal:155, protein:10.1, carbs:4.8, fat:10.4, fiber:0.8, sugar:2.1, micros:["Vitamin B12"] },

// DALS
{ id:"dalfry", icon:"🍲", name:"Dal Fry", cat:"Curries & Dishes", kcal:135, protein:6.2, carbs:15.8, fat:5.1, fiber:4.2, sugar:1.8, micros:["Iron"] },
{ id:"dalpalak", icon:"🍲", name:"Dal Palak", cat:"Curries & Dishes", kcal:102, protein:6.8, carbs:13.4, fat:2.8, fiber:4.8, sugar:1.5, micros:["Iron","Vitamin A"] },
{ id:"moongdal", icon:"🍲", name:"Moong Dal", cat:"Curries & Dishes", kcal:104, protein:7.1, carbs:17.5, fat:0.8, fiber:6.1, sugar:2.0, micros:["Folate"] },
{ id:"kadhi", icon:"🍲", name:"Kadhi", cat:"Curries & Dishes", kcal:86, protein:3.6, carbs:6.8, fat:4.8, fiber:0.8, sugar:3.1, micros:["Calcium"] },

// STREET FOOD
{ id:"misalpav", icon:"🍛", name:"Misal Pav", cat:"Street Food", kcal:198, protein:7.2, carbs:27.8, fat:6.8, fiber:5.3, sugar:2.8, micros:["Iron"] },
{ id:"sevpuri", icon:"🥗", name:"Sev Puri", cat:"Street Food", kcal:215, protein:4.1, carbs:30.5, fat:8.6, fiber:3.1, sugar:3.5, micros:["Vitamin C"] },
{ id:"bhelpuri", icon:"🥗", name:"Bhel Puri", cat:"Street Food", kcal:172, protein:5.1, carbs:29.2, fat:4.1, fiber:4.3, sugar:3.8, micros:["Iron"] },
{ id:"ragdapattice", icon:"🍛", name:"Ragda Pattice", cat:"Street Food", kcal:186, protein:6.8, carbs:28.1, fat:5.2, fiber:4.5, sugar:2.6, micros:["Folate"] },
{ id:"alootikki", icon:"🥔", name:"Aloo Tikki", cat:"Street Food", kcal:192, protein:3.5, carbs:25.8, fat:8.6, fiber:3.6, sugar:1.9, micros:["Potassium"] },

// DESSERTS
{ id:"gulabjamun", icon:"🍮", name:"Gulab Jamun", cat:"Desserts", kcal:387, protein:4.2, carbs:56.8, fat:16.2, fiber:0.5, sugar:41.5, micros:["Calcium"] },
{ id:"rasgulla", icon:"🍮", name:"Rasgulla", cat:"Desserts", kcal:186, protein:4.0, carbs:32.2, fat:4.5, fiber:0, sugar:29.5, micros:["Calcium"] },
{ id:"jalebi", icon:"🥨", name:"Jalebi", cat:"Desserts", kcal:410, protein:2.1, carbs:74.4, fat:11.2, fiber:0.3, sugar:51.2, micros:["Iron"] },
{ id:"rasmalai", icon:"🍮", name:"Rasmalai", cat:"Desserts", kcal:248, protein:6.3, carbs:28.4, fat:12.5, fiber:0.2, sugar:25.1, micros:["Calcium"] },
{ id:"kheer", icon:"🍚", name:"Rice Kheer", cat:"Desserts", kcal:165, protein:4.3, carbs:24.8, fat:5.6, fiber:0.4, sugar:16.8, micros:["Calcium"] },
{ id:"gajarhalwa", icon:"🥕", name:"Gajar Halwa", cat:"Desserts", kcal:248, protein:3.8, carbs:29.2, fat:13.4, fiber:2.5, sugar:20.8, micros:["Vitamin A"] },
{ id:"soanpapdi", icon:"🍬", name:"Soan Papdi", cat:"Desserts", kcal:514, protein:6.5, carbs:60.8, fat:27.4, fiber:1.8, sugar:42.5, micros:["Iron"] },
  // SPICES & HERBS
  { id:"turmeric", icon:"🟧", name:"Turmeric", cat:"Spices & Herbs", kcal:312, protein:9.7, carbs:67, fat:3.3, fiber:22.7, sugar:3.2, micros:["Iron","Manganese","Vitamin B6"] },
  { id:"ginger", icon:"🫚", name:"Ginger", cat:"Spices & Herbs", kcal:80, protein:1.8, carbs:18, fat:0.8, fiber:2, sugar:1.7, micros:["Vitamin C","Manganese","Potassium"] },
  { id:"cinnamon", icon:"🟫", name:"Cinnamon", cat:"Spices & Herbs", kcal:247, protein:4, carbs:81, fat:1.2, fiber:53.1, sugar:2.2, micros:["Calcium","Manganese","Iron"] },
  { id:"pineapple", icon:"🍍", name:"Pineapple", cat:"Fruits", kcal:50, protein:0.5, carbs:13, fat:0.1, fiber:1.4, sugar:10, micros:["Vitamin C","Manganese"] },
  { id:"kiwi", icon:"🥝", unit:"kiwi", unitGrams:76, name:"Kiwi", cat:"Fruits", kcal:61, protein:1.1, carbs:15, fat:0.5, fiber:3, sugar:9, micros:["Vitamin C","Vitamin K"] },
  { id:"peach", icon:"🍑", unit:"peach", unitGrams:150, name:"Peach", cat:"Fruits", kcal:39, protein:0.9, carbs:10, fat:0.3, fiber:1.5, sugar:8.4, micros:["Vitamin C","Vitamin A"] },
  { id:"pear", icon:"🍐", unit:"pear", unitGrams:178, name:"Pear", cat:"Fruits", kcal:57, protein:0.4, carbs:15, fat:0.1, fiber:3.1, sugar:10, micros:["Vitamin C","Potassium"] },
  { id:"plum", icon:"🟣", unit:"plum", unitGrams:66, name:"Plum", cat:"Fruits", kcal:46, protein:0.7, carbs:11, fat:0.3, fiber:1.4, sugar:9.9, micros:["Vitamin C","Vitamin K"] },
  { id:"cherry", icon:"🍒", name:"Cherry", cat:"Fruits", kcal:63, protein:1.1, carbs:16, fat:0.2, fiber:2.1, sugar:12.8, micros:["Vitamin C","Potassium"] },
  { id:"apricot", icon:"🟠", unit:"apricot", unitGrams:35, name:"Apricot", cat:"Fruits", kcal:48, protein:1.4, carbs:11, fat:0.4, fiber:2, sugar:9.2, micros:["Vitamin A","Vitamin C"] },
  { id:"fig", icon:"🟤", unit:"fig", unitGrams:50, name:"Fig", cat:"Fruits", kcal:74, protein:0.8, carbs:19, fat:0.3, fiber:2.9, sugar:16, micros:["Calcium","Potassium"] },
  { id:"lychee", icon:"🍈", name:"Lychee", cat:"Fruits", kcal:66, protein:0.8, carbs:17, fat:0.4, fiber:1.3, sugar:15, micros:["Vitamin C","Copper"] },
  { id:"guava", icon:"🟢", unit:"guava", unitGrams:55, name:"Guava", cat:"Fruits", kcal:68, protein:2.6, carbs:14, fat:1, fiber:5.4, sugar:8.9, micros:["Vitamin C","Fiber"] },
  { id:"avocado", icon:"🥑", unit:"avocado", unitGrams:150, name:"Avocado", cat:"Fruits", kcal:160, protein:2, carbs:8.5, fat:14.7, fiber:6.7, sugar:0.7, micros:["Vitamin K","Potassium","Vitamin E"] },
  { id:"zucchini", icon:"🥒", name:"Zucchini", cat:"Vegetables", kcal:17, protein:1.2, carbs:3.1, fat:0.3, fiber:1, sugar:2.5, micros:["Vitamin C","Potassium"] },
  { id:"eggplant", icon:"🍆", name:"Eggplant", cat:"Vegetables", kcal:25, protein:1, carbs:6, fat:0.2, fiber:3, sugar:3.5, micros:["Fiber","Manganese"] },
  { id:"asparagus", icon:"🌱", name:"Asparagus", cat:"Vegetables", kcal:20, protein:2.2, carbs:3.9, fat:0.1, fiber:2.1, sugar:1.9, micros:["Vitamin K","Folate"] },
  { id:"cabbage", icon:"🥬", name:"Cabbage", cat:"Vegetables", kcal:25, protein:1.3, carbs:5.8, fat:0.1, fiber:2.5, sugar:3.2, micros:["Vitamin C","Vitamin K"] },
  { id:"lettuce", icon:"🥬", name:"Lettuce", cat:"Vegetables", kcal:15, protein:1.4, carbs:2.9, fat:0.2, fiber:1.3, sugar:0.8, micros:["Vitamin A","Vitamin K"] },
  { id:"celery", icon:"🌱", name:"Celery", cat:"Vegetables", kcal:16, protein:0.7, carbs:3, fat:0.2, fiber:1.6, sugar:1.3, micros:["Vitamin K","Potassium"] },
  { id:"radish", icon:"🔴", name:"Radish", cat:"Vegetables", kcal:16, protein:0.7, carbs:3.4, fat:0.1, fiber:1.6, sugar:1.9, micros:["Vitamin C","Folate"] },
  { id:"greenbeans", icon:"🫛", name:"Green Beans", cat:"Vegetables", kcal:31, protein:1.8, carbs:7, fat:0.2, fiber:3.4, sugar:3.3, micros:["Vitamin C","Vitamin K"] },
  { id:"okra", icon:"🌱", name:"Okra", cat:"Vegetables", kcal:33, protein:1.9, carbs:7.5, fat:0.2, fiber:3.2, sugar:1.5, micros:["Vitamin C","Vitamin K"] },
  { id:"mushroom", icon:"🍄", name:"Mushroom", cat:"Vegetables", kcal:22, protein:3.1, carbs:3.3, fat:0.3, fiber:1, sugar:2, micros:["Vitamin D","Selenium","B Vitamins"] },
  { id:"millet", icon:"🌾", name:"Millet (cooked)", cat:"Grains", kcal:119, protein:3.5, carbs:23, fat:1, fiber:1.3, sugar:0, micros:["Magnesium","Phosphorus"] },
  { id:"buckwheat", icon:"🌾", name:"Buckwheat (cooked)", cat:"Grains", kcal:92, protein:3.4, carbs:20, fat:0.6, fiber:2.7, sugar:0.9, micros:["Manganese","Magnesium"] },
  { id:"ryebread", icon:"🍞", unit:"slice", unitGrams:32, name:"Rye Bread", cat:"Grains", kcal:259, protein:8.5, carbs:48, fat:3.3, fiber:5.8, sugar:4, micros:["Manganese","Selenium"] },
  { id:"couscous", icon:"🍚", name:"Couscous (cooked)", cat:"Grains", kcal:112, protein:3.8, carbs:23, fat:0.2, fiber:1.4, sugar:0.1, micros:["Selenium","Vitamin B6"] },
  { id:"semolina", icon:"🌾", name:"Semolina (dry)", cat:"Grains", kcal:360, protein:12.7, carbs:72.8, fat:1.1, fiber:3.9, sugar:1, micros:["Iron","Folate"] },
  { id:"blackbeans", icon:"🫘", name:"Black Beans (cooked)", cat:"Legumes", kcal:132, protein:8.9, carbs:23.7, fat:0.5, fiber:8.7, sugar:0.3, micros:["Folate","Iron","Magnesium"] },
  { id:"pintobeans", icon:"🫘", name:"Pinto Beans (cooked)", cat:"Legumes", kcal:143, protein:9, carbs:26, fat:0.7, fiber:9, sugar:0.3, micros:["Folate","Iron"] },
  { id:"mungbeans", icon:"🫘", name:"Mung Beans (cooked)", cat:"Legumes", kcal:105, protein:7, carbs:19, fat:0.4, fiber:7.6, sugar:2, micros:["Folate","Manganese"] },
  { id:"limabeans", icon:"🫘", name:"Lima Beans (cooked)", cat:"Legumes", kcal:115, protein:7.8, carbs:20.9, fat:0.4, fiber:7, sugar:2.9, micros:["Folate","Iron","Potassium"] },
  { id:"splitpeas", icon:"🫛", name:"Split Peas (cooked)", cat:"Legumes", kcal:118, protein:8.3, carbs:21.1, fat:0.4, fiber:8.3, sugar:3.4, micros:["Folate","Manganese"] },
  { id:"paneer", icon:"🧀", name:"Paneer", cat:"Dairy & Eggs", kcal:265, protein:18.3, carbs:1.2, fat:20.8, fiber:0, sugar:1.2, micros:["Calcium","Protein"] },
  { id:"cottagecheese", icon:"🧀", name:"Cottage Cheese", cat:"Dairy & Eggs", kcal:98, protein:11.1, carbs:3.4, fat:4.3, fiber:0, sugar:2.7, micros:["Calcium","Selenium"] },
  { id:"mozzarella", icon:"🧀", name:"Mozzarella", cat:"Dairy & Eggs", kcal:280, protein:28, carbs:2.2, fat:17, fiber:0, sugar:1, micros:["Calcium","Vitamin B12"] },
  { id:"eggwhite", icon:"🥚", unit:"egg white", unitGrams:33, name:"Egg White", cat:"Dairy & Eggs", kcal:52, protein:10.9, carbs:0.7, fat:0.2, fiber:0, sugar:0.7, micros:["Riboflavin","Selenium"] },
  { id:"lamb", icon:"🍖", name:"Lamb (cooked)", cat:"Meat & Poultry", kcal:294, protein:25, carbs:0, fat:21, fiber:0, sugar:0, micros:["Iron","Zinc","Vitamin B12"] },
  { id:"duck", icon:"🦆", name:"Duck (cooked)", cat:"Meat & Poultry", kcal:337, protein:19, carbs:0, fat:28.4, fiber:0, sugar:0, micros:["Iron","Selenium"] },
  { id:"chickenthigh", icon:"🍗", name:"Chicken Thigh (cooked)", cat:"Meat & Poultry", kcal:209, protein:26, carbs:0, fat:10.9, fiber:0, sugar:0, micros:["Vitamin B6","Zinc"] },
  { id:"bacon", icon:"🥓", name:"Bacon (cooked)", cat:"Meat & Poultry", kcal:541, protein:37, carbs:1.4, fat:42, fiber:0, sugar:0, micros:["Selenium","Vitamin B1"] },
  { id:"mackerel", icon:"🐟", name:"Mackerel (cooked)", cat:"Fish & Seafood", kcal:205, protein:19, carbs:0, fat:13.9, fiber:0, sugar:0, micros:["Omega-3","Vitamin B12","Vitamin D"] },
  { id:"crab", icon:"🦀", name:"Crab (cooked)", cat:"Fish & Seafood", kcal:97, protein:19.4, carbs:0, fat:1.5, fiber:0, sugar:0, micros:["Vitamin B12","Zinc","Selenium"] },
  { id:"cod", icon:"🐟", name:"Cod (cooked)", cat:"Fish & Seafood", kcal:82, protein:18, carbs:0, fat:0.7, fiber:0, sugar:0, micros:["Vitamin B12","Iodine","Selenium"] },
  { id:"tilapia", icon:"🐟", name:"Tilapia (cooked)", cat:"Fish & Seafood", kcal:96, protein:20.1, carbs:0, fat:1.7, fiber:0, sugar:0, micros:["Selenium","Vitamin B12","Niacin"] },
  { id:"pistachios", icon:"🌰", name:"Pistachios", cat:"Nuts & Seeds", kcal:560, protein:20.2, carbs:27.2, fat:45.3, fiber:10.6, sugar:7.7, micros:["Vitamin B6","Copper","Manganese"] },
  { id:"pumpkinseeds", icon:"🌱", name:"Pumpkin Seeds", cat:"Nuts & Seeds", kcal:559, protein:30.2, carbs:10.7, fat:49, fiber:6, sugar:1.4, micros:["Magnesium","Zinc","Iron"] },
  { id:"sunflowerseeds", icon:"🌻", name:"Sunflower Seeds", cat:"Nuts & Seeds", kcal:584, protein:20.8, carbs:20, fat:51.5, fiber:8.6, sugar:2.6, micros:["Vitamin E","Magnesium","Selenium"] },
  { id:"sesameseeds", icon:"🌱", name:"Sesame Seeds", cat:"Nuts & Seeds", kcal:573, protein:17.7, carbs:23.4, fat:49.7, fiber:11.8, sugar:0.3, micros:["Calcium","Copper","Iron"] },
  { id:"ghee", icon:"🧈", name:"Ghee", cat:"Oils & Fats", kcal:900, protein:0, carbs:0, fat:100, fiber:0, sugar:0, micros:["Vitamin A","Vitamin E"] },
  { id:"sesameoil", icon:"🛢️", name:"Sesame Oil", cat:"Oils & Fats", kcal:884, protein:0, carbs:0, fat:100, fiber:0, sugar:0, micros:["Vitamin E","Vitamin K"] },
  { id:"sunfloweroil", icon:"🛢️", name:"Sunflower Oil", cat:"Oils & Fats", kcal:884, protein:0, carbs:0, fat:100, fiber:0, sugar:0, micros:["Vitamin E"] },
  { id:"blackpepper", icon:"⚫", name:"Black Pepper", cat:"Spices & Herbs", kcal:251, protein:10.4, carbs:64, fat:3.3, fiber:25.3, sugar:0.6, micros:["Manganese","Iron","Vitamin K"] },
  { id:"cumin", icon:"🟤", name:"Cumin", cat:"Spices & Herbs", kcal:375, protein:17.8, carbs:44.2, fat:22.3, fiber:10.5, sugar:2.3, micros:["Iron","Manganese"] },
  { id:"coriander", icon:"🌿", name:"Coriander (leaves)", cat:"Spices & Herbs", kcal:23, protein:2.1, carbs:3.7, fat:0.5, fiber:2.8, sugar:0.9, micros:["Vitamin K","Vitamin A","Vitamin C"] },
  { id:"cardamom", icon:"🟢", name:"Cardamom", cat:"Spices & Herbs", kcal:311, protein:10.8, carbs:68.5, fat:6.7, fiber:28, sugar:0, micros:["Manganese","Vitamin B6"] },
  { id:"greentea", icon:"🍵", name:"Green Tea", cat:"Beverages", kcal:1, protein:0.2, carbs:0, fat:0, fiber:0, sugar:0, micros:["Antioxidants"] },
  { id:"blackcoffee", icon:"☕", name:"Black Coffee", cat:"Beverages", kcal:2, protein:0.3, carbs:0, fat:0, fiber:0, sugar:0, micros:["Potassium","Niacin"] },
  { id:"orangejuice", icon:"🧃", name:"Orange Juice", cat:"Beverages", kcal:45, protein:0.7, carbs:10.4, fat:0.2, fiber:0.2, sugar:8.4, micros:["Vitamin C","Folate"] },
  { id:"coconutwater", icon:"🥥", name:"Coconut Water", cat:"Beverages", kcal:19, protein:0.7, carbs:3.7, fat:0.2, fiber:1.1, sugar:2.6, micros:["Potassium","Magnesium"] },
  { id:"almondmilk", icon:"🥛", name:"Almond Milk (unsweetened)", cat:"Beverages", kcal:17, protein:0.6, carbs:0.6, fat:1.5, fiber:0.3, sugar:0, micros:["Vitamin E","Calcium"] },
  { id:"soymilk", icon:"🥛", name:"Soy Milk (unsweetened)", cat:"Beverages", kcal:33, protein:2.8, carbs:1.8, fat:1.8, fiber:0.4, sugar:1, micros:["Protein","Vitamin B12"] },
  { id:"darkchocolate", icon:"🍫", name:"Dark Chocolate (70%+)", cat:"Sweets & Snacks", kcal:546, protein:4.9, carbs:61, fat:31, fiber:7, sugar:48, micros:["Iron","Magnesium","Copper"] },
  { id:"honey", icon:"🍯", name:"Honey", cat:"Sweets & Snacks", kcal:304, protein:0.3, carbs:82.4, fat:0, fiber:0.2, sugar:82.1, micros:["Trace Manganese"] },
  { id:"jaggery", icon:"🟤", name:"Jaggery", cat:"Sweets & Snacks", kcal:383, protein:0.4, carbs:97.2, fat:0.1, fiber:0, sugar:95, micros:["Iron","Magnesium"] },
  { id:"popcorn", icon:"🍿", name:"Popcorn (air-popped)", cat:"Sweets & Snacks", kcal:387, protein:13, carbs:78, fat:4.5, fiber:14.5, sugar:0.9, micros:["Manganese","Fiber"] },
  { id:"potatochips", icon:"🥔", name:"Potato Chips", cat:"Sweets & Snacks", kcal:536, protein:7, carbs:53, fat:35, fiber:4.4, sugar:0.2, micros:["Potassium"] },
  { id:"icecream", icon:"🍨", name:"Ice Cream", cat:"Sweets & Snacks", kcal:207, protein:3.5, carbs:23.6, fat:11, fiber:0.7, sugar:21.2, micros:["Calcium","Vitamin A"] },
  { id:"cookie", icon:"🍪", name:"Cookie", cat:"Sweets & Snacks", kcal:488, protein:5.9, carbs:64.8, fat:23.4, fiber:1.8, sugar:34.3, micros:["Refined carbs & fat"] },
  { id:"granolabar", icon:"🌾", name:"Granola Bar", cat:"Sweets & Snacks", kcal:471, protein:10, carbs:64, fat:20, fiber:7, sugar:29, micros:["Iron","Fiber","Manganese"] },
  { id:"roti", icon:"🫓", unit:"roti", unitGrams:40, name:"Wheat Roti / Chapati", cat:"Grains", kcal:297, protein:9.8, carbs:54, fat:6, fiber:4.9, sugar:1, micros:["Iron","Magnesium","B Vitamins"] },
  { id:"cocacola", icon:"🥤", name:"Coca-Cola (Cola)", cat:"Beverages", kcal:42, protein:0, carbs:10.6, fat:0, fiber:0, sugar:10.6, micros:["Caffeine (trace)"] },
  { id:"dietcoke", icon:"🥤", name:"Diet Coke", cat:"Beverages", kcal:0, protein:0, carbs:0, fat:0, fiber:0, sugar:0, micros:["Artificial Sweeteners"] },
  { id:"lemonsoda", icon:"🥤", name:"Lemon-Lime Soda", cat:"Beverages", kcal:39, protein:0, carbs:10, fat:0, fiber:0, sugar:10, micros:["None significant"] },
  { id:"energydrink", icon:"🥤", name:"Energy Drink", cat:"Beverages", kcal:45, protein:0, carbs:11, fat:0, fiber:0, sugar:11, micros:["Caffeine","Vitamin B12","Niacin"] },
  { id:"sattu", icon:"🫘", name:"Sattu (Roasted Gram Flour)", cat:"Beverages", kcal:364, protein:20, carbs:58, fat:5, fiber:10, sugar:2, micros:["Iron","Protein","Fiber"] },
  { id:"buttermilk", icon:"🥛", name:"Buttermilk / Chaas", cat:"Beverages", kcal:40, protein:3.3, carbs:4.8, fat:1, fiber:0, sugar:4, micros:["Calcium","Probiotics"] },
  { id:"milkshake", icon:"🥤", name:"Chocolate Milkshake", cat:"Beverages", kcal:112, protein:3.4, carbs:17, fat:3.7, fiber:0.5, sugar:15, micros:["Calcium","Vitamin B12"] },
  { id:"icedtea", icon:"🧊", name:"Sweetened Iced Tea", cat:"Beverages", kcal:29, protein:0, carbs:7.4, fat:0, fiber:0, sugar:7, micros:["Antioxidants"] },
  { id:"curd", icon:"🥣", name:"Curd / Dahi (plain)", cat:"Dairy & Eggs", kcal:61, protein:3.5, carbs:4.7, fat:3.3, fiber:0, sugar:4.7, micros:["Calcium","Probiotics","Vitamin B12"] },
  { id:"moongdalchilla", icon:"🥞", name:"Moong Dal Chilla", cat:"Curries & Dishes", kcal:120, protein:7, carbs:15, fat:3.5, fiber:3, sugar:1, micros:["Protein","Iron","Folate"] },
  { id:"daltadka", icon:"🍲", name:"Dal Tadka", cat:"Curries & Dishes", kcal:116, protein:6, carbs:15, fat:3.5, fiber:4, sugar:1.5, micros:["Folate","Iron"] },
  { id:"dalmakhani", icon:"🍲", name:"Dal Makhani", cat:"Curries & Dishes", kcal:168, protein:6.5, carbs:15, fat:9.5, fiber:4, sugar:2, micros:["Iron","Calcium"] },
  { id:"sambar", icon:"🍲", name:"Sambar", cat:"Curries & Dishes", kcal:85, protein:4, carbs:12, fat:2.5, fiber:3, sugar:2, micros:["Folate","Fiber"] },
  { id:"rajma", icon:"🍛", name:"Rajma (Kidney Bean Curry)", cat:"Curries & Dishes", kcal:140, protein:7, carbs:18, fat:4.5, fiber:5, sugar:2, micros:["Iron","Folate"] },
  { id:"chanamasala", icon:"🍛", name:"Chana Masala", cat:"Curries & Dishes", kcal:164, protein:7, carbs:20, fat:6, fiber:5, sugar:3, micros:["Iron","Folate"] },
  { id:"paneerbuttermasala", icon:"🍛", name:"Paneer Butter Masala", cat:"Curries & Dishes", kcal:230, protein:9, carbs:8, fat:18, fiber:1.5, sugar:4, micros:["Calcium","Vitamin A"] },
  { id:"palakpaneer", icon:"🍛", name:"Palak Paneer", cat:"Curries & Dishes", kcal:180, protein:9, carbs:7, fat:13, fiber:3, sugar:2, micros:["Iron","Calcium","Vitamin A"] },
 // ======================= INDIAN FOOD PACK 3 =======================

// FRUITS
{ id:"jamun", icon:"🟣", name:"Jamun", cat:"Fruits", kcal:60, protein:0.7, carbs:15.6, fat:0.2, fiber:0.6, sugar:11.5, micros:["Iron","Vitamin C"] },
{ id:"custardapple", icon:"🍏", name:"Custard Apple", cat:"Fruits", kcal:94, protein:2.1, carbs:23.6, fat:0.5, fiber:4.4, sugar:18.2, micros:["Vitamin C"] },
{ id:"muskmelon", icon:"🍈", name:"Muskmelon", cat:"Fruits", kcal:34, protein:0.8, carbs:8.2, fat:0.2, fiber:0.9, sugar:7.8, micros:["Vitamin A","Vitamin C"] },
{ id:"dragonfruit", icon:"🐉", name:"Dragon Fruit", cat:"Fruits", kcal:57, protein:1.2, carbs:13.2, fat:0.4, fiber:3.1, sugar:8.2, micros:["Vitamin C"] },
{ id:"sapota", icon:"🥝", name:"Sapota (Chikoo)", cat:"Fruits", kcal:83, protein:0.4, carbs:20.1, fat:1.1, fiber:5.3, sugar:14.7, micros:["Potassium"] },
{ id:"starfruit", icon:"⭐", name:"Star Fruit", cat:"Fruits", kcal:31, protein:1, carbs:6.8, fat:0.3, fiber:2.8, sugar:3.9, micros:["Vitamin C"] },
{ id:"passionfruit", icon:"🥭", name:"Passion Fruit", cat:"Fruits", kcal:97, protein:2.2, carbs:23.4, fat:0.7, fiber:10.4, sugar:11.2, micros:["Vitamin A"] },
{ id:"datesfresh", icon:"🌴", name:"Fresh Dates", cat:"Fruits", kcal:142, protein:1.8, carbs:37.4, fat:0.2, fiber:3.8, sugar:32.4, micros:["Potassium"] },
{ id:"raisins", icon:"🍇", name:"Raisins", cat:"Fruits", kcal:299, protein:3.1, carbs:79.2, fat:0.5, fiber:3.7, sugar:59.2, micros:["Iron"] },
{ id:"dryfig", icon:"🟤", name:"Dry Fig", cat:"Fruits", kcal:249, protein:3.3, carbs:63.9, fat:0.9, fiber:9.8, sugar:47.9, micros:["Calcium"] },

// VEGETABLES
{ id:"parwal", icon:"🥒", name:"Parwal", cat:"Vegetables", kcal:20, protein:1.2, carbs:4.3, fat:0.2, fiber:2.1, sugar:2.2, micros:["Vitamin C"] },
{ id:"tinda", icon:"🟢", name:"Tinda", cat:"Vegetables", kcal:21, protein:1.4, carbs:4.7, fat:0.2, fiber:1.8, sugar:2.5, micros:["Vitamin C"] },
{ id:"arbi", icon:"🥔", name:"Arbi", cat:"Vegetables", kcal:112, protein:1.5, carbs:26.5, fat:0.2, fiber:4.1, sugar:0.5, micros:["Potassium"] },
{ id:"rawbanana", icon:"🍌", name:"Raw Banana", cat:"Vegetables", kcal:122, protein:1.3, carbs:31.8, fat:0.3, fiber:2.8, sugar:15.2, micros:["Vitamin B6"] },
{ id:"capsicum", icon:"🫑", name:"Capsicum", cat:"Vegetables", kcal:31, protein:1, carbs:6, fat:0.3, fiber:2.1, sugar:4.2, micros:["Vitamin C"] },
{ id:"springonion", icon:"🧅", name:"Spring Onion", cat:"Vegetables", kcal:32, protein:1.8, carbs:7.3, fat:0.2, fiber:2.6, sugar:2.3, micros:["Vitamin K"] },
{ id:"turnip", icon:"⚪", name:"Turnip", cat:"Vegetables", kcal:28, protein:0.9, carbs:6.4, fat:0.1, fiber:1.8, sugar:3.8, micros:["Vitamin C"] },
{ id:"mustardgreens", icon:"🥬", name:"Mustard Greens", cat:"Vegetables", kcal:27, protein:2.9, carbs:4.7, fat:0.4, fiber:3.2, sugar:1.3, micros:["Vitamin A","Vitamin K"] },
{ id:"colocasia", icon:"🥔", name:"Colocasia Leaves", cat:"Vegetables", kcal:42, protein:4.4, carbs:6.7, fat:0.7, fiber:3.8, sugar:0.8, micros:["Iron"] },
{ id:"clusterbeans", icon:"🌿", name:"Cluster Beans", cat:"Vegetables", kcal:43, protein:3.2, carbs:10.8, fat:0.4, fiber:5.4, sugar:2.2, micros:["Folate"] },

// RICE
{ id:"vegfriedrice", icon:"🍚", name:"Vegetable Fried Rice", cat:"Rice", kcal:168, protein:4.2, carbs:28.4, fat:4.2, fiber:2.3, sugar:2.1, micros:["Vitamin A"] },
{ id:"schezwanrice", icon:"🍚", name:"Schezwan Rice", cat:"Rice", kcal:184, protein:4.5, carbs:30.8, fat:5.6, fiber:2.2, sugar:3.5, micros:["Vitamin C"] },
{ id:"eggfriedrice", icon:"🍚", name:"Egg Fried Rice", cat:"Rice", kcal:176, protein:6.5, carbs:24.2, fat:5.8, fiber:1.2, sugar:1.4, micros:["Vitamin B12"] },
{ id:"chickenfriedrice", icon:"🍚", name:"Chicken Fried Rice", cat:"Rice", kcal:189, protein:8.8, carbs:24.8, fat:6.4, fiber:1.3, sugar:1.2, micros:["Protein"] },
{ id:"peaspulao", icon:"🍚", name:"Peas Pulao", cat:"Rice", kcal:151, protein:4.3, carbs:26.5, fat:3.1, fiber:2.2, sugar:1.8, micros:["Folate"] },

// INDIAN BREADS
{ id:"makkiroti", icon:"🫓", name:"Makki Roti", cat:"Indian Breads", kcal:290, protein:7.4, carbs:58.1, fat:3.4, fiber:6.2, sugar:1.2, micros:["Iron"] },
{ id:"bajraroti", icon:"🫓", name:"Bajra Roti", cat:"Indian Breads", kcal:322, protein:10.1, carbs:61.4, fat:5.1, fiber:8.2, sugar:1.1, micros:["Magnesium"] },
{ id:"jowarroti", icon:"🫓", name:"Jowar Roti", cat:"Indian Breads", kcal:329, protein:10.5, carbs:66.2, fat:3.1, fiber:9.7, sugar:1.4, micros:["Iron"] },
{ id:"missiroti", icon:"🫓", name:"Missi Roti", cat:"Indian Breads", kcal:305, protein:11.4, carbs:49.8, fat:6.4, fiber:7.5, sugar:1.6, micros:["Protein"] },
{ id:"roomaliroti", icon:"🫓", name:"Roomali Roti", cat:"Indian Breads", kcal:285, protein:8.2, carbs:56.8, fat:2.7, fiber:2.5, sugar:1.4, micros:["Iron"] },

// PULSES
{ id:"lobia", icon:"🫘", name:"Lobia", cat:"Pulses", kcal:116, protein:8.1, carbs:20.8, fat:0.5, fiber:6.5, sugar:2.2, micros:["Iron"] },
{ id:"horsegram", icon:"🫘", name:"Horse Gram", cat:"Pulses", kcal:321, protein:22, carbs:57, fat:0.5, fiber:5.3, sugar:1.6, micros:["Iron","Calcium"] },
{ id:"blackgram", icon:"🫘", name:"Black Gram", cat:"Pulses", kcal:341, protein:25.2, carbs:58.9, fat:1.4, fiber:18.3, sugar:2.1, micros:["Magnesium"] },
{ id:"soychunks", icon:"🌱", name:"Soya Chunks", cat:"Pulses", kcal:345, protein:52, carbs:33, fat:0.5, fiber:13, sugar:8, micros:["Protein","Iron"] },

// DRINKS
{ id:"sugarcanjuice", icon:"🥤", name:"Sugarcane Juice", cat:"Beverages", kcal:74, protein:0.2, carbs:18.2, fat:0.1, fiber:0.2, sugar:16.8, micros:["Potassium"] },
{ id:"mangolassi", icon:"🥭", name:"Mango Lassi", cat:"Beverages", kcal:118, protein:3.4, carbs:19.4, fat:3.1, fiber:0.5, sugar:17.4, micros:["Calcium"] },
{ id:"masalachai", icon:"☕", name:"Masala Chai", cat:"Beverages", kcal:54, protein:1.5, carbs:7.2, fat:2.2, fiber:0.2, sugar:6.2, micros:["Calcium"] },
{ id:"coldcoffee", icon:"🧋", name:"Cold Coffee", cat:"Beverages", kcal:82, protein:2.6, carbs:11.4, fat:3.2, fiber:0.1, sugar:10.4, micros:["Calcium"] },
{ id:"badammilk", icon:"🥛", name:"Badam Milk", cat:"Beverages", kcal:104, protein:4.2, carbs:12.8, fat:4.5, fiber:0.8, sugar:10.8, micros:["Vitamin E"] }
// ======================= INDIAN FOOD PACK 4 =======================

// FAST FOOD
,{ id:"vegburger", icon:"🍔", name:"Veg Burger", cat:"Fast Food", kcal:295, protein:9.1, carbs:37.8, fat:12.2, fiber:3.8, sugar:5.2, micros:["Iron"] },
{ id:"chickenburger", icon:"🍔", name:"Chicken Burger", cat:"Fast Food", kcal:310, protein:16.8, carbs:31.5, fat:13.4, fiber:2.4, sugar:5.1, micros:["Protein"] },
{ id:"cheeseburger", icon:"🍔", name:"Cheeseburger", cat:"Fast Food", kcal:335, protein:17.4, carbs:30.8, fat:16.2, fiber:2.1, sugar:5.4, micros:["Calcium"] },
{ id:"vegpizza", icon:"🍕", name:"Veg Pizza", cat:"Fast Food", kcal:266, protein:11.2, carbs:33.4, fat:10.5, fiber:2.4, sugar:4.1, micros:["Calcium"] },
{ id:"cheesepizza", icon:"🍕", name:"Cheese Pizza", cat:"Fast Food", kcal:285, protein:12.4, carbs:35.1, fat:11.8, fiber:2.2, sugar:3.8, micros:["Calcium"] },
{ id:"pepperonipizza", icon:"🍕", name:"Pepperoni Pizza", cat:"Fast Food", kcal:312, protein:14.3, carbs:33.2, fat:14.5, fiber:2.3, sugar:3.6, micros:["Protein"] },
{ id:"frenchfries", icon:"🍟", name:"French Fries", cat:"Fast Food", kcal:312, protein:3.4, carbs:41.4, fat:15.1, fiber:3.8, sugar:0.4, micros:["Potassium"] },
{ id:"garlicbread", icon:"🥖", name:"Garlic Bread", cat:"Fast Food", kcal:348, protein:8.6, carbs:42.4, fat:16.2, fiber:2.3, sugar:2.8, micros:["Calcium"] },
{ id:"whitepasta", icon:"🍝", name:"White Sauce Pasta", cat:"Fast Food", kcal:198, protein:7.4, carbs:24.8, fat:8.2, fiber:1.8, sugar:2.7, micros:["Calcium"] },
{ id:"redpasta", icon:"🍝", name:"Red Sauce Pasta", cat:"Fast Food", kcal:165, protein:5.9, carbs:28.2, fat:3.9, fiber:2.3, sugar:4.8, micros:["Vitamin C"] },
{ id:"hakkanoodles", icon:"🍜", name:"Hakka Noodles", cat:"Fast Food", kcal:185, protein:5.8, carbs:29.4, fat:5.6, fiber:2.2, sugar:2.8, micros:["Iron"] },
{ id:"chowmein", icon:"🍜", name:"Chow Mein", cat:"Fast Food", kcal:190, protein:6.1, carbs:30.5, fat:5.7, fiber:2.4, sugar:2.6, micros:["Vitamin A"] },
{ id:"vegmomos", icon:"🥟", name:"Veg Momos", cat:"Fast Food", kcal:148, protein:5.1, carbs:24.8, fat:3.2, fiber:2.4, sugar:2.1, micros:["Iron"] },
{ id:"chickenmomos", icon:"🥟", name:"Chicken Momos", cat:"Fast Food", kcal:184, protein:11.6, carbs:19.8, fat:6.4, fiber:1.8, sugar:1.4, micros:["Protein"] },
{ id:"springroll", icon:"🥢", name:"Spring Roll", cat:"Fast Food", kcal:220, protein:5.2, carbs:28.4, fat:9.6, fiber:2.4, sugar:2.5, micros:["Vitamin A"] },

// SOUTH INDIAN
{ id:"ravadosa", icon:"🥞", name:"Rava Dosa", cat:"Breakfast", kcal:185, protein:4.9, carbs:30.4, fat:5.2, fiber:2.1, sugar:1.4, micros:["Iron"] },
{ id:"plaindosa", icon:"🥞", name:"Plain Dosa", cat:"Breakfast", kcal:168, protein:4.2, carbs:29.8, fat:3.8, fiber:1.8, sugar:0.8, micros:["Iron"] },
{ id:"uttapam", icon:"🥞", name:"Uttapam", cat:"Breakfast", kcal:182, protein:5.3, carbs:31.4, fat:4.3, fiber:2.5, sugar:1.6, micros:["Vitamin C"] },
{ id:"pongal", icon:"🍚", name:"Ven Pongal", cat:"Breakfast", kcal:156, protein:4.8, carbs:24.6, fat:4.8, fiber:2.2, sugar:0.6, micros:["Iron"] },
{ id:"appam", icon:"🥞", name:"Appam", cat:"Breakfast", kcal:171, protein:3.2, carbs:33.2, fat:2.8, fiber:1.5, sugar:1.1, micros:["Calcium"] },
{ id:"puttu", icon:"🥥", name:"Puttu", cat:"Breakfast", kcal:173, protein:3.8, carbs:34.2, fat:2.4, fiber:2.6, sugar:0.7, micros:["Iron"] },
{ id:"idiyappam", icon:"🍜", name:"Idiyappam", cat:"Breakfast", kcal:154, protein:3.6, carbs:33.6, fat:0.5, fiber:1.1, sugar:0.3, micros:["Iron"] },
{ id:"coconutchutney", icon:"🥥", name:"Coconut Chutney", cat:"Condiments", kcal:178, protein:2.8, carbs:8.4, fat:15.6, fiber:5.1, sugar:3.4, micros:["Manganese"] },
{ id:"tomatochutney", icon:"🍅", name:"Tomato Chutney", cat:"Condiments", kcal:72, protein:1.6, carbs:8.2, fat:3.8, fiber:2.3, sugar:5.2, micros:["Vitamin C"] },
{ id:"mintchutney", icon:"🌿", name:"Mint Chutney", cat:"Condiments", kcal:54, protein:2.2, carbs:7.8, fat:1.8, fiber:2.9, sugar:2.4, micros:["Vitamin A"] }
// ======================= INDIAN FOOD PACK 5 =======================

// PROTEIN & SUPPLEMENTS
,{ id:"wheyprotein", icon:"💪", name:"Whey Protein", cat:"Supplements", kcal:400, protein:80, carbs:8, fat:6, fiber:0, sugar:5, micros:["Protein","Calcium"] },
{ id:"plantprotein", icon:"🌱", name:"Plant Protein", cat:"Supplements", kcal:380, protein:75, carbs:10, fat:5, fiber:4, sugar:2, micros:["Iron"] },
{ id:"caseinprotein", icon:"🥛", name:"Casein Protein", cat:"Supplements", kcal:365, protein:82, carbs:6, fat:2, fiber:0, sugar:4, micros:["Calcium"] },
{ id:"eggprotein", icon:"🥚", name:"Egg Protein Powder", cat:"Supplements", kcal:372, protein:82, carbs:4, fat:2.2, fiber:0, sugar:2, micros:["Vitamin B12"] },
{ id:"soyprotein", icon:"🌱", name:"Soy Protein Isolate", cat:"Supplements", kcal:338, protein:88, carbs:3.4, fat:0.8, fiber:1.2, sugar:1.2, micros:["Iron"] },

// DRY FRUITS
{ id:"datesdry", icon:"🌴", name:"Dry Dates", cat:"Dry Fruits", kcal:282, protein:2.5, carbs:75, fat:0.4, fiber:8, sugar:63, micros:["Potassium"] },
{ id:"driedapricot", icon:"🟠", name:"Dried Apricot", cat:"Dry Fruits", kcal:241, protein:3.4, carbs:63, fat:0.5, fiber:7.3, sugar:53, micros:["Vitamin A"] },
{ id:"drycranberry", icon:"🔴", name:"Dried Cranberries", cat:"Dry Fruits", kcal:325, protein:0.2, carbs:83, fat:1.1, fiber:5.3, sugar:65, micros:["Vitamin C"] },
{ id:"prunes", icon:"🟣", name:"Prunes", cat:"Dry Fruits", kcal:240, protein:2.2, carbs:64, fat:0.4, fiber:7.1, sugar:38, micros:["Potassium"] },
{ id:"driedkiwi", icon:"🥝", name:"Dried Kiwi", cat:"Dry Fruits", kcal:330, protein:4.2, carbs:74, fat:1.6, fiber:6.1, sugar:58, micros:["Vitamin C"] },

// NUTS & SEEDS
{ id:"pecans", icon:"🌰", name:"Pecans", cat:"Nuts & Seeds", kcal:691, protein:9.2, carbs:14, fat:72, fiber:10, sugar:4, micros:["Vitamin E"] },
{ id:"hazelnuts", icon:"🌰", name:"Hazelnuts", cat:"Nuts & Seeds", kcal:628, protein:15, carbs:17, fat:61, fiber:10, sugar:4.3, micros:["Vitamin E"] },
{ id:"macadamia", icon:"🌰", name:"Macadamia Nuts", cat:"Nuts & Seeds", kcal:718, protein:8, carbs:14, fat:76, fiber:8.6, sugar:4.6, micros:["Manganese"] },
{ id:"brazilnuts", icon:"🌰", name:"Brazil Nuts", cat:"Nuts & Seeds", kcal:659, protein:14, carbs:12, fat:67, fiber:7.5, sugar:2.3, micros:["Selenium"] },
{ id:"watermelonseeds", icon:"🌱", name:"Watermelon Seeds", cat:"Nuts & Seeds", kcal:557, protein:28, carbs:15, fat:47, fiber:4, sugar:0.5, micros:["Magnesium"] },

// SWEETS
{ id:"motichoorladdu", icon:"🍬", name:"Motichoor Laddu", cat:"Desserts", kcal:452, protein:5.3, carbs:58, fat:22, fiber:1.2, sugar:42, micros:["Iron"] },
{ id:"besanladdu", icon:"🍬", name:"Besan Laddu", cat:"Desserts", kcal:478, protein:9.1, carbs:49, fat:27, fiber:2.6, sugar:32, micros:["Protein"] },
{ id:"kajukatli", icon:"🍬", name:"Kaju Katli", cat:"Desserts", kcal:438, protein:9.4, carbs:46, fat:24, fiber:2.3, sugar:34, micros:["Magnesium"] },
{ id:"milkbarfi", icon:"🍬", name:"Milk Barfi", cat:"Desserts", kcal:412, protein:8.2, carbs:49, fat:20, fiber:0.4, sugar:39, micros:["Calcium"] },
{ id:"mysorepak", icon:"🍬", name:"Mysore Pak", cat:"Desserts", kcal:542, protein:6.4, carbs:45, fat:38, fiber:0.8, sugar:28, micros:["Iron"] },

// BREAKFAST
{ id:"cornflakes", icon:"🥣", name:"Corn Flakes", cat:"Breakfast", kcal:357, protein:8, carbs:84, fat:0.4, fiber:3.2, sugar:8.5, micros:["Iron"] },
{ id:"muesli", icon:"🥣", name:"Muesli", cat:"Breakfast", kcal:372, protein:12, carbs:67, fat:7, fiber:9, sugar:16, micros:["Iron"] },
{ id:"granola", icon:"🥣", name:"Granola", cat:"Breakfast", kcal:471, protein:10, carbs:64, fat:20, fiber:8, sugar:24, micros:["Magnesium"] },
{ id:"peanutbutter", icon:"🥜", name:"Peanut Butter", cat:"Spreads", kcal:588, protein:25, carbs:20, fat:50, fiber:6, sugar:9, micros:["Vitamin E"] },
{ id:"jamspread", icon:"🍓", name:"Fruit Jam", cat:"Spreads", kcal:278, protein:0.3, carbs:69, fat:0.1, fiber:0.8, sugar:49, micros:["Vitamin C"] }
 // ======================= INDIAN FOOD PACK 6A =======================

// SEAFOOD
,{ id:"rohu", icon:"🐟", name:"Rohu Fish", cat:"Fish & Seafood", kcal:97, protein:17.5, carbs:0, fat:2.9, fiber:0, sugar:0, micros:["Protein","Vitamin B12"] },
{ id:"catla", icon:"🐟", name:"Catla Fish", cat:"Fish & Seafood", kcal:111, protein:18.6, carbs:0, fat:4.1, fiber:0, sugar:0, micros:["Protein","Phosphorus"] },
{ id:"hilsa", icon:"🐟", name:"Hilsa Fish", cat:"Fish & Seafood", kcal:310, protein:22.4, carbs:0, fat:25.2, fiber:0, sugar:0, micros:["Omega-3","Vitamin D"] },
{ id:"pomfret", icon:"🐟", name:"Pomfret", cat:"Fish & Seafood", kcal:123, protein:19.8, carbs:0, fat:4.8, fiber:0, sugar:0, micros:["Protein"] },
{ id:"mackerel", icon:"🐟", name:"Indian Mackerel", cat:"Fish & Seafood", kcal:205, protein:18.6, carbs:0, fat:13.9, fiber:0, sugar:0, micros:["Omega-3"] },
{ id:"surmai", icon:"🐟", name:"King Fish (Surmai)", cat:"Fish & Seafood", kcal:134, protein:20.8, carbs:0, fat:5.2, fiber:0, sugar:0, micros:["Protein"] },

// CHICKEN
{ id:"chickenbiryani", icon:"🍗", name:"Chicken Biryani", cat:"Rice", kcal:222, protein:11.5, carbs:24.8, fat:8.6, fiber:1.2, sugar:1.4, micros:["Protein"] },
{ id:"chicken65", icon:"🍗", name:"Chicken 65", cat:"Chicken", kcal:275, protein:22.1, carbs:8.2, fat:17.4, fiber:0.8, sugar:1.4, micros:["Protein"] },
{ id:"chickenkebab", icon:"🍢", name:"Chicken Kebab", cat:"Chicken", kcal:198, protein:24.5, carbs:3.2, fat:9.2, fiber:0.4, sugar:0.8, micros:["Protein"] },
{ id:"chickenseekh", icon:"🍢", name:"Chicken Seekh Kebab", cat:"Chicken", kcal:214, protein:23.8, carbs:4.1, fat:11.2, fiber:0.6, sugar:1.1, micros:["Protein"] },
{ id:"chickenlollipop", icon:"🍗", name:"Chicken Lollipop", cat:"Chicken", kcal:246, protein:18.5, carbs:9.4, fat:15.1, fiber:0.5, sugar:1.2, micros:["Protein"] },

// MUTTON
{ id:"muttoncurry", icon:"🥩", name:"Mutton Curry", cat:"Meat", kcal:238, protein:18.4, carbs:4.2, fat:16.8, fiber:0.5, sugar:1.3, micros:["Iron"] },
{ id:"muttonbiryani", icon:"🍖", name:"Mutton Biryani", cat:"Rice", kcal:255, protein:12.8, carbs:26.1, fat:10.8, fiber:1.4, sugar:1.5, micros:["Iron"] },
{ id:"muttonkeema", icon:"🥩", name:"Mutton Keema", cat:"Meat", kcal:282, protein:19.6, carbs:3.8, fat:21.2, fiber:0.4, sugar:1.2, micros:["Vitamin B12"] },
{ id:"muttonkebab", icon:"🍢", name:"Mutton Kebab", cat:"Meat", kcal:261, protein:21.8, carbs:3.1, fat:18.2, fiber:0.3, sugar:0.9, micros:["Iron"] },

// EGGS
{ id:"boiledegg", icon:"🥚", name:"Boiled Egg", cat:"Eggs", kcal:155, protein:13, carbs:1.1, fat:11, fiber:0, sugar:1.1, micros:["Vitamin B12"] },
{ id:"omelette", icon:"🍳", name:"Plain Omelette", cat:"Eggs", kcal:154, protein:10.6, carbs:1.2, fat:11.1, fiber:0, sugar:0.8, micros:["Protein"] },
{ id:"masalaomelette", icon:"🍳", name:"Masala Omelette", cat:"Eggs", kcal:171, protein:11.2, carbs:3.8, fat:12.2, fiber:0.8, sugar:2.2, micros:["Vitamin C"] },
{ id:"eggbhurji", icon:"🍳", name:"Egg Bhurji", cat:"Eggs", kcal:166, protein:11.4, carbs:3.2, fat:11.8, fiber:0.6, sugar:2.1, micros:["Vitamin B12"] },

// DAIRY
{ id:"amulpaneer", icon:"🧀", name:"Amul Paneer", cat:"Dairy", kcal:265, protein:18.3, carbs:3.4, fat:20.8, fiber:0, sugar:2.6, micros:["Calcium"] },
{ id:"lowfatpaneer", icon:"🧀", name:"Low Fat Paneer", cat:"Dairy", kcal:145, protein:24.8, carbs:3.6, fat:4.8, fiber:0, sugar:2.5, micros:["Protein","Calcium"] },
{ id:"mozzarella", icon:"🧀", name:"Mozzarella Cheese", cat:"Dairy", kcal:280, protein:28.1, carbs:3.1, fat:17.1, fiber:0, sugar:1.2, micros:["Calcium"] },
{ id:"processedcheese", icon:"🧀", name:"Processed Cheese", cat:"Dairy", kcal:371, protein:22.5, carbs:2.8, fat:30.6, fiber:0, sugar:1.8, micros:["Calcium"] },

// BEVERAGES
{ id:"greentea", icon:"🍵", name:"Green Tea", cat:"Beverages", kcal:1, protein:0, carbs:0.2, fat:0, fiber:0, sugar:0, micros:["Antioxidants"] },
{ id:"blackcoffee", icon:"☕", name:"Black Coffee", cat:"Beverages", kcal:2, protein:0.3, carbs:0, fat:0, fiber:0, sugar:0, micros:["Caffeine"] },
{ id:"lemonwater", icon:"🍋", name:"Lemon Water", cat:"Beverages", kcal:6, protein:0.1, carbs:2.1, fat:0, fiber:0.2, sugar:1.2, micros:["Vitamin C"] },
{ id:"coconutwater", icon:"🥥", name:"Coconut Water", cat:"Beverages", kcal:19, protein:0.7, carbs:3.7, fat:0.2, fiber:1.1, sugar:2.6, micros:["Potassium"] },
{ id:"buttermilk", icon:"🥛", name:"Buttermilk", cat:"Beverages", kcal:40, protein:3.3, carbs:4.8, fat:0.9, fiber:0, sugar:4.8, micros:["Calcium"] },

// SNACKS
{ id:"nachos", icon:"🌮", name:"Nachos", cat:"Snacks", kcal:498, protein:7.2, carbs:63.1, fat:24.5, fiber:4.8, sugar:1.5, micros:["Iron"] },
{ id:"popcorn", icon:"🍿", name:"Popcorn", cat:"Snacks", kcal:387, protein:12.9, carbs:78, fat:4.5, fiber:15.1, sugar:0.9, micros:["Magnesium"] },
{ id:"khakhra", icon:"🫓", name:"Khakhra", cat:"Snacks", kcal:403, protein:12.5, carbs:67.8, fat:9.2, fiber:8.1, sugar:2.4, micros:["Iron"] },
{ id:"thepla", icon:"🫓", name:"Methi Thepla", cat:"Indian Breads", kcal:278, protein:8.2, carbs:43.6, fat:8.4, fiber:5.1, sugar:2.1, micros:["Iron"] },
{ id:"chakli", icon:"🥨", name:"Chakli", cat:"Snacks", kcal:528, protein:8.1, carbs:56.8, fat:30.2, fiber:4.6, sugar:2.5, micros:["Iron"] }
// ======================= INDIAN FOOD PACK 6B =======================

// FRUITS
,{ id:"guava", icon:"🍈", name:"Guava", cat:"Fruits", kcal:68, protein:2.6, carbs:14.3, fat:1, fiber:5.4, sugar:8.9, micros:["Vitamin C","Potassium"] },
{ id:"lychee", icon:"🍒", name:"Lychee", cat:"Fruits", kcal:66, protein:0.8, carbs:16.5, fat:0.4, fiber:1.3, sugar:15.2, micros:["Vitamin C"] },
{ id:"pear", icon:"🍐", name:"Pear", cat:"Fruits", kcal:57, protein:0.4, carbs:15.2, fat:0.1, fiber:3.1, sugar:9.8, micros:["Vitamin C"] },
{ id:"kiwi", icon:"🥝", name:"Kiwi", cat:"Fruits", kcal:61, protein:1.1, carbs:14.7, fat:0.5, fiber:3, sugar:9, micros:["Vitamin C"] },
{ id:"plum", icon:"🟣", name:"Plum", cat:"Fruits", kcal:46, protein:0.7, carbs:11.4, fat:0.3, fiber:1.4, sugar:9.9, micros:["Vitamin K"] },
{ id:"peach", icon:"🍑", name:"Peach", cat:"Fruits", kcal:39, protein:0.9, carbs:9.5, fat:0.3, fiber:1.5, sugar:8.4, micros:["Vitamin C"] },

// VEGETABLES
{ id:"zucchini", icon:"🥒", name:"Zucchini", cat:"Vegetables", kcal:17, protein:1.2, carbs:3.1, fat:0.3, fiber:1, sugar:2.5, micros:["Vitamin C"] },
{ id:"lettuce", icon:"🥬", name:"Lettuce", cat:"Vegetables", kcal:15, protein:1.4, carbs:2.9, fat:0.2, fiber:1.3, sugar:0.8, micros:["Vitamin K"] },
{ id:"mushroom", icon:"🍄", name:"Button Mushroom", cat:"Vegetables", kcal:22, protein:3.1, carbs:3.3, fat:0.3, fiber:1, sugar:2, micros:["Selenium"] },
{ id:"radish", icon:"⚪", name:"Radish", cat:"Vegetables", kcal:16, protein:0.7, carbs:3.4, fat:0.1, fiber:1.6, sugar:1.9, micros:["Vitamin C"] },
{ id:"asparagus", icon:"🌿", name:"Asparagus", cat:"Vegetables", kcal:20, protein:2.2, carbs:3.9, fat:0.1, fiber:2.1, sugar:1.9, micros:["Folate"] },
{ id:"celery", icon:"🌿", name:"Celery", cat:"Vegetables", kcal:16, protein:0.7, carbs:3, fat:0.2, fiber:1.6, sugar:1.3, micros:["Vitamin K"] },

// LEGUMES
{ id:"blackchana", icon:"🫘", name:"Black Chana", cat:"Pulses", kcal:164, protein:8.9, carbs:27.4, fat:2.6, fiber:7.6, sugar:4.8, micros:["Iron"] },
{ id:"kabulichana", icon:"🫘", name:"Kabuli Chana", cat:"Pulses", kcal:164, protein:8.9, carbs:27.4, fat:2.6, fiber:7.6, sugar:4.8, micros:["Folate"] },
{ id:"rajma", icon:"🫘", name:"Rajma", cat:"Pulses", kcal:127, protein:8.7, carbs:22.8, fat:0.5, fiber:6.4, sugar:0.3, micros:["Iron"] },
{ id:"sprouts", icon:"🌱", name:"Mixed Sprouts", cat:"Pulses", kcal:103, protein:8.6, carbs:19.1, fat:0.7, fiber:4.3, sugar:3.2, micros:["Vitamin C"] },

// DRY FRUITS
{ id:"pistachio", icon:"🌰", name:"Pistachios", cat:"Nuts & Seeds", kcal:562, protein:20.2, carbs:28, fat:45.3, fiber:10.6, sugar:7.7, micros:["Vitamin B6"] },
{ id:"pineanuts", icon:"🌰", name:"Pine Nuts", cat:"Nuts & Seeds", kcal:673, protein:13.7, carbs:13.1, fat:68.4, fiber:3.7, sugar:3.6, micros:["Magnesium"] },
{ id:"sunflowerseeds", icon:"🌻", name:"Sunflower Seeds", cat:"Nuts & Seeds", kcal:584, protein:20.8, carbs:20, fat:51.5, fiber:8.6, sugar:2.6, micros:["Vitamin E"] },
{ id:"pumpkinseeds", icon:"🎃", name:"Pumpkin Seeds", cat:"Nuts & Seeds", kcal:559, protein:30.2, carbs:10.7, fat:49, fiber:6, sugar:1.4, micros:["Magnesium"] },

// DESSERTS
{ id:"icecreamvanilla", icon:"🍨", name:"Vanilla Ice Cream", cat:"Desserts", kcal:207, protein:3.5, carbs:24, fat:11, fiber:0.7, sugar:21, micros:["Calcium"] },
{ id:"icecreamchocolate", icon:"🍨", name:"Chocolate Ice Cream", cat:"Desserts", kcal:216, protein:3.8, carbs:28, fat:11.2, fiber:1.2, sugar:25, micros:["Calcium"] },
{ id:"brownie", icon:"🍫", name:"Chocolate Brownie", cat:"Desserts", kcal:466, protein:5.1, carbs:58, fat:24, fiber:2.8, sugar:39, micros:["Iron"] },
{ id:"donut", icon:"🍩", name:"Donut", cat:"Desserts", kcal:452, protein:4.9, carbs:51, fat:25, fiber:2.1, sugar:25, micros:["Iron"] },

// BREAKFAST
{ id:"breadbutter", icon:"🍞", name:"Bread Butter", cat:"Breakfast", kcal:315, protein:7.4, carbs:33.6, fat:17.4, fiber:2.8, sugar:4.6, micros:["Calcium"] },
{ id:"breadjam", icon:"🍞", name:"Bread Jam", cat:"Breakfast", kcal:276, protein:6.4, carbs:48.5, fat:6.2, fiber:2.4, sugar:18.8, micros:["Vitamin C"] },
{ id:"breadomelette", icon:"🍞", name:"Bread Omelette", cat:"Breakfast", kcal:238, protein:12.2, carbs:22.8, fat:10.6, fiber:2.1, sugar:3.4, micros:["Protein"] },
{ id:"paneersandwich", icon:"🥪", name:"Paneer Sandwich", cat:"Breakfast", kcal:256, protein:13.8, carbs:24.4, fat:11.2, fiber:3.2, sugar:3.5, micros:["Calcium"] },

// BEVERAGES
{ id:"orangejuice", icon:"🧃", name:"Orange Juice", cat:"Beverages", kcal:45, protein:0.7, carbs:10.4, fat:0.2, fiber:0.2, sugar:8.4, micros:["Vitamin C"] },
{ id:"applejuice", icon:"🧃", name:"Apple Juice", cat:"Beverages", kcal:46, protein:0.1, carbs:11.3, fat:0.1, fiber:0.2, sugar:10.1, micros:["Potassium"] },
{ id:"grapejuice", icon:"🧃", name:"Grape Juice", cat:"Beverages", kcal:60, protein:0.4, carbs:14.8, fat:0.1, fiber:0.2, sugar:14.2, micros:["Vitamin C"] },
{ id:"proteinshake", icon:"🥤", name:"Protein Shake", cat:"Supplements", kcal:128, protein:24, carbs:4.2, fat:1.8, fiber:0.4, sugar:2.4, micros:["Protein"] },
{ id:"chocolatemilk", icon:"🥛", name:"Chocolate Milk", cat:"Beverages", kcal:83, protein:3.2, carbs:10.4, fat:3.1, fiber:0, sugar:10.1, micros:["Calcium"] }
// ======================= INDIAN FOOD PACK 6C =======================

// INDIAN SWEETS
,{ id:"peda", icon:"🍬", name:"Peda", cat:"Desserts", kcal:396, protein:8.2, carbs:52.1, fat:17.2, fiber:0.3, sugar:41.8, micros:["Calcium"] },
{ id:"kalakand", icon:"🍬", name:"Kalakand", cat:"Desserts", kcal:342, protein:9.5, carbs:39.2, fat:16.4, fiber:0.4, sugar:31.6, micros:["Calcium"] },
{ id:"chamcham", icon:"🍮", name:"Cham Cham", cat:"Desserts", kcal:272, protein:5.1, carbs:44.8, fat:8.2, fiber:0.1, sugar:36.8, micros:["Calcium"] },
{ id:"malpua", icon:"🥞", name:"Malpua", cat:"Desserts", kcal:356, protein:5.8, carbs:47.2, fat:16.8, fiber:0.8, sugar:30.5, micros:["Iron"] },
{ id:"balushahi", icon:"🍩", name:"Balushahi", cat:"Desserts", kcal:421, protein:4.2, carbs:55.4, fat:21.1, fiber:0.6, sugar:34.8, micros:["Iron"] },

// SOUTH INDIAN
{ id:"neerdosa", icon:"🥞", name:"Neer Dosa", cat:"Breakfast", kcal:118, protein:2.4, carbs:24.5, fat:1.2, fiber:0.6, sugar:0.3, micros:["Iron"] },
{ id:"pesarattu", icon:"🥞", name:"Pesarattu", cat:"Breakfast", kcal:156, protein:8.6, carbs:22.8, fat:3.2, fiber:3.4, sugar:1.1, micros:["Protein"] },
{ id:"akkiroti", icon:"🫓", name:"Akki Roti", cat:"Indian Breads", kcal:172, protein:3.2, carbs:32.6, fat:2.8, fiber:2.4, sugar:0.7, micros:["Iron"] },
{ id:"bisibelebath", icon:"🍛", name:"Bisi Bele Bath", cat:"Rice", kcal:148, protein:4.8, carbs:25.6, fat:3.1, fiber:3.2, sugar:1.6, micros:["Folate"] },
{ id:"curdvada", icon:"🥣", name:"Dahi Vada", cat:"Street Food", kcal:168, protein:5.8, carbs:19.2, fat:7.6, fiber:1.8, sugar:4.2, micros:["Calcium"] },

// NORTH INDIAN
{ id:"chole", icon:"🍛", name:"Chole", cat:"Curries & Dishes", kcal:164, protein:8.9, carbs:27.4, fat:2.6, fiber:7.6, sugar:4.8, micros:["Iron"] },
{ id:"palakpaneer", icon:"🥬", name:"Palak Paneer", cat:"Curries & Dishes", kcal:176, protein:10.8, carbs:6.8, fat:11.8, fiber:2.9, sugar:2.8, micros:["Calcium","Iron"] },
{ id:"malaikofta", icon:"🍛", name:"Malai Kofta", cat:"Curries & Dishes", kcal:242, protein:7.8, carbs:16.8, fat:16.2, fiber:2.2, sugar:3.8, micros:["Calcium"] },
{ id:"navratankorma", icon:"🍛", name:"Navratan Korma", cat:"Curries & Dishes", kcal:186, protein:4.6, carbs:14.4, fat:12.6, fiber:2.8, sugar:5.2, micros:["Vitamin A"] },
{ id:"vegkolhapuri", icon:"🍛", name:"Veg Kolhapuri", cat:"Curries & Dishes", kcal:152, protein:4.4, carbs:13.8, fat:8.8, fiber:3.5, sugar:4.4, micros:["Vitamin C"] },

// SNACKS
{ id:"fafda", icon:"🥨", name:"Fafda", cat:"Snacks", kcal:418, protein:11.2, carbs:42.5, fat:22.8, fiber:4.6, sugar:2.4, micros:["Iron"] },
{ id:"dhokla", icon:"🟨", name:"Khaman Dhokla", cat:"Snacks", kcal:160, protein:8.1, carbs:24.4, fat:3.4, fiber:2.8, sugar:4.2, micros:["Folate"] },
{ id:"handvo", icon:"🍰", name:"Handvo", cat:"Snacks", kcal:188, protein:7.2, carbs:22.8, fat:6.8, fiber:3.6, sugar:2.1, micros:["Iron"] },
{ id:"sevkhamani", icon:"🥣", name:"Sev Khamani", cat:"Snacks", kcal:208, protein:8.6, carbs:27.5, fat:6.8, fiber:4.2, sugar:2.8, micros:["Protein"] },
{ id:"mathri", icon:"🥨", name:"Mathri", cat:"Snacks", kcal:486, protein:8.8, carbs:54.2, fat:26.8, fiber:3.4, sugar:2.2, micros:["Iron"] },

// BREADS
{ id:"butterroti", icon:"🫓", name:"Butter Roti", cat:"Indian Breads", kcal:318, protein:8.4, carbs:49.6, fat:9.2, fiber:3.2, sugar:1.2, micros:["Iron"] },
{ id:"garlicnaan", icon:"🫓", name:"Garlic Naan", cat:"Indian Breads", kcal:326, protein:9.2, carbs:50.2, fat:10.6, fiber:2.6, sugar:3.2, micros:["Calcium"] },
{ id:"cheesenaan", icon:"🫓", name:"Cheese Naan", cat:"Indian Breads", kcal:352, protein:12.8, carbs:45.6, fat:14.8, fiber:2.4, sugar:3.8, micros:["Calcium"] },
{ id:"stuffedkulcha", icon:"🫓", name:"Stuffed Kulcha", cat:"Indian Breads", kcal:284, protein:8.6, carbs:43.8, fat:8.8, fiber:3.2, sugar:2.4, micros:["Iron"] },

// DRINKS
{ id:"jaljeera", icon:"🥤", name:"Jal Jeera", cat:"Beverages", kcal:24, protein:0.4, carbs:5.8, fat:0.1, fiber:0.3, sugar:4.8, micros:["Vitamin C"] },
{ id:"roohafza", icon:"🥤", name:"Rooh Afza", cat:"Beverages", kcal:78, protein:0, carbs:19.4, fat:0, fiber:0, sugar:18.6, micros:["Sugar"] },
{ id:"falooda", icon:"🥤", name:"Falooda", cat:"Desserts", kcal:168, protein:3.2, carbs:28.6, fat:5.2, fiber:1.2, sugar:21.8, micros:["Calcium"] },
{ id:"thandai", icon:"🥛", name:"Thandai", cat:"Beverages", kcal:142, protein:4.8, carbs:16.2, fat:6.8, fiber:1.1, sugar:14.6, micros:["Calcium"] },
{ id:"sattu", icon:"🥛", name:"Sattu Drink", cat:"Beverages", kcal:118, protein:6.8, carbs:18.6, fat:2.1, fiber:3.4, sugar:2.4, micros:["Iron"] } 
// ======================= INDIAN FOOD PACK 7 =======================

// PASTA & NOODLES
,{ id:"spaghetti", icon:"🍝", name:"Spaghetti (Cooked)", cat:"Pasta", kcal:158, protein:5.8, carbs:30.9, fat:0.9, fiber:1.8, sugar:0.6, micros:["Iron"] },
{ id:"pennepasta", icon:"🍝", name:"Penne Pasta", cat:"Pasta", kcal:157, protein:5.6, carbs:30.5, fat:0.9, fiber:1.7, sugar:0.7, micros:["Iron"] },
{ id:"macaroni", icon:"🍝", name:"Macaroni", cat:"Pasta", kcal:160, protein:5.4, carbs:31.2, fat:1.1, fiber:1.8, sugar:0.5, micros:["Folate"] },
{ id:"lasagna", icon:"🍝", name:"Lasagna", cat:"Pasta", kcal:135, protein:6.5, carbs:15.3, fat:5.1, fiber:1.2, sugar:2.1, micros:["Calcium"] },
{ id:"ramen", icon:"🍜", name:"Ramen Noodles", cat:"Noodles", kcal:188, protein:5.6, carbs:27.8, fat:6.2, fiber:1.3, sugar:1.1, micros:["Iron"] },

// CHINESE
{ id:"manchurianveg", icon:"🥦", name:"Veg Manchurian", cat:"Chinese", kcal:178, protein:5.8, carbs:22.1, fat:7.4, fiber:2.4, sugar:4.2, micros:["Vitamin C"] },
{ id:"manchuriangobi", icon:"🥦", name:"Gobi Manchurian", cat:"Chinese", kcal:192, protein:5.2, carbs:24.8, fat:8.2, fiber:2.8, sugar:3.8, micros:["Vitamin C"] },
{ id:"schezwannoodles", icon:"🍜", name:"Schezwan Noodles", cat:"Chinese", kcal:198, protein:6.2, carbs:31.4, fat:5.8, fiber:2.3, sugar:3.6, micros:["Iron"] },
{ id:"vegfriednoodles", icon:"🍜", name:"Veg Fried Noodles", cat:"Chinese", kcal:182, protein:5.4, carbs:30.2, fat:4.8, fiber:2.2, sugar:2.8, micros:["Vitamin A"] },
{ id:"chickennoodles", icon:"🍜", name:"Chicken Noodles", cat:"Chinese", kcal:194, protein:9.4, carbs:28.8, fat:5.2, fiber:1.9, sugar:2.1, micros:["Protein"] },

// MEXICAN
{ id:"taco", icon:"🌮", name:"Chicken Taco", cat:"Mexican", kcal:226, protein:12.4, carbs:19.8, fat:10.4, fiber:2.8, sugar:2.2, micros:["Protein"] },
{ id:"burrito", icon:"🌯", name:"Chicken Burrito", cat:"Mexican", kcal:206, protein:10.8, carbs:23.6, fat:8.2, fiber:3.6, sugar:2.4, micros:["Iron"] },
{ id:"quesadilla", icon:"🫓", name:"Cheese Quesadilla", cat:"Mexican", kcal:284, protein:12.2, carbs:25.8, fat:15.1, fiber:2.2, sugar:2.4, micros:["Calcium"] },
{ id:"guacamole", icon:"🥑", name:"Guacamole", cat:"Mexican", kcal:160, protein:2, carbs:8.5, fat:14.7, fiber:6.7, sugar:0.7, micros:["Potassium"] },

// SALADS
{ id:"caesarsalad", icon:"🥗", name:"Caesar Salad", cat:"Salads", kcal:180, protein:7.2, carbs:8.1, fat:13.8, fiber:2.2, sugar:2.4, micros:["Vitamin A"] },
{ id:"greeksalad", icon:"🥗", name:"Greek Salad", cat:"Salads", kcal:120, protein:3.8, carbs:6.5, fat:8.5, fiber:2.3, sugar:3.4, micros:["Calcium"] },
{ id:"fruitsalad", icon:"🍓", name:"Fruit Salad", cat:"Salads", kcal:62, protein:1, carbs:15.2, fat:0.3, fiber:2.5, sugar:11.6, micros:["Vitamin C"] },
{ id:"sproutsalad", icon:"🥗", name:"Sprouts Salad", cat:"Salads", kcal:94, protein:8.6, carbs:14.8, fat:1.2, fiber:4.5, sugar:3.2, micros:["Iron"] },

// PIZZA
{ id:"margheritapizza", icon:"🍕", name:"Margherita Pizza", cat:"Fast Food", kcal:266, protein:11.3, carbs:33.1, fat:10.2, fiber:2.3, sugar:3.8, micros:["Calcium"] },
{ id:"farmhousepizza", icon:"🍕", name:"Farmhouse Pizza", cat:"Fast Food", kcal:278, protein:11.8, carbs:34.4, fat:10.8, fiber:2.8, sugar:4.2, micros:["Vitamin A"] },
{ id:"paneerpizza", icon:"🍕", name:"Paneer Pizza", cat:"Fast Food", kcal:286, protein:13.5, carbs:32.2, fat:12.2, fiber:2.6, sugar:3.8, micros:["Calcium"] },
{ id:"bbqchickenpizza", icon:"🍕", name:"BBQ Chicken Pizza", cat:"Fast Food", kcal:295, protein:15.6, carbs:31.4, fat:12.8, fiber:2.4, sugar:5.1, micros:["Protein"] },

// BURGERS
{ id:"doubleburger", icon:"🍔", name:"Double Cheeseburger", cat:"Fast Food", kcal:323, protein:17.8, carbs:28.8, fat:16.8, fiber:2.2, sugar:5.2, micros:["Calcium"] },
{ id:"paneerburger", icon:"🍔", name:"Paneer Burger", cat:"Fast Food", kcal:302, protein:13.6, carbs:34.4, fat:12.6, fiber:3.2, sugar:5.2, micros:["Calcium"] },
{ id:"fishburger", icon:"🍔", name:"Fish Burger", cat:"Fast Food", kcal:286, protein:15.4, carbs:30.2, fat:11.8, fiber:2.4, sugar:4.2, micros:["Protein"] },

// SEAFOOD
{ id:"crab", icon:"🦀", name:"Crab", cat:"Fish & Seafood", kcal:97, protein:19.4, carbs:0, fat:1.5, fiber:0, sugar:0, micros:["Vitamin B12"] },
{ id:"lobster", icon:"🦞", name:"Lobster", cat:"Fish & Seafood", kcal:89, protein:19, carbs:0, fat:0.9, fiber:0, sugar:0, micros:["Selenium"] },
{ id:"octopus", icon:"🐙", name:"Octopus", cat:"Fish & Seafood", kcal:82, protein:14.9, carbs:2.2, fat:1, fiber:0, sugar:0, micros:["Iron"] },

// HEALTHY
{ id:"tofu", icon:"🧈", name:"Tofu", cat:"Plant Protein", kcal:76, protein:8.1, carbs:1.9, fat:4.8, fiber:0.3, sugar:0.6, micros:["Calcium"] },
{ id:"tempeh", icon:"🌱", name:"Tempeh", cat:"Plant Protein", kcal:193, protein:20.3, carbs:7.6, fat:10.8, fiber:1.4, sugar:0.4, micros:["Iron"] },
{ id:"edamame", icon:"🫛", name:"Edamame", cat:"Plant Protein", kcal:121, protein:11.9, carbs:8.9, fat:5.2, fiber:5.2, sugar:2.2, micros:["Folate"] },
{ id:"avocado", icon:"🥑", name:"Avocado", cat:"Fruits", kcal:160, protein:2, carbs:8.5, fat:14.7, fiber:6.7, sugar:0.7, micros:["Potassium"] }
// ======================= INDIAN FOOD PACK 8 =======================

// FRUITS
,{ id:"blackberry", icon:"🫐", name:"Blackberry", cat:"Fruits", kcal:43, protein:1.4, carbs:9.6, fat:0.5, fiber:5.3, sugar:4.9, micros:["Vitamin C","Vitamin K"] },
{ id:"raspberry", icon:"🍓", name:"Raspberry", cat:"Fruits", kcal:52, protein:1.2, carbs:11.9, fat:0.7, fiber:6.5, sugar:4.4, micros:["Vitamin C"] },
{ id:"cranberry", icon:"🔴", name:"Cranberry", cat:"Fruits", kcal:46, protein:0.4, carbs:12.2, fat:0.1, fiber:4.6, sugar:4.3, micros:["Vitamin C"] },
{ id:"apricot", icon:"🍑", name:"Apricot", cat:"Fruits", kcal:48, protein:1.4, carbs:11.1, fat:0.4, fiber:2, sugar:9.2, micros:["Vitamin A"] },
{ id:"fig", icon:"🟣", name:"Fresh Fig", cat:"Fruits", kcal:74, protein:0.8, carbs:19.2, fat:0.3, fiber:2.9, sugar:16.3, micros:["Potassium"] },
{ id:"mulberry", icon:"🫐", name:"Mulberry", cat:"Fruits", kcal:43, protein:1.4, carbs:9.8, fat:0.4, fiber:1.7, sugar:8.1, micros:["Vitamin C"] },
{ id:"jackfruit", icon:"🍈", name:"Jackfruit", cat:"Fruits", kcal:95, protein:1.7, carbs:23.2, fat:0.6, fiber:1.5, sugar:19.1, micros:["Vitamin C"] },
{ id:"woodapple", icon:"🍏", name:"Wood Apple", cat:"Fruits", kcal:134, protein:7.1, carbs:18.1, fat:3.7, fiber:5.1, sugar:8.2, micros:["Calcium"] },

// VEGETABLES
{ id:"redcabbage", icon:"🥬", name:"Red Cabbage", cat:"Vegetables", kcal:31, protein:1.4, carbs:7.4, fat:0.2, fiber:2.1, sugar:3.8, micros:["Vitamin C"] },
{ id:"bokchoy", icon:"🥬", name:"Bok Choy", cat:"Vegetables", kcal:13, protein:1.5, carbs:2.2, fat:0.2, fiber:1, sugar:1.2, micros:["Vitamin A"] },
{ id:"leek", icon:"🧅", name:"Leek", cat:"Vegetables", kcal:61, protein:1.5, carbs:14.2, fat:0.3, fiber:1.8, sugar:3.9, micros:["Vitamin K"] },
{ id:"shallots", icon:"🧅", name:"Shallots", cat:"Vegetables", kcal:72, protein:2.5, carbs:16.8, fat:0.1, fiber:3.2, sugar:7.9, micros:["Vitamin C"] },
{ id:"yam", icon:"🍠", name:"Yam", cat:"Vegetables", kcal:118, protein:1.5, carbs:27.9, fat:0.2, fiber:4.1, sugar:0.5, micros:["Potassium"] },
{ id:"greenbeans", icon:"🫛", name:"Green Beans", cat:"Vegetables", kcal:31, protein:1.8, carbs:7, fat:0.2, fiber:3.4, sugar:3.3, micros:["Vitamin C"] },
{ id:"brusselssprouts", icon:"🥬", name:"Brussels Sprouts", cat:"Vegetables", kcal:43, protein:3.4, carbs:8.9, fat:0.3, fiber:3.8, sugar:2.2, micros:["Vitamin K"] },
{ id:"artichoke", icon:"🌿", name:"Artichoke", cat:"Vegetables", kcal:47, protein:3.3, carbs:10.5, fat:0.2, fiber:5.4, sugar:1, micros:["Folate"] },

// GRAINS
{ id:"millet", icon:"🌾", name:"Millet", cat:"Grains", kcal:378, protein:11, carbs:73, fat:4.2, fiber:8.5, sugar:1.2, micros:["Magnesium"] },
{ id:"foxtailmillet", icon:"🌾", name:"Foxtail Millet", cat:"Grains", kcal:351, protein:12.3, carbs:63.2, fat:4.3, fiber:8, sugar:0.6, micros:["Iron"] },
{ id:"ragi", icon:"🌾", name:"Finger Millet (Ragi)", cat:"Grains", kcal:336, protein:7.3, carbs:72, fat:1.3, fiber:11.5, sugar:1.5, micros:["Calcium"] },
{ id:"buckwheat", icon:"🌾", name:"Buckwheat", cat:"Grains", kcal:343, protein:13.3, carbs:71.5, fat:3.4, fiber:10, sugar:0.9, micros:["Magnesium"] },

// BEANS
{ id:"whitebeans", icon:"🫘", name:"White Beans", cat:"Pulses", kcal:139, protein:9.7, carbs:25.1, fat:0.4, fiber:6.3, sugar:0.3, micros:["Iron"] },
{ id:"limabeans", icon:"🫘", name:"Lima Beans", cat:"Pulses", kcal:115, protein:7.8, carbs:20.9, fat:0.4, fiber:7, sugar:2.9, micros:["Folate"] },
{ id:"navybeans", icon:"🫘", name:"Navy Beans", cat:"Pulses", kcal:140, protein:8.2, carbs:26, fat:0.6, fiber:10.5, sugar:0.3, micros:["Iron"] },

// SEAFOOD
{ id:"tilapia", icon:"🐟", name:"Tilapia", cat:"Fish & Seafood", kcal:128, protein:26.2, carbs:0, fat:2.7, fiber:0, sugar:0, micros:["Protein"] },
{ id:"cod", icon:"🐟", name:"Cod Fish", cat:"Fish & Seafood", kcal:82, protein:18, carbs:0, fat:0.7, fiber:0, sugar:0, micros:["Vitamin B12"] },
{ id:"trout", icon:"🐟", name:"Trout", cat:"Fish & Seafood", kcal:190, protein:27.6, carbs:0, fat:8.1, fiber:0, sugar:0, micros:["Omega-3"] },

// DRINKS
{ id:"espresso", icon:"☕", name:"Espresso", cat:"Beverages", kcal:9, protein:0.1, carbs:1.7, fat:0.2, fiber:0, sugar:0, micros:["Caffeine"] },
{ id:"cappuccino", icon:"☕", name:"Cappuccino", cat:"Beverages", kcal:38, protein:2.1, carbs:3.2, fat:2.1, fiber:0, sugar:3.2, micros:["Calcium"] },
{ id:"latte", icon:"☕", name:"Cafe Latte", cat:"Beverages", kcal:52, protein:2.8, carbs:4.8, fat:2.2, fiber:0, sugar:4.8, micros:["Calcium"] },
{ id:"mocha", icon:"☕", name:"Cafe Mocha", cat:"Beverages", kcal:79, protein:3.2, carbs:10.4, fat:2.8, fiber:0.5, sugar:9.2, micros:["Calcium"] },

// HEALTHY
{ id:"hummus", icon:"🥣", name:"Hummus", cat:"Healthy Foods", kcal:166, protein:7.9, carbs:14.3, fat:9.6, fiber:6, sugar:0.3, micros:["Iron"] },
{ id:"falafel", icon:"🧆", name:"Falafel", cat:"Healthy Foods", kcal:333, protein:13.3, carbs:31.8, fat:17.8, fiber:4.9, sugar:2.1, micros:["Protein"] },
{ id:"kimchi", icon:"🥬", name:"Kimchi", cat:"Healthy Foods", kcal:15, protein:1.1, carbs:2.4, fat:0.5, fiber:1.6, sugar:1.1, micros:["Vitamin C"] },
{ id:"sauerkraut", icon:"🥬", name:"Sauerkraut", cat:"Healthy Foods", kcal:19, protein:0.9, carbs:4.3, fat:0.1, fiber:2.9, sugar:1.8, micros:["Vitamin C"] }
// ======================= INDIAN FOOD PACK 9 =======================

// OILS
,{ id:"oliveoil", icon:"🫒", name:"Olive Oil", cat:"Oils", kcal:884, protein:0, carbs:0, fat:100, fiber:0, sugar:0, micros:["Vitamin E"] },
{ id:"mustardoil", icon:"🛢️", name:"Mustard Oil", cat:"Oils", kcal:884, protein:0, carbs:0, fat:100, fiber:0, sugar:0, micros:["Vitamin E"] },
{ id:"coconutoil", icon:"🥥", name:"Coconut Oil", cat:"Oils", kcal:892, protein:0, carbs:0, fat:100, fiber:0, sugar:0, micros:["Vitamin E"] },
{ id:"groundnutoil", icon:"🥜", name:"Groundnut Oil", cat:"Oils", kcal:884, protein:0, carbs:0, fat:100, fiber:0, sugar:0, micros:["Vitamin E"] },
{ id:"sunfloweroil", icon:"🌻", name:"Sunflower Oil", cat:"Oils", kcal:884, protein:0, carbs:0, fat:100, fiber:0, sugar:0, micros:["Vitamin E"] },

// SPREADS
{ id:"mayonnaise", icon:"🥫", name:"Mayonnaise", cat:"Spreads", kcal:680, protein:1, carbs:1, fat:75, fiber:0, sugar:1, micros:["Vitamin E"] },
{ id:"honey", icon:"🍯", name:"Honey", cat:"Sweeteners", kcal:304, protein:0.3, carbs:82.4, fat:0, fiber:0.2, sugar:82.1, micros:["Antioxidants"] },
{ id:"maplesyrup", icon:"🍯", name:"Maple Syrup", cat:"Sweeteners", kcal:260, protein:0, carbs:67, fat:0, fiber:0, sugar:60.5, micros:["Manganese"] },
{ id:"nutella", icon:"🍫", name:"Chocolate Hazelnut Spread", cat:"Spreads", kcal:539, protein:6.3, carbs:57.5, fat:30.9, fiber:3.4, sugar:56.3, micros:["Calcium"] },

// SOUPS
{ id:"tomatosoup", icon:"🍅", name:"Tomato Soup", cat:"Soups", kcal:30, protein:1.2, carbs:6.4, fat:0.2, fiber:1.2, sugar:4.2, micros:["Vitamin C"] },
{ id:"sweetcornsoup", icon:"🌽", name:"Sweet Corn Soup", cat:"Soups", kcal:64, protein:2.4, carbs:11.8, fat:1.1, fiber:1.8, sugar:3.8, micros:["Vitamin A"] },
{ id:"mushroomsoup", icon:"🍄", name:"Mushroom Soup", cat:"Soups", kcal:41, protein:1.8, carbs:5.6, fat:1.6, fiber:0.9, sugar:2.1, micros:["Selenium"] },
{ id:"chickensoup", icon:"🍲", name:"Chicken Soup", cat:"Soups", kcal:75, protein:6.8, carbs:4.2, fat:3.6, fiber:0.5, sugar:1.2, micros:["Protein"] },

// SEAFOOD
{ id:"salmon", icon:"🐟", name:"Salmon", cat:"Fish & Seafood", kcal:208, protein:20.4, carbs:0, fat:13.4, fiber:0, sugar:0, micros:["Omega-3","Vitamin D"] },
{ id:"tuna", icon:"🐟", name:"Tuna", cat:"Fish & Seafood", kcal:132, protein:28.2, carbs:0, fat:1.3, fiber:0, sugar:0, micros:["Vitamin B12"] },
{ id:"sardine", icon:"🐟", name:"Sardine", cat:"Fish & Seafood", kcal:208, protein:24.6, carbs:0, fat:11.5, fiber:0, sugar:0, micros:["Calcium"] },

// BREAKFAST
{ id:"waffle", icon:"🧇", name:"Waffle", cat:"Breakfast", kcal:291, protein:7.9, carbs:32.5, fat:14.1, fiber:1.4, sugar:4.9, micros:["Iron"] },
{ id:"pancake", icon:"🥞", name:"Pancake", cat:"Breakfast", kcal:227, protein:6.4, carbs:28.3, fat:9.7, fiber:1.2, sugar:6.1, micros:["Calcium"] },
{ id:"frenchtoast", icon:"🍞", name:"French Toast", cat:"Breakfast", kcal:229, protein:8.2, carbs:25.6, fat:10.6, fiber:1.5, sugar:5.4, micros:["Protein"] },

// BAKERY
{ id:"croissant", icon:"🥐", name:"Croissant", cat:"Bakery", kcal:406, protein:8.2, carbs:45.8, fat:21.1, fiber:2.6, sugar:11.2, micros:["Iron"] },
{ id:"muffin", icon:"🧁", name:"Blueberry Muffin", cat:"Bakery", kcal:377, protein:5.2, carbs:53.1, fat:16.4, fiber:1.8, sugar:29.3, micros:["Calcium"] },
{ id:"cupcake", icon:"🧁", name:"Cupcake", cat:"Bakery", kcal:389, protein:3.9, carbs:54.8, fat:18.3, fiber:0.8, sugar:37.2, micros:["Iron"] },
{ id:"bagel", icon:"🥯", name:"Bagel", cat:"Bakery", kcal:250, protein:10.4, carbs:49.2, fat:1.5, fiber:2.3, sugar:5.1, micros:["Iron"] },

// MEAT
{ id:"beefsteak", icon:"🥩", name:"Beef Steak", cat:"Meat", kcal:271, protein:25.8, carbs:0, fat:18.2, fiber:0, sugar:0, micros:["Iron","Vitamin B12"] },
{ id:"beefburgerpatty", icon:"🥩", name:"Beef Patty", cat:"Meat", kcal:254, protein:17.6, carbs:0, fat:20.1, fiber:0, sugar:0, micros:["Protein"] },
{ id:"turkeybreast", icon:"🦃", name:"Turkey Breast", cat:"Meat", kcal:135, protein:29.1, carbs:0, fat:1.2, fiber:0, sugar:0, micros:["Protein"] },

// HEALTHY
{ id:"chia", icon:"🌱", name:"Chia Seeds", cat:"Nuts & Seeds", kcal:486, protein:16.5, carbs:42.1, fat:30.7, fiber:34.4, sugar:0, micros:["Omega-3","Calcium"] },
{ id:"flaxseed", icon:"🌱", name:"Flax Seeds", cat:"Nuts & Seeds", kcal:534, protein:18.3, carbs:28.9, fat:42.2, fiber:27.3, sugar:1.5, micros:["Omega-3"] },
{ id:"hempseed", icon:"🌱", name:"Hemp Seeds", cat:"Nuts & Seeds", kcal:553, protein:31.6, carbs:8.7, fat:48.8, fiber:4, sugar:1.5, micros:["Magnesium"] },
{ id:"quinoa", icon:"🌾", name:"Quinoa", cat:"Grains", kcal:120, protein:4.4, carbs:21.3, fat:1.9, fiber:2.8, sugar:0.9, micros:["Magnesium"] },
{ id:"oatbran", icon:"🌾", name:"Oat Bran", cat:"Grains", kcal:246, protein:17.3, carbs:66.2, fat:7, fiber:15.4, sugar:1.5, micros:["Iron"] }
// ======================= INDIAN FOOD PACK 10 =======================

// PROTEIN POWDERS
,{ id:"ongoldstandard", icon:"💪", name:"Optimum Nutrition Gold Standard Whey", cat:"Supplements", kcal:390, protein:79.2, carbs:8.3, fat:4.2, fiber:0, sugar:3.3, micros:["Protein","Calcium"] },
{ id:"muscletechwhey", icon:"💪", name:"MuscleTech NitroTech Whey", cat:"Supplements", kcal:400, protein:80, carbs:7.5, fat:5.1, fiber:0, sugar:2.8, micros:["Protein"] },
{ id:"asitisolate", icon:"💪", name:"AS-IT-IS Whey Isolate", cat:"Supplements", kcal:372, protein:90, carbs:2.2, fat:1.2, fiber:0, sugar:1.1, micros:["Protein"] },
{ id:"nakprowhey", icon:"💪", name:"Nakpro Gold Whey", cat:"Supplements", kcal:384, protein:78.6, carbs:9.4, fat:5.2, fiber:0, sugar:4.2, micros:["Protein"] },
{ id:"mbbiozyme", icon:"💪", name:"MuscleBlaze Biozyme Whey", cat:"Supplements", kcal:388, protein:80.4, carbs:8.2, fat:4.8, fiber:0, sugar:2.9, micros:["Protein"] },

// DAIRY BRANDS
{ id:"amulmilk", icon:"🥛", name:"Amul Toned Milk", cat:"Dairy", kcal:58, protein:3.1, carbs:4.8, fat:3, fiber:0, sugar:4.8, micros:["Calcium"] },
{ id:"motherdairymilk", icon:"🥛", name:"Mother Dairy Toned Milk", cat:"Dairy", kcal:60, protein:3.2, carbs:4.9, fat:3.1, fiber:0, sugar:4.9, micros:["Calcium"] },
{ id:"amulbutter", icon:"🧈", name:"Amul Butter", cat:"Dairy", kcal:717, protein:0.9, carbs:0.1, fat:81.1, fiber:0, sugar:0.1, micros:["Vitamin A"] },
{ id:"amulcheese", icon:"🧀", name:"Amul Cheese", cat:"Dairy", kcal:402, protein:25, carbs:3, fat:33, fiber:0, sugar:1.8, micros:["Calcium"] },
{ id:"amulghee", icon:"🧈", name:"Amul Ghee", cat:"Dairy", kcal:900, protein:0, carbs:0, fat:100, fiber:0, sugar:0, micros:["Vitamin A"] },

// BISCUITS & SNACKS
{ id:"goodday", icon:"🍪", name:"Britannia Good Day Biscuit", cat:"Packaged Foods", kcal:505, protein:6.5, carbs:67, fat:23, fiber:2.4, sugar:24, micros:["Iron"] },
{ id:"mariegold", icon:"🍪", name:"Marie Gold Biscuit", cat:"Packaged Foods", kcal:445, protein:7.4, carbs:73, fat:14, fiber:2.8, sugar:20, micros:["Iron"] },
{ id:"bourbon", icon:"🍪", name:"Bourbon Biscuit", cat:"Packaged Foods", kcal:492, protein:6.8, carbs:67, fat:22, fiber:2.4, sugar:34, micros:["Calcium"] },
{ id:"oreo", icon:"🍪", name:"Oreo Biscuit", cat:"Packaged Foods", kcal:480, protein:4.8, carbs:71, fat:20, fiber:2.3, sugar:38, micros:["Iron"] },
{ id:"hideandseek", icon:"🍪", name:"Hide & Seek Biscuit", cat:"Packaged Foods", kcal:515, protein:6.2, carbs:66, fat:25, fiber:2.5, sugar:31, micros:["Iron"] },

// CHOCOLATES
{ id:"dairymilk", icon:"🍫", name:"Cadbury Dairy Milk", cat:"Chocolates", kcal:534, protein:7.3, carbs:59, fat:30, fiber:2.1, sugar:56, micros:["Calcium"] },
{ id:"kitkat", icon:"🍫", name:"KitKat", cat:"Chocolates", kcal:518, protein:6.2, carbs:61, fat:28, fiber:2.8, sugar:49, micros:["Calcium"] },
{ id:"snickers", icon:"🍫", name:"Snickers", cat:"Chocolates", kcal:488, protein:8.2, carbs:61, fat:24, fiber:2.9, sugar:50, micros:["Protein"] },
{ id:"fivestar", icon:"🍫", name:"5 Star Chocolate", cat:"Chocolates", kcal:472, protein:5.1, carbs:66, fat:21, fiber:1.8, sugar:58, micros:["Iron"] },

// SOFT DRINKS
{ id:"cocacola", icon:"🥤", name:"Coca-Cola", cat:"Soft Drinks", kcal:42, protein:0, carbs:10.6, fat:0, fiber:0, sugar:10.6, micros:["Sugar"] },
{ id:"pepsi", icon:"🥤", name:"Pepsi", cat:"Soft Drinks", kcal:43, protein:0, carbs:11, fat:0, fiber:0, sugar:11, micros:["Sugar"] },
{ id:"sprite", icon:"🥤", name:"Sprite", cat:"Soft Drinks", kcal:39, protein:0, carbs:9.8, fat:0, fiber:0, sugar:9.8, micros:["Sugar"] },
{ id:"fanta", icon:"🥤", name:"Fanta Orange", cat:"Soft Drinks", kcal:48, protein:0, carbs:12, fat:0, fiber:0, sugar:12, micros:["Vitamin C"] },

// ICE CREAMS
{ id:"butterscotchicecream", icon:"🍨", name:"Butterscotch Ice Cream", cat:"Desserts", kcal:214, protein:3.8, carbs:26, fat:11, fiber:0.4, sugar:22, micros:["Calcium"] },
{ id:"mangoicecream", icon:"🍨", name:"Mango Ice Cream", cat:"Desserts", kcal:207, protein:3.6, carbs:25, fat:10.8, fiber:0.5, sugar:21, micros:["Vitamin A"] },
{ id:"strawberryicecream", icon:"🍨", name:"Strawberry Ice Cream", cat:"Desserts", kcal:192, protein:3.5, carbs:24, fat:9.8, fiber:0.4, sugar:20, micros:["Calcium"] },

// INDIAN BREAKFAST
{ id:"sabudanakhichdi", icon:"🍛", name:"Sabudana Khichdi", cat:"Breakfast", kcal:180, protein:2.8, carbs:33, fat:4.6, fiber:1.5, sugar:2.2, micros:["Potassium"] },
{ id:"misal", icon:"🍛", name:"Misal", cat:"Breakfast", kcal:156, protein:7.2, carbs:21, fat:5.1, fiber:5.2, sugar:3.1, micros:["Iron"] },
{ id:"poori", icon:"🫓", name:"Poori", cat:"Indian Breads", kcal:296, protein:6.4, carbs:39, fat:13, fiber:2.8, sugar:1.2, micros:["Iron"] },
{ id:"bhatura", icon:"🫓", name:"Bhatura", cat:"Indian Breads", kcal:302, protein:8.1, carbs:43, fat:11.8, fiber:2.4, sugar:1.4, micros:["Iron"] },

// SPICES
{ id:"turmeric", icon:"🟡", name:"Turmeric Powder", cat:"Spices", kcal:354, protein:8, carbs:65, fat:10, fiber:21, sugar:3.2, micros:["Iron"] },
{ id:"cinnamon", icon:"🟤", name:"Cinnamon", cat:"Spices", kcal:247, protein:4, carbs:81, fat:1.2, fiber:53, sugar:2.2, micros:["Calcium"] },
{ id:"blackpepper", icon:"⚫", name:"Black Pepper", cat:"Spices", kcal:251, protein:10.4, carbs:64, fat:3.3, fiber:26, sugar:0.6, micros:["Iron"] }
// ======================= INDIAN FOOD PACK 11 =======================

// McDONALD'S
,{ id:"mcalootikki", icon:"🍔", name:"McDonald's McAloo Tikki Burger", cat:"Restaurant Foods", kcal:339, protein:7.8, carbs:48.2, fat:12.6, fiber:4.1, sugar:7.2, micros:["Iron"] },
{ id:"mcveggie", icon:"🍔", name:"McVeggie Burger", cat:"Restaurant Foods", kcal:362, protein:10.6, carbs:46.4, fat:15.1, fiber:4.5, sugar:8.1, micros:["Protein"] },
{ id:"mcchicken", icon:"🍔", name:"McChicken Burger", cat:"Restaurant Foods", kcal:400, protein:15.8, carbs:41.2, fat:19.2, fiber:2.8, sugar:6.8, micros:["Protein"] },
{ id:"mcfries", icon:"🍟", name:"McDonald's French Fries", cat:"Restaurant Foods", kcal:312, protein:3.5, carbs:41.4, fat:15.2, fiber:3.8, sugar:0.4, micros:["Potassium"] },

// KFC
{ id:"kfczinger", icon:"🍔", name:"KFC Zinger Burger", cat:"Restaurant Foods", kcal:420, protein:21.4, carbs:36.8, fat:21.8, fiber:2.2, sugar:5.2, micros:["Protein"] },
{ id:"kfchotwings", icon:"🍗", name:"KFC Hot Wings", cat:"Restaurant Foods", kcal:284, protein:19.8, carbs:10.6, fat:18.4, fiber:0.6, sugar:0.8, micros:["Protein"] },
{ id:"kfcpopcorn", icon:"🍗", name:"KFC Popcorn Chicken", cat:"Restaurant Foods", kcal:298, protein:18.6, carbs:13.8, fat:19.6, fiber:0.5, sugar:1.2, micros:["Protein"] },

// DOMINO'S
{ id:"dominomargherita", icon:"🍕", name:"Domino's Margherita Pizza", cat:"Restaurant Foods", kcal:266, protein:11.3, carbs:33.1, fat:10.2, fiber:2.3, sugar:3.8, micros:["Calcium"] },
{ id:"dominofarmhouse", icon:"🍕", name:"Domino's Farmhouse Pizza", cat:"Restaurant Foods", kcal:281, protein:12.4, carbs:34.8, fat:11.1, fiber:2.6, sugar:4.2, micros:["Vitamin A"] },
{ id:"dominopaneer", icon:"🍕", name:"Domino's Paneer Pizza", cat:"Restaurant Foods", kcal:288, protein:13.6, carbs:32.4, fat:12.5, fiber:2.4, sugar:3.6, micros:["Protein"] },

// SUBWAY
{ id:"subwayveggie", icon:"🥪", name:"Subway Veggie Delight", cat:"Restaurant Foods", kcal:228, protein:8.2, carbs:41.4, fat:3.2, fiber:5.8, sugar:7.2, micros:["Vitamin C"] },
{ id:"subwaychicken", icon:"🥪", name:"Subway Chicken Sandwich", cat:"Restaurant Foods", kcal:294, protein:18.2, carbs:38.8, fat:6.4, fiber:5.2, sugar:6.8, micros:["Protein"] },
{ id:"subwaypaneer", icon:"🥪", name:"Subway Paneer Tikka Sandwich", cat:"Restaurant Foods", kcal:322, protein:16.4, carbs:35.2, fat:12.8, fiber:4.4, sugar:6.1, micros:["Calcium"] },

// DRINKS
{ id:"redbull", icon:"🥤", name:"Red Bull", cat:"Energy Drinks", kcal:45, protein:0, carbs:11, fat:0, fiber:0, sugar:11, micros:["Caffeine"] },
{ id:"monster", icon:"🥤", name:"Monster Energy", cat:"Energy Drinks", kcal:46, protein:0, carbs:11.2, fat:0, fiber:0, sugar:11.2, micros:["Caffeine"] },
{ id:"gatorade", icon:"🥤", name:"Gatorade", cat:"Sports Drinks", kcal:24, protein:0, carbs:6, fat:0, fiber:0, sugar:6, micros:["Sodium"] },
{ id:"electral", icon:"🥤", name:"Electral Solution", cat:"Sports Drinks", kcal:15, protein:0, carbs:3.5, fat:0, fiber:0, sugar:3.5, micros:["Electrolytes"] },

// PROTEIN BARS
{ id:"proteinbarchoco", icon:"🍫", name:"Chocolate Protein Bar", cat:"Supplements", kcal:365, protein:30, carbs:35, fat:12, fiber:7, sugar:5, micros:["Protein"] },
{ id:"proteinbarpeanut", icon:"🥜", name:"Peanut Protein Bar", cat:"Supplements", kcal:382, protein:28, carbs:33, fat:15, fiber:6, sugar:4, micros:["Protein"] },
{ id:"granolabarchoco", icon:"🍫", name:"Chocolate Granola Bar", cat:"Supplements", kcal:420, protein:9, carbs:58, fat:16, fiber:5, sugar:22, micros:["Iron"] },

// NUTS
{ id:"cashewroasted", icon:"🥜", name:"Roasted Cashews", cat:"Nuts & Seeds", kcal:574, protein:15.3, carbs:33, fat:46, fiber:3.3, sugar:5.2, micros:["Magnesium"] },
{ id:"almondroasted", icon:"🥜", name:"Roasted Almonds", cat:"Nuts & Seeds", kcal:598, protein:21.8, carbs:20.4, fat:52.6, fiber:12.4, sugar:4.8, micros:["Vitamin E"] },
{ id:"peanutroasted", icon:"🥜", name:"Roasted Peanuts", cat:"Nuts & Seeds", kcal:587, protein:25.8, carbs:21.4, fat:49.4, fiber:8.4, sugar:4.6, micros:["Niacin"] },

// FRUITS
{ id:"greenapple", icon:"🍏", name:"Green Apple", cat:"Fruits", kcal:52, protein:0.3, carbs:13.8, fat:0.2, fiber:2.4, sugar:10.3, micros:["Vitamin C"] },
{ id:"redgrapes", icon:"🍇", name:"Red Grapes", cat:"Fruits", kcal:69, protein:0.7, carbs:18.1, fat:0.2, fiber:0.9, sugar:15.5, micros:["Vitamin K"] },
{ id:"greengrapes", icon:"🍇", name:"Green Grapes", cat:"Fruits", kcal:67, protein:0.6, carbs:17.2, fat:0.3, fiber:0.9, sugar:15.1, micros:["Vitamin C"] },

// VEGETABLES
{ id:"sweetpotato", icon:"🍠", name:"Sweet Potato", cat:"Vegetables", kcal:86, protein:1.6, carbs:20.1, fat:0.1, fiber:3, sugar:4.2, micros:["Vitamin A"] },
{ id:"purplecabbage", icon:"🥬", name:"Purple Cabbage", cat:"Vegetables", kcal:31, protein:1.4, carbs:7.4, fat:0.2, fiber:2.1, sugar:3.8, micros:["Vitamin C"] },
{ id:"yellowcapsicum", icon:"🫑", name:"Yellow Capsicum", cat:"Vegetables", kcal:27, protein:1, carbs:6.3, fat:0.2, fiber:1.7, sugar:4.2, micros:["Vitamin C"] },

// BREAKFAST
{ id:"avocadotoast", icon:"🥑", name:"Avocado Toast", cat:"Breakfast", kcal:198, protein:6.8, carbs:21.4, fat:10.4, fiber:5.8, sugar:2.2, micros:["Potassium"] },
{ id:"overnightoats", icon:"🥣", name:"Overnight Oats", cat:"Breakfast", kcal:142, protein:5.8, carbs:22.8, fat:3.6, fiber:4.2, sugar:5.1, micros:["Calcium"] },
{ id:"smoothiebowl", icon:"🥣", name:"Smoothie Bowl", cat:"Breakfast", kcal:126, protein:4.6, carbs:22.4, fat:2.6, fiber:4.4, sugar:15.8, micros:["Vitamin C"] }



];

// ============ NUTRIENT ENCYCLOPEDIA ============
const NUTRIENTS = [
  { name:"Protein", type:"Macronutrient", fn:"Builds and repairs muscle, skin, enzymes, and hormones; the body's structural nutrient.", sources:["Chicken Breast","Lentils","Egg","Salmon","Greek Yogurt"], deficiency:"Muscle wasting, weakness, slow wound healing.", rda:"~0.8g per kg body weight (roughly 50–60g for most adults)" },
  { name:"Carbohydrates", type:"Macronutrient", fn:"The body's main energy source, broken down into glucose to fuel the brain and muscles.", sources:["Wheat Roti","Brown Rice","Banana","Oats","Potato"], deficiency:"Low energy, fatigue, difficulty concentrating.", rda:"45–65% of total daily calories" },
  { name:"Dietary Fiber", type:"Macronutrient", fn:"Aids digestion, feeds gut bacteria, and helps steady blood sugar and cholesterol.", sources:["Chia Seeds","Lentils","Broccoli","Oats","Flaxseeds"], deficiency:"Constipation, poor gut health, blood sugar spikes.", rda:"25–38g" },
  { name:"Total Fat", type:"Macronutrient", fn:"Stores energy, builds cell membranes, and helps absorb vitamins A, D, E and K.", sources:["Olive Oil","Almonds","Salmon","Avocado","Ghee"], deficiency:"Poor vitamin absorption, dry skin, hormonal issues.", rda:"20–35% of total daily calories" },
  { name:"Sugar", type:"Macronutrient", fn:"A fast-digesting carbohydrate for quick energy; naturally present in fruit and dairy, added to many processed foods.", sources:["Honey","Jaggery","Grapes","Mango","Dark Chocolate"], deficiency:"Not an essential nutrient on its own — excess intake, not deficiency, is the common concern.", rda:"Under 10% of daily calories from added sugar (WHO guideline)" },

  { name:"Vitamin A", type:"Vitamin", fn:"Supports vision, immune defense, and skin/cell repair.", sources:["Sweet Potato","Carrot","Spinach","Mango","Pumpkin"], deficiency:"Night blindness, weakened immunity.", rda:"900 mcg (men) / 700 mcg (women)" },
  { name:"Vitamin C", type:"Vitamin", fn:"Antioxidant; builds collagen; boosts iron absorption and immunity.", sources:["Orange","Bell Pepper","Strawberry","Broccoli","Papaya"], deficiency:"Scurvy, fatigue, slow wound healing.", rda:"90 mg (men) / 75 mg (women)" },
  { name:"Vitamin D", type:"Vitamin", fn:"Regulates calcium absorption for bone strength; supports immunity.", sources:["Salmon","Sardines","Egg","Milk","Sunlight"], deficiency:"Rickets in children, soft/weak bones in adults.", rda:"15–20 mcg" },
  { name:"Vitamin E", type:"Vitamin", fn:"Antioxidant that protects cell membranes; supports skin health.", sources:["Almonds","Olive Oil","Peanuts","Butter"], deficiency:"Nerve and muscle damage (rare).", rda:"15 mg" },
  { name:"Vitamin K", type:"Vitamin", fn:"Essential for blood clotting and bone metabolism.", sources:["Kale","Spinach","Broccoli","Grapes","Blueberry"], deficiency:"Easy bruising, poor blood clotting.", rda:"90–120 mcg" },
  { name:"Vitamin B1 (Thiamin)", type:"Vitamin", fn:"Helps convert food into cellular energy; supports nerve function.", sources:["Pork Loin","Oats","Flaxseeds","Corn"], deficiency:"Beriberi, fatigue, nerve damage.", rda:"1.2 mg" },
  { name:"Vitamin B2 (Riboflavin)", type:"Vitamin", fn:"Supports energy production and healthy skin/eyes.", sources:["Milk","Egg","Almonds","Cheddar Cheese"], deficiency:"Cracked lips, skin and eye disorders.", rda:"1.3 mg" },
  { name:"Vitamin B3 (Niacin)", type:"Vitamin", fn:"Aids energy metabolism and DNA repair.", sources:["Chicken Breast","Tuna","Peanuts","Turkey Breast"], deficiency:"Pellagra (dermatitis, diarrhea, dementia).", rda:"16 mg" },
  { name:"Vitamin B6", type:"Vitamin", fn:"Supports protein metabolism and brain development.", sources:["Chicken Breast","Potato","Banana","Garlic","Onion"], deficiency:"Anemia, irritability, confusion.", rda:"1.3–1.7 mg" },
  { name:"Folate (B9)", type:"Vitamin", fn:"Needed for DNA synthesis and cell growth; vital in pregnancy.", sources:["Lentils","Spinach","Chickpeas","Broccoli","Beetroot"], deficiency:"Anemia; birth defects if deficient in pregnancy.", rda:"400 mcg" },
  { name:"Vitamin B12", type:"Vitamin", fn:"Maintains nerve cells and supports red blood cell formation.", sources:["Beef","Salmon","Egg","Greek Yogurt","Tuna"], deficiency:"Anemia, nerve damage, fatigue.", rda:"2.4 mcg" },

  { name:"Calcium", type:"Mineral", fn:"Builds bones and teeth; supports muscle and nerve function.", sources:["Milk","Cheddar Cheese","Kale","Chia Seeds","Sardines"], deficiency:"Osteoporosis, brittle bones.", rda:"1000 mg" },
  { name:"Iron", type:"Mineral", fn:"Carries oxygen in the blood via hemoglobin.", sources:["Lentils","Lean Beef","Spinach","Chickpeas","Turmeric"], deficiency:"Anemia, fatigue, pale skin.", rda:"8–18 mg" },
  { name:"Magnesium", type:"Mineral", fn:"Supports muscle and nerve function, energy production.", sources:["Almonds","Spinach","Quinoa","Oats","Cashews"], deficiency:"Muscle cramps, fatigue, irregular heartbeat.", rda:"400 mg" },
  { name:"Potassium", type:"Mineral", fn:"Balances fluids; supports muscle and nerve signaling.", sources:["Banana","Potato","Sweet Potato","Spinach","Tomato"], deficiency:"Muscle weakness, cramps, irregular heartbeat.", rda:"2600–3400 mg" },
  { name:"Zinc", type:"Mineral", fn:"Supports immune function and wound healing.", sources:["Lean Beef","Cashews","Chickpeas","Cheddar Cheese"], deficiency:"Slow healing, hair loss, weak immunity.", rda:"8–11 mg" },
  { name:"Selenium", type:"Mineral", fn:"Antioxidant that supports thyroid function.", sources:["Tuna","Salmon","Turkey Breast","Barley"], deficiency:"Thyroid dysfunction, weakened immunity.", rda:"55 mcg" },
  { name:"Manganese", type:"Mineral", fn:"Aids bone formation and metabolism.", sources:["Oats","Chickpeas","Almonds","Cinnamon","Beetroot"], deficiency:"Rare; may affect bone health.", rda:"1.8–2.3 mg" },
  { name:"Phosphorus", type:"Mineral", fn:"Works with calcium for bone health; stores cellular energy.", sources:["Cheddar Cheese","Oats","Salmon","Milk"], deficiency:"Bone pain, weakness, fatigue.", rda:"700 mg" },
  { name:"Iodine", type:"Mineral", fn:"Required to produce thyroid hormones.", sources:["Shrimp","Milk","Sardines","Iodized Salt"], deficiency:"Goiter, hypothyroidism.", rda:"150 mcg" },
  { name:"Copper", type:"Mineral", fn:"Assists iron metabolism and connective tissue formation.", sources:["Cashews","Walnuts","Chickpeas"], deficiency:"Anemia, weakened bones.", rda:"900 mcg" },
  { name:"Sodium", type:"Mineral", fn:"Regulates fluid balance and nerve transmission.", sources:["Table Salt","Cheddar Cheese","Processed Foods"], deficiency:"Rare; excess intake is the more common concern.", rda:"<2300 mg" },
];
