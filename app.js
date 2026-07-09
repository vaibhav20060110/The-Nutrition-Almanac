const h = React.createElement;

const { useState, useMemo, useEffect, useRef } = React;

const STORAGE_THEME = "nutrition-theme";

const CATEGORIES = ["All", ...Array.from(new Set(FOODS.map(f => f.cat)))];

// Themed background + watermark icon per category, shown behind the food grid
const CATEGORY_THEME = {
  "All":              { grad: "linear-gradient(135deg, #F1EADA, #E7DEC8)", emoji: "🍽️" },
  "Fruits":           { grad: "linear-gradient(135deg, #FBDCC9, #F6C9A8)", emoji: "🍎" },
  "Vegetables":       { grad: "linear-gradient(135deg, #DCE9CE, #C7DDB2)", emoji: "🥦" },
  "Grains":           { grad: "linear-gradient(135deg, #F1E2BE, #E7CD92)", emoji: "🌾" },
  "Legumes":          { grad: "linear-gradient(135deg, #E3DCC4, #CBBF95)", emoji: "🫘" },
  "Dairy & Eggs":     { grad: "linear-gradient(135deg, #F5F1E2, #E6E9EF)", emoji: "🥛" },
  "Meat & Poultry":   { grad: "linear-gradient(135deg, #EBC9C1, #DDA79B)", emoji: "🍗" },
  "Fish & Seafood":   { grad: "linear-gradient(135deg, #CFE1E0, #AECBCB)", emoji: "🐟" },
  "Nuts & Seeds":     { grad: "linear-gradient(135deg, #E7D3B8, #D3B48C)", emoji: "🥜" },
  "Oils & Fats":      { grad: "linear-gradient(135deg, #F0DDA6, #E3C36F)", emoji: "🫒" },
  "Spices & Herbs":   { grad: "linear-gradient(135deg, #E7C9B0, #D69B78)", emoji: "🌿" },
  "Beverages":        { grad: "linear-gradient(135deg, #D6E6E0, #B7D4CB)", emoji: "🍵" },
  "Sweets & Snacks":  { grad: "linear-gradient(135deg, #E8D2C6, #D6AF9B)", emoji: "🍫" },
  "Curries & Dishes": { grad: "linear-gradient(135deg, #F0CBA5, #E0946B)", emoji: "🍛" },
};

function round(n, d = 1) {
  const p = Math.pow(10, d);
  return Math.round((n + Number.EPSILON) * p) / p;
}

function scale(food, grams) {
  const f = grams / 100;
  return {
    kcal: food.kcal * f,
    protein: food.protein * f,
    carbs: food.carbs * f,
    fat: food.fat * f,
    fiber: food.fiber * f,
    sugar: food.sugar * f,
  };
}

// ---------- Small building blocks ----------

function Chip(props) {
  return h("button", {
    className: "chip" + (props.active ? " chip--active" : ""),
    onClick: props.onClick,
    type: "button",
  }, props.children);
}

function RuleThick() { return h("div", { className: "rule rule--thick" }); }
function RuleThin() { return h("div", { className: "rule rule--thin" }); }

// The signature element: a stylized "Nutrition Facts" style label
function NutritionLabel(props) {
  const food = props.food;
  const grams = props.grams;
  const v = scale(food, grams);
  const rows = [
    ["Total Carbohydrate", v.carbs, "g"],
    ["  Dietary Fiber", v.fiber, "g"],
    ["  Total Sugars", v.sugar, "g"],
    ["Protein", v.protein, "g"],
    ["Total Fat", v.fat, "g"],
  ];
  const servingText = food.unit
    ? round(grams / food.unitGrams, 2) + " " + food.unit + (grams === food.unitGrams ? "" : "s") + " (" + round(grams, 0) + "g)"
    : grams + "g";
  return h("div", { className: "label" },
    h("div", { className: "label__title" }, "Nutrition Facts"),
    h("div", { className: "label__serving" }, "Amount per ", h("strong", null, servingText), " serving"),
    h(RuleThick, null),
    h("div", { className: "label__calories" },
      h("span", null, "Calories"),
      h("span", { className: "label__caloriesNum" }, round(v.kcal, 0))
    ),
    h(RuleThick, null),
    rows.map((r, i) => h("div", { className: "label__row", key: i },
      h("span", { className: r[0].startsWith("  ") ? "label__sub" : "" }, r[0].trim()),
      h("span", null, round(r[1], 1) + r[2])
    )),
    h(RuleThin, null),
    h("div", { className: "label__micros" },
      h("div", { className: "label__microsTitle" }, "Notable vitamins & minerals"),
      h("div", { className: "label__microsList" },
        food.micros.map((m, i) => h("span", { className: "tag", key: i }, m))
      )
    )
  );
}
function FoodCard(props) {

    const f = props.food;
    const isFav = props.favorites.includes(f.id);

    return h("button",
    {
        className:"foodCard",
        onClick:props.onClick,
        type:"button"
    },

        h("div",{className:"foodCard__iconWrap"},
            h("span",{className:"foodCard__icon"},f.icon)
        ),

        // ❤️ FAVORITE BUTTON
        h(
            "button",
            {
                className:"favBtn",
                type:"button",

                onClick:(e)=>{

                    e.stopPropagation();

                    if(isFav){

                        props.setFavorites(
                            props.favorites.filter(id=>id!==f.id)
                        );

                    }else{

                        props.setFavorites([
                            ...props.favorites,
                            f.id
                        ]);

                    }

                }

            },

            isFav ? "❤️" : "🤍"

        ),

        h("div",{className:"foodCard__cat"},f.cat),

        h("div",{className:"foodCard__name"},f.name),

        f.unit
        ? h("div",{className:"foodCard__kcal"},
            round(f.kcal*f.unitGrams/100,0),
            h("span",null," kcal / "+f.unit))
        : h("div",{className:"foodCard__kcal"},
            round(f.kcal,0),
            h("span",null," kcal / 100g")),

        h("div",{className:"foodCard__macros"},
            h("span",null,"P "+round(f.protein)+"g"),
            h("span",null,"C "+round(f.carbs)+"g"),
            h("span",null,"F "+round(f.fat)+"g")
        )

    );

}

// ---------- Browse tab ----------

function BrowseTab(props) {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [cat, setCat] = useState("All");
  const [selectedId, setSelectedId] = useState(null);
  const [count, setCount] = useState(1);
  const [grams, setGrams] = useState(100);

const filtered = useMemo(() => {

    let foods = FOODS.filter(f => {

        const matchesCat = cat === "All" || f.cat === cat;
        const matchesQuery = f.name.toLowerCase().includes(query.toLowerCase());

        return matchesCat && matchesQuery;

    });

    switch(sortBy){

        case "caloriesAsc":
            foods.sort((a,b)=>a.kcal-b.kcal);
            break;

        case "caloriesDesc":
            foods.sort((a,b)=>b.kcal-a.kcal);
            break;

        case "protein":
            foods.sort((a,b)=>b.protein-a.protein);
            break;

        case "carbs":
            foods.sort((a,b)=>b.carbs-a.carbs);
            break;

        case "fat":
            foods.sort((a,b)=>b.fat-a.fat);
            break;

        case "nameAsc":
            foods.sort((a,b)=>a.name.localeCompare(b.name));
            break;

        case "nameDesc":
            foods.sort((a,b)=>b.name.localeCompare(a.name));
            break;

        default:
            break;

    }

    return foods;

}, [query, cat, sortBy]);
  const selected = FOODS.find(f => f.id === selectedId) || null;
  const usesUnit = !!(selected && selected.unit);
  const effectiveGrams = usesUnit ? count * selected.unitGrams : grams;

  useEffect(() => { setGrams(100); setCount(1); }, [selectedId]);

  return h("div", { className: "tabPane" },
    h("div", { className: "browseLayout" },
      h("div", { className: "browseMain" },
       h("div", { className: "searchRow" },

    h("input", {
        className: "searchInput",
        type: "text",
        placeholder: `Search among ${FOODS.length} foods...`,
        value: query,
        onChange: e => setQuery(e.target.value),
    }),

    h(
        "select",
        {
            className: "sortSelect",
            value: sortBy,
            onChange: e => setSortBy(e.target.value)
        },

        h("option", { value: "default" }, "Default"),
        h("option", { value: "nameAsc" }, "Name A-Z"),
        h("option", { value: "nameDesc" }, "Name Z-A"),
        h("option", { value: "caloriesAsc" }, "Calories ↑"),
        h("option", { value: "caloriesDesc" }, "Calories ↓"),
        h("option", { value: "protein" }, "Protein ↑"),
        h("option", { value: "carbs" }, "Carbs ↑"),
        h("option", { value: "fat" }, "Fat ↑")

    ),

    h("div", { className: "resultCount" }, filtered.length + " results")

),
        h("div", { className: "chipRow" },
          CATEGORIES.map(c => h(Chip, {
            key: c, active: cat === c, onClick: () => setCat(c),
          }, c))
        ),
        h("div", {
          className: "categoryBanner",
          style: { background: (CATEGORY_THEME[cat] || CATEGORY_THEME.All).grad },
        },
          h("span", { className: "categoryBanner__emoji" }, (CATEGORY_THEME[cat] || CATEGORY_THEME.All).emoji),
          h("span", { className: "categoryBanner__label" }, cat === "All" ? "All Foods" : cat),
          h("span", { className: "categoryBanner__count" }, filtered.length + (filtered.length === 1 ? " item" : " items"))
        ),
        h("div", { className: "foodGrid" },
          filtered.map(f => h(FoodCard, {
            key: f.id,
            food: f,
            favorites: props.favorites,
            setFavorites: props.setFavorites,
            onClick: () => setSelectedId(f.id),
          })),
          filtered.length === 0 && h("div", { className: "emptyState" },
            "No foods match \u201C" + query + "\u201D. Try another search or category.")
        )
      ),
      h("div", { className: "browseSide" },
        selected
          ? h("div", { className: "labelPanel" },
              h("div", { className: "labelPanel__head" },
                h("div", { className: "labelPanel__headLeft" },
                  h("span", { className: "labelPanel__icon" }, selected.icon),
                  h("div", null,
                    h("div", { className: "labelPanel__cat" }, selected.cat),
                    h("div", { className: "labelPanel__name" }, selected.name)
                  )
                ),
                h("button", { className: "iconBtn", onClick: () => setSelectedId(null), type: "button", "aria-label": "Close" }, "\u2715")
              ),
              h("div", { className: "gramsRow" },
                usesUnit
                  ? h(React.Fragment, null,
                      h("label", { htmlFor: "grams-input" }, "How many " + selected.unit + "s"),
                      h("input", {
                        id: "grams-input", type: "number", min: "0.25", step: "0.25", value: count,
                        onChange: e => setCount(Math.max(0.25, Number(e.target.value) || 0)),
                      }),
                      h("span", { className: "gramsRow__hint" }, "= " + round(effectiveGrams, 0) + "g")
                    )
                  : h(React.Fragment, null,
                      h("label", { htmlFor: "grams-input" }, "Portion size"),
                      h("input", {
                        id: "grams-input", type: "number", min: "1", value: grams,
                        onChange: e => setGrams(Math.max(1, Number(e.target.value) || 0)),
                      }),
                      h("span", null, "g")
                    )
              ),
              h(NutritionLabel, { food: selected, grams: effectiveGrams }),
              h("button", {
                className: "btn btn--primary btn--block",
                type: "button",
                onClick: () => props.onAddToLog(selected, effectiveGrams),
              }, usesUnit
                  ? "Add " + count + " " + selected.unit + (count === 1 ? "" : "s") + " to today\u2019s log"
                  : "Add " + grams + "g to today\u2019s log")
            )
          : h("div", { className: "labelPanel labelPanel--empty" },
              h("div", { className: "labelPanel__hint" },
                "Select any food to open its Nutrition Facts label \u2014 full macros, fiber, sugar, and its standout vitamins & minerals."
              )
            )
      )
    )
  );
}

// ---------- Encyclopedia tab ----------

function NutrientRow(props) {
  const n = props.nutrient;
  const open = props.open;
  return h("div", { className: "nutrientRow" + (open ? " nutrientRow--open" : "") },
    h("button", { className: "nutrientRow__head", type: "button", onClick: props.onToggle },
      h("span", { className: "nutrientRow__type nutrientRow__type--" + n.type.toLowerCase() }, n.type),
      h("span", { className: "nutrientRow__name" }, n.name),
      h("span", { className: "nutrientRow__chevron" }, open ? "\u2212" : "+")
    ),
    open && h("div", { className: "nutrientRow__body" },
      h("p", null, n.fn),
      h("div", { className: "nutrientRow__grid" },
        h("div", null,
          h("div", { className: "nutrientRow__label" }, "Top food sources"),
          h("div", { className: "tagRow" }, n.sources.map((s, i) => h("span", { className: "tag", key: i }, s)))
        ),
        h("div", null,
          h("div", { className: "nutrientRow__label" }, "Daily target (adult)"),
          h("div", { className: "nutrientRow__value" }, n.rda)
        ),
        h("div", null,
          h("div", { className: "nutrientRow__label" }, "Signs of deficiency"),
          h("div", { className: "nutrientRow__value" }, n.deficiency)
        )
      )
    )
  );
}

function EncyclopediaTab() {
  const [openName, setOpenName] = useState(NUTRIENTS[0].name);
  const [filter, setFilter] = useState("All");
  const list = NUTRIENTS.filter(n => filter === "All" || n.type === filter);
  return h("div", { className: "tabPane" },
    h("div", { className: "encHead" },
      h("h2", null, "The Nutrient Encyclopedia"),
      h("p", { className: "encSub" }, "5 macronutrients, 11 vitamins and 11 minerals \u2014 what each does, where to find it, and what happens if you run short.")
    ),
    h("div", { className: "chipRow" },
      ["All", "Macronutrient", "Vitamin", "Mineral"].map(t => h(Chip, {
        key: t, active: filter === t, onClick: () => setFilter(t),
      }, t === "All" ? "All" : t + "s"))
    ),
    h("div", { className: "nutrientList" },
      list.map(n => h(NutrientRow, {
        key: n.name, nutrient: n, open: openName === n.name,
        onToggle: () => setOpenName(openName === n.name ? null : n.name),
      }))
    )
  );
}

// ---------- Tracker tab ----------

function GoalField(props) {
  return h("label", { className: "goalField" },
    h("span", null, props.label),
    h("input", {
      type: "number", min: "0", value: props.value,
      onChange: e => props.onChange(Math.max(0, Number(e.target.value) || 0)),
    }),
    h("span", { className: "goalField__unit" }, props.unit)
  );
}

function ProgressBar(props) {
  const pct = props.goal > 0 ? Math.min(100, (props.value / props.goal) * 100) : 0;
  return h("div", { className: "progress" },
    h("div", { className: "progress__labels" },
      h("span", null, props.label),
      h("span", null, round(props.value, 0) + " / " + round(props.goal, 0) + " " + props.unit)
    ),
    h("div", { className: "progress__track" },
      h("div", { className: "progress__fill progress__fill--" + props.tone, style: { width: pct + "%" } })
    )
  );
}

function QuickAdd(props) {
  const [query, setQuery] = useState("");
  const [grams, setGrams] = useState(100);
  const [count, setCount] = useState(1);
  const matches = query.length > 0
    ? FOODS.filter(f => f.name.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
    : [];
  return h("div", { className: "quickAdd" },
    h("div", { className: "quickAdd__row" },
      h("input", {
        className: "searchInput", type: "text", placeholder: "Add a food to today\u2019s log\u2026",
        value: query, onChange: e => setQuery(e.target.value),
      }),
      h("input", {
        className: "quickAdd__grams", type: "number", min: "0.25", step: "0.25",
        value: matches.length === 1 && matches[0].unit ? count : grams,
        onChange: e => {
          const val = Math.max(0.25, Number(e.target.value) || 0);
          setGrams(val); setCount(val);
        },
      }),
      h("span", null, matches.length === 1 && matches[0].unit ? matches[0].unit + "(s)" : "g")
    ),
    matches.length > 0 && h("div", { className: "quickAdd__matches" },
      matches.map(f => h("button", {
        key: f.id, type: "button", className: "quickAdd__match",
        onClick: () => {
          const g = f.unit ? count * f.unitGrams : grams;
          props.onAdd(f, g);
          setQuery("");
        },
      }, f.name, h("span", null, f.unit
          ? round(f.kcal * f.unitGrams / 100, 0) + " kcal/" + f.unit
          : round(f.kcal, 0) + " kcal/100g")))
    )
  );
}

function TrackerTab(props) {
  const { log, goals, setGoals, onAdd, onRemove } = props;

  const totals = useMemo(() => log.reduce((acc, entry) => {
    const v = scale(entry.food, entry.grams);
    acc.kcal += v.kcal; acc.protein += v.protein; acc.carbs += v.carbs;
    acc.fat += v.fat; acc.fiber += v.fiber; acc.sugar += v.sugar;
    return acc;
  }, { kcal: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sugar: 0 }), [log]);

  return h("div", { className: "tabPane" },
    h("div", { className: "trackerLayout" },
      h("div", { className: "trackerMain" },
        h("h2", null, "Today\u2019s Log"),
        h(QuickAdd, { onAdd: onAdd }),
        log.length === 0
          ? h("div", { className: "emptyState" }, "Nothing logged yet. Search above, or add foods from the Browse tab.")
          : h("div", { className: "logTable" },
              h("div", { className: "logTable__head" },
                h("span", null, "Food"), h("span", null, "Grams"), h("span", null, "Kcal"),
                h("span", null, "P"), h("span", null, "C"), h("span", null, "F"), h("span", null, "")
              ),
              log.map(entry => {
                const v = scale(entry.food, entry.grams);
                const portionText = entry.food.unit
                  ? round(entry.grams / entry.food.unitGrams, 2) + " " + entry.food.unit + "(s)"
                  : entry.grams + "g";
                return h("div", { className: "logTable__row", key: entry.uid },
                  h("span", { className: "logTable__name" }, entry.food.name),
                  h("span", null, portionText),
                  h("span", null, round(v.kcal, 0)),
                  h("span", null, round(v.protein, 0) + "g"),
                  h("span", null, round(v.carbs, 0) + "g"),
                  h("span", null, round(v.fat, 0) + "g"),
                  h("button", {
                    className: "iconBtn", type: "button", "aria-label": "Remove",
                    onClick: () => onRemove(entry.uid),
                  }, "\u2715")
                );
              })
            )
      ),
      h("div", { className: "trackerSide" },
        h("div", { className: "goalsCard" },
          h("h3", null, "Daily Goals"),
          h(GoalField, { label: "Calories", unit: "kcal", value: goals.kcal, onChange: v => setGoals(Object.assign({}, goals, { kcal: v })) }),
          h(GoalField, { label: "Protein", unit: "g", value: goals.protein, onChange: v => setGoals(Object.assign({}, goals, { protein: v })) }),
          h(GoalField, { label: "Carbs", unit: "g", value: goals.carbs, onChange: v => setGoals(Object.assign({}, goals, { carbs: v })) }),
          h(GoalField, { label: "Fat", unit: "g", value: goals.fat, onChange: v => setGoals(Object.assign({}, goals, { fat: v })) })
        ),
        h("div", { className: "totalsCard" },
          h("h3", null, "Progress"),
          h(ProgressBar, { label: "Calories", value: totals.kcal, goal: goals.kcal, unit: "kcal", tone: "kcal" }),
          h(ProgressBar, { label: "Protein", value: totals.protein, goal: goals.protein, unit: "g", tone: "protein" }),
          h(ProgressBar, { label: "Carbs", value: totals.carbs, goal: goals.carbs, unit: "g", tone: "carbs" }),
          h(ProgressBar, { label: "Fat", value: totals.fat, goal: goals.fat, unit: "g", tone: "fat" }),
          h(RuleThin, null),
          h("div", { className: "totalsCard__extra" },
            h("span", null, "Fiber: " + round(totals.fiber, 0) + "g"),
            h("span", null, "Sugar: " + round(totals.sugar, 0) + "g")
          )
        )
      )
    )
  );
}
function HealthTab(){

    const [age,setAge]=useState(20);
    const [gender,setGender]=useState("male");
    const [height,setHeight]=useState(181);
    const [weight,setWeight]=useState(87);
    const [activity,setActivity]=useState(1.55);

    const bmi=weight/Math.pow(height/100,2);

    const bmiStatus=
        bmi<18.5?"Underweight":
        bmi<25?"Healthy":
        bmi<30?"Overweight":
        "Obese";

    const bmr=
        gender==="male"
        ?10*weight+6.25*height-5*age+5
        :10*weight+6.25*height-5*age-161;

    const tdee=bmr*activity;

    return h("div",{className:"healthPage"},

        h("h2",null,"Health Tools"),

        h("div",{className:"healthGrid"},

            h("label",null,
                "Age",
                h("input",{
                    type:"number",
                    value:age,
                    onChange:e=>setAge(Number(e.target.value))
                })
            ),

            h("label",null,
                "Height (cm)",
                h("input",{
                    type:"number",
                    value:height,
                    onChange:e=>setHeight(Number(e.target.value))
                })
            ),

            h("label",null,
                "Weight (kg)",
                h("input",{
                    type:"number",
                    value:weight,
                    onChange:e=>setWeight(Number(e.target.value))
                })
            ),

            h("label",null,
                "Gender",
                h("select",{
                    value:gender,
                    onChange:e=>setGender(e.target.value)
                },
                    h("option",{value:"male"},"Male"),
                    h("option",{value:"female"},"Female")
                )
            ),

            h("label",null,
                "Activity",
                h("select",{
                    value:activity,
                    onChange:e=>setActivity(Number(e.target.value))
                },
                    h("option",{value:1.2},"Sedentary"),
                    h("option",{value:1.375},"Light"),
                    h("option",{value:1.55},"Moderate"),
                    h("option",{value:1.725},"Active"),
                    h("option",{value:1.9},"Very Active")
                )
            )

        ),

        h("div",{className:"healthResults"},

            h("div",{className:"healthCard"},
                h("h3",null,"BMI"),
                h("h1",null,round(bmi,1)),
               h(
    "p",
    {
        style:{
            fontSize:"22px",
            color:
                bmi<18.5?"#3b82f6":
                bmi<25?"#16a34a":
                bmi<30?"#f59e0b":
                "#dc2626"
        }
    },
    bmiStatus
)
            ),

            h("div",{className:"healthCard"},
                h("h3",null,"BMR"),
                h("h1",null,round(bmr,0)),
                h("p",null,"kcal/day")
            ),

           h("div",{className:"healthCard"},

    h("h3",null,"TDEE"),

    h("p",null,"🔥 Maintenance"),
    h("h2",null,round(tdee,0)+" kcal"),

    h("hr"),

    h("p",null,"⬇ Fat Loss"),
    h("h2",null,round(tdee-500,0)+" kcal"),

    h("hr"),

    h("p",null,"⬆ Lean Bulk"),
    h("h2",null,round(tdee+250,0)+" kcal")

)

        )

    );

}

// ---------- App shell ----------

function App() {
  function row(name,a,b,unit){

    return h("tr",null,

        h("td",null,name),

        h("td",{

            style:{
                fontWeight:a>b?"700":"400",
                color:a>b?"#16a34a":""
            }

        },a+" "+unit),

        h("td",{

            style:{
                fontWeight:b>a?"700":"400",
                color:b>a?"#16a34a":""
            }

        },b+" "+unit)

    );

}
  function CompareTab(){

    const [food1,setFood1]=useState(FOODS[0].id);
    const [food2,setFood2]=useState(FOODS[1].id);

    const f1=FOODS.find(f=>f.id===food1);
    const f2=FOODS.find(f=>f.id===food2);

    return h("div",{className:"healthPage"},

        h("h2",null,"⚖ Compare Foods"),

        h("div",{className:"healthGrid"},

            h("label",null,

                "Food 1",

                h("select",{

                    value:food1,

                    onChange:e=>setFood1(e.target.value)

                },

                    FOODS.map(f=>

                        h("option",{key:f.id,value:f.id},f.name)

                    )

                )

            ),

            h("label",null,

                "Food 2",

                h("select",{

                    value:food2,

                    onChange:e=>setFood2(e.target.value)

                },

                    FOODS.map(f=>

                        h("option",{key:f.id,value:f.id},f.name)

                    )

                )

            )

        ),

        h("table",{className:"compareTable"},

            h("thead",null,

                h("tr",null,

                    h("th",null,"Nutrient"),

                    h("th",null,f1.name),

                    h("th",null,f2.name)

                )

            ),

            h("tbody",null,

                row("Calories",f1.kcal,f2.kcal,"kcal"),

                row("Protein",f1.protein,f2.protein,"g"),

                row("Carbs",f1.carbs,f2.carbs,"g"),

                row("Fat",f1.fat,f2.fat,"g"),

                row("Fiber",f1.fiber,f2.fiber,"g"),

                row("Sugar",f1.sugar,f2.sugar,"g")

            )

        )

    );

}
  const [tab, setTab] = useState("browse");
  //dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem(STORAGE_THEME) === "dark";});
  //favourite
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
});
    const [log, setLog] = useState([]);
  const [goals, setGoals] = useState({ kcal: 2000, protein: 90, carbs: 250, fat: 65 });
  const [toast, setToast] = useState("");
  const uidRef = useRef(0);

  useEffect(() => {

    if (darkMode) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }

    localStorage.setItem(
        STORAGE_THEME,
        darkMode ? "dark" : "light"
    );

}, [darkMode]);
useEffect(() => {
    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );
}, [favorites]);

  function addToLog(food, grams) {
    uidRef.current += 1;
    setLog(prev => [...prev, { uid: uidRef.current, food, grams }]);
    setToast(food.name + " added to today\u2019s log");
    setTimeout(() => setToast(""), 2200);
  }
  function removeFromLog(uid) {
    setLog(prev => prev.filter(e => e.uid !== uid));
  }
const TABS = [
  { id: "browse", label: "Browse Foods" },
  { id: "encyclopedia", label: "Nutrient Encyclopedia" },
  { id: "tracker", label: "Daily Tracker" },
  { id: "health", label: "🧮 Health Tools" },
  { id: "compare", label: "⚖ Compare Foods" },
];

  return h("div", { className: "app" },
    h("header", { className: "hero" },
      h(
    "div",
    { className: "hero__eyebrow" },
    FOODS.length + " FOODS • " + NUTRIENTS.length + " NUTRIENTS • DAILY TRACKER"
),
      h("h1", { className: "hero__title" }, "The Nutrition Almanac"),
      h(
    "p",
    { className: "hero__sub" },
    `An ocean of knowledge about ${FOODS.length} foods with calories, protein, carbs, fats, vitamins and minerals.`
),
      // 👇 ADD THIS
    h(
      "button",
      {
        className: "btn",
        type: "button",
        style: { marginTop: "20px" },
        onClick: () => setDarkMode(!darkMode)
      },
      darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"
    )

  ),
    
    h("nav", { className: "tabs" },
      TABS.map(t => h("button", {
        key: t.id, type: "button",
        className: "tabs__btn" + (tab === t.id ? " tabs__btn--active" : ""),
        onClick: () => setTab(t.id),
      }, t.label))
    ),
   tab === "browse" && h(BrowseTab, {
    onAddToLog: addToLog,
    favorites,
    setFavorites
}),
    tab === "encyclopedia" && h(EncyclopediaTab, null),
    tab === "tracker" && h(TrackerTab, {
      log: log, goals: goals, setGoals: setGoals, onAdd: addToLog, onRemove: removeFromLog,
    }),
    tab === "health" && h(HealthTab),
    tab==="compare" && h(CompareTab),
    toast && h("div", { className: "toast" }, toast),
    h("footer", { className: "footer" },
      "Values are typical figures per 100g and are meant for everyday planning, not medical advice."
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
