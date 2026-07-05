// ============ FOOD DATABASE (values per 100g edible portion) ============
const FOODS = [
  // FRUITS
  { id:"apple", name:"Apple", cat:"Fruits", kcal:52, protein:0.3, carbs:14, fat:0.2, fiber:2.4, sugar:10, micros:["Vitamin C","Potassium"] },
  { id:"banana", name:"Banana", cat:"Fruits", kcal:89, protein:1.1, carbs:23, fat:0.3, fiber:2.6, sugar:12, micros:["Vitamin B6","Potassium","Vitamin C"] },
  { id:"orange", name:"Orange", cat:"Fruits", kcal:47, protein:0.9, carbs:12, fat:0.1, fiber:2.4, sugar:9, micros:["Vitamin C","Folate"] },
  { id:"mango", name:"Mango", cat:"Fruits", kcal:60, protein:0.8, carbs:15, fat:0.4, fiber:1.6, sugar:14, micros:["Vitamin C","Vitamin A","Folate"] },
  { id:"strawberry", name:"Strawberry", cat:"Fruits", kcal:32, protein:0.7, carbs:7.7, fat:0.3, fiber:2, sugar:4.9, micros:["Vitamin C","Manganese"] },
  { id:"blueberry", name:"Blueberry", cat:"Fruits", kcal:57, protein:0.7, carbs:14.5, fat:0.3, fiber:2.4, sugar:10, micros:["Vitamin K","Vitamin C","Manganese"] },
  { id:"papaya", name:"Papaya", cat:"Fruits", kcal:43, protein:0.5, carbs:11, fat:0.3, fiber:1.7, sugar:7.8, micros:["Vitamin C","Vitamin A","Folate"] },
  { id:"pomegranate", name:"Pomegranate", cat:"Fruits", kcal:83, protein:1.7, carbs:19, fat:1.2, fiber:4, sugar:14, micros:["Vitamin C","Vitamin K","Folate"] },
  { id:"grapes", name:"Grapes", cat:"Fruits", kcal:69, protein:0.7, carbs:18, fat:0.2, fiber:0.9, sugar:16, micros:["Vitamin K","Vitamin C"] },
  { id:"watermelon", name:"Watermelon", cat:"Fruits", kcal:30, protein:0.6, carbs:8, fat:0.2, fiber:0.4, sugar:6, micros:["Vitamin C","Vitamin A"] },

  // VEGETABLES
  { id:"spinach", name:"Spinach", cat:"Vegetables", kcal:23, protein:2.9, carbs:3.6, fat:0.4, fiber:2.2, sugar:0.4, micros:["Iron","Vitamin K","Vitamin A","Folate"] },
  { id:"broccoli", name:"Broccoli", cat:"Vegetables", kcal:34, protein:2.8, carbs:6.6, fat:0.4, fiber:2.6, sugar:1.7, micros:["Vitamin C","Vitamin K","Folate"] },
  { id:"carrot", name:"Carrot", cat:"Vegetables", kcal:41, protein:0.9, carbs:10, fat:0.2, fiber:2.8, sugar:4.7, micros:["Vitamin A","Vitamin K"] },
  { id:"sweetpotato", name:"Sweet Potato", cat:"Vegetables", kcal:86, protein:1.6, carbs:20, fat:0.1, fiber:3, sugar:4.2, micros:["Vitamin A","Vitamin C","Potassium"] },
  { id:"potato", name:"Potato", cat:"Vegetables", kcal:77, protein:2, carbs:17, fat:0.1, fiber:2.2, sugar:0.8, micros:["Vitamin C","Potassium","Vitamin B6"] },
  { id:"tomato", name:"Tomato", cat:"Vegetables", kcal:18, protein:0.9, carbs:3.9, fat:0.2, fiber:1.2, sugar:2.6, micros:["Vitamin C","Potassium","Vitamin K"] },
  { id:"bellpepper", name:"Bell Pepper", cat:"Vegetables", kcal:31, protein:1, carbs:6, fat:0.3, fiber:2.1, sugar:4.2, micros:["Vitamin C","Vitamin A"] },
  { id:"cauliflower", name:"Cauliflower", cat:"Vegetables", kcal:25, protein:1.9, carbs:5, fat:0.3, fiber:2, sugar:1.9, micros:["Vitamin C","Vitamin K","Folate"] },
  { id:"beetroot", name:"Beetroot", cat:"Vegetables", kcal:43, protein:1.6, carbs:10, fat:0.2, fiber:2.8, sugar:7, micros:["Folate","Manganese","Potassium"] },
  { id:"kale", name:"Kale", cat:"Vegetables", kcal:49, protein:4.3, carbs:9, fat:0.9, fiber:3.6, sugar:2.3, micros:["Vitamin K","Vitamin A","Vitamin C","Calcium"] },
  { id:"onion", name:"Onion", cat:"Vegetables", kcal:40, protein:1.1, carbs:9.3, fat:0.1, fiber:1.7, sugar:4.2, micros:["Vitamin C","Vitamin B6"] },
  { id:"garlic", name:"Garlic", cat:"Vegetables", kcal:149, protein:6.4, carbs:33, fat:0.5, fiber:2.1, sugar:1, micros:["Vitamin C","Vitamin B6","Manganese"] },
  { id:"cucumber", name:"Cucumber", cat:"Vegetables", kcal:15, protein:0.7, carbs:3.6, fat:0.1, fiber:0.5, sugar:1.7, micros:["Vitamin K","Potassium"] },
  { id:"pumpkin", name:"Pumpkin", cat:"Vegetables", kcal:26, protein:1, carbs:6.5, fat:0.1, fiber:0.5, sugar:2.8, micros:["Vitamin A","Potassium"] },

  // GRAINS & CEREALS
  { id:"brownrice", name:"Brown Rice (cooked)", cat:"Grains", kcal:123, protein:2.7, carbs:26, fat:1, fiber:1.6, sugar:0.4, micros:["Magnesium","Selenium","Vitamin B6"] },
  { id:"whiterice", name:"White Rice (cooked)", cat:"Grains", kcal:130, protein:2.7, carbs:28, fat:0.3, fiber:0.4, sugar:0.1, micros:["Manganese"] },
  { id:"oats", name:"Oats (dry)", cat:"Grains", kcal:389, protein:16.9, carbs:66, fat:6.9, fiber:10.6, sugar:0, micros:["Manganese","Phosphorus","Iron"] },
  { id:"wholewheatbread", name:"Whole Wheat Bread", cat:"Grains", kcal:247, protein:13, carbs:41, fat:3.4, fiber:7, sugar:5, micros:["Selenium","Manganese","B Vitamins"] },
  { id:"quinoa", name:"Quinoa (cooked)", cat:"Grains", kcal:120, protein:4.4, carbs:21, fat:1.9, fiber:2.8, sugar:0.9, micros:["Magnesium","Iron","Folate"] },
  { id:"corn", name:"Corn", cat:"Grains", kcal:96, protein:3.4, carbs:21, fat:1.5, fiber:2.4, sugar:4.5, micros:["Vitamin C","Folate","Thiamin"] },
  { id:"barley", name:"Barley (cooked)", cat:"Grains", kcal:123, protein:2.3, carbs:28, fat:0.4, fiber:3.8, sugar:0.8, micros:["Selenium","Manganese"] },

  // LEGUMES & PULSES
  { id:"lentils", name:"Lentils (cooked)", cat:"Legumes", kcal:116, protein:9, carbs:20, fat:0.4, fiber:7.9, sugar:1.8, micros:["Folate","Iron","Manganese"] },
  { id:"chickpeas", name:"Chickpeas (cooked)", cat:"Legumes", kcal:164, protein:8.9, carbs:27, fat:2.6, fiber:7.6, sugar:4.8, micros:["Folate","Manganese","Iron"] },
  { id:"kidneybeans", name:"Kidney Beans (cooked)", cat:"Legumes", kcal:127, protein:8.7, carbs:22.8, fat:0.5, fiber:6.4, sugar:0.3, micros:["Folate","Iron","Potassium"] },
  { id:"soybeans", name:"Soybeans (cooked)", cat:"Legumes", kcal:173, protein:16.6, carbs:9.9, fat:9, fiber:6, sugar:3, micros:["Iron","Folate","Vitamin K"] },
  { id:"greenpeas", name:"Green Peas", cat:"Legumes", kcal:81, protein:5.4, carbs:14, fat:0.4, fiber:5.7, sugar:5.7, micros:["Vitamin K","Vitamin C","Folate"] },

  // DAIRY & EGGS
  { id:"milk", name:"Milk (whole)", cat:"Dairy & Eggs", kcal:61, protein:3.2, carbs:4.8, fat:3.3, fiber:0, sugar:5, micros:["Calcium","Vitamin D","Vitamin B12"] },
  { id:"greekyogurt", name:"Greek Yogurt (plain)", cat:"Dairy & Eggs", kcal:59, protein:10, carbs:3.6, fat:0.4, fiber:0, sugar:3.6, micros:["Calcium","Vitamin B12","Probiotics"] },
  { id:"cheddar", name:"Cheddar Cheese", cat:"Dairy & Eggs", kcal:403, protein:25, carbs:1.3, fat:33, fiber:0, sugar:0.5, micros:["Calcium","Vitamin B12","Zinc"] },
  { id:"egg", name:"Egg (whole)", cat:"Dairy & Eggs", kcal:155, protein:13, carbs:1.1, fat:11, fiber:0, sugar:1.1, micros:["Vitamin B12","Vitamin D","Choline","Selenium"] },

  // MEAT & POULTRY
  { id:"chickenbreast", name:"Chicken Breast (cooked)", cat:"Meat & Poultry", kcal:165, protein:31, carbs:0, fat:3.6, fiber:0, sugar:0, micros:["Vitamin B6","Niacin","Selenium"] },
  { id:"beef", name:"Lean Beef (cooked)", cat:"Meat & Poultry", kcal:250, protein:26, carbs:0, fat:15, fiber:0, sugar:0, micros:["Iron","Zinc","Vitamin B12"] },
  { id:"turkey", name:"Turkey Breast (cooked)", cat:"Meat & Poultry", kcal:135, protein:30, carbs:0, fat:1, fiber:0, sugar:0, micros:["Niacin","Vitamin B6","Selenium"] },
  { id:"pork", name:"Pork Loin (cooked)", cat:"Meat & Poultry", kcal:242, protein:27, carbs:0, fat:14, fiber:0, sugar:0, micros:["Thiamin","Selenium","Zinc"] },

  // FISH & SEAFOOD
  { id:"salmon", name:"Salmon (cooked)", cat:"Fish & Seafood", kcal:208, protein:22, carbs:0, fat:13, fiber:0, sugar:0, micros:["Omega-3","Vitamin D","Vitamin B12","Selenium"] },
  { id:"tuna", name:"Tuna (canned in water)", cat:"Fish & Seafood", kcal:116, protein:26, carbs:0, fat:1, fiber:0, sugar:0, micros:["Selenium","Vitamin B12","Niacin"] },
  { id:"shrimp", name:"Shrimp (cooked)", cat:"Fish & Seafood", kcal:99, protein:24, carbs:0.2, fat:0.3, fiber:0, sugar:0, micros:["Selenium","Vitamin B12","Iodine"] },
  { id:"sardines", name:"Sardines (canned)", cat:"Fish & Seafood", kcal:208, protein:24.6, carbs:0, fat:11.5, fiber:0, sugar:0, micros:["Calcium","Vitamin D","Omega-3"] },

  // NUTS & SEEDS
  { id:"almonds", name:"Almonds", cat:"Nuts & Seeds", kcal:579, protein:21.2, carbs:21.6, fat:49.9, fiber:12.5, sugar:4.4, micros:["Vitamin E","Magnesium","Manganese"] },
  { id:"walnuts", name:"Walnuts", cat:"Nuts & Seeds", kcal:654, protein:15.2, carbs:13.7, fat:65.2, fiber:6.7, sugar:2.6, micros:["Omega-3","Manganese","Copper"] },
  { id:"chiaseeds", name:"Chia Seeds", cat:"Nuts & Seeds", kcal:486, protein:16.5, carbs:42, fat:30.7, fiber:34.4, sugar:0, micros:["Calcium","Omega-3","Manganese"] },
  { id:"flaxseeds", name:"Flaxseeds", cat:"Nuts & Seeds", kcal:534, protein:18.3, carbs:29, fat:42.2, fiber:27.3, sugar:1.6, micros:["Omega-3","Manganese","Thiamin"] },
  { id:"peanuts", name:"Peanuts", cat:"Nuts & Seeds", kcal:567, protein:25.8, carbs:16, fat:49.2, fiber:8.5, sugar:4.7, micros:["Niacin","Manganese","Vitamin E"] },
  { id:"cashews", name:"Cashews", cat:"Nuts & Seeds", kcal:553, protein:18.2, carbs:30.2, fat:43.9, fiber:3.3, sugar:5.9, micros:["Copper","Magnesium","Zinc"] },

  // OILS & FATS
  { id:"oliveoil", name:"Olive Oil", cat:"Oils & Fats", kcal:884, protein:0, carbs:0, fat:100, fiber:0, sugar:0, micros:["Vitamin E","Vitamin K"] },
  { id:"butter", name:"Butter", cat:"Oils & Fats", kcal:717, protein:0.9, carbs:0.1, fat:81, fiber:0, sugar:0.1, micros:["Vitamin A","Vitamin E"] },
  { id:"coconutoil", name:"Coconut Oil", cat:"Oils & Fats", kcal:862, protein:0, carbs:0, fat:100, fiber:0, sugar:0, micros:["MCTs"] },

  // SPICES & HERBS
  { id:"turmeric", name:"Turmeric", cat:"Spices & Herbs", kcal:312, protein:9.7, carbs:67, fat:3.3, fiber:22.7, sugar:3.2, micros:["Iron","Manganese","Vitamin B6"] },
  { id:"ginger", name:"Ginger", cat:"Spices & Herbs", kcal:80, protein:1.8, carbs:18, fat:0.8, fiber:2, sugar:1.7, micros:["Vitamin C","Manganese","Potassium"] },
  { id:"cinnamon", name:"Cinnamon", cat:"Spices & Herbs", kcal:247, protein:4, carbs:81, fat:1.2, fiber:53.1, sugar:2.2, micros:["Calcium","Manganese","Iron"] },
];

// ============ NUTRIENT ENCYCLOPEDIA ============
const NUTRIENTS = [
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
