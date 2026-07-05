const h = React.createElement;
const { useState, useMemo, useEffect, useRef } = React;

const CATEGORIES = ["All", ...Array.from(new Set(FOODS.map(f => f.cat)))];

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
  return h("div", { className: "label" },
    h("div", { className: "label__title" }, "Nutrition Facts"),
    h("div", { className: "label__serving" }, "Amount per ", h("strong", null, grams + "g"), " serving"),
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
  return h("button", { className: "foodCard", onClick: props.onClick, type: "button" },
    h("div", { className: "foodCard__cat" }, f.cat),
    h("div", { className: "foodCard__name" }, f.name),
    h("div", { className: "foodCard__kcal" }, round(f.kcal, 0), h("span", null, " kcal / 100g")),
    h("div", { className: "foodCard__macros" },
      h("span", null, "P " + round(f.protein) + "g"),
      h("span", null, "C " + round(f.carbs) + "g"),
      h("span", null, "F " + round(f.fat) + "g")
    )
  );
}

// ---------- Browse tab ----------

function BrowseTab(props) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [selectedId, setSelectedId] = useState(null);
  const [grams, setGrams] = useState(100);

  const filtered = useMemo(() => {
    return FOODS.filter(f => {
      const matchesCat = cat === "All" || f.cat === cat;
      const matchesQuery = f.name.toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [query, cat]);

  const selected = FOODS.find(f => f.id === selectedId) || null;

  useEffect(() => { setGrams(100); }, [selectedId]);

  return h("div", { className: "tabPane" },
    h("div", { className: "browseLayout" },
      h("div", { className: "browseMain" },
        h("div", { className: "searchRow" },
          h("input", {
            className: "searchInput",
            type: "text",
            placeholder: "Search 60 foods — try \u201Csalmon\u201D or \u201Cspinach\u201D\u2026",
            value: query,
            onChange: e => setQuery(e.target.value),
          }),
          h("div", { className: "resultCount" }, filtered.length + " results")
        ),
        h("div", { className: "chipRow" },
          CATEGORIES.map(c => h(Chip, {
            key: c, active: cat === c, onClick: () => setCat(c),
          }, c))
        ),
        h("div", { className: "foodGrid" },
          filtered.map(f => h(FoodCard, {
            key: f.id, food: f, onClick: () => setSelectedId(f.id),
          })),
          filtered.length === 0 && h("div", { className: "emptyState" },
            "No foods match \u201C" + query + "\u201D. Try another search or category.")
        )
      ),
      h("div", { className: "browseSide" },
        selected
          ? h("div", { className: "labelPanel" },
              h("div", { className: "labelPanel__head" },
                h("div", null,
                  h("div", { className: "labelPanel__cat" }, selected.cat),
                  h("div", { className: "labelPanel__name" }, selected.name)
                ),
                h("button", { className: "iconBtn", onClick: () => setSelectedId(null), type: "button", "aria-label": "Close" }, "\u2715")
              ),
              h("div", { className: "gramsRow" },
                h("label", { htmlFor: "grams-input" }, "Portion size"),
                h("input", {
                  id: "grams-input", type: "number", min: "1", value: grams,
                  onChange: e => setGrams(Math.max(1, Number(e.target.value) || 0)),
                }),
                h("span", null, "g")
              ),
              h(NutritionLabel, { food: selected, grams: grams }),
              h("button", {
                className: "btn btn--primary btn--block",
                type: "button",
                onClick: () => props.onAddToLog(selected, grams),
              }, "Add " + grams + "g to today\u2019s log")
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
      h("p", { className: "encSub" }, "11 vitamins and 11 minerals \u2014 what each does, where to find it, and what happens if you run short.")
    ),
    h("div", { className: "chipRow" },
      ["All", "Vitamin", "Mineral"].map(t => h(Chip, {
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
        className: "quickAdd__grams", type: "number", min: "1", value: grams,
        onChange: e => setGrams(Math.max(1, Number(e.target.value) || 0)),
      }),
      h("span", null, "g")
    ),
    matches.length > 0 && h("div", { className: "quickAdd__matches" },
      matches.map(f => h("button", {
        key: f.id, type: "button", className: "quickAdd__match",
        onClick: () => { props.onAdd(f, grams); setQuery(""); },
      }, f.name, h("span", null, round(f.kcal, 0) + " kcal/100g")))
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
                return h("div", { className: "logTable__row", key: entry.uid },
                  h("span", { className: "logTable__name" }, entry.food.name),
                  h("span", null, entry.grams + "g"),
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

// ---------- App shell ----------

function App() {
  const [tab, setTab] = useState("browse");
  const [log, setLog] = useState([]);
  const [goals, setGoals] = useState({ kcal: 2000, protein: 90, carbs: 250, fat: 65 });
  const [toast, setToast] = useState("");
  const uidRef = useRef(0);

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
  ];

  return h("div", { className: "app" },
    h("header", { className: "hero" },
      h("div", { className: "hero__eyebrow" }, "60 FOODS \u00B7 22 NUTRIENTS \u00B7 1 DAILY LOG"),
      h("h1", { className: "hero__title" }, "The Nutrition Almanac"),
      h("p", { className: "hero__sub" },
        "An ocean of knowledge about what you eat \u2014 calories, protein, carbs, fat, fibre and sugar for sixty everyday foods, plus a field guide to every vitamin and mineral your body runs on."
      )
    ),
    h("nav", { className: "tabs" },
      TABS.map(t => h("button", {
        key: t.id, type: "button",
        className: "tabs__btn" + (tab === t.id ? " tabs__btn--active" : ""),
        onClick: () => setTab(t.id),
      }, t.label))
    ),
    tab === "browse" && h(BrowseTab, { onAddToLog: addToLog }),
    tab === "encyclopedia" && h(EncyclopediaTab, null),
    tab === "tracker" && h(TrackerTab, {
      log: log, goals: goals, setGoals: setGoals, onAdd: addToLog, onRemove: removeFromLog,
    }),
    toast && h("div", { className: "toast" }, toast),
    h("footer", { className: "footer" },
      "Values are typical figures per 100g and are meant for everyday planning, not medical advice."
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
