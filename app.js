const students = [
  {
    id: "maya",
    name: "Maya Bowser",
    short: "Maya",
    grade: "Grade 4",
    band: "Elementary",
    teacher: "Ms. Ellison",
    room: "Room 12",
    bus: "Route 7 · Oak & 3rd, 7:42 AM",
    initials: "MB",
    mealBalance: 18.75,
    attendance: [
      { day: "Mon 13", status: "Present", note: "" },
      { day: "Tue 14", status: "Present", note: "" },
      { day: "Wed 15", status: "Late", note: "Arrived 8:21 · dentist" },
      { day: "Thu 16", status: "Present", note: "" },
      { day: "Fri 17", status: "Upcoming", note: "" },
    ],
    report: [
      { subject: "Reading", mark: "Exceeding", comment: "Strong inference; still rushing endings." },
      { subject: "Writing", mark: "Meeting", comment: "Voice is there. Need a second draft habit." },
      { subject: "Math", mark: "Meeting", comment: "Fractions clicked this week." },
      { subject: "Science", mark: "Exceeding", comment: "Led the erosion station." },
      { subject: "Art", mark: "Exceeding", comment: "Color mixing is becoming instinct." },
      { subject: "PE", mark: "Meeting", comment: "Good teammate; skip the sideline coaching." },
    ],
    meals: [
      { id: "harvest", day: "Mon", name: "Harvest pasta", price: 4.5, bought: true },
      { id: "taco", day: "Tue", name: "Bean taco Tuesday", price: 4.5, bought: false },
      { id: "soup", day: "Wed", name: "Tomato soup & bun", price: 4.0, bought: false },
      { id: "bowl", day: "Thu", name: "Rice bowl", price: 5.0, bought: false },
      { id: "pizza", day: "Fri", name: "Cheese pizza", price: 4.5, bought: false },
    ],
    activities: [
      {
        id: "erosion",
        title: "Erosion station",
        when: "Today · Science",
        body: "Maya’s group tested water vs. gravel vs. soil. Photo of her labeled tray is in the classroom feed.",
      },
      {
        id: "fractions",
        title: "Fraction pizza",
        when: "Yesterday · Math",
        body: "Class split a paper pizza into eighths. Maya explained 3/8 to the table.",
      },
    ],
    threads: [
      {
        id: "ellison",
        with: "Ms. Ellison",
        role: "Homeroom · Grade 4",
        preview: "Maya can stay for choir — I’ll send the late bus note.",
        messages: [
          { from: "them", lang: "en", text: "Maya had a strong share in science today. She asked if choir runs late on Tuesday." },
          { from: "me", lang: "es", text: "Sí, puede quedarse. Anotaré la salida tarde." },
          { from: "them", lang: "en", text: "Maya can stay for choir — I’ll send the late bus note." },
        ],
      },
    ],
  },
  {
    id: "noah",
    name: "Noah Bowser",
    short: "Noah",
    grade: "Kindergarten",
    band: "Primary",
    teacher: "Mr. Patel",
    room: "Room K2",
    bus: "Route 7 · Oak & 3rd, 7:42 AM",
    initials: "NB",
    mealBalance: 12.0,
    attendance: [
      { day: "Mon 13", status: "Present", note: "" },
      { day: "Tue 14", status: "Present", note: "" },
      { day: "Wed 15", status: "Present", note: "" },
      { day: "Thu 16", status: "Present", note: "" },
      { day: "Fri 17", status: "Upcoming", note: "" },
    ],
    report: [
      { subject: "Literacy", mark: "Meeting", comment: "Loves morning message. Still mixing b and d." },
      { subject: "Math", mark: "Exceeding", comment: "Counts past 20 with the bead string." },
      { subject: "Play", mark: "Exceeding", comment: "Builds with anyone. Kind to new friends." },
      { subject: "PE", mark: "Meeting", comment: "Line-up is getting smoother." },
    ],
    meals: [
      { id: "harvest", day: "Mon", name: "Harvest pasta", price: 4.5, bought: true },
      { id: "taco", day: "Tue", name: "Bean taco Tuesday", price: 4.5, bought: true },
      { id: "soup", day: "Wed", name: "Tomato soup & bun", price: 4.0, bought: false },
      { id: "bowl", day: "Thu", name: "Rice bowl", price: 5.0, bought: false },
      { id: "pizza", day: "Fri", name: "Cheese pizza", price: 4.5, bought: false },
    ],
    activities: [
      {
        id: "blocks",
        title: "Block city",
        when: "Today · Choice time",
        body: "Noah’s group built a bridge that actually stood. Photo is in the K2 feed.",
      },
      {
        id: "story",
        title: "Story rug",
        when: "Yesterday · Literacy",
        body: "He asked for the pumpkin book twice and whispered the last line.",
      },
    ],
    threads: [
      {
        id: "patel",
        with: "Mr. Patel",
        role: "Kindergarten · Room K2",
        preview: "Extra socks in the cubby helped today.",
        messages: [
          { from: "them", lang: "en", text: "Noah had a strong share at morning meeting. Extra socks in the cubby helped today." },
          { from: "me", lang: "fr", text: "Merci. J’en mettrai une autre paire." },
        ],
      },
    ],
  },
  {
    id: "samira",
    name: "Samira Bowser",
    short: "Samira",
    grade: "Grade 8",
    band: "Middle school",
    teacher: "Coach Rivera",
    room: "Room 28",
    bus: "Walks · dismisses 3:10",
    initials: "SB",
    mealBalance: 6.5,
    attendance: [
      { day: "Mon 13", status: "Present", note: "" },
      { day: "Tue 14", status: "Present", note: "" },
      { day: "Wed 15", status: "Left early", note: "Volleyball away game" },
      { day: "Thu 16", status: "Present", note: "" },
      { day: "Fri 17", status: "Upcoming", note: "" },
    ],
    report: [
      { subject: "English", mark: "Exceeding", comment: "Essay voice is sharp. Cite sources in the body, not the footnote." },
      { subject: "Algebra", mark: "Meeting", comment: "Systems of equations clicked after Thursday’s clinic." },
      { subject: "Science", mark: "Exceeding", comment: "Led the lab group without taking over." },
      { subject: "French", mark: "Meeting", comment: "Speaking is ahead of writing." },
      { subject: "PE / Athletics", mark: "Exceeding", comment: "Captain energy. Keep the sideline comments kind." },
    ],
    meals: [
      { id: "harvest", day: "Mon", name: "Harvest pasta", price: 4.5, bought: false },
      { id: "taco", day: "Tue", name: "Bean taco Tuesday", price: 4.5, bought: false },
      { id: "soup", day: "Wed", name: "Tomato soup & bun", price: 4.0, bought: true },
      { id: "bowl", day: "Thu", name: "Rice bowl", price: 5.0, bought: true },
      { id: "pizza", day: "Fri", name: "Cheese pizza", price: 4.5, bought: false },
    ],
    activities: [
      {
        id: "algebra",
        title: "Systems clinic",
        when: "Today · Math",
        body: "Samira explained substitution to two classmates. Quiz is Friday.",
      },
      {
        id: "vball",
        title: "Away game",
        when: "Wednesday · Athletics",
        body: "Early dismissal 1:30. Bus back by 6:15. She played all four sets.",
      },
    ],
    threads: [
      {
        id: "rivera",
        with: "Coach Rivera",
        role: "Homeroom · Grade 8",
        preview: "Quiz Friday. No extra practice needed.",
        messages: [
          { from: "them", lang: "en", text: "Samira is ready for Friday’s algebra quiz. No extra practice needed unless she wants it." },
          { from: "me", lang: "fr", text: "Parfait. On garde le soir libre." },
        ],
      },
    ],
  },
];

const ATTENDANCE_DAYS = ["Mon 13", "Tue 14", "Wed 15", "Thu 16", "Fri 17"];

const roster = [
  { id: "maya", name: "Maya Bowser", grade: "Grade 4", room: "Room 12", teacher: "Ms. Ellison" },
  { id: "noah", name: "Noah Bowser", grade: "Kindergarten", room: "Room K2", teacher: "Mr. Patel" },
  { id: "samira", name: "Samira Bowser", grade: "Grade 8", room: "Room 28", teacher: "Coach Rivera" },
  { id: "leo", name: "Leo Park", grade: "Grade 4", room: "Room 12", teacher: "Ms. Ellison" },
  { id: "amira", name: "Amira Chen", grade: "Grade 4", room: "Room 12", teacher: "Ms. Ellison" },
  { id: "priya", name: "Priya Nair", grade: "Grade 4", room: "Room 12", teacher: "Ms. Ellison" },
  { id: "jonas", name: "Jonas Feldt", grade: "Grade 4", room: "Room 12", teacher: "Ms. Ellison" },
  { id: "elias", name: "Elias Okonkwo", grade: "Kindergarten", room: "Room K2", teacher: "Mr. Patel" },
  { id: "hana", name: "Hana Sato", grade: "Kindergarten", room: "Room K2", teacher: "Mr. Patel" },
  { id: "sofia", name: "Sofia Alvarez", grade: "Grade 2", room: "Room 8", teacher: "Ms. Grant" },
  { id: "ben", name: "Ben Walsh", grade: "Grade 2", room: "Room 8", teacher: "Ms. Grant" },
  { id: "omar", name: "Omar Haddad", grade: "Grade 6", room: "Room 21", teacher: "Mr. Singh" },
  { id: "rue", name: "Rue Thompson", grade: "Grade 6", room: "Room 21", teacher: "Mr. Singh" },
  { id: "lina", name: "Lina Berg", grade: "Grade 8", room: "Room 28", teacher: "Coach Rivera" },
  { id: "kai", name: "Kai Nguyen", grade: "Grade 8", room: "Room 28", teacher: "Coach Rivera" },
];

function rosterStudent(id) {
  return roster.find((s) => s.id === id);
}

const DISMISS_MODES = [
  { id: "bus", title: "Bus", lane: "Bus loop" },
  { id: "carpool", title: "Carpool", lane: "Carpool line" },
  { id: "walk", title: "Walker", lane: "Walker door" },
  { id: "care", title: "After-school", lane: "Kids Club" },
  { id: "early", title: "Early pickup", lane: "Office" },
];

const USUAL_DISMISS = {
  maya: { mode: "bus", detail: "Route 7" },
  noah: { mode: "bus", detail: "Route 7" },
  samira: { mode: "walk", detail: "Walker door · 3:10" },
  leo: { mode: "carpool", detail: "Loop A" },
  amira: { mode: "bus", detail: "Bus 4" },
  priya: { mode: "care", detail: "Kids Club until 5:15" },
  jonas: { mode: "bus", detail: "Route 7" },
  elias: { mode: "bus", detail: "Route 7" },
  hana: { mode: "carpool", detail: "Loop B" },
  sofia: { mode: "care", detail: "Kids Club until 4:30" },
  ben: { mode: "bus", detail: "Bus 4" },
  omar: { mode: "bus", detail: "Route 12" },
  rue: { mode: "carpool", detail: "Loop A" },
  lina: { mode: "walk", detail: "Walker door · 3:10" },
  kai: { mode: "bus", detail: "Route 12" },
};

function dismissMode(id) {
  return DISMISS_MODES.find((m) => m.id === id) || DISMISS_MODES[0];
}

function usualDismiss(id) {
  return USUAL_DISMISS[id] || { mode: "bus", detail: "Route 7" };
}

function dismissNoteFor(id) {
  return (state.dismissNotes || []).find((note) => note.studentId === id);
}

function todayDismiss(id) {
  const usual = usualDismiss(id);
  const note = dismissNoteFor(id);
  const status = (state.dismissStatus || {})[id] || note?.status || "waiting";
  if (!note) {
    return { ...usual, usual, change: false, note: "", from: "", at: "", status };
  }
  return {
    mode: note.mode,
    detail: note.detail,
    usual,
    change: note.mode !== usual.mode || note.detail !== usual.detail,
    note: note.note || "",
    from: note.from || "parent",
    at: note.at || "",
    status,
  };
}

function dismissChangedCount(room) {
  return roster.filter((s) => (!room || s.room === room) && todayDismiss(s.id).change && todayDismiss(s.id).status !== "released").length;
}

function rosterGrades() {
  const order = ["Kindergarten", "Grade 2", "Grade 4", "Grade 6", "Grade 8"];
  return [...new Set(roster.map((s) => s.grade))].sort((a, b) => order.indexOf(a) - order.indexOf(b));
}

function rosterRooms() {
  return [...new Set(roster.map((s) => s.room))].sort((a, b) => a.localeCompare(b));
}

function filteredRoster() {
  const q = (state.officeFind.q || "").trim().toLowerCase();
  const grade = state.officeFind.grade;
  const room = state.officeFind.room;
  return roster
    .filter((s) => (grade === "all" || s.grade === grade) && (room === "all" || s.room === room))
    .filter((s) => {
      if (!q) return true;
      return [s.name, s.grade, s.room, s.teacher].join(" ").toLowerCase().includes(q);
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function child() {
  return students.find((s) => s.id === state.childId) || students[0];
}

function kidItems(list) {
  const id = child().id;
  return list.filter((item) => {
    const who = item.for;
    if (!who || who === "all") return true;
    return Array.isArray(who) ? who.includes(id) : who === id;
  });
}

function parentThreads() {
  return [...child().threads, state.officeThread];
}

function dreamThreads() {
  return state.role === "parent" ? parentThreads() : state.staffThreads;
}

function kidComms() {
  return state.role === "parent" ? kidItems(state.comms) : state.comms;
}

function kidSchedule() {
  return state.role === "parent" ? kidItems(state.scheduleItems) : state.scheduleItems;
}

function kidDocs() {
  return state.role === "parent" ? kidItems(state.docs) : state.docs;
}

function kidEvents() {
  return state.role === "parent" ? kidItems(state.schoolEvents) : state.schoolEvents;
}

const EVENT_KINDS = [
  { id: "dance", title: "Dances", singular: "Dance" },
  { id: "sport", title: "Sports", singular: "Sport" },
  { id: "fundraiser", title: "Fundraisers", singular: "Fundraiser" },
];

function eventKindMeta(kind) {
  return EVENT_KINDS.find((k) => k.id === kind) || EVENT_KINDS[0];
}

function eventKindTone(kind) {
  if (kind === "fundraiser") return "risk";
  if (kind === "sport") return "amber";
  return "";
}

function unreadEventsCount() {
  return kidEvents().filter((item) => item.unread).length;
}

function filteredEvents() {
  const kind = state.eventFilter || "all";
  const items = kidEvents();
  return kind === "all" ? items : items.filter((item) => item.kind === kind);
}

const DOC_BUCKETS = [
  { id: "school", title: "School documents" },
  { id: "classroom", title: "Classroom" },
  { id: "fundraiser", title: "Fundraisers" },
];

function docBucket(item) {
  return item.bucket || (item.source === "teacher" ? "classroom" : "school");
}

function bucketTitle(id) {
  return DOC_BUCKETS.find((b) => b.id === id)?.title || "School documents";
}

function docsInBucket(bucketId) {
  return kidDocs().filter((d) => docBucket(d) === bucketId);
}

function docsByBucket() {
  return DOC_BUCKETS.map((bucket) => ({
    ...bucket,
    items: docsInBucket(bucket.id),
  }));
}

function forKid(list, id) {
  return list.filter((item) => {
    const who = item.for;
    if (!who || who === "all") return true;
    return Array.isArray(who) ? who.includes(id) : who === id;
  });
}

function visibleAlerts() {
  return state.alerts.filter((alert) => {
    const audience = alert.audience || "parent";
    if (audience !== state.role) return false;
    if (state.role !== "parent") return true;
    return forKid([alert], child().id).length > 0;
  });
}

function unreadAlerts() {
  return visibleAlerts().filter((alert) => alert.unread);
}

function unreadComms() {
  return kidComms().filter((item) => item.unread).length;
}

function unreadDocsCount() {
  return kidDocs().filter((item) => item.unread).length;
}

function childUnread(id) {
  return forKid(
    state.alerts.filter((alert) => (alert.audience || "parent") === "parent"),
    id
  ).filter((alert) => alert.unread).length;
}

function navBadgeCount(id) {
  const reminders = unreadAlerts().filter((alert) => alert.section === id || (id === "calendar" && alert.section === "schedule")).length;
  if (id === "alerts") return unreadAlerts().length;
  if (id === "messages" || id === "inbox") return unreadComms();
  if (id === "docs") return unreadDocsCount();
  if (id === "events") return unreadEventsCount();
  if (id === "lunch") {
    if (state.role === "parent") return cartCount();
    if (state.role === "teacher") {
      return roster.filter((s) => s.room === (state.lunchRoom || "Room K2") && lunchLinesForChild(LUNCH_TODAY, s.id).length).length;
    }
    return 0;
  }
  if (id === "calendar" || id === "schedule") return reminders;
  if (id === "dismiss") {
    if (state.role === "teacher") return dismissChangedCount(state.dismissRoom || "Room 12");
    if (state.role === "admin") return dismissChangedCount();
    return todayDismiss(child().id).change ? 1 : 0;
  }
  if (id === "bus" || id === "class" || id === "attendance") return reminders;
  return 0;
}

function badgeMarkup(count) {
  if (!count) return "";
  return `<span class="nav-badge">${count > 9 ? "9+" : count}</span>`;
}

function alertHref(alert) {
  if (state.edition === "mvp") {
    if (alert.section === "class") return "#/";
    return alert.href;
  }
  if (alert.section === "docs") return "#/";
  if (alert.section === "inbox") return "#/messages";
  if (alert.section === "schedule") return "#/calendar";
  if (alert.section === "events") return alert.ref ? `#/events/${alert.ref}` : "#/events";
  if (alert.section === "dismiss") return "#/dismiss";
  return alert.href;
}

function markAlertsFor(ref) {
  if (!ref) return;
  state.alerts.forEach((alert) => {
    if (alert.ref === ref) alert.unread = false;
  });
}

function pushAlert(alert) {
  state.alerts.unshift({
    id: "a" + Date.now(),
    unread: true,
    when: "Just now",
    audience: "parent",
    kind: "notice",
    ...alert,
  });
}

function ridesBus() {
  return /route/i.test(child().bus);
}

function weekByDay() {
  const days = { Mon: [], Tue: [], Wed: [], Thu: [], Fri: [] };
  kidSchedule().forEach((item) => {
    if (days[item.day]) days[item.day].push(`${tx(item.title)} ${item.time}`);
  });
  return days;
}

const SCHOOL_YEAR_MONTHS = [
  { y: 2026, m: 8, name: "September" },
  { y: 2026, m: 9, name: "October" },
  { y: 2026, m: 10, name: "November" },
  { y: 2026, m: 11, name: "December" },
  { y: 2027, m: 0, name: "January" },
  { y: 2027, m: 1, name: "February" },
  { y: 2027, m: 2, name: "March" },
  { y: 2027, m: 3, name: "April" },
  { y: 2027, m: 4, name: "May" },
  { y: 2027, m: 5, name: "June" },
];

const SCHOOL_YEAR_MARKS = {
  "2026-09-07": "closed",
  "2026-09-08": "first",
  "2026-09-25": "students",
  "2026-09-30": "friday",
  "2026-10-06": "friday",
  "2026-10-09": "students",
  "2026-10-12": "closed",
  "2026-10-22": "friday",
  "2026-10-23": "students",
  "2026-11-11": "closed",
  "2026-11-17": "friday",
  "2026-11-20": "students",
  "2026-12-03": "friday",
  "2026-12-04": "students",
  "2026-12-21": "closed",
  "2026-12-22": "closed",
  "2026-12-23": "closed",
  "2026-12-24": "closed",
  "2026-12-25": "closed",
  "2026-12-28": "closed",
  "2026-12-29": "closed",
  "2026-12-30": "closed",
  "2026-12-31": "closed",
  "2027-01-01": "closed",
  "2027-01-26": "friday",
  "2027-01-29": "students",
  "2027-02-01": "secondary",
  "2027-02-10": "friday",
  "2027-02-12": "students",
  "2027-02-15": "closed",
  "2027-03-01": "closed",
  "2027-03-02": "closed",
  "2027-03-03": "closed",
  "2027-03-04": "closed",
  "2027-03-05": "closed",
  "2027-03-19": "students",
  "2027-03-25": "friday",
  "2027-03-26": "closed",
  "2027-03-29": "closed",
  "2027-04-02": "students",
  "2027-04-13": "friday",
  "2027-04-16": "students",
  "2027-05-05": "friday",
  "2027-05-07": "students",
  "2027-05-20": "friday",
  "2027-05-21": "students",
  "2027-05-24": "closed",
  "2027-06-18": "primary",
  "2027-06-25": "last",
};

const YEAR_LEGEND = [
  ["first", "First day of class"],
  ["last", "Last day of class"],
  ["closed", "No class for students or staff"],
  ["students", "Holiday for all students"],
  ["primary", "Holiday for primary only"],
  ["secondary", "Holiday for secondary only"],
  ["friday", "Friday timetable"],
];

const CAL_TODAY = "2026-10-16";
const LUNCH_TODAY = "2026-10-22";
const LUNCH_LAST = "2026-11-06";
const LUNCH_CATS = [
  { id: "main", title: "Main" },
  { id: "sandwich", title: "Sandwich" },
  { id: "salad", title: "Salad" },
  { id: "drink", title: "Drink" },
  { id: "dessert", title: "Dessert" },
];
const LUNCH_SIDES = [
  { id: "grilled-cheese", cat: "sandwich", name: "Grilled cheese", price: 4.5 },
  { id: "ham", cat: "sandwich", name: "Ham sandwich", price: 4.5 },
  { id: "ham-cheese-hot", cat: "sandwich", name: "Ham & cheese, grilled", price: 4.5 },
  { id: "ham-cheese", cat: "sandwich", name: "Ham & cheese", price: 4.5 },
  { id: "caesar", cat: "salad", name: "Caesar salad", price: 6 },
  { id: "protein", cat: "salad", name: "Extra protein", price: 3.25 },
  { id: "milk", cat: "drink", name: "White milk", price: 0.8 },
  { id: "water", cat: "drink", name: "Water 500 ml", price: 2 },
  { id: "dessert-day", cat: "dessert", name: "Dessert of the day", price: 2 },
  { id: "cookie", cat: "dessert", name: "Cookie", price: 1.5 },
  { id: "muffin", cat: "dessert", name: "Muffin", price: 2 },
];
const LUNCH_MAINS = {
  1: [
    { id: "chicken-burger", name: "Chicken burger with potatoes & vegetables (with milk)", price: 4 },
    { id: "veggie-burger", name: "Veggie burger with potatoes & vegetables (with milk)", price: 4 },
  ],
  2: [
    { id: "spaghetti-meat", name: "Spaghetti with meat sauce and bun (with milk)", price: 4 },
    { id: "spaghetti-tomato", name: "Spaghetti with tomato sauce and bun (with milk)", price: 4 },
  ],
  3: [
    { id: "harvest", name: "Harvest pasta", price: 4.5 },
    { id: "soup", name: "Tomato soup & bun", price: 4 },
  ],
  4: [
    { id: "bowl", name: "Rice bowl", price: 5 },
    { id: "taco", name: "Bean taco", price: 4.5 },
  ],
  5: [
    { id: "pizza", name: "Cheese pizza", price: 4.5 },
    { id: "chicken-burger", name: "Chicken burger with potatoes & vegetables (with milk)", price: 4 },
  ],
};
const WEEK_ISO = {
  "2026-10-13": "Mon",
  "2026-10-14": "Tue",
  "2026-10-15": "Wed",
  "2026-10-16": "Thu",
  "2026-10-17": "Fri",
};

function isoDay(y, m, d) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

function monthWeekdays(y, m) {
  const firstDow = new Date(y, m, 1).getDay();
  const lead = firstDow === 0 ? 6 : firstDow - 1;
  const last = new Date(y, m + 1, 0).getDate();
  const cells = Array(lead).fill(null);
  for (let d = 1; d <= last; d += 1) {
    const dow = new Date(y, m, d).getDay();
    if (dow === 0 || dow === 6) continue;
    cells.push(d);
  }
  while (cells.length % 5) cells.push(null);
  return cells;
}

function yearCalendarHtml() {
  const kid = state.role === "parent" ? child() : null;
  return `
    <section class="year-wrap">
      <div class="widget-head">
        <h2>${tx("School year")} 2026–2027</h2>
        <span class="kicker">${tx("Mon–Fri · Cedar Hill K–8")}</span>
      </div>
      <p class="lede year-lede">${
        kid
          ? txf("Holidays and Friday timetables for the whole school. Primary days matter for {primary}. Secondary days matter for {secondary}.", {
              primary: "Maya · Noah",
              secondary: "Samira",
            })
          : tx("Holidays, PD days, and Friday timetables for students and staff.")
      }</p>
      <div class="year-cal">
        ${SCHOOL_YEAR_MONTHS.map((month) => {
          const cells = monthWeekdays(month.y, month.m);
          return `
            <article class="card year-month">
              <h3>${tx(month.name)} ${month.m === 8 || month.m === 0 ? month.y : ""}</h3>
              <div class="year-grid" role="grid" aria-label="${tx(month.name)}">
                ${["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => `<span class="year-dow">${tx(d)}</span>`).join("")}
                ${cells
                  .map((d) => {
                    if (!d) return `<span class="year-day is-empty"></span>`;
                    const iso = isoDay(month.y, month.m, d);
                    const mark = SCHOOL_YEAR_MARKS[iso] || "";
                    const label = YEAR_LEGEND.find((row) => row[0] === mark);
                    const today = iso === CAL_TODAY ? " is-today" : "";
                    const title = label ? tx(label[1]) : "";
                    return `<span class="year-day ${mark}${today}" title="${title}">${d}</span>`;
                  })
                  .join("")}
              </div>
            </article>`;
        }).join("")}
      </div>
      <ul class="year-legend">
        ${YEAR_LEGEND.map(([id, label]) => `<li><span class="year-swatch ${id}"></span>${tx(label)}</li>`).join("")}
      </ul>
    </section>`;
}

function parseIso(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function lunchDateMeta(iso) {
  const dt = parseIso(iso);
  const dows = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dow = dows[dt.getDay()];
  return {
    iso,
    dt,
    dow,
    month: months[dt.getMonth()],
    day: dt.getDate(),
    year: dt.getFullYear(),
    label: `${dow} ${months[dt.getMonth()].slice(0, 3)} ${dt.getDate()}`,
    long: `${months[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`,
    today: iso === LUNCH_TODAY,
  };
}

function mondayIso(iso) {
  const dt = parseIso(iso);
  const offset = dt.getDay() === 0 ? -6 : 1 - dt.getDay();
  dt.setDate(dt.getDate() + offset);
  return isoDay(dt.getFullYear(), dt.getMonth(), dt.getDate());
}

function lunchDays() {
  const days = [];
  const start = parseIso(LUNCH_TODAY);
  const end = parseIso(LUNCH_LAST);
  for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
    const dow = dt.getDay();
    if (dow === 0 || dow === 6) continue;
    const iso = isoDay(dt.getFullYear(), dt.getMonth(), dt.getDate());
    const mark = SCHOOL_YEAR_MARKS[iso];
    if (mark === "closed" || mark === "students") continue;
    days.push(lunchDateMeta(iso));
  }
  return days;
}

function defaultLunchMenu(iso) {
  const dt = parseIso(iso);
  const mains = (LUNCH_MAINS[dt.getDay()] || []).map((item) => ({ ...item, cat: "main" }));
  return [...mains, ...LUNCH_SIDES.map((item) => ({ ...item }))];
}

function lunchMenu(iso) {
  if (Object.prototype.hasOwnProperty.call(state.lunchMenuByIso, iso)) {
    return state.lunchMenuByIso[iso];
  }
  return defaultLunchMenu(iso);
}

function lunchDaysInWeek(week) {
  return lunchDays().filter((day) => mondayIso(day.iso) === week);
}

function lunchOrdersForDay(iso) {
  return state.lunchOrders.filter((order) => order.lines.some((line) => line.iso === iso));
}

function lunchLinesForChild(iso, childId) {
  return lunchOrdersForDay(iso)
    .filter((order) => order.childId === childId)
    .flatMap((order) => order.lines.filter((line) => line.iso === iso));
}

const LUNCH_ROOMS = [
  { id: "Room K2", title: "Kindergarten · Room K2", teacher: "Mr. Patel" },
  { id: "Room 8", title: "Grade 2 · Room 8", teacher: "Ms. Grant" },
  { id: "Room 12", title: "My class · Room 12", teacher: "Ms. Ellison" },
];

function lunchItem(iso, itemId) {
  return lunchMenu(iso).find((item) => item.id === itemId);
}

function money(n) {
  return `$${Number(n).toFixed(2)}`;
}

function cartBag() {
  const id = child().id;
  if (!state.lunchCart[id]) state.lunchCart[id] = [];
  return state.lunchCart[id];
}

function cartLines() {
  return cartBag().filter((line) => line.qty > 0);
}

function cartQty(iso, itemId) {
  return cartBag().find((line) => line.iso === iso && line.itemId === itemId)?.qty || 0;
}

function cartCount() {
  return cartLines().reduce((sum, line) => sum + line.qty, 0);
}

function cartTotal() {
  return cartLines().reduce((sum, line) => {
    const item = lunchItem(line.iso, line.itemId);
    return sum + (item ? item.price * line.qty : 0);
  }, 0);
}

function dayCartTotal(iso) {
  return cartLines()
    .filter((line) => line.iso === iso)
    .reduce((sum, line) => {
      const item = lunchItem(line.iso, line.itemId);
      return sum + (item ? item.price * line.qty : 0);
    }, 0);
}

function setLunchQty(iso, itemId, qty) {
  const bag = cartBag();
  qty = Math.max(0, Math.min(9, Number(qty) || 0));
  const line = bag.find((row) => row.iso === iso && row.itemId === itemId);
  if (line) {
    line.qty = qty;
    if (!qty) state.lunchCart[child().id] = bag.filter((row) => row !== line);
  } else if (qty) {
    bag.push({ iso, itemId, qty });
  }
}

function lunchWeeks() {
  const groups = [];
  lunchDays().forEach((day) => {
    const week = mondayIso(day.iso);
    let group = groups.find((g) => g.week === week);
    if (!group) {
      const meta = lunchDateMeta(week);
      group = {
        week,
        title: week === mondayIso(LUNCH_TODAY) ? tx("This week") : txf("Week of {date}", { date: `${tx(meta.dow)} ${meta.day}` }),
        days: [],
      };
      groups.push(group);
    }
    group.days.push(day);
  });
  return groups;
}

function lastLunchOrder() {
  return state.lunchOrders.find((order) => order.childId === child().id) || state.lunchOrders[0];
}

function teacherThreadId() {
  return child().threads[0]?.id || "office";
}

function nextHold() {
  return kidSchedule().find((item) => item.source === "teacher") || kidSchedule()[0];
}

function unsignedForms() {
  return kidDocs().filter((d) => !d.signed && d.kind.includes("Form"));
}

const state = {
  role: "parent",
  childId: localStorage.getItem("harborChild") || "maya",
  dismissLane: "all",
  dismissRoom: "Room 12",
  dismissFind: "",
  dismissStatus: {
    sofia: "called",
    leo: "sent",
  },
  dismissNotes: [
    {
      id: "dn1",
      studentId: "maya",
      mode: "carpool",
      detail: "Loop A · Jordan in the grey CR-V",
      note: "Maya taking carpool today instead of Route 7.",
      from: "parent",
      at: "1:12 PM",
    },
    {
      id: "dn2",
      studentId: "noah",
      mode: "care",
      detail: "Kids Club until 5:00",
      note: "Grandma is running late. After-school instead of the bus.",
      from: "parent",
      at: "12:40 PM",
    },
    {
      id: "dn3",
      studentId: "hana",
      mode: "bus",
      detail: "Bus 4",
      note: "Hana taking Bus 4 today instead of carpool.",
      from: "parent",
      at: "2:02 PM",
    },
    {
      id: "dn4",
      studentId: "sofia",
      mode: "early",
      detail: "Office · 2:30 · Uncle Rafael",
      note: "Early pickup for a dentist appointment.",
      from: "parent",
      at: "11:18 AM",
    },
  ],
  lunchDay: LUNCH_TODAY,
  lunchPay: "card",
  lunchCart: {},
  lunchMenuByIso: {},
  lunchRoom: "Room K2",
  lunchOrders: [
    {
      id: "o-k1",
      childId: "noah",
      method: "account",
      last4: "",
      total: 5,
      paidAt: "This morning",
      lines: [{ iso: LUNCH_TODAY, itemId: "bowl", name: "Rice bowl", qty: 1, price: 5 }],
    },
    {
      id: "o-k2",
      childId: "hana",
      method: "card",
      last4: "1881",
      total: 4.8,
      paidAt: "This morning",
      lines: [
        { iso: LUNCH_TODAY, itemId: "taco", name: "Bean taco", qty: 1, price: 4.5 },
        { iso: LUNCH_TODAY, itemId: "milk", name: "White milk", qty: 1, price: 0.8 },
      ],
    },
    {
      id: "o-g2",
      childId: "sofia",
      method: "apple",
      last4: "",
      total: 6,
      paidAt: "Yesterday",
      lines: [{ iso: LUNCH_TODAY, itemId: "caesar", name: "Caesar salad", qty: 1, price: 6 }],
    },
  ],
  eventFilter: "all",
  schoolEvents: [
    {
      id: "e1",
      kind: "dance",
      source: "admin",
      for: "samira",
      title: "Grade 8 fall dance",
      when: "Fri Oct 24 · 6:30–8:30 PM",
      where: "Gym",
      who: "Grade 8",
      unread: true,
      going: false,
      lang: "en",
      body: "Doors at 6:30. No re-entry after 7:15. Pick up at the gym lobby by 8:45. Phones stay in pockets on the floor.",
    },
    {
      id: "e2",
      kind: "dance",
      source: "admin",
      for: "all",
      title: "Halloween dance",
      when: "Fri Oct 31 · 6:00–8:00 PM",
      where: "Gym",
      who: "K–8 families",
      unread: true,
      going: false,
      lang: "en",
      body: "Costume-friendly, no masks that cover the face. Concession in the cafeteria. Younger siblings stay with a parent.",
    },
    {
      id: "e3",
      kind: "sport",
      source: "teacher",
      for: "samira",
      title: "Volleyball away game",
      when: "Wed Oct 15 · 1:30 PM",
      where: "Bus loop",
      who: "Grade 8 volleyball",
      unread: false,
      going: true,
      lang: "en",
      docId: "d5",
      body: "Early dismissal 1:30. Team bus back by 6:15. Pack a snack and the athletic travel consent.",
    },
    {
      id: "e4",
      kind: "sport",
      source: "teacher",
      for: "maya",
      title: "Grade 4 soccer clinic",
      when: "Thu Oct 16 · 3:20 PM",
      where: "Field",
      who: "Room 12",
      unread: true,
      going: false,
      lang: "en",
      body: "Optional clinic after school. Cleats or running shoes. Pickup at the field gate at 4:20 — not the bus loop.",
    },
    {
      id: "e5",
      kind: "sport",
      source: "teacher",
      for: "noah",
      title: "Kindergarten fun run",
      when: "Fri Oct 17 · 10:15 AM",
      where: "Playground",
      who: "Room K2",
      unread: false,
      going: false,
      lang: "en",
      body: "Three loops of the playground path. Wear runners. Families can watch from the fence — no need to sign.",
    },
    {
      id: "e6",
      kind: "sport",
      source: "admin",
      for: ["maya", "samira"],
      title: "Cedar Hill vs. Oakridge",
      when: "Tue Oct 21 · 4:00 PM",
      where: "Gym",
      who: "Grade 4–8",
      unread: false,
      going: false,
      lang: "en",
      body: "Home basketball opener. Student section in the east bleachers. Doors at 3:40. Walkers stay until a parent arrives.",
    },
    {
      id: "e7",
      kind: "fundraiser",
      source: "admin",
      for: "all",
      title: "PTO pizza kits",
      when: "Order due Fri · pickup 3:30",
      where: "Cafeteria",
      who: "K–8",
      unread: true,
      going: false,
      lang: "en",
      docId: "d6",
      body: "Optional pizza kits, $12 each. Sign the form in Documents to order. Pickup Friday 3:30 in the cafeteria.",
    },
    {
      id: "e8",
      kind: "fundraiser",
      source: "admin",
      for: "all",
      title: "Fall walkathon",
      when: "Fri Oct 24 · after pictures",
      where: "Track",
      who: "K–8",
      unread: false,
      going: false,
      lang: "en",
      docId: "d7",
      body: "K–8 walkathon after picture day. Pledge sheets go to the office. Families can skip if they already gave.",
    },
  ],
  busChange: "Route 7 running 12 minutes late this morning. Pickup still Oak & 3rd.",
  draft: "",
  notice: "",
  edition: localStorage.getItem("harborEdition") === "dream" ? "dream" : "mvp",
  parentLang: ["fr", "en", "zh", "pa", "es"].includes(localStorage.getItem("harborLang"))
    ? localStorage.getItem("harborLang")
    : "fr",
  showOriginal: {},
  widgets: { comms: true, schedule: true, docs: true, attendance: true, events: true },
  officeFind: { q: "", grade: "all", room: "all", pick: "" },
  officeAttendance: [
    {
      id: "oa1",
      studentId: "maya",
      day: "Wed 15",
      status: "Late",
      note: "Parent: late Wed · dentist",
      source: "parent",
      confirmed: true,
    },
    {
      id: "oa2",
      studentId: "priya",
      day: "Thu 16",
      status: "Absent",
      note: "Parent: absent Thu",
      source: "parent",
      confirmed: false,
    },
    {
      id: "oa3",
      studentId: "leo",
      day: "Thu 16",
      status: "Left early",
      note: "Early pickup 1:30",
      source: "office",
      confirmed: true,
    },
  ],
  comms: [
    {
      id: "c1",
      source: "teacher",
      from: "Ms. Ellison",
      for: "maya",
      title: "Choir runs late Tuesday",
      body: "We’ll keep Maya until 4:00. Late bus note is already with the office.",
      time: "Today 9:14",
      unread: true,
      lang: "en",
      replies: [
        {
          id: "r1",
          from: "parent",
          name: "Jordan Bowser",
          lang: "es",
          text: "¿Maya necesita botas para la caminata?",
          time: "Today 10:02",
        },
      ],
    },
    {
      id: "c2",
      source: "admin",
      from: "Front office",
      for: "all",
      title: "Curriculum night Thursday",
      body: "Doors at 6:00 in the cafeteria. K–8 classrooms present in waves.",
      time: "Yesterday",
      unread: true,
      lang: "en",
      replies: [],
    },
    {
      id: "c3",
      source: "admin",
      from: "Principal Shah",
      for: "all",
      title: "Friday is spirit day",
      body: "Wear green. No early dismissals after 1:30.",
      time: "Mon",
      unread: false,
      lang: "en",
      replies: [],
    },
    {
      id: "c4",
      source: "admin",
      from: "Front office",
      for: "all",
      title: "Picture day Friday",
      body: "Portraits in the gym at 9:00 on Friday, Oct 24. Wear spirit-day green. Retakes Nov 12.",
      time: "This morning",
      unread: true,
      lang: "en",
      replies: [],
    },
    {
      id: "c5",
      source: "teacher",
      from: "Mr. Patel",
      for: "noah",
      title: "Pumpkin story day",
      body: "Kindergarten visits the library pumpkin display Tuesday at 10:00. Extra socks in the cubby.",
      time: "Today 8:02",
      unread: true,
      lang: "en",
      replies: [],
    },
    {
      id: "c6",
      source: "teacher",
      from: "Coach Rivera",
      for: "samira",
      title: "Algebra quiz Friday",
      body: "Grade 8 quiz Friday. Early dismissal Wednesday for the volleyball away game.",
      time: "Yesterday",
      unread: true,
      lang: "en",
      replies: [],
    },
  ],
  scheduleItems: [
    { id: "s1", source: "admin", for: ["maya", "noah"], day: "Mon", time: "8:40", title: "Assembly", where: "Gym" },
    { id: "s2", source: "teacher", for: "maya", day: "Tue", time: "15:15", title: "Choir", where: "Music room" },
    { id: "s3", source: "teacher", for: "maya", day: "Wed", time: "10:30", title: "Science walk", where: "Meet Room 12" },
    { id: "s4", source: "admin", for: "all", day: "Thu", time: "18:00", title: "Curriculum night", where: "Cafeteria" },
    { id: "s5", source: "admin", for: "all", day: "Fri", time: "9:00", title: "Picture day", where: "Gym" },
    { id: "s6", source: "teacher", for: "noah", day: "Tue", time: "10:00", title: "Pumpkin story", where: "Library" },
    { id: "s7", source: "teacher", for: "samira", day: "Wed", time: "13:30", title: "Volleyball away", where: "Bus loop" },
    { id: "s8", source: "teacher", for: "samira", day: "Fri", time: "15:15", title: "Algebra clinic", where: "Room 28" },
  ],
  docs: [
    { id: "d1", source: "admin", bucket: "school", for: "all", title: "October newsletter", kind: "PDF · 2 pages", unread: true, signed: false, lang: "en", body: "Principal Shah on curriculum night, cafeteria week, and the Route 7 delay. Cedar Hill is K–8.", replies: [] },
    { id: "d2", source: "teacher", bucket: "classroom", for: "maya", title: "Science walk permission", kind: "Form · due Wed", unread: true, signed: false, lang: "en", body: "Walking the creek behind the school Wednesday 10:30–11:30. Sign to confirm Maya can go.", replies: [
      { id: "rd2", from: "parent", name: "Jordan Bowser", lang: "es", text: "Maya puede ir. ¿Llevan agua?", time: "Yesterday" },
    ] },
    { id: "d3", source: "admin", bucket: "school", for: "all", title: "Curriculum night flyer", kind: "PDF", unread: false, signed: false, lang: "en", body: "Thursday 6:00. Childcare in the library. K–8 classrooms present in the cafeteria.", replies: [] },
    { id: "d4", source: "teacher", bucket: "classroom", for: "noah", title: "Pumpkin visit permission", kind: "Form · due Tue", unread: true, signed: false, lang: "en", body: "Kindergarten walks to the library pumpkin display Tuesday 10:00. Sign if Noah can go.", replies: [] },
    { id: "d5", source: "teacher", bucket: "classroom", for: "samira", title: "Athletic travel consent", kind: "Form · due Wed", unread: true, signed: false, lang: "en", body: "Volleyball away game Wednesday. Early dismissal 1:30, return 6:15. Sign for Samira to ride the team bus.", replies: [] },
    { id: "d6", source: "admin", bucket: "fundraiser", for: "all", title: "PTO pizza kits", kind: "Order · due Fri", unread: true, signed: false, lang: "en", body: "Optional pizza kits, $12 each. Pickup Friday 3:30 in the cafeteria. Sign to order one kit.", replies: [] },
    { id: "d7", source: "admin", bucket: "fundraiser", for: "all", title: "Fall walkathon pledge", kind: "Form · due Thu", unread: false, signed: false, lang: "en", body: "K–8 walkathon Friday after picture day. Pledge sheets go to the office. Families can skip if they already gave.", replies: [] },
  ],
  alerts: [
    {
      id: "a1",
      audience: "parent",
      kind: "reminder",
      for: "maya",
      section: "class",
      title: "Library books go back tomorrow",
      body: "Maya’s library day is Tuesday. Pack the two books tonight so they are in the backpack before the bus.",
      when: "Mon 7:00 PM",
      href: "#/class",
      unread: true,
    },
    {
      id: "a2",
      audience: "parent",
      kind: "notice",
      for: "maya",
      section: "docs",
      ref: "d2",
      title: "New classroom document",
      body: "Science walk permission was sent by Ms. Ellison. It still needs a signature.",
      when: "Today 9:20",
      href: "#/docs/d2",
      unread: true,
    },
    {
      id: "a3",
      audience: "parent",
      kind: "notice",
      for: "maya",
      section: "inbox",
      ref: "c1",
      title: "Choir runs late Tuesday",
      body: "Ms. Ellison will keep Maya until 4:00. The late bus note is already with the office.",
      when: "Today 9:14",
      href: "#/inbox/c1",
      unread: true,
    },
    {
      id: "a4",
      audience: "parent",
      kind: "reminder",
      for: ["maya", "noah"],
      section: "bus",
      title: "Route 7 is still late",
      body: "Pickup is still Oak & 3rd. Leave a few extra minutes in the morning.",
      when: "This morning",
      href: "#/bus",
      unread: true,
    },
    {
      id: "a5",
      audience: "parent",
      kind: "reminder",
      for: "noah",
      section: "class",
      title: "Pumpkin story in the morning",
      body: "Noah visits the library pumpkin display Tuesday at 10:00. Extra socks in the cubby.",
      when: "Mon 7:00 PM",
      href: "#/class",
      unread: true,
    },
    {
      id: "a6",
      audience: "parent",
      kind: "notice",
      for: "noah",
      section: "docs",
      ref: "d4",
      title: "New classroom document",
      body: "Pumpkin visit permission was sent by Mr. Patel. Sign if Noah can go.",
      when: "Today 8:05",
      href: "#/docs/d4",
      unread: true,
    },
    {
      id: "a7",
      audience: "parent",
      kind: "reminder",
      for: "samira",
      section: "schedule",
      title: "Early dismissal Wednesday",
      body: "Volleyball away game. Samira leaves at 1:30. Pack a snack and the travel consent.",
      when: "Tue 6:30 PM",
      href: "#/schedule",
      unread: true,
    },
    {
      id: "a8",
      audience: "parent",
      kind: "notice",
      for: "samira",
      section: "docs",
      ref: "d5",
      title: "New classroom document",
      body: "Athletic travel consent was sent by Coach Rivera. Sign so Samira can ride the team bus.",
      when: "Yesterday",
      href: "#/docs/d5",
      unread: true,
    },
    {
      id: "a9",
      audience: "parent",
      kind: "notice",
      for: "all",
      section: "docs",
      ref: "d6",
      title: "New fundraiser",
      body: "PTO pizza kits were added to Documents. Optional, $12, pickup Friday.",
      when: "This morning",
      href: "#/docs/d6",
      unread: true,
    },
    {
      id: "a10",
      audience: "parent",
      kind: "reminder",
      for: "all",
      section: "schedule",
      title: "Picture day Friday",
      body: "Portraits in the gym at 9:00. Spirit-day green. Retakes Nov 12.",
      when: "Thu 6:00 PM",
      href: "#/schedule",
      unread: false,
    },
    {
      id: "a11",
      audience: "teacher",
      kind: "reminder",
      section: "attendance",
      title: "Confirm Priya’s absence",
      body: "Jordan marked nothing. Priya is still absent on Thursday’s roster.",
      when: "Today 8:40",
      href: "#/teach/attendance",
      unread: true,
    },
    {
      id: "a12",
      audience: "teacher",
      kind: "notice",
      section: "docs",
      title: "Family replied on a form",
      body: "Jordan asked if Maya’s science walk group is bringing water.",
      when: "Yesterday",
      href: "#/docs/d2",
      unread: true,
    },
    {
      id: "a13",
      audience: "admin",
      kind: "reminder",
      section: "bus",
      title: "Route 7 delay still live",
      body: "Families on Oak & 3rd should keep seeing the 12-minute late banner.",
      when: "Today 7:10",
      href: "#/bus",
      unread: true,
    },
    {
      id: "a14",
      audience: "admin",
      kind: "notice",
      section: "docs",
      title: "Pizza kits landed in Fundraisers",
      body: "The PTO flyer is on the family board. Four households have not opened it.",
      when: "This morning",
      href: "#/docs/d6",
      unread: true,
    },
    {
      id: "a15",
      audience: "parent",
      kind: "notice",
      for: "all",
      section: "events",
      ref: "e2",
      title: "Halloween dance",
      body: "Friday Oct 31, 6:00 in the gym. Costumes without face masks. Younger siblings stay with a parent.",
      when: "Today 7:40",
      href: "#/events/e2",
      unread: true,
    },
    {
      id: "a16",
      audience: "parent",
      kind: "reminder",
      for: "maya",
      section: "events",
      ref: "e4",
      title: "Soccer clinic after school",
      body: "Room 12 clinic Thursday 3:20 on the field. Pickup at the field gate at 4:20, not the bus loop.",
      when: "Thu 7:00 AM",
      href: "#/events/e4",
      unread: true,
    },
    {
      id: "a17",
      audience: "admin",
      kind: "notice",
      section: "events",
      ref: "e2",
      title: "Halloween dance is live",
      body: "Families can RSVP from Events. Concession staff still needs two volunteers.",
      when: "This morning",
      href: "#/events/e2",
      unread: true,
    },
    {
      id: "a18",
      audience: "teacher",
      kind: "notice",
      section: "dismiss",
      title: "Maya is carpool, not Route 7",
      body: "Jordan changed dismissal. Loop A, grey CR-V. Don’t walk her to the bus loop.",
      when: "1:12 PM",
      href: "#/dismiss",
      unread: true,
    },
    {
      id: "a19",
      audience: "admin",
      kind: "reminder",
      section: "dismiss",
      title: "Four live pickup changes",
      body: "Carpool, Kids Club, Bus 4, and an early dentist pickup. Duty board is the source of truth.",
      when: "2:02 PM",
      href: "#/dismiss",
      unread: true,
    },
    {
      id: "a20",
      audience: "parent",
      kind: "notice",
      for: "maya",
      section: "dismiss",
      title: "Carpool today is on the board",
      body: "Room 12 and the carpool line can see Maya is Loop A, not Route 7.",
      when: "1:12 PM",
      href: "#/dismiss",
      unread: false,
    },
  ],
  officeThread: {
    id: "office",
    with: "Front office",
    role: "K–8 office",
    preview: "Attendance notes land here.",
    messages: [
      {
        from: "them",
        lang: "en",
        text: "Attendance notes for this week are on file. Reply if something should be excused.",
      },
    ],
  },
  staffThreads: [
    {
      id: "bowser",
      with: "Jordan Bowser",
      role: "Parent · Maya, Noah, Samira · K–8",
      preview: "Maya can stay for choir — I’ll send the late bus note.",
      messages: [
        { from: "them", lang: "en", text: "Maya had a strong share in science today. She asked if choir runs late on Tuesday." },
        { from: "me", lang: "es", text: "Sí, puede quedarse. Anotaré la salida tarde." },
        { from: "them", lang: "en", text: "Maya can stay for choir — I’ll send the late bus note." },
      ],
    },
  ],
};

const navByRole = {
  parent: [
    ["home", "Today", "#/"],
    ["alerts", "Notifications", "#/alerts"],
    ["attendance", "Attendance", "#/attendance"],
    ["reports", "Report cards", "#/reports"],
    ["calendar", "Calendar", "#/calendar"],
    ["events", "Events", "#/events"],
    ["lunch", "Cafeteria", "#/lunch"],
    ["dismiss", "Dismissal", "#/dismiss"],
    ["bus", "Bus", "#/bus"],
    ["class", "Classroom", "#/class"],
    ["messages", "Messages", "#/messages"],
  ],
  teacher: [
    ["home", "My class", "#/"],
    ["alerts", "Notifications", "#/alerts"],
    ["scan", "Scan flyer", "#/scan"],
    ["attendance", "Attendance", "#/teach/attendance"],
    ["calendar", "Calendar", "#/calendar"],
    ["events", "Events", "#/events"],
    ["lunch", "Lunch list", "#/lunch"],
    ["dismiss", "Dismissal", "#/dismiss"],
    ["class", "Activities", "#/class"],
    ["messages", "Families", "#/messages"],
  ],
  admin: [
    ["home", "School", "#/"],
    ["alerts", "Notifications", "#/alerts"],
    ["scan", "Scan flyer", "#/scan"],
    ["attendance", "Attendance", "#/admin/attendance"],
    ["bus", "Buses", "#/bus"],
    ["dismiss", "Dismissal", "#/dismiss"],
    ["lunch", "Hot lunch menu", "#/lunch"],
    ["calendar", "Calendar", "#/calendar"],
    ["events", "Events", "#/events"],
  ],
};

const mvpNavByRole = {
  parent: [
    ["home", "Today", "#/"],
    ["alerts", "Notifications", "#/alerts"],
    ["attendance", "Attendance", "#/attendance"],
    ["messages", "Inbox", "#/inbox"],
    ["calendar", "Schedule", "#/schedule"],
    ["events", "Events", "#/events"],
    ["docs", "Documents", "#/docs"],
    ["config", "Configure", "#/configure"],
  ],
  teacher: [
    ["home", "Class board", "#/"],
    ["alerts", "Notifications", "#/alerts"],
    ["scan", "Scan flyer", "#/scan"],
    ["attendance", "Attendance", "#/teach/attendance"],
    ["messages", "Updates", "#/inbox"],
    ["calendar", "Schedule", "#/schedule"],
    ["events", "Events", "#/events"],
    ["docs", "Documents", "#/docs"],
  ],
  admin: [
    ["home", "School board", "#/"],
    ["alerts", "Notifications", "#/alerts"],
    ["scan", "Scan flyer", "#/scan"],
    ["attendance", "Attendance", "#/admin/attendance"],
    ["messages", "Office inbox", "#/inbox"],
    ["calendar", "Schedule", "#/schedule"],
    ["events", "Events", "#/events"],
    ["docs", "Documents", "#/docs"],
    ["config", "Family board", "#/configure"],
  ],
};

const people = {
  parent: { name: "Jordan Bowser", role: "Parent · 3 children · K–8", initials: "JB" },
  teacher: { name: "Alicia Ellison", role: "Teacher · Room 12 · Grade 4", initials: "AE" },
  admin: { name: "Chris Okonkwo", role: "Office · Cedar Hill K–8", initials: "CO" },
};

const LANGS = {
  fr: { name: "French", native: "Français" },
  en: { name: "English", native: "English" },
  zh: { name: "Mandarin", native: "中文" },
  pa: { name: "Punjabi", native: "ਪੰਜਾਬੀ" },
  es: { name: "Spanish", native: "Español" },
};

const BOOK = {
  "Choir runs late Tuesday": {
    fr: "La chorale finit plus tard mardi",
    zh: "周二合唱会延迟结束",
    pa: "ਮੰਗਲਵਾਰ ਗਾਇਕੀ ਮੰਡਲੀ ਦੇਰ ਨਾਲ ਖ਼ਤਮ ਹੋਵੇਗੀ",
    es: "El coro termina más tarde el martes",
  },
  "We’ll keep Maya until 4:00. Late bus note is already with the office.": {
    fr: "Maya reste jusqu’à 16 h. L’avis d’autobus tardif est déjà au bureau.",
    zh: "Maya会留到下午4点。晚班校车通知已发给办公室。",
    pa: "ਮਾਇਆ 4:00 ਤੱਕ ਰਹੇਗੀ। ਦੇਰ ਵਾਲੀ ਬੱਸ ਦੀ ਨੋਟਿਸ ਪਹਿਲਾਂ ਹੀ ਦਫ਼ਤਰ ਵਿਚ ਹੈ।",
    es: "Maya se queda hasta las 4:00. El aviso del autobús tarde ya está en la oficina.",
  },
  "Curriculum night Thursday": {
    fr: "Soirée pédagogique jeudi",
    zh: "周四课程说明会",
    pa: "ਵੀਰਵਾਰ ਪਾਠਕ੍ਰਮ ਰਾਤ",
    es: "Noche de currículo el jueves",
  },
  "Doors at 6:00 in the cafeteria. Room 12 presents at 6:20.": {
    fr: "Ouverture à 18 h à la cafétéria. La classe 12 présente à 18 h 20.",
    zh: "食堂6点开门。12班6:20上场。",
    pa: "ਕੈਫੇਟੇਰੀਆ ਵਿਚ 6:00 ਵਜੇ ਦਰਵਾਜ਼ੇ। ਕਮਰਾ 12 6:20 ਵਜੇ ਪੇਸ਼ ਕਰੇਗਾ।",
    es: "Las puertas abren a las 6:00 en la cafetería. El salón 12 presenta a las 6:20.",
  },
  "Friday is spirit day": {
    fr: "Vendredi, c’est la journée d’esprit scolaire",
    zh: "周五是校园精神日",
    pa: "ਸ਼ੁੱਕਰਵਾਰ ਸਕੂਲ ਰੂਹ ਵਾਲਾ ਦਿਨ ਹੈ",
    es: "El viernes es día de espíritu escolar",
  },
  "Wear green. No early dismissals after 1:30.": {
    fr: "Portez du vert. Pas de départs anticipés après 13 h 30.",
    zh: "请穿绿色。下午1:30后不再提前离校。",
    pa: "ਹਰਾ ਪਹਿਨੋ। 1:30 ਤੋਂ ਬਾਅਦ ਵਹਿਲੀ ਰੁਖਸਤ ਨਹੀਂ।",
    es: "Vistan de verde. No hay salidas tempranas después de la 1:30.",
  },
  "October newsletter": {
    fr: "Infolettre d’octobre",
    zh: "十月校讯",
    pa: "ਅਕਤੂਬਰ ਖ਼ਬਰਨਾਮਾ",
    es: "Boletín de octubre",
  },
  "Principal Shah on curriculum night, cafeteria week, and the Route 7 delay.": {
    fr: "La direction Shah sur la soirée pédagogique, la semaine de cafétéria et le retard de la ligne 7.",
    zh: "Shah校长谈课程说明会、食堂周和第7路校车延误。",
    pa: "ਪ੍ਰਿੰਸੀਪਲ ਸ਼ਾਹ ਪਾਠਕ੍ਰਮ ਰਾਤ, ਕੈਫੇਟੇਰੀਆ ਹਫ਼ਤੇ ਅਤੇ ਰੂਟ 7 ਦੀ ਦੇਰੀ ਬਾਰੇ।",
    es: "La directora Shah sobre la noche de currículo, la semana de cafetería y el retraso de la ruta 7.",
  },
  "Science walk permission": {
    fr: "Autorisation pour la marche scientifique",
    zh: "科学徒步许可",
    pa: "ਵਿਗਿਆਨ ਯਾਤਰਾ ਦੀ ਇਜਾਜ਼ਤ",
    es: "Permiso para la caminata de ciencias",
  },
  "Walking the creek behind the school Wednesday 10:30–11:30. Sign to confirm Maya can go.": {
    fr: "Marche au ruisseau derrière l’école mercredi de 10 h 30 à 11 h 30. Signez pour confirmer que Maya peut y aller.",
    zh: "周三10:30–11:30在学校后面的小溪徒步。请签字确认Maya可以参加。",
    pa: "ਬੁੱਧਵਾਰ 10:30–11:30 ਸਕੂਲ ਪਿੱਛੇ ਨਾਲੇ ਵਿਚ ਯਾਤਰਾ। ਮਾਇਆ ਲਈ ਦਸਤਖ਼ਤ ਕਰੋ।",
    es: "Caminata por el arroyo detrás de la escuela el miércoles de 10:30 a 11:30. Firme para confirmar que Maya puede ir.",
  },
  "Curriculum night flyer": {
    fr: "Affiche de la soirée pédagogique",
    zh: "课程说明会传单",
    pa: "ਪਾਠਕ੍ਰਮ ਰਾਤ ਦਾ ਪਰਚਾ",
    es: "Folleto de la noche de currículo",
  },
  "Thursday 6:00. Childcare in the library. Room 12 on the cafeteria stage at 6:20.": {
    fr: "Jeudi 18 h. Garderie à la bibliothèque. Classe 12 sur la scène de la cafétéria à 18 h 20.",
    zh: "周四6:00。图书馆有托管。12班6:20在食堂舞台。",
    pa: "ਵੀਰਵਾਰ 6:00। ਲਾਇਬ੍ਰੇਰੀ ਵਿਚ ਬਾਲ-ਸੰਭਾਲ। ਕਮਰਾ 12 6:20 ਵਜੇ ਸਟੇਜ 'ਤੇ।",
    es: "Jueves 6:00. Cuidado infantil en la biblioteca. El salón 12 en el escenario de la cafetería a las 6:20.",
  },
  "Maya had a strong share in science today. She asked if choir runs late on Tuesday.": {
    fr: "Maya a très bien participé en sciences aujourd’hui. Elle a demandé si la chorale finit tard mardi.",
    zh: "Maya今天在科学课上发言很好。她问周二合唱会不会拖堂。",
    pa: "ਮਾਇਆ ਅੱਜ ਵਿਗਿਆਨ ਵਿਚ ਚੰਗਾ ਬੋਲੀ। ਉਸ ਨੇ ਪੁੱਛਿਆ ਕਿ ਮੰਗਲਵਾਰ ਗਾਇਕੀ ਦੇਰ ਤੱਕ ਚੱਲੇਗੀ।",
    es: "Maya participó muy bien en ciencias hoy. Preguntó si el coro termina tarde el martes.",
  },
  "Yes, she can stay. I’ll note the late pickup.": {
    fr: "Oui, elle peut rester. Je noterai le départ tardif.",
    zh: "可以，她留下。我会记下晚接。",
    pa: "ਹਾਂ, ਉਹ ਰਹਿ ਸਕਦੀ ਹੈ। ਮੈਂ ਦੇਰ ਨਾਲ ਲੈਣ ਦੀ ਨੋਟ ਕਰਾਂਗਾ।",
    es: "Sí, puede quedarse. Anotaré la salida tarde.",
  },
  "Maya can stay for choir — I’ll send the late bus note.": {
    fr: "Maya peut rester à la chorale — j’enverrai l’avis d’autobus tardif.",
    zh: "Maya可以留到合唱结束——我会发晚班校车通知。",
    pa: "ਮਾਇਆ ਗਾਇਕੀ ਲਈ ਰਹਿ ਸਕਦੀ ਹੈ — ਮੈਂ ਦੇਰ ਵਾਲੀ ਬੱਸ ਦੀ ਨੋਟਿਸ ਭੇਜਾਂਗੀ।",
    es: "Maya puede quedarse al coro — enviaré el aviso del autobús tarde.",
  },
  "Late arrival Wednesday is on the record.": {
    fr: "L’arrivée tardive de mercredi est au dossier.",
    zh: "周三迟到已登记。",
    pa: "ਬੁੱਧਵਾਰ ਦੀ ਦੇਰੀ ਰਿਕਾਰਡ 'ਤੇ ਹੈ।",
    es: "La llegada tarde del miércoles ya está registrada.",
  },
  "We marked Maya late Wednesday at 8:21. Reply if that should be an excused appointment.": {
    fr: "Maya a été notée en retard mercredi à 8 h 21. Répondez s’il s’agissait d’un rendez-vous justifié.",
    zh: "我们登记Maya周三8:21迟到。如属事假请回复。",
    pa: "ਅਸੀਂ ਮਾਇਆ ਨੂੰ ਬੁੱਧਵਾਰ 8:21 ਵਜੇ ਦੇਰ ਲਈ ਨਿਸ਼ਾਨ ਲਾਇਆ। ਜੇ ਇਹ ਮੁਆਫ਼ ਮੁਲਾਕਾਤ ਹੈ ਤਾਂ ਜਵਾਬ ਦਿਓ।",
    es: "Marcamos a Maya tarde el miércoles a las 8:21. Responda si fue una cita justificada.",
  },
  "Does Maya need boots for the walk?": {
    fr: "Maya a-t-elle besoin de bottes pour la marche ?",
    zh: "这次徒步Maya需要穿靴子吗？",
    pa: "ਕੀ ਮਾਇਆ ਨੂੰ ਯਾਤਰਾ ਲਈ ਬੂਟ ਚਾਹੀਦੇ ਹਨ?",
    es: "¿Maya necesita botas para la caminata?",
  },
  "Maya can go. Are they bringing water?": {
    fr: "Maya peut y aller. Apportent-ils de l’eau ?",
    zh: "Maya可以去。会带水吗？",
    pa: "ਮਾਇਆ ਜਾ ਸਕਦੀ ਹੈ। ਕੀ ਉਹ ਪਾਣੀ ਲੈ ਕੇ ਜਾਣਗੇ?",
    es: "Maya puede ir. ¿Llevan agua?",
  },
  "Picture day Friday": {
    fr: "Journée photos vendredi",
    zh: "周五拍照日",
    pa: "ਸ਼ੁੱਕਰਵਾਰ ਫੋਟੋ ਵਾਲਾ ਦਿਨ",
    es: "Día de fotos el viernes",
  },
  "Portraits in the gym at 9:00 on Friday, Oct 24. Wear spirit-day green. Retakes Nov 12.": {
    fr: "Portraits au gymnase à 9 h le vendredi 24 octobre. Portez le vert de la journée d’esprit. Reprises le 12 novembre.",
    zh: "10月24日周五上午9点在体育馆拍照。请穿精神日绿色。补拍11月12日。",
    pa: "ਸ਼ੁੱਕਰਵਾਰ 24 ਅਕਤੂਬਰ 9:00 ਵਜੇ ਜਿਮ ਵਿਚ ਫੋਟੋਆਂ। ਹਰਾ ਪਹਿਨੋ। ਮੁੜ-ਫੋਟੋ 12 ਨਵੰਬਰ।",
    es: "Retratos en el gimnasio a las 9:00 el viernes 24 de octubre. Usen verde de espíritu escolar. Repeticiones el 12 de noviembre.",
  },
  "Picture day": { fr: "Journée photos", zh: "拍照日", pa: "ਫੋਟੋ ਵਾਲਾ ਦਿਨ", es: "Día de fotos" },
  "Sign and return": { fr: "Signer et renvoyer", zh: "签字交回", pa: "ਦਸਤਖ਼ਤ ਕਰਕੇ ਵਾਪਸ", es: "Firmar y devolver" },
  "Signed": { fr: "Signé", zh: "已签", pa: "ਦਸਤਖ਼ਤ ਹੋ ਗਏ", es: "Firmado" },
  "Reply": { fr: "Répondre", zh: "回复", pa: "ਜਵਾਬ", es: "Responder" },
  "Send": { fr: "Envoyer", zh: "发送", pa: "ਭੇਜੋ", es: "Enviar" },
  "Show original": { fr: "Voir l’original", zh: "查看原文", pa: "ਅਸਲ ਵੇਖੋ", es: "Ver original" },
  "Show translation": { fr: "Voir la traduction", zh: "查看译文", pa: "ਅਨੁਵਾਦ ਵੇਖੋ", es: "Ver traducción" },
  "Fall orchard trip": {
    fr: "Sortie au verger d’automne",
    zh: "秋季果园郊游",
    pa: "ਪਤਝੜ ਬਾਗ਼ ਯਾਤਰਾ",
    es: "Excursión al huerto de otoño",
  },
  "Grade 4 visits Suncrest Orchard. $8 covers picking and cider. Signed permission required.": {
    fr: "La 4e année visite le verger Suncrest. 8 $ pour la cueillette et le cidre. Autorisation signée requise.",
    zh: "四年级参观Suncrest果园。8美元含采摘和苹果酒。需签字许可。",
    pa: "ਗ੍ਰੇਡ 4 ਸਨਕ੍ਰੈਸਟ ਬਾਗ਼ ਜਾਵੇਗੀ। $8 ਵਿਚ ਚੁਣਨਾ ਅਤੇ ਸਾਈਡਰ। ਦਸਤਖ਼ਤ ਲਾਜ਼ਮੀ।",
    es: "4º grado visita el huerto Suncrest. $8 cubre recolección y sidra. Se requiere permiso firmado.",
  },
};

[
  ["Board", "Tableau", "看板", "ਬੋਰਡ", "Tablero"],
  ["Notifications", "Avis", "通知", "ਸੂਚਨਾਵਾਂ", "Avisos"],
  ["Inbox", "Boîte de réception", "收件箱", "ਇਨਬਾਕਸ", "Bandeja"],
  ["Schedule", "Horaire", "日程", "ਸਮਾਂ-ਸਾਰਣੀ", "Horario"],
  ["Documents", "Documents", "文件", "ਦਸਤਾਵੇਜ਼", "Documentos"],
  ["Configure", "Régler", "设置", "ਸੰਰਚਨਾ", "Configurar"],
  ["Menu", "Menu", "菜单", "ਮੀਨੂ", "Menú"],
  ["Close menu", "Fermer le menu", "关闭菜单", "ਮੀਨੂ ਬੰਦ ਕਰੋ", "Cerrar menú"],
  ["Today", "Aujourd’hui", "今天", "ਅੱਜ", "Hoy"],
  ["Attendance", "Présences", "出勤", "ਹਾਜ਼ਰੀ", "Asistencia"],
  ["Report cards", "Bulletins", "成绩单", "ਰਿਪੋਰਟ ਕਾਰਡ", "Boletines"],
  ["Calendar", "Calendrier", "日历", "ਕੈਲੰਡਰ", "Calendario"],
  ["Cafeteria", "Cafétéria", "食堂", "ਕੈਫੇਟੇਰੀਆ", "Cafetería"],
  ["Bus", "Autobus", "校车", "ਬੱਸ", "Autobús"],
  ["Classroom", "Classe", "课堂", "ਕਲਾਸ", "Salón"],
  ["Messages", "Messages", "消息", "ਸੁਨੇਹੇ", "Mensajes"],
  ["Home", "Accueil", "首页", "ਘਰ", "Inicio"],
  ["Read in", "Lire en", "阅读语言", "ਪੜ੍ਹੋ", "Leer en"],
  ["Teacher", "Enseignant", "老师", "ਅਧਿਆਪਕ", "Maestro"],
  ["Office", "Bureau", "办公室", "ਦਫ਼ਤਰ", "Oficina"],
  ["New", "Nouveau", "新", "ਨਵਾਂ", "Nuevo"],
  ["Read", "Lu", "已读", "ਪੜ੍ਹਿਆ", "Leído"],
  ["Reminder", "Rappel", "提醒", "ਯਾਦ", "Recordatorio"],
  ["Notification", "Avis", "通知", "ਸੂਚਨਾ", "Aviso"],
  ["Reminders", "Rappels", "提醒", "ਯਾਦਾਂ", "Recordatorios"],
  ["Mark all read", "Tout marquer lu", "全部标为已读", "ਸਭ ਪੜ੍ਹੀਆਂ", "Marcar todo leído"],
  ["None", "Aucun", "无", "ਕੋਈ ਨਹੀਂ", "Ninguno"],
  ["new", "nouveaux", "新", "ਨਵੇਂ", "nuevos"],
  ["School documents", "Documents de l’école", "学校文件", "ਸਕੂਲ ਦਸਤਾਵੇਜ਼", "Documentos escolares"],
  ["Fundraisers", "Collectes", "募捐", "ਫੰਡਰੇਜ਼ਰ", "Recaudaciones"],
  ["From school", "De l’école", "来自学校", "ਸਕੂਲ ਵੱਲੋਂ", "De la escuela"],
  ["This week", "Cette semaine", "本周", "ਇਸ ਹਫ਼ਤੇ", "Esta semana"],
  ["School year", "Année scolaire", "学年", "ਸਕੂਲ ਸਾਲ", "Año escolar"],
  ["Mon–Fri · Cedar Hill K–8", "Lun–ven · Cedar Hill K–8", "周一至周五 · Cedar Hill K–8", "ਸੋਮ–ਸ਼ੁੱਕ · Cedar Hill K–8", "Lun–vie · Cedar Hill K–8"],
  ["Holidays, PD days, and Friday timetables for students and staff.", "Congés, journées pédagogiques et horaires du vendredi pour les élèves et le personnel.", "学生和教职工的假期、教研日和周五课表。", "ਵਿਦਿਆਰਥੀਆਂ ਅਤੇ ਸਟਾਫ ਲਈ ਛੁੱਟੀਆਂ, ਪੀ.ਡੀ. ਅਤੇ ਸ਼ੁੱਕਰਵਾਰ ਟਾਈਮਟੇਬਲ।", "Vacaciones, días pedagógicos y horario de viernes para estudiantes y personal."],
  ["Holidays and Friday timetables for the whole school. Primary days matter for {primary}. Secondary days matter for {secondary}.", "Congés et horaires du vendredi pour toute l’école. Les jours du primaire concernent {primary}. Les jours du secondaire concernent {secondary}.", "全校假期和周五课表。小学日适用于{primary}。中学日适用于{secondary}。", "ਸਾਰੇ ਸਕੂਲ ਲਈ ਛੁੱਟੀਆਂ ਅਤੇ ਸ਼ੁੱਕਰਵਾਰ ਟਾਈਮਟੇਬਲ। ਪ੍ਰਾਇਮਰੀ {primary} ਲਈ। ਸੈਕੰਡਰੀ {secondary} ਲਈ।", "Vacaciones y horario de viernes para toda la escuela. Los días de primaria aplican a {primary}. Los de secundaria, a {secondary}."],
  ["First day of class", "Première journée de classe", "开学第一天", "ਪਹਿਲਾ ਸਕੂਲ ਦਿਨ", "Primer día de clase"],
  ["Last day of class", "Dernière journée de classe", "学期最后一天", "ਆਖਰੀ ਸਕੂਲ ਦਿਨ", "Último día de clase"],
  ["No class for students or staff", "Aucune classe pour les élèves et le personnel", "学生和教职工均不上课", "ਵਿਦਿਆਰਥੀ ਅਤੇ ਸਟਾਫ ਲਈ ਕਲਾਸ ਨਹੀਂ", "Sin clase para estudiantes ni personal"],
  ["Holiday for all students", "Congé pour tous les élèves", "全体学生放假", "ਸਾਰੇ ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਛੁੱਟੀ", "Vacaciones para todos los estudiantes"],
  ["Holiday for primary only", "Congé pour le primaire seulement", "仅小学放假", "ਸਿਰਫ ਪ੍ਰਾਇਮਰੀ ਲਈ ਛੁੱਟੀ", "Vacaciones solo de primaria"],
  ["Holiday for secondary only", "Congé pour le secondaire seulement", "仅中学放假", "ਸਿਰਫ ਸੈਕੰਡਰੀ ਲਈ ਛੁੱਟੀ", "Vacaciones solo de secundaria"],
  ["Friday timetable", "Horaire du vendredi", "周五课表", "ਸ਼ੁੱਕਰਵਾਰ ਟਾਈਮਟੇਬਲ", "Horario de viernes"],
  ["September", "Septembre", "九月", "ਸਤੰਬਰ", "Septiembre"],
  ["October", "Octobre", "十月", "ਅਕਤੂਬਰ", "Octubre"],
  ["November", "Novembre", "十一月", "ਨਵੰਬਰ", "Noviembre"],
  ["December", "Décembre", "十二月", "ਦਸੰਬਰ", "Diciembre"],
  ["January", "Janvier", "一月", "ਜਨਵਰੀ", "Enero"],
  ["February", "Février", "二月", "ਫਰਵਰੀ", "Febrero"],
  ["March", "Mars", "三月", "ਮਾਰਚ", "Marzo"],
  ["April", "Avril", "四月", "ਅਪ੍ਰੈਲ", "Abril"],
  ["May", "Mai", "五月", "ਮਈ", "Mayo"],
  ["June", "Juin", "六月", "ਜੂਨ", "Junio"],
  ["Class holds and office events that change pickup this week.", "Retenues de classe et événements du bureau qui changent le ramassage cette semaine.", "本周影响接送的班级安排和办公室活动。", "ਇਸ ਹਫ਼ਤੇ ਕਲਾਸ ਹੋਲਡ ਅਤੇ ਦਫ਼ਤਰ ਈਵੈਂਟ ਜੋ ਲੈਣਾ ਬਦਲਦੇ ਹਨ।", "Retenciones de clase y eventos de oficina que cambian la recogida esta semana."],
  ["Week, absences, and a note to the office", "La semaine, les absences, et un mot au bureau", "本周出勤，以及给办公室的说明", "ਹਫ਼ਤਾ, ਗੈਰਹਾਜ਼ਰੀ, ਅਤੇ ਦਫ਼ਤਰ ਲਈ ਨੋਟ", "La semana, ausencias y una nota a la oficina"],
  ["See the week", "Voir la semaine", "查看本周", "ਹਫ਼ਤਾ ਵੇਖੋ", "Ver la semana"],
  ["To read or sign", "À lire ou signer", "待读或签字", "ਪੜ੍ਹਨ ਜਾਂ ਦਸਤਖ਼ਤ", "Para leer o firmar"],
  ["To sign", "À signer", "待签", "ਦਸਤਖ਼ਤ ਲਈ", "Por firmar"],
  ["Caught up", "À jour", "已看完", "ਅੱਪ ਟੂ ਡੇਟ", "Al día"],
  ["Nothing waiting", "Rien en attente", "没有待办", "ਕੁਝ ਉਡੀਕ ਵਿਚ ਨਹੀਂ", "Nada pendiente"],
  ["In class", "En classe", "课堂上", "ਕਲਾਸ ਵਿਚ", "En clase"],
  ["Next", "Ensuite", "接下来", "ਅਗਲਾ", "Siguiente"],
  ["Tiles showing", "Tuiles visibles", "显示的卡片", "ਟਾਈਲਾਂ", "Tarjetas visibles"],
  ["New from teacher or office", "Nouveau du prof ou du bureau", "来自老师或办公室", "ਅਧਿਆਪਕ ਜਾਂ ਦਫ਼ਤਰ ਤੋਂ ਨਵਾਂ", "Nuevo del maestro u oficina"],
  ["Catch it tonight, not at the door.", "Attrapez-le ce soir, pas à la porte.", "今晚处理，别等到校门口。", "ਅੱਜ ਰਾਤ ਸੰਭਾਲੋ, ਦਰਵਾਜ਼ੇ 'ਤੇ ਨਹੀਂ।", "Resuélvelo esta noche, no en la puerta."],
  ["The paper pile, digital.", "La pile de papiers, en numérique.", "纸堆，数字化。", "ਕਾਗਜ਼ਾਂ ਦਾ ਢੇਰ, ਡਿਜੀਟਲ।", "La pila de papeles, digital."],
  ["School documents, classroom papers, and fundraisers — split so the backpack isn’t one stack.", "Documents d’école, papiers de classe et collectes — séparés pour que le sac ne soit plus un tas.", "学校文件、课堂材料和募捐分开，书包不再是一堆。", "ਸਕੂਲ, ਕਲਾਸ ਅਤੇ ਫੰਡਰੇਜ਼ਰ ਵੱਖ, ਤਾਂ ਜੋ ਬੈਗ ਇੱਕ ਢੇਰ ਨਾ ਹੋਵੇ।", "Documentos de la escuela, del salón y recaudaciones, separados para que la mochila no sea un montón."],
  ["The week, merged.", "La semaine, fusionnée.", "一周日程，合并。", "ਹਫ਼ਤਾ, ਇਕੱਠਾ।", "La semana, unida."],
  ["Office events and class holds on one calendar so pickup is not a scavenger hunt. Save it to Apple or Google, or print the week.", "Les événements du bureau et de la classe sur un calendrier pour que le ramassage ne soit pas une chasse. Enregistrez-le dans Apple ou Google, ou imprimez la semaine.", "办公室和班级安排在同一日历上，接孩子不用到处找。可存到苹果或谷歌日历，或打印本周。", "ਦਫ਼ਤਰ ਅਤੇ ਕਲਾਸ ਇੱਕ ਕੈਲੰਡਰ 'ਤੇ, ਤਾਂ ਜੋ ਲੈਣਾ ਖੋਜ ਨਾ ਬਣੇ। ਐਪਲ ਜਾਂ ਗੂਗਲ ਵਿਚ ਸੇਵ ਕਰੋ, ਜਾਂ ਛਾਪੋ।", "Eventos de oficina y clase en un calendario para que la recogida no sea una búsqueda. Guárdalo en Apple o Google, o imprime la semana."],
  ["Teacher and office, one inbox.", "Prof et bureau, une boîte.", "老师和办公室，一个收件箱。", "ਅਧਿਆਪਕ ਅਤੇ ਦਫ਼ਤਰ, ਇੱਕ ਇਨਬਾਕਸ।", "Maestro y oficina, una bandeja."],
  ["Tune the board.", "Réglez le tableau.", "调整看板。", "ਬੋਰਡ ਠੀਕ ਕਰੋ।", "Ajusta el tablero."],
  ["Preferred language", "Langue préférée", "首选语言", "ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ", "Idioma preferido"],
  ["Announcements, messages, and backpack documents arrive in this language. Staff still read English.", "Les annonces, messages et documents arrivent dans cette langue. Le personnel lit toujours l’anglais.", "通知、消息和书包文件以该语言送达。教职工仍读英语。", "ਐਲਾਨ, ਸੁਨੇਹੇ ਅਤੇ ਦਸਤਾਵੇਜ਼ ਇਸ ਭਾਸ਼ਾ ਵਿਚ ਆਉਂਦੇ ਹਨ। ਸਟਾਫ ਅੰਗਰੇਜ਼ੀ ਪੜ੍ਹਦਾ ਹੈ।", "Avisos, mensajes y documentos llegan en este idioma. El personal sigue leyendo inglés."],
  ["The school set the default. Hide a tile you don’t need this week.", "L’école a choisi le défaut. Masquez une tuile inutile cette semaine.", "学校设定了默认。可隐藏本周不需要的卡片。", "ਸਕੂਲ ਨੇ ਡਿਫਾਲਟ ਰੱਖਿਆ। ਇਸ ਹਫ਼ਤੇ ਲੋੜ ਨਾ ਹੋਵੇ ਤਾਂ ਟਾਈਲ ਲੁਕਾਓ।", "La escuela eligió el valor inicial. Oculta una tarjeta que no necesites esta semana."],
  ["Direct to teachers", "Directement aux enseignants", "直达老师", "ਸਿੱਧਾ ਅਧਿਆਪਕਾਂ ਨੂੰ", "Directo a maestros"],
  ["Fall report card", "Bulletin d’automne", "秋季成绩单", "ਪਤਝੜ ਰਿਪੋਰਟ ਕਾਰਡ", "Boletín de otoño"],
  ["Tell the office.", "Prévenez le bureau.", "告诉办公室。", "ਦਫ਼ਤਰ ਨੂੰ ਦੱਸੋ।", "Avísele a la oficina."],
  ["Ask my portal", "Demander à mon portail", "问门户", "ਪੋਰਟਲ ਨੂੰ ਪੁੱਛੋ", "Preguntar al portal"],
  ["Week of Oct 13", "Semaine du 13 oct.", "10月13日那一周", "13 ਅਕਤੂਬਰ ਵਾਲਾ ਹਫ਼ਤਾ", "Semana del 13 oct"],
  ["Tap a meal to order. Packed lunch stays the default until you buy.", "Touchez un repas pour commander. Le lunch maison reste par défaut tant que vous n’achetez pas.", "点餐即可订购。不买则默认带饭。", "ਖਰੀਦਣ ਲਈ ਭੋਜਨ ਟੈਪ ਕਰੋ। ਘਰ ਦਾ ਲੰਚ ਡਿਫਾਲਟ ਰਹਿੰਦਾ ਹੈ।", "Toque una comida para pedir. El lunch de casa sigue hasta que compre."],
  ["Walks.", "À pied.", "步行。", "ਤੁਰਕੇ।", "Camina."],
  ["Stops", "Arrêts", "站点", "ਸਟਾਪ", "Paradas"],
  ["Feed", "Fil", "动态", "ਫੀਡ", "Feed"],
  ["On", "Activé", "开", "ਚਾਲੂ", "Activado"],
  ["Hidden", "Masqué", "隐藏", "ਲੁਕਿਆ", "Oculto"],
  ["Open", "Ouvrir", "打开", "ਖੋਲ੍ਹੋ", "Abrir"],
  ["Present", "Présent", "出勤", "ਹਾਜ਼ਰ", "Presente"],
  ["Late", "En retard", "迟到", "ਦੇਰ", "Tarde"],
  ["Absent", "Absent", "缺勤", "ਗੈਰਹਾਜ਼ਰ", "Ausente"],
  ["Left early", "Parti tôt", "早退", "ਛੇਤੀ ਗਿਆ", "Salió temprano"],
  ["Upcoming", "À venir", "即将", "ਆਉਣ ਵਾਲਾ", "Próximo"],
  ["Exceeding", "Dépasse", "超出", "ਵੱਧ", "Supera"],
  ["Meeting", "Réussit", "达标", "ਪੂਰਾ", "Cumple"],
  ["Purchase", "Acheter", "购买", "ਖਰੀਦੋ", "Comprar"],
  ["Purchased · undo", "Acheté · annuler", "已买 · 撤销", "ਖਰੀਦਿਆ · ਵਾਪਸ", "Comprado · deshacer"],
  ["Nothing in this pile.", "Rien dans cette pile.", "这一叠是空的。", "ਇਸ ਢੇਰ ਵਿਚ ਕੁਝ ਨਹੀਂ।", "Nada en este montón."],
  ["Grade 4", "4e année", "四年级", "ਗ੍ਰੇਡ 4", "4.º grado"],
  ["Kindergarten", "Maternelle", "幼儿园", "ਕਿੰਡਰਗਾਰਟਨ", "Kínder"],
  ["Grade 8", "8e année", "八年级", "ਗ੍ਰੇਡ 8", "8.º grado"],
  ["Elementary", "Primaire", "小学", "ਐਲੀਮੈਂਟਰੀ", "Primaria"],
  ["Primary", "Préscolaire", "低年级", "ਪ੍ਰਾਇਮਰੀ", "Inicial"],
  ["Middle school", "Secondaire", "初中", "ਮਿਡਲ ਸਕੂਲ", "Secundaria"],
  ["Assembly", "Assemblée", "集会", "ਅਸੈਂਬਲੀ", "Asamblea"],
  ["Choir", "Chorale", "合唱", "ਗਾਇਕੀ", "Coro"],
  ["Science walk", "Marche scientifique", "科学徒步", "ਵਿਗਿਆਨ ਯਾਤਰਾ", "Caminata de ciencias"],
  ["Curriculum night", "Soirée pédagogique", "课程说明会", "ਪਾਠਕ੍ਰਮ ਰਾਤ", "Noche de currículo"],
  ["Pumpkin story", "Histoire de citrouille", "南瓜故事", "ਕੱਦੂ ਕਹਾਣੀ", "Cuento de calabaza"],
  ["Volleyball away", "Volleyball à l’extérieur", "排球客场", "ਵਾਲੀਬਾਲ ਦੂਰ", "Vóleibol de visita"],
  ["Algebra clinic", "Clinique d’algèbre", "代数辅导", "ਅਲਜਬਰਾ ਕਲਿਨਿਕ", "Clínica de álgebra"],
  ["Gym", "Gymnase", "体育馆", "ਜਿਮ", "Gimnasio"],
  ["Music room", "Salle de musique", "音乐室", "ਸੰਗੀਤ ਕਮਰਾ", "Sala de música"],
  ["Meet Room 12", "Rendez-vous salle 12", "在12班集合", "ਕਮਰਾ 12 'ਤੇ ਮਿਲੋ", "En el salón 12"],
  ["Library", "Bibliothèque", "图书馆", "ਲਾਇਬ੍ਰੇਰੀ", "Biblioteca"],
  ["Bus loop", "Boucle d’autobus", "校车环", "ਬੱਸ ਲੂਪ", "Circuito de buses"],
  ["Room 28", "Salle 28", "28班", "ਕਮਰਾ 28", "Salón 28"],
  ["Cafeteria", "Cafétéria", "食堂", "ਕੈਫੇਟੇਰੀਆ", "Cafetería"],
  ["PDF · 2 pages", "PDF · 2 pages", "PDF · 2页", "PDF · 2 ਪੰਨੇ", "PDF · 2 páginas"],
  ["PDF", "PDF", "PDF", "PDF", "PDF"],
  ["Form · due Wed", "Formulaire · mercredi", "表格 · 周三截止", "ਫਾਰਮ · ਬੁੱਧਵਾਰ", "Formulario · mié"],
  ["Form · due Tue", "Formulaire · mardi", "表格 · 周二截止", "ਫਾਰਮ · ਮੰਗਲਵਾਰ", "Formulario · mar"],
  ["Form · due Thu", "Formulaire · jeudi", "表格 · 周四截止", "ਫਾਰਮ · ਵੀਰਵਾਰ", "Formulario · jue"],
  ["Order · due Fri", "Commande · vendredi", "订单 · 周五截止", "ਆਰਡਰ · ਸ਼ੁੱਕਰਵਾਰ", "Pedido · vie"],
  ["Pumpkin story day", "Journée histoire de citrouille", "南瓜故事日", "ਕੱਦੂ ਕਹਾਣੀ ਦਿਨ", "Día del cuento de calabaza"],
  ["Kindergarten visits the library pumpkin display Tuesday at 10:00. Extra socks in the cubby.", "La maternelle visite l’exposition de citrouilles à la bibliothèque mardi à 10 h. Chaussettes de rechange dans le casier.", "幼儿园周二10点参观图书馆南瓜展。柜子里有备用袜子。", "ਕਿੰਡਰਗਾਰਟਨ ਮੰਗਲਵਾਰ 10:00 ਲਾਇਬ੍ਰੇਰੀ ਕੱਦੂ ਵਿਖਾਵੇ 'ਤੇ ਜਾਂਦਾ ਹੈ। ਐਕਸਟਰਾ ਜੁਰਾਬਾਂ ਕਬੀਨ ਵਿਚ।", "Kínder visita la calabaza de la biblioteca el martes a las 10:00. Calcetas extra en el cubby."],
  ["Algebra quiz Friday", "Quiz d’algèbre vendredi", "周五代数测验", "ਸ਼ੁੱਕਰਵਾਰ ਅਲਜਬਰਾ ਕੁਇਜ਼", "Examen de álgebra el viernes"],
  ["Grade 8 quiz Friday. Early dismissal Wednesday for the volleyball away game.", "Quiz de 8e vendredi. Sortie anticipée mercredi pour le match de volleyball.", "八年级周五测验。周三排球客场提前放学。", "ਗ੍ਰੇਡ 8 ਕੁਇਜ਼ ਸ਼ੁੱਕਰਵਾਰ। ਬੁੱਧਵਾਰ ਵਾਲੀਬਾਲ ਲਈ ਛੇਤੀ ਛੁੱਟੀ।", "Examen de 8.º el viernes. Salida temprana el miércoles por el partido de vóleibol."],
  ["Doors at 6:00 in the cafeteria. K–8 classrooms present in waves.", "Ouverture à 18 h à la cafétéria. Les classes K–8 présentent par vagues.", "食堂6点开门。K–8各班分批上场。", "ਕੈਫੇਟੇਰੀਆ ਵਿਚ 6:00 ਦਰਵਾਜ਼ੇ। K–8 ਕਲਾਸਾਂ ਲਹਿਰਾਂ ਵਿਚ।", "Puertas a las 6:00 en la cafetería. Las clases K–8 presentan por tandas."],
  ["Principal Shah on curriculum night, cafeteria week, and the Route 7 delay. Cedar Hill is K–8.", "La direction Shah sur la soirée pédagogique, la semaine de cafétéria et le retard de la ligne 7. Cedar Hill est K–8.", "Shah校长谈课程说明会、食堂周和第7路延误。Cedar Hill是K–8。", "ਪ੍ਰਿੰਸੀਪਲ ਸ਼ਾਹ ਪਾਠਕ੍ਰਮ ਰਾਤ, ਕੈਫੇਟੇਰੀਆ ਹਫ਼ਤੇ ਅਤੇ ਰੂਟ 7 ਦੀ ਦੇਰੀ ਬਾਰੇ। Cedar Hill K–8 ਹੈ।", "La directora Shah sobre la noche de currículo, la semana de cafetería y el retraso de la ruta 7. Cedar Hill es K–8."],
  ["Thursday 6:00. Childcare in the library. K–8 classrooms present in the cafeteria.", "Jeudi 18 h. Garderie à la bibliothèque. Les classes K–8 présentent à la cafétéria.", "周四6:00。图书馆有托管。K–8各班在食堂呈现。", "ਵੀਰਵਾਰ 6:00। ਲਾਇਬ੍ਰੇਰੀ ਵਿਚ ਬਾਲ-ਸੰਭਾਲ। K–8 ਕੈਫੇਟੇਰੀਆ ਵਿਚ।", "Jueves 6:00. Cuidado infantil en la biblioteca. Las clases K–8 presentan en la cafetería."],
  ["Pumpkin visit permission", "Autorisation visite citrouille", "南瓜参观许可", "ਕੱਦੂ ਯਾਤਰਾ ਇਜਾਜ਼ਤ", "Permiso de visita a la calabaza"],
  ["Kindergarten walks to the library pumpkin display Tuesday 10:00. Sign if Noah can go.", "La maternelle marche jusqu’à l’exposition de citrouilles mardi à 10 h. Signez si Noah peut y aller.", "幼儿园周二10点步行去图书馆南瓜展。请签字确认Noah可以参加。", "ਕਿੰਡਰਗਾਰਟਨ ਮੰਗਲਵਾਰ 10:00 ਲਾਇਬ੍ਰੇਰੀ ਕੱਦੂ ਵਿਖਾਵੇ ਤੁਰਦਾ ਹੈ। ਨੋਆ ਲਈ ਦਸਤਖ਼ਤ ਕਰੋ।", "Kínder camina a la calabaza de la biblioteca el martes a las 10:00. Firme si Noah puede ir."],
  ["Athletic travel consent", "Consentement de déplacement sportif", "体育出行同意书", "ਖੇਡ ਯਾਤਰਾ ਸਹਿਮਤੀ", "Consentimiento de viaje deportivo"],
  ["Volleyball away game Wednesday. Early dismissal 1:30, return 6:15. Sign for Samira to ride the team bus.", "Match de volleyball à l’extérieur mercredi. Sortie 13 h 30, retour 18 h 15. Signez pour que Samira prenne l’autobus de l’équipe.", "周三排球客场。1:30放学，6:15返回。请签字让Samira坐校队车。", "ਬੁੱਧਵਾਰ ਵਾਲੀਬਾਲ ਦੂਰ। 1:30 ਛੁੱਟੀ, 6:15 ਵਾਪਸੀ। ਸਮੀਰਾ ਲਈ ਟੀਮ ਬੱਸ 'ਤੇ ਦਸਤਖ਼ਤ ਕਰੋ।", "Partido de vóleibol el miércoles. Salida 1:30, regreso 6:15. Firme para que Samira tome el bus del equipo."],
  ["PTO pizza kits", "Trousses pizza du CPE", "家委会披萨套装", "PTO ਪੀਜ਼ਾ ਕਿੱਟ", "Kits de pizza del PTO"],
  ["Optional pizza kits, $12 each. Pickup Friday 3:30 in the cafeteria. Sign to order one kit.", "Trousses pizza facultatives, 12 $ chacune. Ramassage vendredi 15 h 30 à la cafétéria. Signez pour en commander une.", "可选披萨套装，每个12美元。周五3:30食堂领取。签字即订一份。", "ਵਿਕਲਪਿਕ ਪੀਜ਼ਾ ਕਿੱਟ, $12। ਸ਼ੁੱਕਰਵਾਰ 3:30 ਕੈਫੇਟੇਰੀਆ। ਇੱਕ ਲਈ ਦਸਤਖ਼ਤ ਕਰੋ।", "Kits de pizza opcionales, $12. Recogida viernes 3:30 en la cafetería. Firme para pedir uno."],
  ["Fall walkathon pledge", "Promesse du walkathon d’automne", "秋季步行筹款承诺", "ਪਤਝੜ ਵਾਕਾਥਾਨ ਵਾਅਦਾ", "Promesa del walkathon de otoño"],
  ["K–8 walkathon Friday after picture day. Pledge sheets go to the office. Families can skip if they already gave.", "Walkathon K–8 vendredi après la journée photos. Les feuilles de promesse vont au bureau. Les familles peuvent passer si elles ont déjà donné.", "K–8步行筹款在拍照日周五之后。承诺表交办公室。已捐家庭可跳过。", "K–8 ਵਾਕਾਥਾਨ ਸ਼ੁੱਕਰਵਾਰ ਫੋਟੋ ਤੋਂ ਬਾਅਦ। ਵਾਅਦਾ ਪੱਤਰ ਦਫ਼ਤਰ। ਜੇ ਪਹਿਲਾਂ ਦਿੱਤਾ ਤਾਂ ਛੱਡ ਸਕਦੇ ਹੋ।", "Walkathon K–8 el viernes después de fotos. Las hojas van a la oficina. Las familias pueden omitir si ya donaron."],
  ["Library books go back tomorrow", "Les livres de bibliothèque reviennent demain", "图书馆的书明天要还", "ਲਾਇਬ੍ਰੇਰੀ ਕਿਤਾਬਾਂ ਕੱਲ੍ਹ ਵਾਪਸ", "Los libros de la biblioteca se devuelven mañana"],
  ["Maya’s library day is Tuesday. Pack the two books tonight so they are in the backpack before the bus.", "Le jour de bibliothèque de Maya est mardi. Mettez les deux livres ce soir dans le sac avant l’autobus.", "Maya的图书馆日是周二。今晚把两本书放进书包，上车前带好。", "ਮਾਇਆ ਦਾ ਲਾਇਬ੍ਰੇਰੀ ਦਿਨ ਮੰਗਲਵਾਰ ਹੈ। ਅੱਜ ਰਾਤ ਦੋ ਕਿਤਾਬਾਂ ਬੈਗ ਵਿਚ ਪਾਓ।", "El día de biblioteca de Maya es martes. Empaca los dos libros esta noche antes del autobús."],
  ["New classroom document", "Nouveau document de classe", "新的课堂文件", "ਨਵਾਂ ਕਲਾਸ ਦਸਤਾਵੇਜ਼", "Nuevo documento del salón"],
  ["Science walk permission was sent by Ms. Ellison. It still needs a signature.", "L’autorisation de marche scientifique a été envoyée par Mme Ellison. Il manque une signature.", "Ellison老师发了科学徒步许可，还需要签字。", "ਮਿਸ ਐਲੀਸਨ ਨੇ ਵਿਗਿਆਨ ਯਾਤਰਾ ਇਜਾਜ਼ਤ ਭੇਜੀ। ਦਸਤਖ਼ਤ ਬਾਕੀ ਹੈ।", "La Sra. Ellison envió el permiso de la caminata. Todavía falta la firma."],
  ["Ms. Ellison will keep Maya until 4:00. The late bus note is already with the office.", "Mme Ellison gardera Maya jusqu’à 16 h. L’avis d’autobus tardif est déjà au bureau.", "Ellison老师会把Maya留到4点。晚班校车通知已在办公室。", "ਮਿਸ ਐਲੀਸਨ ਮਾਇਆ ਨੂੰ 4:00 ਤੱਕ ਰੱਖੇਗੀ। ਦੇਰ ਵਾਲੀ ਬੱਸ ਦੀ ਨੋਟਿਸ ਦਫ਼ਤਰ ਵਿਚ ਹੈ।", "La Sra. Ellison se queda con Maya hasta las 4:00. El aviso del autobús tarde ya está en la oficina."],
  ["Route 7 is still late", "La ligne 7 est encore en retard", "第7路仍然晚点", "ਰੂਟ 7 ਹਾਲੇ ਲੇਟ ਹੈ", "La ruta 7 sigue tarde"],
  ["Pickup is still Oak & 3rd. Leave a few extra minutes in the morning.", "L’arrêt est toujours Oak et 3rd. Partez quelques minutes plus tôt le matin.", "上车点仍是Oak和3rd。早上请提前几分钟。", "ਸਟਾਪ ਹਾਲੇ Oak & 3rd। ਸਵੇਰੇ ਕੁਝ ਮਿੰਟ ਪਹਿਲਾਂ ਨਿਕਲੋ।", "La parada sigue en Oak y 3rd. Salgan unos minutos antes por la mañana."],
  ["Pumpkin story in the morning", "Histoire de citrouille le matin", "早上南瓜故事", "ਸਵੇਰੇ ਕੱਦੂ ਕਹਾਣੀ", "Cuento de calabaza por la mañana"],
  ["Noah visits the library pumpkin display Tuesday at 10:00. Extra socks in the cubby.", "Noah visite l’exposition de citrouilles mardi à 10 h. Chaussettes de rechange dans le casier.", "Noah周二10点去图书馆看南瓜展。柜子里有备用袜子。", "ਨੋਆ ਮੰਗਲਵਾਰ 10:00 ਲਾਇਬ੍ਰੇਰੀ ਕੱਦੂ ਵਿਖਾਵੇ ਤੇ ਜਾਂਦਾ ਹੈ। ਐਕਸਟਰਾ ਜੁਰਾਬਾਂ ਕਬੀਨ ਵਿਚ।", "Noah visita la calabaza de la biblioteca el martes a las 10:00. Hay calcetas extra en el cubby."],
  ["Pumpkin visit permission was sent by Mr. Patel. Sign if Noah can go.", "L’autorisation de visite citrouille a été envoyée par M. Patel. Signez si Noah peut y aller.", "Patel老师发了南瓜参观许可。请签字确认Noah可以去。", "ਮਿਸਟਰ ਪਟੇਲ ਨੇ ਕੱਦੂ ਯਾਤਰਾ ਇਜਾਜ਼ਤ ਭੇਜੀ। ਨੋਆ ਲਈ ਦਸਤਖ਼ਤ ਕਰੋ।", "El Sr. Patel envió el permiso de la calabaza. Firme si Noah puede ir."],
  ["Early dismissal Wednesday", "Sortie anticipée mercredi", "周三提前放学", "ਬੁੱਧਵਾਰ ਛੇਤੀ ਛੁੱਟੀ", "Salida temprana el miércoles"],
  ["Volleyball away game. Samira leaves at 1:30. Pack a snack and the travel consent.", "Match de volleyball à l’extérieur. Samira part à 13 h 30. Préparez une collation et le consentement de déplacement.", "排球客场。Samira 1:30离开。带上零食和出行同意书。", "ਵਾਲੀਬਾਲ ਦੂਰ। ਸਮੀਰਾ 1:30 ਜਾਂਦੀ ਹੈ। ਸਨੈਕ ਅਤੇ ਯਾਤਰਾ ਸਹਿਮਤੀ ਪਾਓ।", "Partido de vóleibol. Samira sale a la 1:30. Empaca un refrigerio y el consentimiento."],
  ["Athletic travel consent was sent by Coach Rivera. Sign so Samira can ride the team bus.", "Le consentement de déplacement a été envoyé par l’entraîneur Rivera. Signez pour que Samira prenne l’autobus de l’équipe.", "Rivera教练发了出行同意书。签字后Samira才能坐校队车。", "ਕੋਚ ਰਿਵੇਰਾ ਨੇ ਯਾਤਰਾ ਸਹਿਮਤੀ ਭੇਜੀ। ਸਮੀਰਾ ਦੀ ਟੀਮ ਬੱਸ ਲਈ ਦਸਤਖ਼ਤ ਕਰੋ।", "El entrenador Rivera envió el consentimiento. Firme para que Samira tome el bus del equipo."],
  ["New fundraiser", "Nouvelle collecte", "新募捐", "ਨਵਾਂ ਫੰਡਰੇਜ਼ਰ", "Nueva recaudación"],
  ["PTO pizza kits were added to Documents. Optional, $12, pickup Friday.", "Les trousses pizza du CPE sont dans Documents. Facultatif, 12 $, ramassage vendredi.", "家委会披萨套装已加入文件。可选，12美元，周五领取。", "PTO ਪੀਜ਼ਾ ਕਿੱਟਾਂ ਦਸਤਾਵੇਜ਼ ਵਿਚ ਹਨ। ਵਿਕਲਪਿਕ, $12, ਸ਼ੁੱਕਰਵਾਰ ਲੈਣਾ।", "Los kits de pizza del PTO están en Documentos. Opcional, $12, recogida el viernes."],
  ["Portraits in the gym at 9:00. Spirit-day green. Retakes Nov 12.", "Portraits au gymnase à 9 h. Vert de la journée d’esprit. Reprises le 12 novembre.", "上午9点体育馆拍照。穿精神日绿色。补拍11月12日。", "9:00 ਜਿਮ ਵਿਚ ਫੋਟੋਆਂ। ਹਰਾ ਪਹਿਨੋ। ਮੁੜ-ਫੋਟੋ 12 ਨਵੰਬਰ।", "Retratos en el gimnasio a las 9:00. Verde de espíritu escolar. Repeticiones el 12 de noviembre."],
  ["Route 7 running 12 minutes late this morning. Pickup still Oak & 3rd.", "La ligne 7 a 12 minutes de retard ce matin. Arrêt toujours Oak et 3rd.", "第7路今早晚点12分钟。上车点仍是Oak与3rd。", "ਰੂਟ 7 ਅੱਜ ਸਵੇਰੇ 12 ਮਿੰਟ ਲੇਟ। ਸਟਾਪ ਹਾਲੇ Oak & 3rd।", "La ruta 7 circula 12 minutos tarde esta mañana. La parada sigue en Oak y 3rd."],
  ["One board for {name}.", "Un tableau pour {name}.", "{name}的一块看板。", "{name} ਲਈ ਇੱਕ ਬੋਰਡ।", "Un tablero para {name}."],
  ["{name}’s day.", "La journée de {name}.", "{name}的一天。", "{name} ਦਾ ਦਿਨ।", "El día de {name}."],
  ["{grade} · {band} with {teacher} in {room}. Cedar Hill is K–8 — switch siblings in the rail.", "{grade} · {band} avec {teacher} dans {room}. Cedar Hill est K–8 — changez d’enfant dans la barre.", "{grade} · {band}，{teacher}，{room}。Cedar Hill是K–8 — 在侧栏切换孩子。", "{grade} · {band} {teacher} {room} ਵਿਚ। Cedar Hill K–8 ਹੈ — ਰੇਲ ਵਿਚ ਬੱਚਾ ਬਦਲੋ।", "{grade} · {band} con {teacher} en {room}. Cedar Hill es K–8 — cambia de hijo en la barra."],
  ["{grade} · {band}. Posts arrive in {lang}. Switch siblings in the rail — Cedar Hill is K–8.", "{grade} · {band}. Les messages arrivent en {lang}. Changez d’enfant dans la barre — Cedar Hill est K–8.", "{grade} · {band}。内容以{lang}送达。在侧栏切换孩子 — Cedar Hill是K–8。", "{grade} · {band}। ਪੋਸਟ {lang} ਵਿਚ ਆਉਂਦੀਆਂ ਹਨ। ਰੇਲ ਵਿਚ ਬੱਚਾ ਬਦਲੋ — Cedar Hill K–8।", "{grade} · {band}. Los avisos llegan en {lang}. Cambia de hijo en la barra — Cedar Hill es K–8."],
  ["{grade} · {band} with {teacher} in {room}. Reminders, notices, and posts arrive in {lang}.", "{grade} · {band} avec {teacher} dans {room}. Rappels, avis et messages arrivent en {lang}.", "{grade} · {band}，{teacher}，{room}。提醒、通知和内容以{lang}送达。", "{grade} · {band} {teacher} {room} ਵਿਚ। ਯਾਦਾਂ, ਸੂਚਨਾਵਾਂ ਅਤੇ ਪੋਸਟ {lang} ਵਿਚ ਆਉਂਦੀਆਂ ਹਨ।", "{grade} · {band} con {teacher} en {room}. Recordatorios, avisos y publicaciones llegan en {lang}."],
  ["See all", "Tout voir", "查看全部", "ਸਭ ਵੇਖੋ", "Ver todo"],
  ["Reminders and new papers for {name}. Library books, early dismissals, and anything that just landed in Documents.", "Rappels et nouveaux papiers pour {name}. Livres de biblio, sorties anticipées, et tout ce qui vient d’arriver dans Documents.", "{name}的提醒和新文件。还书、提前放学，以及刚进文件的材料。", "{name} ਲਈ ਯਾਦਾਂ ਅਤੇ ਨਵੇਂ ਕਾਗਜ਼। ਲਾਇਬ੍ਰੇਰੀ ਕਿਤਾਬਾਂ, ਛੇਤੀ ਛੁੱਟੀ, ਅਤੇ ਦਸਤਾਵੇਜ਼ ਵਿਚ ਨਵਾਂ।", "Recordatorios y papeles nuevos para {name}. Libros, salidas tempranas y lo que acaba de llegar a Documentos."],
  ["Nothing in this pile for {name}.", "Rien dans cette pile pour {name}.", "{name}这一叠是空的。", "{name} ਲਈ ਇਸ ਢੇਰ ਵਿਚ ਕੁਝ ਨਹੀਂ।", "Nada en este montón para {name}."],
  ["See the week, then tell the office if {name} will be absent, late, or leaving early.", "Voyez la semaine, puis dites au bureau si {name} sera absent, en retard ou partira tôt.", "先看本周，再告诉办公室{name}是否缺勤、迟到或早退。", "ਹਫ਼ਤਾ ਵੇਖੋ, ਫਿਰ ਦਫ਼ਤਰ ਨੂੰ ਦੱਸੋ ਜੇ {name} ਗੈਰਹਾਜ਼ਰ, ਦੇਰ ਜਾਂ ਛੇਤੀ ਜਾਵੇਗਾ।", "Vea la semana y avise a la oficina si {name} faltará, llegará tarde o saldrá temprano."],
  ["This goes to attendance and {teacher}. Bus will be skipped if they’re absent.", "Cela va aux présences et à {teacher}. L’autobus sera sauté s’ils sont absents.", "会发给考勤和{teacher}。如果缺勤会跳过校车。", "ਇਹ ਹਾਜ਼ਰੀ ਅਤੇ {teacher} ਕੋਲ ਜਾਂਦਾ ਹੈ। ਗੈਰਹਾਜ਼ਰ ਹੋਣ 'ਤੇ ਬੱਸ ਛੱਡੀ ਜਾਂਦੀ ਹੈ।", "Esto va a asistencia y a {teacher}. El autobús se omite si faltan."],
  ["This goes to attendance and {teacher}. Office will know they walk, not ride.", "Cela va aux présences et à {teacher}. Le bureau saura qu’ils marchent, pas l’autobus.", "会发给考勤和{teacher}。办公室知道他们步行，不坐校车。", "ਇਹ ਹਾਜ਼ਰੀ ਅਤੇ {teacher} ਕੋਲ ਜਾਂਦਾ ਹੈ। ਦਫ਼ਤਰ ਜਾਣਦਾ ਹੈ ਉਹ ਤੁਰਦੇ ਹਨ, ਬੱਸ ਨਹੀਂ।", "Esto va a asistencia y a {teacher}. La oficina sabrá que caminan, no toman el bus."],
  ["{teacher}’s comments for {name}, {grade}. Spring term opens in March.", "Commentaires de {teacher} pour {name}, {grade}. Le trimestre de printemps ouvre en mars.", "{teacher}对{name}（{grade}）的评语。春季学期三月开始。", "{teacher} ਦੀਆਂ ਟਿੱਪਣੀਆਂ {name}, {grade} ਲਈ। ਬਸੰਤ ਮਾਰਚ ਵਿਚ ਖੁੱਲ੍ਹਦਾ ਹੈ।", "Comentarios de {teacher} para {name}, {grade}. El trimestre de primavera abre en marzo."],
  ["{name}’s week at Cedar Hill K–8. Class holds and office events that change pickup.", "La semaine de {name} à Cedar Hill K–8. Les retenues de classe et les événements du bureau qui changent le ramassage.", "{name}在Cedar Hill K–8的一周。会影响接孩子的班级安排和学校活动。", "{name} ਦਾ ਹਫ਼ਤਾ Cedar Hill K–8। ਕਲਾਸ ਅਤੇ ਦਫ਼ਤਰ ਈਵੈਂਟ ਜੋ ਲੈਣ ਨੂੰ ਬਦਲਦੇ ਹਨ।", "La semana de {name} en Cedar Hill K–8. Clases y eventos de oficina que cambian la recogida."],
  ["{name}’s cafeteria week", "Semaine de cafétéria de {name}", "{name}的食堂周", "{name} ਦਾ ਕੈਫੇਟੇਰੀਆ ਹਫ਼ਤਾ", "Semana de cafetería de {name}"],
  ["You write {lang}. {teacher} reads English.", "Vous écrivez en {lang}. {teacher} lit l’anglais.", "你用{lang}写。{teacher}读英语。", "ਤੁਸੀਂ {lang} ਲਿਖਦੇ ਹੋ। {teacher} ਅੰਗਰੇਜ਼ੀ ਪੜ੍ਹਦਾ ਹੈ।", "Escribes en {lang}. {teacher} lee inglés."],
  ["Announcements arrive in {lang}. Replies go back in English.", "Les annonces arrivent en {lang}. Les réponses partent en anglais.", "通知以{lang}送达。回复会变成英语。", "ਐਲਾਨ {lang} ਵਿਚ ਆਉਂਦੇ ਹਨ। ਜਵਾਬ ਅੰਗਰੇਜ਼ੀ ਵਿਚ ਜਾਂਦੇ ਹਨ।", "Los avisos llegan en {lang}. Las respuestas vuelven en inglés."],
  ["Skip the newsletter. Ask in {lang} — Harbor reads the schedule, meal account, and recent announcements.", "Sautez l’infolettre. Demandez en {lang} — Harbor lit l’horaire, le compte repas et les annonces récentes.", "不用翻校讯。用{lang}提问 — Harbor会读日程、餐费账户和近期通知。", "ਖ਼ਬਰਨਾਮਾ ਛੱਡੋ। {lang} ਵਿਚ ਪੁੱਛੋ — Harbor ਸਮਾਂ-ਸਾਰਣੀ, ਭੋਜਨ ਖਾਤਾ ਅਤੇ ਐਲਾਨ ਪੜ੍ਹਦਾ ਹੈ।", "Sáltese el boletín. Pregunte en {lang} — Harbor lee el horario, la cuenta de comidas y los avisos recientes."],
  ["What {room} is making, reading, and trying this week.", "Ce que {room} fabrique, lit et essaie cette semaine.", "{room}本周在做、读和尝试的内容。", "ਇਸ ਹਫ਼ਤੇ {room} ਕੀ ਬਣਾਉਂਦਾ, ਪੜ੍ਹਦਾ ਅਤੇ ਕੋਸ਼ਿਸ਼ ਕਰਦਾ ਹੈ।", "Lo que {room} hace, lee y prueba esta semana."],
  ["{name} is Grade 8 and dismisses at 3:10. No Route 7 seat — Maya and Noah still ride.", "{name} est en 8e et sort à 15 h 10. Pas de place sur la ligne 7 — Maya et Noah y montent encore.", "{name}是八年级，3:10放学。没有7路座位 — Maya和Noah仍坐校车。", "{name} ਗ੍ਰੇਡ 8 ਹੈ ਅਤੇ 3:10 ਛੁੱਟੀ। ਰੂਟ 7 ਸੀਟ ਨਹੀਂ — ਮਾਇਆ ਅਤੇ ਨੋਆ ਹਾਲੇ ਚੜ੍ਹਦੇ ਹਨ।", "{name} está en 8.º y sale a las 3:10. Sin asiento en la ruta 7 — Maya y Noah todavía la toman."],
  ["Harvest pasta", "Pâtes d’automne", "秋收意面", "ਹਾਰਵੈਸਟ ਪਾਸਤਾ", "Pasta de cosecha"],
  ["Bean taco Tuesday", "Tacos aux haricots mardi", "周二豆肉卷", "ਮੰਗਲਵਾਰ ਬੀਨ ਟਾਕੋ", "Tacos de frijol el martes"],
  ["Tomato soup & bun", "Soupe tomate et pain", "番茄汤和面包", "ਟਮਾਟਰ ਸੂਪ ਅਤੇ ਬਨ", "Sopa de tomate y pan"],
  ["Rice bowl", "Bol de riz", "米饭碗", "ਚਾਵਲ ਬਾਊਲ", "Tazón de arroz"],
  ["Cheese pizza", "Pizza au fromage", "奶酪披萨", "ਚੀਜ਼ ਪੀਜ਼ਾ", "Pizza de queso"],
  ["Erosion station", "Station d’érosion", "侵蚀实验台", "ਕਟਾਵ ਸਟੇਸ਼ਨ", "Estación de erosión"],
  ["Fraction pizza", "Pizza des fractions", "分数披萨", "ਭਿੰਨ ਪੀਜ਼ਾ", "Pizza de fracciones"],
  ["Block city", "Ville de blocs", "积木城", "ਬਲਾਕ ਸ਼ਹਿਰ", "Ciudad de bloques"],
  ["Story rug", "Tapis d’histoire", "故事地毯", "ਕਹਾਣੀ ਗਲੀਚਾ", "Alfombra de cuentos"],
  ["Systems clinic", "Clinique des systèmes", "方程组辅导", "ਸਿਸਟਮ ਕਲਿਨਿਕ", "Clínica de sistemas"],
  ["Away game", "Match à l’extérieur", "客场比赛", "ਦੂਰ ਗੇਮ", "Partido de visita"],
  ["Subject", "Matière", "科目", "ਵਿਸ਼ਾ", "Materia"],
  ["Level", "Niveau", "等级", "ਪੱਧਰ", "Nivel"],
  ["Comment", "Commentaire", "评语", "ਟਿੱਪਣੀ", "Comentario"],
  ["Report a change", "Signaler un changement", "报告变更", "ਤਬਦੀਲੀ ਦੱਸੋ", "Reportar un cambio"],
  ["Report absence", "Signaler une absence", "报告缺勤", "ਗੈਰਹਾਜ਼ਰੀ ਦੱਸੋ", "Reportar ausencia"],
  ["Message teacher", "Écrire à l’enseignant", "给老师发消息", "ਅਧਿਆਪਕ ਨੂੰ ਸੁਨੇਹਾ", "Mensaje al maestro"],
  ["See route", "Voir l’itinéraire", "查看路线", "ਰੂਟ ਵੇਖੋ", "Ver ruta"],
  ["Dismissal", "Sortie", "放学", "ਛੁੱਟੀ", "Salida"],
  ["Live change", "Changement en direct", "实时变更", "ਲਾਈਵ ਤਬਦੀਲੀ", "Cambio en vivo"],
  ["Bus update", "Mise à jour autobus", "校车更新", "ਬੱਸ ਅੱਪਡੇਟ", "Actualización del bus"],
  ["Walks home", "Rentre à pied", "步行回家", "ਘਰ ਤੁਰਕੇ", "Camina a casa"],
  ["On the account", "Sur le compte", "已记账", "ਖਾਤੇ 'ਤੇ", "En la cuenta"],
  ["Days present so far", "Jours présents jusqu’ici", "目前出勤天数", "ਹੁਣ ਤੱਕ ਹਾਜ਼ਰ ਦਿਨ", "Días presente hasta ahora"],
  ["Ready to read", "Prêt à lire", "可阅读", "ਪੜ੍ਹਨ ਲਈ ਤਿਆਰ", "Listo para leer"],
  ["Report card", "Bulletin", "成绩单", "ਰਿਪੋਰਟ ਕਾਰਡ", "Boletín"],
  ["Lunch", "Dîner", "午餐", "ਲੰਚ", "Almuerzo"],
  ["still open", "encore ouvert", "仍可点", "ਹਾਲੇ ਖੁੱਲ੍ਹਾ", "aún abierto"],
  ["No holds", "Aucune retenue", "无安排", "ਕੋਈ ਹੋਲਡ ਨਹੀਂ", "Sin retenciones"],
  ["Mon", "Lun", "周一", "ਸੋਮ", "Lun"],
  ["Tue", "Mar", "周二", "ਮੰਗ", "Mar"],
  ["Wed", "Mer", "周三", "ਬੁੱਧ", "Mié"],
  ["Thu", "Jeu", "周四", "ਵੀਰ", "Jue"],
  ["Fri", "Ven", "周五", "ਸ਼ੁੱਕ", "Vie"],
  ["This morning", "Ce matin", "今早", "ਅੱਜ ਸਵੇਰੇ", "Esta mañana"],
  ["Yesterday", "Hier", "昨天", "ਕੱਲ੍ਹ", "Ayer"],
  ["Just now", "À l’instant", "刚刚", "ਹੁਣੇ", "Justo ahora"],
  ["No note", "Aucune note", "无备注", "ਕੋਈ ਨੋਟ ਨਹੀਂ", "Sin nota"],
  ["Ask", "Demander", "提问", "ਪੁੱਛੋ", "Preguntar"],
  ["Apple Calendar", "Calendrier Apple", "苹果日历", "ਐਪਲ ਕੈਲੰਡਰ", "Calendario de Apple"],
  ["Google Calendar", "Calendrier Google", "谷歌日历", "ਗੂਗਲ ਕੈਲੰਡਰ", "Calendario de Google"],
  ["Download .ics", "Télécharger .ics", "下载 .ics", ".ics ਡਾਊਨਲੋਡ", "Descargar .ics"],
  ["Print", "Imprimer", "打印", "ਛਾਪੋ", "Imprimir"],
  ["Events", "Événements", "活动", "ਈਵੈਂਟ", "Eventos"],
  ["Dances", "Danses", "舞会", "ਡਾਂਸ", "Bailes"],
  ["Dance", "Danse", "舞会", "ਡਾਂਸ", "Baile"],
  ["Sports", "Sports", "体育", "ਖੇਡਾਂ", "Deportes"],
  ["Sport", "Sport", "体育", "ਖੇਡ", "Deporte"],
  ["Fundraisers", "Collectes", "募捐", "ਫੰਡਰੇਜ਼ਰ", "Recaudaciones"],
  ["Fundraiser", "Collecte", "募捐", "ਫੰਡਰੇਜ਼ਰ", "Recaudación"],
  ["All events", "Tous les événements", "全部活动", "ਸਾਰੇ ਈਵੈਂਟ", "Todos los eventos"],
  ["Coming up", "À venir", "即将到来", "ਆਉਣ ਵਾਲਾ", "Próximos"],
  ["Going", "J’y vais", "参加", "ਜਾ ਰਹੇ ਹਾਂ", "Asistimos"],
  ["Can’t go", "Je ne peux pas", "不去", "ਨਹੀਂ ਜਾ ਸਕਦੇ", "No podemos"],
  ["You’re going", "Vous y allez", "你们会去", "ਤੁਸੀਂ ਜਾ ਰਹੇ ਹੋ", "Van a ir"],
  ["Marked as can’t go", "Marqué comme impossible", "已标为不去", "ਨਹੀਂ ਜਾ ਸਕਦੇ ਲਿਖਿਆ", "Marcado como no van"],
  ["Open the form", "Ouvrir le formulaire", "打开表格", "ਫਾਰਮ ਖੋਲ੍ਹੋ", "Abrir el formulario"],
  ["Add an event", "Ajouter un événement", "添加活动", "ਈਵੈਂਟ ਜੋੜੋ", "Agregar un evento"],
  ["Put on the board", "Mettre au tableau", "放到看板上", "ਬੋਰਡ 'ਤੇ ਪਾਓ", "Poner en el tablero"],
  ["Dances, sports, and fundraisers — one list instead of three flyers.", "Danses, sports et collectes — une liste au lieu de trois affiches.", "舞会、体育和募捐 — 一张清单，不用三张传单。", "ਡਾਂਸ, ਖੇਡਾਂ ਅਤੇ ਫੰਡਰੇਜ਼ਰ — ਤਿੰਨ ਪਰਚਿਆਂ ਦੀ ਥਾਂ ਇੱਕ ਸੂਚੀ।", "Bailes, deportes y recaudaciones — una lista en vez de tres volantes."],
  ["What Cedar Hill is hosting next. RSVP dances and games; fundraisers still live in Documents.", "Ce que Cedar Hill organise ensuite. Confirmez danses et matchs; les collectes restent dans Documents.", "Cedar Hill接下来举办的活动。舞会和比赛可回复；募捐仍在文件里。", "Cedar Hill ਅਗਲੀ ਵਾਰ ਕੀ ਕਰਦਾ ਹੈ। ਡਾਂਸ ਤੇ ਖੇਡਾਂ RSVP; ਫੰਡਰੇਜ਼ਰ ਹਾਲੇ ਦਸਤਾਵੇਜ਼ ਵਿਚ।", "Lo que Cedar Hill organiza después. Confirme bailes y partidos; las recaudaciones siguen en Documentos."],
  ["Nothing in this pile for {name}.", "Rien dans cette pile pour {name}.", "{name}这一叠是空的。", "{name} ਲਈ ਇਸ ਢੇਰ ਵਿਚ ਕੁਝ ਨਹੀਂ।", "Nada en este montón para {name}."],
  ["No events in this pile.", "Aucun événement dans cette pile.", "这一叠没有活动。", "ਇਸ ਢੇਰ ਵਿਚ ਕੋਈ ਈਵੈਂਟ ਨਹੀਂ।", "No hay eventos en este montón."],
  ["Grade 8 fall dance", "Danse d’automne de 8e", "八年级秋季舞会", "ਗ੍ਰੇਡ 8 ਪਤਝੜ ਡਾਂਸ", "Baile de otoño de 8.º"],
  ["Doors at 6:30. No re-entry after 7:15. Pick up at the gym lobby by 8:45. Phones stay in pockets on the floor.", "Ouverture à 18 h 30. Pas de réentrée après 19 h 15. Ramassage au hall du gymnase avant 20 h 45. Les téléphones restent en poche.", "6:30开门。7:15后不得再入。8:45前到体育馆大厅接人。手机放在口袋里。", "6:30 ਦਰਵਾਜ਼ੇ। 7:15 ਤੋਂ ਬਾਅਦ ਵਾਪਸੀ ਨਹੀਂ। 8:45 ਤੱਕ ਜਿਮ ਲਾਬੀ। ਫੋਨ ਜੇਬ ਵਿਚ।", "Puertas a las 6:30. Sin reingreso después de las 7:15. Recogida en el vestíbulo del gimnasio a las 8:45. Los teléfonos se quedan en el bolsillo."],
  ["Halloween dance", "Danse d’Halloween", "万圣节舞会", "ਹੈਲੋਵੀਨ ਡਾਂਸ", "Baile de Halloween"],
  ["Costume-friendly, no masks that cover the face. Concession in the cafeteria. Younger siblings stay with a parent.", "Costumes bienvenus, pas de masques qui couvrent le visage. Cantine à la cafétéria. Les plus jeunes restent avec un parent.", "欢迎服装，勿戴遮脸面具。食堂有小卖部。年幼弟妹须由家长陪同。", "ਪੋਸ਼ਾਕ ਠੀਕ, ਚਿਹਰਾ ਢੱਕਣ ਵਾਲੇ ਮਾਸਕ ਨਹੀਂ। ਕੈਫੇਟੇਰੀਆ ਵਿਚ ਕੈਂਟੀਨ। ਛੋਟੇ ਭੈਣ-ਭਰਾ ਮਾਪਿਆਂ ਨਾਲ।", "Disfraces sí, sin máscaras que cubran la cara. Cantina en la cafetería. Los hermanos menores se quedan con un padre."],
  ["Grade 4 soccer clinic", "Clinique de soccer de 4e", "四年级足球训练", "ਗ੍ਰੇਡ 4 ਸਾਕਰ ਕਲਿਨਿਕ", "Clínica de fútbol de 4.º"],
  ["Optional clinic after school. Cleats or running shoes. Pickup at the field gate at 4:20 — not the bus loop.", "Clinique facultative après l’école. Crampons ou souliers de course. Ramassage à la grille du terrain à 16 h 20 — pas la boucle d’autobus.", "课后可选训练。钉鞋或跑鞋。4:20在球场门口接，不是校车环。", "ਸਕੂਲ ਤੋਂ ਬਾਅਦ ਵਿਕਲਪਿਕ। ਕਲੀਟ ਜਾਂ ਦੌੜ ਜੁੱਤੀ। 4:20 ਮੈਦਾਨ ਗੇਟ — ਬੱਸ ਲੂਪ ਨਹੀਂ।", "Clínica opcional después de clases. Tacos o tenis. Recogida en la portería a las 4:20 — no el circuito de buses."],
  ["Kindergarten fun run", "Course amusante de maternelle", "幼儿园趣味跑", "ਕਿੰਡਰਗਾਰਟਨ ਫਨ ਰਨ", "Carrera divertida de kínder"],
  ["Three loops of the playground path. Wear runners. Families can watch from the fence — no need to sign.", "Trois tours du sentier de la cour. Souliers de course. Les familles peuvent regarder de la clôture — pas besoin de signer.", "绕操场小路三圈。穿跑鞋。家长可在围栏外观看，无需签字。", "ਖੇਡ ਮੈਦਾਨ ਦੇ ਰਾਹ ਦੇ ਤਿੰਨ ਚੱਕਰ। ਦੌੜ ਜੁੱਤੀ। ਪਰਿਵਾਰ ਵਾੜ ਤੋਂ ਵੇਖ ਸਕਦੇ ਹਨ — ਦਸਤਖ਼ਤ ਨਹੀਂ।", "Tres vueltas del sendero del patio. Tenis. Las familias pueden ver desde la reja — no hay que firmar."],
  ["Cedar Hill vs. Oakridge", "Cedar Hill contre Oakridge", "Cedar Hill对Oakridge", "Cedar Hill ਬਨਾਮ Oakridge", "Cedar Hill vs. Oakridge"],
  ["Home basketball opener. Student section in the east bleachers. Doors at 3:40. Walkers stay until a parent arrives.", "Premier match de basketball à domicile. Section élèves dans les gradins est. Ouverture à 15 h 40. Les marcheurs restent jusqu’à l’arrivée d’un parent.", "主场篮球揭幕战。学生坐东看台。3:40开门。步行学生须等家长来接。", "ਘਰੇਲੂ ਬਾਸਕਟਬਾਲ ਪਹਿਲਾ ਮੈਚ। ਵਿਦਿਆਰਥੀ ਪੂਰਬੀ ਬਲੀਚਰ। 3:40 ਦਰਵਾਜ਼ੇ। ਤੁਰਨ ਵਾਲੇ ਮਾਪੇ ਆਉਣ ਤੱਕ ਰਹਿਣ।", "Apertura de básquetbol en casa. Sección estudiantil en las gradas este. Puertas a las 3:40. Quienes caminan esperan a un padre."],
  ["Fri Oct 24 · 6:30–8:30 PM", "Ven 24 oct. · 18 h 30–20 h 30", "10月24日周五 · 下午6:30–8:30", "ਸ਼ੁੱਕ 24 ਅਕਤੂਬਰ · 6:30–8:30 ਵਾਜੇ", "Vie 24 oct · 6:30–8:30 p. m."],
  ["Fri Oct 31 · 6:00–8:00 PM", "Ven 31 oct. · 18 h–20 h", "10月31日周五 · 下午6:00–8:00", "ਸ਼ੁੱਕ 31 ਅਕਤੂਬਰ · 6:00–8:00 ਵਾਜੇ", "Vie 31 oct · 6:00–8:00 p. m."],
  ["Wed Oct 15 · 1:30 PM", "Mer 15 oct. · 13 h 30", "10月15日周三 · 下午1:30", "ਬੁੱਧ 15 ਅਕਤੂਬਰ · 1:30 ਵਾਜੇ", "Mié 15 oct · 1:30 p. m."],
  ["Thu Oct 16 · 3:20 PM", "Jeu 16 oct. · 15 h 20", "10月16日周四 · 下午3:20", "ਵੀਰ 16 ਅਕਤੂਬਰ · 3:20 ਵਾਜੇ", "Jue 16 oct · 3:20 p. m."],
  ["Fri Oct 17 · 10:15 AM", "Ven 17 oct. · 10 h 15", "10月17日周五 · 上午10:15", "ਸ਼ੁੱਕ 17 ਅਕਤੂਬਰ · 10:15 ਵਾਜੇ", "Vie 17 oct · 10:15 a. m."],
  ["Tue Oct 21 · 4:00 PM", "Mar 21 oct. · 16 h", "10月21日周二 · 下午4:00", "ਮੰਗ 21 ਅਕਤੂਬਰ · 4:00 ਵਾਜੇ", "Mar 21 oct · 4:00 p. m."],
  ["Order due Fri · pickup 3:30", "Commande ven. · ramassage 15 h 30", "周五截止 · 3:30领取", "ਸ਼ੁੱਕਰਵਾਰ ਆਰਡਰ · 3:30 ਲੈਣਾ", "Pedido vie · recogida 3:30"],
  ["Fri Oct 24 · after pictures", "Ven 24 oct. · après les photos", "10月24日周五 · 拍照之后", "ਸ਼ੁੱਕ 24 ਅਕਤੂਬਰ · ਫੋਟੋਆਂ ਤੋਂ ਬਾਅਦ", "Vie 24 oct · después de las fotos"],
  ["Field", "Terrain", "球场", "ਮੈਦਾਨ", "Cancha"],
  ["Playground", "Cour", "操场", "ਖੇਡ ਮੈਦਾਨ", "Patio"],
  ["Track", "Piste", "跑道", "ਟਰੈਕ", "Pista"],
  ["Grade 8", "8e année", "八年级", "ਗ੍ਰੇਡ 8", "8.º grado"],
  ["K–8 families", "Familles K–8", "K–8家庭", "K–8 ਪਰਿਵਾਰ", "Familias K–8"],
  ["Grade 8 volleyball", "Volleyball de 8e", "八年级排球", "ਗ੍ਰੇਡ 8 ਵਾਲੀਬਾਲ", "Vóleibol de 8.º"],
  ["Room 12", "Salle 12", "12班", "ਕਮਰਾ 12", "Salón 12"],
  ["Room K2", "Salle K2", "K2班", "ਕਮਰਾ K2", "Salón K2"],
  ["Grade 4–8", "4e à 8e", "四至八年级", "ਗ੍ਰੇਡ 4–8", "4.º a 8.º"],
  ["K–8", "K–8", "K–8", "K–8", "K–8"],
  ["Friday Oct 31, 6:00 in the gym. Costumes without face masks. Younger siblings stay with a parent.", "Vendredi 31 oct. à 18 h au gymnase. Costumes sans masque intégral. Les plus jeunes restent avec un parent.", "10月31日周五晚上6点体育馆。服装勿戴遮脸面具。年幼弟妹须由家长陪同。", "ਸ਼ੁੱਕਰਵਾਰ 31 ਅਕਤੂਬਰ 6:00 ਜਿਮ। ਚਿਹਰਾ ਢੱਕਣ ਵਾਲੇ ਮਾਸਕ ਨਹੀਂ। ਛੋਟੇ ਭੈਣ-ਭਰਾ ਮਾਪਿਆਂ ਨਾਲ।", "Viernes 31 oct, 6:00 en el gimnasio. Disfraces sin máscara que cubra la cara. Los menores se quedan con un padre."],
  ["Room 12 clinic Thursday 3:20 on the field. Pickup at the field gate at 4:20, not the bus loop.", "Clinique de la salle 12 jeudi 15 h 20 sur le terrain. Ramassage à la grille à 16 h 20, pas la boucle d’autobus.", "12班周四3:20球场训练。4:20在球场门口接，不是校车环。", "ਕਮਰਾ 12 ਕਲਿਨਿਕ ਵੀਰਵਾਰ 3:20 ਮੈਦਾਨ। 4:20 ਗੇਟ, ਬੱਸ ਲੂਪ ਨਹੀਂ।", "Clínica del salón 12 el jueves a las 3:20 en la cancha. Recogida en la portería a las 4:20, no el circuito."],
  ["Soccer clinic after school", "Clinique de soccer après l’école", "课后足球训练", "ਸਕੂਲ ਤੋਂ ਬਾਅਦ ਸਾਕਰ ਕਲਿਨਿਕ", "Clínica de fútbol después de clases"],
  ["Halloween dance is live", "La danse d’Halloween est en ligne", "万圣节舞会已发布", "ਹੈਲੋਵੀਨ ਡਾਂਸ ਲਾਈਵ ਹੈ", "El baile de Halloween ya está publicado"],
  ["Families can RSVP from Events. Concession staff still needs two volunteers.", "Les familles confirment dans Événements. Il manque encore deux bénévoles à la cantine.", "家庭可在活动里回复。小卖部还缺两名志愿者。", "ਪਰਿਵਾਰ ਈਵੈਂਟ ਤੋਂ RSVP ਕਰ ਸਕਦੇ ਹਨ। ਕੈਂਟੀਨ ਨੂੰ ਹਾਲੇ ਦੋ ਸੇਵਾਦਾਰ ਚਾਹੀਦੇ ਹਨ।", "Las familias confirman en Eventos. La cantina todavía necesita dos voluntarios."],
  ["Dances, games, and fundraisers in one place", "Danses, matchs et collectes au même endroit", "舞会、比赛和募捐集中一处", "ਡਾਂਸ, ਖੇਡਾਂ ਅਤੇ ਫੰਡਰੇਜ਼ਰ ਇੱਕ ਥਾਂ", "Bailes, partidos y recaudaciones en un solo lugar"],
  ["None upcoming", "Rien à venir", "暂无即将举行", "ਕੋਈ ਆਉਣ ਵਾਲਾ ਨਹੀਂ", "Nada próximo"],
  ["New event", "Nouvel événement", "新活动", "ਨਵਾਂ ਈਵੈਂਟ", "Evento nuevo"],
  ["Category", "Catégorie", "类别", "ਸ਼੍ਰੇਣੀ", "Categoría"],
  ["Title", "Titre", "标题", "ਸਿਰਲੇਖ", "Título"],
  ["When", "Quand", "时间", "ਕਦੋਂ", "Cuándo"],
  ["Where", "Où", "地点", "ਕਿੱਥੇ", "Dónde"],
  ["What families need to know", "Ce que les familles doivent savoir", "家长需要知道的", "ਪਰਿਵਾਰਾਂ ਨੂੰ ਕੀ ਜਾਣਨਾ ਚਾਹੀਦਾ ਹੈ", "Lo que las familias necesitan saber"],
  ["Volleyball away game", "Match de volleyball à l’extérieur", "排球客场", "ਵਾਲੀਬਾਲ ਦੂਰ ਗੇਮ", "Partido de vóleibol de visita"],
  ["Early dismissal 1:30. Team bus back by 6:15. Pack a snack and the athletic travel consent.", "Sortie 13 h 30. Retour de l’autobus à 18 h 15. Préparez une collation et le consentement sportif.", "1:30提前放学。校队车6:15返回。带上零食和出行同意书。", "1:30 ਛੁੱਟੀ। ਟੀਮ ਬੱਸ 6:15 ਵਾਪਸ। ਸਨੈਕ ਅਤੇ ਯਾਤਰਾ ਸਹਿਮਤੀ ਪਾਓ।", "Salida 1:30. El bus del equipo vuelve a las 6:15. Empaca un refrigerio y el consentimiento."],
  ["Optional pizza kits, $12 each. Sign the form in Documents to order. Pickup Friday 3:30 in the cafeteria.", "Trousses pizza facultatives, 12 $ chacune. Signez le formulaire dans Documents. Ramassage vendredi 15 h 30 à la cafétéria.", "可选披萨套装，每个12美元。在文件里签字订购。周五3:30食堂领取。", "ਵਿਕਲਪਿਕ ਪੀਜ਼ਾ ਕਿੱਟ, $12। ਦਸਤਾਵੇਜ਼ ਵਿਚ ਦਸਤਖ਼ਤ ਕਰੋ। ਸ਼ੁੱਕਰਵਾਰ 3:30 ਕੈਫੇਟੇਰੀਆ।", "Kits de pizza opcionales, $12. Firme el formulario en Documentos. Recogida viernes 3:30 en la cafetería."],
  ["Calendar", "Calendrier", "日历", "ਕੈਲੰਡਰ", "Calendario"],
  ["{name}’s hot lunch", "Dîner chaud de {name}", "{name}的热午餐", "{name} ਦਾ ਗਰਮ ਲੰਚ", "Almuerzo caliente de {name}"],
  ["Today is at the top. Order ahead any school day through Friday, Nov 6 — packed lunch stays the default until you check out.", "Aujourd’hui est en haut. Commandez à l’avance jusqu’au vendredi 6 nov. — le lunch maison reste par défaut tant que vous ne payez pas.", "今天排在最前。可预订到11月6日周五的上课日 — 结账前默认带饭。", "ਅੱਜ ਸਿਖਰ 'ਤੇ ਹੈ। 6 ਨਵੰਬਰ ਸ਼ੁੱਕਰਵਾਰ ਤੱਕ ਪਹਿਲਾਂ ਆਰਡਰ — ਭੁਗਤਾਨ ਤੱਕ ਘਰ ਦਾ ਲੰਚ ਡਿਫਾਲਟ।", "Hoy va primero. Pida con anticipación hasta el viernes 6 nov. — el lunch de casa sigue hasta que pague."],
  ["Hot lunch", "Dîner chaud", "热午餐", "ਗਰਮ ਲੰਚ", "Almuerzo caliente"],
  ["Order ahead", "Commander à l’avance", "提前点餐", "ਪਹਿਲਾਂ ਆਰਡਰ", "Pedir con anticipación"],
  ["Main", "Plat principal", "主餐", "ਮੁੱਖ", "Plato principal"],
  ["Sandwich", "Sandwich", "三明治", "ਸੈਂਡਵਿਚ", "Sándwich"],
  ["Salad", "Salade", "沙拉", "ਸਲਾਦ", "Ensalada"],
  ["Drink", "Boisson", "饮料", "ਪੀਣ ਵਾਲਾ", "Bebida"],
  ["Dessert", "Dessert", "甜点", "ਮਿਠਾਈ", "Postre"],
  ["View cart", "Voir le panier", "查看购物车", "ਕਾਰਟ ਵੇਖੋ", "Ver carrito"],
  ["Cart", "Panier", "购物车", "ਕਾਰਟ", "Carrito"],
  ["Cart is empty", "Le panier est vide", "购物车是空的", "ਕਾਰਟ ਖਾਲੀ ਹੈ", "El carrito está vacío"],
  ["Add mains, sandwiches, drinks, or dessert for today or any day still open.", "Ajoutez plats, sandwichs, boissons ou dessert pour aujourd’hui ou un jour encore ouvert.", "为今天或仍开放的日期添加主餐、三明治、饮料或甜点。", "ਅੱਜ ਜਾਂ ਖੁੱਲ੍ਹੇ ਦਿਨ ਲਈ ਮੁੱਖ, ਸੈਂਡਵਿਚ, ਪੀਣ ਵਾਲਾ ਜਾਂ ਮਿਠਾਈ ਜੋੜੋ।", "Agregue platos, sándwiches, bebidas o postre para hoy o un día aún abierto."],
  ["Back to menu", "Retour au menu", "返回菜单", "ਮੀਨੂ 'ਤੇ ਵਾਪਸ", "Volver al menú"],
  ["Hot lunch for {name}. Packed days stay packed until you pay.", "Dîner chaud pour {name}. Les jours en lunch maison le restent tant que vous ne payez pas.", "{name}的热午餐。付款前带饭日仍带饭。", "{name} ਲਈ ਗਰਮ ਲੰਚ। ਭੁਗਤਾਨ ਤੱਕ ਘਰ ਦਾ ਲੰਚ ਰਹਿੰਦਾ ਹੈ।", "Almuerzo caliente para {name}. Los días de lunch de casa siguen hasta que pague."],
  ["Due today", "À payer", "应付", "ਅੱਜ ਬਕਾਇਆ", "A pagar"],
  ["each", "l’unité", "每份", "ਹਰੇਕ", "c/u"],
  ["Keep shopping", "Continuer", "继续选购", "ਖਰੀਦਦਾਰੀ ਜਾਰੀ", "Seguir comprando"],
  ["Check out", "Payer", "结账", "ਚੈਕ ਆਊਟ", "Pagar"],
  ["Pay", "Payer", "支付", "ਭੁਗਤਾਨ", "Pagar"],
  ["Demo checkout — Harbor does not charge a real card. Apple Pay and Google Pay succeed in this prototype.", "Paiement démo — Harbor ne débite pas une vraie carte. Apple Pay et Google Pay réussissent dans ce prototype.", "演示结账 — Harbor不会从真实卡扣款。此原型中Apple Pay和Google Pay会成功。", "ਡੈਮੋ ਚੈਕਆਊਟ — Harbor ਅਸਲ ਕਾਰਡ ਨਹੀਂ ਕੱਟਦਾ। ਇਸ ਪ੍ਰੋਟੋਟਾਈਪ ਵਿਚ Apple Pay ਅਤੇ Google Pay ਠੀਕ ਹਨ।", "Pago de prueba — Harbor no cobra una tarjeta real. Apple Pay y Google Pay se confirman en este prototipo."],
  ["Payment method", "Mode de paiement", "支付方式", "ਭੁਗਤਾਨ ਢੰਗ", "Método de pago"],
  ["Apple Pay", "Apple Pay", "Apple Pay", "Apple Pay", "Apple Pay"],
  ["Google Pay", "Google Pay", "Google Pay", "Google Pay", "Google Pay"],
  ["Credit card", "Carte de crédit", "信用卡", "ਕ੍ਰੈਡਿਟ ਕਾਰਡ", "Tarjeta de crédito"],
  ["Family account", "Compte famille", "家庭账户", "ਪਰਿਵਾਰ ਖਾਤਾ", "Cuenta familiar"],
  ["Name on card", "Nom sur la carte", "持卡人姓名", "ਕਾਰਡ 'ਤੇ ਨਾਮ", "Nombre en la tarjeta"],
  ["Card number", "Numéro de carte", "卡号", "ਕਾਰਡ ਨੰਬਰ", "Número de tarjeta"],
  ["Expiry", "Expiration", "有效期", "ਮਿਆਦ", "Vencimiento"],
  ["CVC", "CVC", "CVC", "CVC", "CVC"],
  ["Charge {amount} to the family meal account. Balance after this order: {balance}.", "Facturer {amount} au compte repas. Solde après : {balance}.", "从家庭餐费账户扣除{amount}。此单后余额：{balance}。", "ਪਰਿਵਾਰ ਭੋਜਨ ਖਾਤੇ ਤੋਂ {amount}। ਆਰਡਰ ਬਾਅਦ ਬਕਾਇਆ: {balance}.", "Cargar {amount} a la cuenta de comidas. Saldo después: {balance}."],
  ["Charge account", "Facturer le compte", "从账户扣款", "ਖਾਤੇ ਤੋਂ ਕੱਟੋ", "Cargar a la cuenta"],
  ["Opens the wallet on a phone. In this demo it confirms without leaving Harbor.", "Ouvre le portefeuille sur le téléphone. Ici, ça confirme sans quitter Harbor.", "在手机上打开钱包。此演示中无需离开Harbor即可确认。", "ਫੋਨ 'ਤੇ ਵਾਲਿਟ ਖੋਲ੍ਹਦਾ ਹੈ। ਇਸ ਡੈਮੋ ਵਿਚ Harbor ਛੱਡੇ ਬਿਨਾਂ ਪੁਸ਼ਟੀ।", "Abre la billetera en el teléfono. En esta demo confirma sin salir de Harbor."],
  ["Pay with Apple Pay", "Payer avec Apple Pay", "用 Apple Pay 支付", "Apple Pay ਨਾਲ ਭੁਗਤਾਨ", "Pagar con Apple Pay"],
  ["Pay with Google Pay", "Payer avec Google Pay", "用 Google Pay 支付", "Google Pay ਨਾਲ ਭੁਗਤਾਨ", "Pagar con Google Pay"],
  ["Check the card number, expiry, and CVC. Demo cards like 4242 4242 4242 4242 work.", "Vérifiez le numéro, l’expiration et le CVC. Les cartes démo comme 4242 4242 4242 4242 fonctionnent.", "请核对卡号、有效期和CVC。演示卡4242 4242 4242 4242可用。", "ਕਾਰਡ ਨੰਬਰ, ਮਿਆਦ ਅਤੇ CVC ਵੇਖੋ। ਡੈਮੋ 4242 4242 4242 4242 ਚੱਲਦਾ ਹੈ।", "Revise el número, el vencimiento y el CVC. Tarjetas de prueba como 4242 4242 4242 4242 sirven."],
  ["Not enough on the family account. Use a card or Apple Pay.", "Solde insuffisant. Utilisez une carte ou Apple Pay.", "家庭账户余额不足。请用卡或Apple Pay。", "ਪਰਿਵਾਰ ਖਾਤੇ ਘੱਟ ਰਕਮ। ਕਾਰਡ ਜਾਂ Apple Pay ਵਰਤੋ।", "No alcanza en la cuenta familiar. Use tarjeta o Apple Pay."],
  ["Paid.", "Payé.", "已支付。", "ਭੁਗਤਾਨ ਹੋ ਗਿਆ।", "Pagado."],
  ["{name} is on the cafeteria list. Packed lunch is skipped on those days.", "{name} est sur la liste de la cafétéria. Pas de lunch maison ces jours-là.", "{name}已在食堂名单上。那些天不用带饭。", "{name} ਕੈਫੇਟੇਰੀਆ ਸੂਚੀ 'ਤੇ ਹੈ। ਉਨ੍ਹਾਂ ਦਿਨਾਂ ਘਰ ਦਾ ਲੰਚ ਨਹੀਂ।", "{name} está en la lista de cafetería. Esos días no lleva lunch de casa."],
  ["Card · {last4}", "Carte · {last4}", "卡 · {last4}", "ਕਾਰਡ · {last4}", "Tarjeta · {last4}"],
  ["Order more", "Commander encore", "再点一份", "ਹੋਰ ਆਰਡਰ", "Pedir más"],
  ["Receipt", "Reçu", "收据", "ਰਸੀਦ", "Recibo"],
  ["item", "article", "件", "ਆਈਟਮ", "artículo"],
  ["items", "articles", "件", "ਆਈਟਮਾਂ", "artículos"],
  ["Add", "Ajouter", "添加", "ਜੋੜੋ", "Agregar"],
  ["Remove", "Retirer", "减少", "ਘਟਾਓ", "Quitar"],
  ["Week of {date}", "Semaine du {date}", "{date}那一周", "{date} ਵਾਲਾ ਹਫ਼ਤਾ", "Semana del {date}"],
  ["Grilled cheese", "Grillé au fromage", "烤奶酪三明治", "ਗਰਿੱਲਡ ਚੀਜ਼", "Queso a la plancha"],
  ["Ham sandwich", "Sandwich au jambon", "火腿三明治", "ਹੈਮ ਸੈਂਡਵਿਚ", "Sándwich de jamón"],
  ["Ham & cheese, grilled", "Jambon-fromage grillé", "火腿奶酪烤三明治", "ਹੈਮ ਤੇ ਚੀਜ਼ ਗਰਿੱਲ", "Jamón y queso a la plancha"],
  ["Ham & cheese", "Jambon-fromage", "火腿奶酪三明治", "ਹੈਮ ਤੇ ਚੀਜ਼", "Jamón y queso"],
  ["Caesar salad", "Salade César", "凯撒沙拉", "ਸੀਜ਼ਰ ਸਲਾਦ", "Ensalada César"],
  ["Extra protein", "Surplus de protéines", "加份蛋白", "ਵਾਧੂ ਪ੍ਰੋਟੀਨ", "Proteína extra"],
  ["White milk", "Lait blanc", "白牛奶", "ਚਿੱਟਾ ਦੁੱਧ", "Leche blanca"],
  ["Water 500 ml", "Eau 500 ml", "水 500 毫升", "ਪਾਣੀ 500 ਮਿਲੀ", "Agua 500 ml"],
  ["Dessert of the day", "Dessert du jour", "当日甜点", "ਦਿਨ ਦੀ ਮਿਠਾਈ", "Postre del día"],
  ["Cookie", "Biscuit", "饼干", "ਕੁਕੀ", "Galleta"],
  ["Muffin", "Muffin", "马芬", "ਮਫਿਨ", "Muffin"],
  ["Chicken burger with potatoes & vegetables (with milk)", "Burger au poulet avec patates, légumes (avec lait)", "鸡肉汉堡配土豆和蔬菜（含奶）", "ਚਿਕਨ ਬਰਗਰ ਆਲੂ ਤੇ ਸਬਜ਼ੀ (ਦੁੱਧ ਨਾਲ)", "Hamburguesa de pollo con papas y verduras (con leche)"],
  ["Veggie burger with potatoes & vegetables (with milk)", "Burger aux légumes, patates, légumes (avec lait)", "蔬菜汉堡配土豆和蔬菜（含奶）", "ਵੈਜੀ ਬਰਗਰ ਆਲੂ ਤੇ ਸਬਜ਼ੀ (ਦੁੱਧ ਨਾਲ)", "Hamburguesa de verduras con papas (con leche)"],
  ["Spaghetti with meat sauce and bun (with milk)", "Spaghetti avec sauce viande et petit pain (avec lait)", "肉酱意面配小面包（含奶）", "ਸਪੈਗੇਟੀ ਮੀਟ ਸਾਸ ਤੇ ਬਨ (ਦੁੱਧ ਨਾਲ)", "Espagueti con salsa de carne y pan (con leche)"],
  ["Spaghetti with tomato sauce and bun (with milk)", "Spaghetti avec sauce tomate et petit pain (avec lait)", "番茄意面配小面包（含奶）", "ਸਪੈਗੇਟੀ ਟਮਾਟਰ ਸਾਸ ਤੇ ਬਨ (ਦੁੱਧ ਨਾਲ)", "Espagueti con salsa de tomate y pan (con leche)"],
  ["Bean taco", "Taco aux haricots", "豆肉卷", "ਬੀਨ ਟਾਕੋ", "Taco de frijol"],
  ["Lunch list", "Liste du dîner", "午餐名单", "ਲੰਚ ਸੂਚੀ", "Lista del almuerzo"],
  ["Hot lunch menu", "Menu du dîner chaud", "热午餐菜单", "ਗਰਮ ਲੰਚ ਮੀਨੂ", "Menú de almuerzo caliente"],
  ["Post the week’s hot lunch", "Publier le dîner chaud de la semaine", "发布本周热午餐", "ਇਸ ਹਫ਼ਤੇ ਦਾ ਗਰਮ ਲੰਚ ਪੋਸਟ ਕਰੋ", "Publicar el almuerzo caliente de la semana"],
  ["Upload the cafeteria sheet the vendor sends — PDF, spreadsheet, or a photo. Harbor puts it on the family Cafeteria. You can still edit a day by hand.", "Téléversez la feuille du traiteur — PDF, tableur ou photo. Harbor la met dans la cafétéria des familles. Vous pouvez encore corriger un jour à la main.", "上传供应商的食堂周表 — PDF、表格或照片。Harbor会放到家长食堂。仍可手工改某一天。", "ਵਿਕਰੇਤਾ ਦੀ ਕੈਫੇਟੇਰੀਆ ਸ਼ੀਟ ਅੱਪਲੋਡ ਕਰੋ — PDF, ਸਪ੍ਰੈਡਸ਼ੀਟ ਜਾਂ ਫੋਟੋ। Harbor ਪਰਿਵਾਰ ਕੈਫੇਟੇਰੀਆ 'ਤੇ ਪਾਉਂਦਾ ਹੈ। ਇੱਕ ਦਿਨ ਹੱਥੀਂ ਸੋਧ ਸਕਦੇ ਹੋ।", "Suba la hoja del proveedor — PDF, hoja de cálculo o foto. Harbor la pone en Cafetería. Aún puede editar un día a mano."],
  ["Weekly menu file", "Fichier du menu de la semaine", "周菜单文件", "ਹਫ਼ਤਾਵਾਰੀ ਮੀਨੂ ਫਾਈਲ", "Archivo del menú semanal"],
  ["This is the office side. Parents order from Cafeteria. Nothing here charges a card.", "C’est le côté bureau. Les parents commandent dans Cafétéria. Rien ici ne débite une carte.", "这是办公室端。家长在食堂点餐。这里不会扣卡。", "ਇਹ ਦਫ਼ਤਰ ਵਾਲਾ ਪਾਸਾ ਹੈ। ਮਾਪੇ ਕੈਫੇਟੇਰੀਆ ਤੋਂ ਆਰਡਰ ਕਰਦੇ ਹਨ। ਇੱਥੇ ਕਾਰਡ ਨਹੀਂ ਕੱਟਦਾ।", "Esto es el lado de la oficina. Los padres piden en Cafetería. Aquí no se cobra una tarjeta."],
  ["Upload weekly menu", "Téléverser le menu", "上传周菜单", "ਹਫ਼ਤਾਵਾਰੀ ਮੀਨੂ ਅੱਪਲੋਡ", "Subir menú semanal"],
  ["Post typical week", "Publier une semaine type", "发布典型周", "ਆਮ ਹਫ਼ਤਾ ਪੋਸਟ", "Publicar semana típica"],
  ["Posted for families", "Publié pour les familles", "已向家庭发布", "ਪਰਿਵਾਰਾਂ ਲਈ ਪੋਸਟ", "Publicado para las familias"],
  ["Typical menu until you post", "Menu type tant que vous ne publiez pas", "发布前为典型菜单", "ਪੋਸਟ ਤੱਕ ਆਮ ਮੀਨੂ", "Menú típico hasta que publique"],
  ["No hot lunch this day. Families will pack.", "Pas de dîner chaud ce jour. Les familles préparent un lunch.", "当天无热午餐。家庭会带饭。", "ਇਸ ਦਿਨ ਗਰਮ ਲੰਚ ਨਹੀਂ। ਪਰਿਵਾਰ ਪੈਕ ਕਰਨਗੇ।", "No hay almuerzo caliente este día. Las familias llevan lunch."],
  ["Item", "Article", "菜品", "ਆਈਟਮ", "Artículo"],
  ["Who has hot lunch", "Qui a le dîner chaud", "谁点了热午餐", "ਕਿਸੇ ਗਰਮ ਲੰਚ ਹੈ", "Quién tiene almuerzo caliente"],
  ["Younger rooms — Kindergarten especially — often walk students to the cafeteria. Harbor lists who already bought a meal. Packed lunches stay off the list. Cedar Hill’s paper process isn’t modeled yet.", "Les classes plus jeunes — surtout la maternelle — accompagnent souvent les élèves à la cafétéria. Harbor liste qui a déjà acheté un repas. Les lunchs maison n’y sont pas. Le processus papier de Cedar Hill n’est pas encore modélisé.", "低年级尤其是幼儿园常由老师带到食堂。Harbor列出已买餐的学生。带饭的不在名单上。Cedar Hill的纸质流程尚未写入。", "ਛੋਟੀਆਂ ਕਲਾਸਾਂ — ਖ਼ਾਸ ਕਰ ਕਿੰਡਰਗਾਰਟਨ — ਅਕਸਰ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਕੈਫੇਟੇਰੀਆ ਲੈ ਜਾਂਦੀਆਂ ਹਨ। Harbor ਦੱਸਦਾ ਹੈ ਕਿਸੇ ਖਰੀਦਿਆ। ਘਰ ਦਾ ਲੰਚ ਸੂਚੀ ਤੋਂ ਬਾਹਰ। Cedar Hill ਦਾ ਕਾਗਜ਼ੀ ਤਰੀਕਾ ਹਾਲੇ ਮਾਡਲ ਨਹੀਂ।", "Las aulas más chicas — sobre todo kínder — suelen llevar a los alumnos a la cafetería. Harbor lista quién ya compró. El lunch de casa no aparece. El proceso en papel de Cedar Hill aún no está modelado."],
  ["Cafeteria today", "Cafétéria aujourd’hui", "今日食堂", "ਅੱਜ ਕੈਫੇਟੇਰੀਆ", "Cafetería hoy"],
  ["Kindergarten · Room K2", "Maternelle · Salle K2", "幼儿园 · K2班", "ਕਿੰਡਰਗਾਰਟਨ · ਕਮਰਾ K2", "Kínder · Salón K2"],
  ["Grade 2 · Room 8", "2e année · Salle 8", "二年级 · 8班", "ਗ੍ਰੇਡ 2 · ਕਮਰਾ 8", "2.º · Salón 8"],
  ["My class · Room 12", "Ma classe · Salle 12", "我的班 · 12班", "ਮੇਰੀ ਕਲਾਸ · ਕਮਰਾ 12", "Mi clase · Salón 12"],
  ["hot lunch", "dîner chaud", "热午餐", "ਗਰਮ ਲੰਚ", "almuerzo caliente"],
  ["Packed lunch", "Lunch maison", "带饭", "ਘਰ ਦਾ ਲੰਚ", "Lunch de casa"],
  ["Packed", "Maison", "带饭", "ਪੈਕ", "De casa"],
  ["Hot lunch", "Dîner chaud", "热午餐", "ਗਰਮ ਲੰਚ", "Almuerzo caliente"],
  ["Kindergarten cafeteria today", "Cafétéria maternelle aujourd’hui", "今日幼儿园食堂", "ਅੱਜ ਕਿੰਡਰਗਾਰਟਨ ਕੈਫੇਟੇਰੀਆ", "Cafetería de kínder hoy"],
  ["Family orders today · post this week", "Commandes familles aujourd’hui · publier la semaine", "今日家庭订单 · 发布本周", "ਅੱਜ ਪਰਿਵਾਰ ਆਰਡਰ · ਇਸ ਹਫ਼ਤੇ ਪੋਸਟ", "Pedidos de familias hoy · publicar la semana"],
  ["Dismissal", "Sortie", "放学", "ਛੁੱਟੀ", "Salida"],
  ["{name}’s dismissal today", "Sortie de {name} aujourd’hui", "{name}今天放学", "{name} ਦੀ ਅੱਜ ਛੁੱਟੀ", "Salida de {name} hoy"],
  ["Usual plan stays unless you change it. Room and duty staff see the same board — bus loop, carpool, Kids Club, or the office.", "Le plan habituel reste tant que vous ne le changez pas. La classe et le personnel dehors voient le même tableau — autobus, covoiturage, Kids Club ou le bureau.", "不改则维持常规。教室和外面值班看同一块板 — 校车环、拼车、托管或办公室。", "ਆਮ ਯੋਜਨਾ ਰਹਿੰਦੀ ਹੈ ਜਦ ਤੱਕ ਨਾ ਬਦਲੋ। ਕਲਾਸ ਅਤੇ ਡਿਊਟੀ ਇੱਕ ਬੋਰਡ ਵੇਖਦੇ ਹਨ — ਬੱਸ, ਕਾਰਪੂਲ, Kids Club ਜਾਂ ਦਫ਼ਤਰ।", "El plan habitual sigue hasta que lo cambie. El salón y el personal afuera ven el mismo tablero — buses, carpool, Kids Club o la oficina."],
  ["Change for today", "Changement pour aujourd’hui", "今日变更", "ਅੱਜ ਲਈ ਤਬਦੀਲੀ", "Cambio para hoy"],
  ["Example: taking Bus 4 today instead of carpool. The classroom and the staff outside update live.", "Exemple : Bus 4 aujourd’hui au lieu du covoiturage. La classe et le personnel dehors voient ça en direct.", "例如：今天改坐4路而不是拼车。教室和外面值班实时更新。", "ਉਦਾਹਰਨ: ਅੱਜ ਬੱਸ 4, ਕਾਰਪੂਲ ਨਹੀਂ। ਕਲਾਸ ਅਤੇ ਬਾਹਰਲਾ ਸਟਾਫ ਲਾਈਵ ਵੇਖਦਾ ਹੈ।", "Ejemplo: Bus 4 hoy en vez de carpool. El salón y el personal afuera se actualizan en vivo."],
  ["How they leave", "Comment ils partent", "怎么离校", "ਕਿਵੇਂ ਜਾਂਦੇ ਹਨ", "Cómo salen"],
  ["Note for school", "Note pour l’école", "给学校的说明", "ਸਕੂਲ ਲਈ ਨੋਟ", "Nota para la escuela"],
  ["Taking Bus 4 today instead of carpool.", "Bus 4 aujourd’hui au lieu du covoiturage.", "今天改坐4路，不拼车。", "ਅੱਜ ਬੱਸ 4, ਕਾਰਪੂਲ ਨਹੀਂ।", "Hoy Bus 4 en vez de carpool."],
  ["Put on the live board", "Mettre au tableau en direct", "放到实时板上", "ਲਾਈਵ ਬੋਰਡ 'ਤੇ ਪਾਓ", "Poner en el tablero en vivo"],
  ["Back to usual", "Revenir à l’habituel", "恢复常规", "ਆਮ 'ਤੇ ਵਾਪਸ", "Volver a lo habitual"],
  ["Classroom and duty staff can see it.", "La classe et le personnel de service le voient.", "教室和值班都能看到。", "ਕਲਾਸ ਅਤੇ ਡਿਊਟੀ ਸਟਾਫ ਵੇਖ ਸਕਦੇ ਹਨ।", "El salón y el personal de turno lo ven."],
  ["{name} is back on the usual plan.", "{name} est de retour au plan habituel.", "{name}已恢复常规。", "{name} ਆਮ ਯੋਜਨਾ 'ਤੇ ਵਾਪਸ ਹੈ।", "{name} volvió al plan habitual."],
  ["Usual is {mode} · {detail}.", "L’habituel est {mode} · {detail}.", "常规是{mode} · {detail}。", "ਆਮ {mode} · {detail} ਹੈ।", "Lo habitual es {mode} · {detail}."],
  ["Morning route", "Itinéraire du matin", "早班路线", "ਸਵੇਰ ਦਾ ਰੂਟ", "Ruta de la mañana"],
  ["Classroom dismissal", "Sortie de classe", "教室放学", "ਕਲਾਸ ਛੁੱਟੀ", "Salida del salón"],
  ["Parent notes land here before the bell. Send them to the right door so duty staff aren’t guessing in the carpool line.", "Les notes des parents arrivent ici avant la cloche. Envoyez-les à la bonne porte pour que le personnel ne devine pas dans la file.", "铃响前家长说明会出现在这里。送到正确门口，外面值班不用在拼车队里猜。", "ਘੰਟੀ ਤੋਂ ਪਹਿਲਾਂ ਮਾਪਿਆਂ ਦੀਆਂ ਨੋਟਾਂ ਇੱਥੇ ਆਉਂਦੀਆਂ ਹਨ। ਸਹੀ ਦਰਵਾਜ਼ੇ ਭੇਜੋ ਤਾਂ ਡਿਊਟੀ ਅੰਦਾਜ਼ਾ ਨਾ ਲਾਵੇ।", "Las notas de padres llegan aquí antes del timbre. Envíenlos a la puerta correcta para que el personal no adivine en la fila."],
  ["Changes today", "Changements aujourd’hui", "今日变更", "ਅੱਜ ਤਬਦੀਲੀਆਂ", "Cambios hoy"],
  ["Duty board", "Tableau de service", "值班板", "ਡਿਊਟੀ ਬੋਰਡ", "Tablero de turno"],
  ["Live with parent notes. Bus loop, carpool line, walkers, Kids Club, and the office share one list so a child doesn’t get put on the wrong ride.", "En direct avec les notes des parents. Boucle d’autobus, covoiturage, marcheurs, Kids Club et le bureau partagent une liste pour qu’un enfant ne prenne pas le mauvais départ.", "与家长说明同步。校车环、拼车队、步行、托管和办公室共用一份名单，避免上错车。", "ਮਾਪਿਆਂ ਦੀਆਂ ਨੋਟਾਂ ਨਾਲ ਲਾਈਵ। ਬੱਸ, ਕਾਰਪੂਲ, ਤੁਰਨ ਵਾਲੇ, Kids Club ਅਤੇ ਦਫ਼ਤਰ ਇੱਕ ਸੂਚੀ ਸਾਂਝੀ ਕਰਦੇ ਹਨ।", "En vivo con notas de padres. Circuito de buses, carpool, peatones, Kids Club y la oficina comparten una lista para que nadie tome el viaje equivocado."],
  ["Still on campus", "Encore sur le campus", "仍在校园", "ਹਾਲੇ ਕੈਂਪਸ 'ਤੇ", "Aún en el campus"],
  ["Changes", "Changements", "变更", "ਤਬਦੀਲੀਆਂ", "Cambios"],
  ["All lanes", "Toutes les files", "全部通道", "ਸਾਰੀਆਂ ਲਾਈਨਾਂ", "Todos los carriles"],
  ["Find a student", "Trouver un élève", "查找学生", "ਵਿਦਿਆਰਥੀ ਲੱਭੋ", "Buscar un estudiante"],
  ["Name, room, bus, or note", "Nom, salle, autobus ou note", "姓名、教室、校车或说明", "ਨਾਮ, ਕਮਰਾ, ਬੱਸ ਜਾਂ ਨੋਟ", "Nombre, salón, bus o nota"],
  ["No one in this lane.", "Personne dans cette file.", "这条通道没人。", "ਇਸ ਲਾਈਨ ਵਿਚ ਕੋਈ ਨਹੀਂ।", "Nadie en este carril."],
  ["Bus", "Autobus", "校车", "ਬੱਸ", "Autobús"],
  ["Carpool", "Covoiturage", "拼车", "ਕਾਰਪੂਲ", "Carpool"],
  ["Walker", "Marcheur", "步行", "ਤੁਰਨ ਵਾਲਾ", "Peatón"],
  ["After-school", "Après l’école", "课后托管", "ਸਕੂਲ ਤੋਂ ਬਾਅਦ", "Después de clases"],
  ["Early pickup", "Ramassage anticipé", "提前接走", "ਛੇਤੀ ਲੈਣਾ", "Recogida temprana"],
  ["Bus loop", "Boucle d’autobus", "校车环", "ਬੱਸ ਲੂਪ", "Circuito de buses"],
  ["Carpool line", "File de covoiturage", "拼车队", "ਕਾਰਪੂਲ ਲਾਈਨ", "Fila de carpool"],
  ["Walker door", "Porte des marcheurs", "步行门", "ਤੁਰਨ ਵਾਲਿਆਂ ਦਾ ਦਰਵਾਜ਼ਾ", "Puerta de peatones"],
  ["Kids Club", "Kids Club", "课后俱乐部", "Kids Club", "Kids Club"],
  ["Office", "Bureau", "办公室", "ਦਫ਼ਤਰ", "Oficina"],
  ["Changed", "Changé", "已改", "ਬਦਲਿਆ", "Cambiado"],
  ["Waiting", "En attente", "等待", "ਉਡੀਕ", "Esperando"],
  ["At the door", "À la porte", "在门口", "ਦਰਵਾਜ਼ੇ 'ਤੇ", "En la puerta"],
  ["Sent from class", "Envoyé de la classe", "已从教室送出", "ਕਲਾਸ ਤੋਂ ਭੇਜਿਆ", "Enviado del salón"],
  ["Released", "Libéré", "已放行", "ਛੱਡਿਆ", "Entregado"],
  ["Send", "Envoyer", "送出", "ਭੇਜੋ", "Enviar"],
  ["was", "était", "原为", "ਪਹਿਲਾਂ", "era"],
  ["Usual", "Habituel", "常规", "ਆਮ", "Habitual"],
  ["Live", "En direct", "实时", "ਲਾਈਵ", "En vivo"],
  ["Live board", "Tableau en direct", "实时板", "ਲਾਈਵ ਬੋਰਡ", "Tablero en vivo"],
  ["Dismissal today", "Sortie aujourd’hui", "今日放学", "ਅੱਜ ਛੁੱਟੀ", "Salida de hoy"],
  ["Dismissal change", "Changement de sortie", "放学变更", "ਛੁੱਟੀ ਤਬਦੀਲੀ", "Cambio de salida"],
  ["Pickup changes in class", "Changements de ramassage en classe", "本班接送变更", "ਕਲਾਸ ਵਿਚ ਲੈਣ ਦੀਆਂ ਤਬਦੀਲੀਆਂ", "Cambios de recogida en clase"],
  ["Live pickup changes", "Changements de ramassage en direct", "实时接送变更", "ਲਾਈਵ ਲੈਣ ਤਬਦੀਲੀਆਂ", "Cambios de recogida en vivo"],
  ["Route 7", "Ligne 7", "7路", "ਰੂਟ 7", "Ruta 7"],
  ["Bus 4", "Bus 4", "4路", "ਬੱਸ 4", "Bus 4"],
  ["Route 12", "Ligne 12", "12路", "ਰੂਟ 12", "Ruta 12"],
  ["Loop A", "Boucle A", "A环", "ਲੂਪ A", "Loop A"],
  ["Loop B", "Boucle B", "B环", "ਲੂਪ B", "Loop B"],
  ["Loop A · Jordan in the grey CR-V", "Boucle A · Jordan dans le CR-V gris", "A环 · Jordan开灰色CR-V", "ਲੂਪ A · ਜੌਰਡਨ ਸਲੇਟੀ CR-V", "Loop A · Jordan en el CR-V gris"],
  ["Kids Club until 5:00", "Kids Club jusqu’à 17 h", "托管至5:00", "Kids Club 5:00 ਤੱਕ", "Kids Club hasta las 5:00"],
  ["Kids Club until 5:15", "Kids Club jusqu’à 17 h 15", "托管至5:15", "Kids Club 5:15 ਤੱਕ", "Kids Club hasta las 5:15"],
  ["Kids Club until 4:30", "Kids Club jusqu’à 16 h 30", "托管至4:30", "Kids Club 4:30 ਤੱਕ", "Kids Club hasta las 4:30"],
  ["Walker door · 3:10", "Porte des marcheurs · 15 h 10", "步行门 · 3:10", "ਤੁਰਨ ਵਾਲਾ ਦਰਵਾਜ਼ਾ · 3:10", "Puerta de peatones · 3:10"],
  ["Office · 2:30 · Uncle Rafael", "Bureau · 14 h 30 · Oncle Rafael", "办公室 · 2:30 · Rafael叔叔", "ਦਫ਼ਤਰ · 2:30 · ਅੰਕਲ ਰਾਫਾਏਲ", "Oficina · 2:30 · Tío Rafael"],
  ["Maya taking carpool today instead of Route 7.", "Maya est en covoiturage aujourd’hui, pas la ligne 7.", "Maya今天拼车，不上7路。", "ਮਾਇਆ ਅੱਜ ਕਾਰਪੂਲ, ਰੂਟ 7 ਨਹੀਂ।", "Maya va en carpool hoy, no la ruta 7."],
  ["Grandma is running late. After-school instead of the bus.", "Mamie est en retard. Après l’école au lieu de l’autobus.", "奶奶会晚到。改课后托管，不坐校车。", "ਦਾਦੀ ਦੇਰ ਹੈ। ਸਕੂਲ ਤੋਂ ਬਾਅਦ, ਬੱਸ ਨਹੀਂ।", "La abuela llega tarde. After-school en vez del bus."],
  ["Hana taking Bus 4 today instead of carpool.", "Hana prend le Bus 4 aujourd’hui au lieu du covoiturage.", "Hana今天坐4路，不拼车。", "ਹਾਨਾ ਅੱਜ ਬੱਸ 4, ਕਾਰਪੂਲ ਨਹੀਂ।", "Hana toma el Bus 4 hoy en vez de carpool."],
  ["Early pickup for a dentist appointment.", "Ramassage anticipé pour le dentiste.", "看牙医提前接走。", "ਦੰਦਾਂ ਲਈ ਛੇਤੀ ਲੈਣਾ।", "Recogida temprana por el dentista."],
  ["Maya is carpool, not Route 7", "Maya est en covoiturage, pas la ligne 7", "Maya拼车，不是7路", "ਮਾਇਆ ਕਾਰਪੂਲ, ਰੂਟ 7 ਨਹੀਂ", "Maya es carpool, no la ruta 7"],
  ["Jordan changed dismissal. Loop A, grey CR-V. Don’t walk her to the bus loop.", "Jordan a changé la sortie. Boucle A, CR-V gris. Ne l’amenez pas à la boucle d’autobus.", "Jordan改了放学。A环，灰色CR-V。不要送到校车环。", "ਜੌਰਡਨ ਨੇ ਛੁੱਟੀ ਬਦਲੀ। ਲੂਪ A, ਸਲੇਟੀ CR-V। ਬੱਸ ਲੂਪ ਨਾ ਲੈ ਜਾਓ।", "Jordan cambió la salida. Loop A, CR-V gris. No la lleven al circuito de buses."],
  ["Four live pickup changes", "Quatre changements de ramassage en direct", "四项实时接送变更", "ਚਾਰ ਲਾਈਵ ਲੈਣ ਤਬਦੀਲੀਆਂ", "Cuatro cambios de recogida en vivo"],
  ["Carpool, Kids Club, Bus 4, and an early dentist pickup. Duty board is the source of truth.", "Covoiturage, Kids Club, Bus 4, et un ramassage dentiste. Le tableau de service fait foi.", "拼车、托管、4路，以及牙医提前接。值班板为准。", "ਕਾਰਪੂਲ, Kids Club, ਬੱਸ 4, ਅਤੇ ਦੰਦਾਂ ਦੀ ਛੇਤੀ ਲੈਣ। ਡਿਊਟੀ ਬੋਰਡ ਸਹੀ ਹੈ।", "Carpool, Kids Club, Bus 4 y una recogida del dentista. El tablero de turno es la fuente."],
  ["Carpool today is on the board", "Le covoiturage d’aujourd’hui est au tableau", "今天的拼车已上板", "ਅੱਜ ਦਾ ਕਾਰਪੂਲ ਬੋਰਡ 'ਤੇ ਹੈ", "El carpool de hoy está en el tablero"],
  ["Room 12 and the carpool line can see Maya is Loop A, not Route 7.", "La salle 12 et la file de covoiturage voient que Maya est boucle A, pas la ligne 7.", "12班和拼车队能看到Maya是A环，不是7路。", "ਕਮਰਾ 12 ਅਤੇ ਕਾਰਪੂਲ ਲਾਈਨ ਵੇਖਦੀ ਹੈ ਮਾਇਆ ਲੂਪ A ਹੈ, ਰੂਟ 7 ਨਹੀਂ।", "El salón 12 y la fila de carpool ven que Maya es Loop A, no la ruta 7."],
  ["Grade 6 · Room 21", "6e année · Salle 21", "六年级 · 21班", "ਗ੍ਰੇਡ 6 · ਕਮਰਾ 21", "6.º · Salón 21"],
  ["Grade 8 · Room 28", "8e année · Salle 28", "八年级 · 28班", "ਗ੍ਰੇਡ 8 · ਕਮਰਾ 28", "8.º · Salón 28"],
  ["taking", "prend", "改乘", "ਲੈ ਰਿਹਾ", "toma"],
  ["today", "aujourd’hui", "今天", "ਅੱਜ", "hoy"],
  ["Maya taking carpool today instead of Route 7.", "Maya est en covoiturage aujourd’hui, pas la ligne 7.", "Maya今天拼车，不上7路。", "ਮਾਇਆ ਅੱਜ ਕਾਰਪੂਲ, ਰੂਟ 7 ਨਹੀਂ।", "Maya va en carpool hoy, no la ruta 7."],
  ["October", "Octobre", "十月", "ਅਕਤੂਬਰ", "Octubre"],
  ["November", "Novembre", "十一月", "ਨਵੰਬਰ", "Noviembre"],
].forEach(([en, fr, zh, pa, es]) => {
  if (!BOOK[en]) BOOK[en] = { fr, zh, pa, es };
});

BOOK.Fall = { fr: "Automne", zh: "秋季", pa: "ਪਤਝੜ", es: "Otoño" };

const TO_EN = {};
Object.entries(BOOK).forEach(([en, map]) => {
  TO_EN[en] = en;
  Object.values(map).forEach((v) => {
    TO_EN[v] = en;
  });
});

function readLang() {
  return state.role === "parent" ? state.parentLang : "en";
}

function toEnglish(text) {
  return TO_EN[text] || text;
}

function tx(text, lang = readLang()) {
  if (!text) return "";
  const en = toEnglish(text);
  if (lang === "en") return en;
  if (BOOK[en] && BOOK[en][lang]) return BOOK[en][lang];
  return en;
}

function txf(template, vars = {}, lang = readLang()) {
  let out = tx(template, lang);
  Object.entries(vars).forEach(([key, value]) => {
    out = out.replaceAll(`{${key}}`, value ?? "");
  });
  return out;
}

function remember(en, lang, translated) {
  if (!BOOK[en]) BOOK[en] = {};
  BOOK[en][lang] = translated;
  TO_EN[en] = en;
  TO_EN[translated] = en;
}

[
  ["Reading", "Lecture", "阅读", "ਪੜ੍ਹਾਈ", "Lectura"],
  ["Writing", "Écriture", "写作", "ਲਿਖਾਈ", "Escritura"],
  ["Math", "Maths", "数学", "ਗਣਿਤ", "Mate"],
  ["Science", "Sciences", "科学", "ਵਿਗਿਆਨ", "Ciencias"],
  ["Art", "Arts", "艺术", "ਕਲਾ", "Arte"],
  ["PE", "Éducation physique", "体育", "ਪੀਈ", "Educación física"],
  ["Literacy", "Littératie", "读写", "ਸਾਖਰਤਾ", "Alfabetización"],
  ["Play", "Jeu", "游戏", "ਖੇਡ", "Juego"],
  ["English", "Anglais", "英语", "ਅੰਗਰੇਜ਼ੀ", "Inglés"],
  ["Algebra", "Algèbre", "代数", "ਅਲਜਬਰਾ", "Álgebra"],
  ["French", "Français", "法语", "ਫਰਾਂਸੀਸੀ", "Francés"],
  ["PE / Athletics", "Éd. physique / Athlétisme", "体育 / 运动", "ਪੀਈ / ਐਥਲੈਟਿਕਸ", "EF / Atletismo"],
  ["Today · Science", "Aujourd’hui · Sciences", "今天 · 科学", "ਅੱਜ · ਵਿਗਿਆਨ", "Hoy · Ciencias"],
  ["Yesterday · Math", "Hier · Maths", "昨天 · 数学", "ਕੱਲ੍ਹ · ਗਣਿਤ", "Ayer · Mate"],
  ["Today · Choice time", "Aujourd’hui · Choix", "今天 · 自选", "ਅੱਜ · ਚੋਣ ਸਮਾਂ", "Hoy · Tiempo de elección"],
  ["Yesterday · Literacy", "Hier · Littératie", "昨天 · 读写", "ਕੱਲ੍ਹ · ਸਾਖਰਤਾ", "Ayer · Alfabetización"],
  ["Today · Math", "Aujourd’hui · Maths", "今天 · 数学", "ਅੱਜ · ਗਣਿਤ", "Hoy · Mate"],
  ["Wednesday · Athletics", "Mercredi · Athlétisme", "周三 · 运动", "ਬੁੱਧਵਾਰ · ਐਥਲੈਟਿਕਸ", "Miércoles · Atletismo"],
  ["Unified inbox from teachers and the office", "Boîte unique des enseignants et du bureau", "老师和办公室的统一收件箱", "ਅਧਿਆਪਕਾਂ ਅਤੇ ਦਫ਼ਤਰ ਦਾ ਇਕੱਠਾ ਇਨਬਾਕਸ", "Bandeja unida de maestros y oficina"],
  ["Class holds next to school events", "Retenues de classe à côté des événements d’école", "班级安排挨着学校活动", "ਕਲਾਸ ਹੋਲਡ ਸਕੂਲ ਈਵੈਂਟਾਂ ਨਾਲ", "Retenciones de clase junto a eventos"],
  ["School documents, classroom, and fundraisers", "Documents d’école, classe et collectes", "学校文件、课堂和募捐", "ਸਕੂਲ ਦਸਤਾਵੇਜ਼, ਕਲਾਸ ਅਤੇ ਫੰਡਰੇਜ਼ਰ", "Documentos escolares, salón y recaudaciones"],
  ["Homeroom · Grade 4", "Classe · 4e année", "班主任 · 四年级", "ਹੋਮਰੂਮ · ਗ੍ਰੇਡ 4", "Salón · 4.º"],
  ["Kindergarten · Room K2", "Maternelle · Salle K2", "幼儿园 · K2", "ਕਿੰਡਰਗਾਰਟਨ · ਕਮਰਾ K2", "Kínder · Salón K2"],
  ["Homeroom · Grade 8", "Classe · 8e année", "班主任 · 八年级", "ਹੋਮਰੂਮ · ਗ੍ਰੇਡ 8", "Salón · 8.º"],
  ["K–8 office", "Bureau K–8", "K–8办公室", "K–8 ਦਫ਼ਤਰ", "Oficina K–8"],
].forEach(([en, fr, zh, pa, es]) => {
  BOOK[en] = { fr, zh, pa, es };
  TO_EN[en] = en;
  [fr, zh, pa, es].forEach((v) => {
    TO_EN[v] = en;
  });
});

function aiBar(id, sourceLang, sourceText) {
  const viewLang = readLang();
  if (viewLang === sourceLang) return "";
  const open = state.showOriginal[id];
  const fromName = LANGS[sourceLang].native;
  const toName = LANGS[viewLang].native;
  return `
    <div class="ai-bar">
      <span>Harbor AI · ${open ? `Original (${fromName})` : `Live ${toName} · from ${fromName}`}</span>
      <button type="button" class="ai-toggle" data-orig="${id}">${tx(open ? "Show translation" : "Show original")}</button>
    </div>
    ${open ? `<p class="orig-line">${sourceText}</p>` : ""}
  `;
}

function bindOriginalToggles() {
  view.querySelectorAll("[data-orig]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.orig;
      state.showOriginal[id] = !state.showOriginal[id];
      render();
    });
  });
}

function langPicker() {
  if (state.role !== "parent") return "";
  return `
    <label class="lang-picker">
      <span>${tx("Read in")}</span>
      <select id="parent-lang">
        ${Object.entries(LANGS)
          .map(([code, meta]) => `<option value="${code}" ${state.parentLang === code ? "selected" : ""}>${meta.native}</option>`)
          .join("")}
      </select>
    </label>`;
}

function bindLangPicker() {
  const sel = document.getElementById("parent-lang");
  if (!sel) return;
  sel.addEventListener("change", () => {
    state.parentLang = sel.value;
    localStorage.setItem("harborLang", state.parentLang);
    render();
  });
}

const ASK_HINTS = {
  fr: ["Quand est la journée photos ?", "Quel est le solde cafétéria ?", "Le bus est-il en retard ?", "Menu de mardi ?"],
  en: ["When is picture day?", "What is Maya's cafeteria balance?", "Is the bus late?", "What's for lunch Tuesday?"],
  zh: ["哪天拍照？", "餐费余额是多少？", "校车晚点了吗？", "周二午餐是什么？"],
  pa: ["ਫੋਟੋ ਵਾਲਾ ਦਿਨ ਕਦੋਂ ਹੈ?", "ਕੈਫੇਟੇਰੀਆ ਬਕਾਇਆ ਕਿੰਨਾ ਹੈ?", "ਕੀ ਬੱਸ ਲੇਟ ਹੈ?", "ਮੰਗਲਵਾਰ ਲੰਚ ਵਿੱਚ ਕੀ ਹੈ?"],
  es: ["¿Cuándo es el día de fotos?", "¿Cuál es el saldo de cafetería?", "¿El autobús viene tarde?", "¿Qué hay de almuerzo el martes?"],
};

const ASK_MISS = {
  fr: "Je n’ai pas encore ça. Essayez journée photos, solde cafétéria, autobus ou menu.",
  en: "I don’t have that yet. Try picture day, cafeteria balance, the bus, or lunch.",
  zh: "暂时没有这条。试试拍照日、餐费余额、校车或午餐。",
  pa: "ਇਹ ਹਾਲੇ ਨਹੀਂ ਮਿਲਿਆ। ਫੋਟੋ ਦਿਨ, ਕੈਫੇਟੇਰੀਆ ਬਕਾਇਆ, ਬੱਸ ਜਾਂ ਲੰਚ ਅਜ਼ਮਾਓ।",
  es: "No encontré eso todavía. Prueba con día de fotos, saldo de cafetería, autobús o almuerzo.",
};

function tokens(s) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1);
}

function askIndex() {
  const kid = child();
  const paid = kid.meals.filter((m) => m.bought);
  const nextMeal = kid.meals.find((m) => !m.bought) || kid.meals[0];
  let items = [
    {
      id: "picture",
      keys: ["picture", "photo", "photos", "fotos", "foto", "portrait", "journee", "拍照", "照相", "照片", "ਫੋਟੋ"],
      href: "#/schedule",
      source: "Schedule · Front office",
      fr: "La journée photos est le vendredi 24 octobre à 9 h au gymnase. Portez le vert d’esprit scolaire. Reprises le 12 novembre.",
      en: "Picture day is Friday, Oct 24 at 9:00 in the gym. Wear spirit-day green. Retakes are Nov 12.",
      zh: "拍照日是10月24日周五上午9点，在体育馆。请穿校园精神日绿色。补拍11月12日。",
      pa: "ਫੋਟੋ ਵਾਲਾ ਦਿਨ ਸ਼ੁੱਕਰਵਾਰ 24 ਅਕਤੂਬਰ ਸਵੇਰੇ 9:00 ਜਿਮ ਵਿਚ ਹੈ। ਹਰਾ ਪਹਿਨੋ। ਮੁੜ-ਫੋਟੋ 12 ਨਵੰਬਰ।",
      es: "El día de fotos es el viernes 24 de octubre a las 9:00 en el gimnasio. Usen verde de espíritu escolar. Las repeticiones son el 12 de noviembre.",
    },
    {
      id: "balance",
      keys: ["balance", "solde", "saldo", "cafeteria", "cantine", "account", "cuenta", "money", "dinero", "余额", "餐费", "ਬਕਾਇਆ"],
      href: "#/lunch",
      source: "Meal account",
      fr: `Le solde cafétéria de ${kid.short} est ${"$"}${kid.mealBalance.toFixed(2)}. Déjà facturé cette semaine : ${paid.map((m) => m.name).join(" et ") || "rien"}.`,
      en: `${kid.short}’s cafeteria balance is $${kid.mealBalance.toFixed(2)}. ${paid.map((m) => m.name).join(" and ") || "No meals"} already charged this week.`,
      zh: `${kid.short}的餐费余额是 $${kid.mealBalance.toFixed(2)}。本周已扣：${paid.map((m) => m.name).join("、") || "无"}。`,
      pa: `${kid.short} ਦਾ ਕੈਫੇਟੇਰੀਆ ਬਕਾਇਆ $${kid.mealBalance.toFixed(2)} ਹੈ। ਇਸ ਹਫ਼ਤੇ ਵੱਢਿਆ: ${paid.map((m) => m.name).join(" ਅਤੇ ") || "ਕੁਝ ਨਹੀਂ"}.`,
      es: `El saldo de cafetería de ${kid.short} es $${kid.mealBalance.toFixed(2)}. Ya está cobrado: ${paid.map((m) => m.name).join(" y ") || "nada"} esta semana.`,
    },
    {
      id: "lunch-menu",
      keys: ["menu", "lunch", "dejeuner", "almuerzo", "taco", "tuesday", "mardi", "martes", "pasta", "pizza", "soup", "soupe", "午餐", "ਲੰਚ"],
      href: "#/lunch",
      source: "Cafeteria week",
      fr: `Le dîner chaud d’aujourd’hui est ${tx(lunchMenu(LUNCH_TODAY).find((item) => item.cat === "main")?.name || nextMeal.name, "fr")}. Commandez le jour même ou à l’avance jusqu’au vendredi 6 nov. dans Cafétéria.`,
      en: `Today’s hot lunch is ${lunchMenu(LUNCH_TODAY).find((item) => item.cat === "main")?.name || nextMeal.name}. Order that day or ahead through Friday, Nov 6 from Cafeteria.`,
      zh: `今天的热午餐是${tx(lunchMenu(LUNCH_TODAY).find((item) => item.cat === "main")?.name || nextMeal.name, "zh")}。可当天或提前点到11月6日周五，入口在食堂。`,
      pa: `ਅੱਜ ਦਾ ਗਰਮ ਲੰਚ ${tx(lunchMenu(LUNCH_TODAY).find((item) => item.cat === "main")?.name || nextMeal.name, "pa")} ਹੈ। ਉਸ ਦਿਨ ਜਾਂ 6 ਨਵੰਬਰ ਸ਼ੁੱਕਰਵਾਰ ਤੱਕ ਕੈਫੇਟੇਰੀਆ ਤੋਂ ਆਰਡਰ।`,
      es: `El almuerzo caliente de hoy es ${tx(lunchMenu(LUNCH_TODAY).find((item) => item.cat === "main")?.name || nextMeal.name, "es")}. Pida ese día o con anticipación hasta el viernes 6 nov. en Cafetería.`,
    },
    {
      id: "bus",
      keys: ["bus", "autobus", "route", "ruta", "late", "retard", "tarde", "delay", "校车", "晚点", "ਬੱਸ"],
      href: "#/bus",
      source: "Bus · Route 7",
      fr: "La ligne 7 a 12 minutes de retard ce matin. Arrêt toujours Oak et 3rd. Descente à 15 h 38.",
      en: state.busChange + " Afternoon drop is 3:38 at Oak & 3rd.",
      zh: "第7路校车今早晚点12分钟。站点仍是Oak与3rd。下午3:38下车。",
      pa: "ਰੂਟ 7 ਅੱਜ ਸਵੇਰੇ 12 ਮਿੰਟ ਲੇਟ ਹੈ। ਸਟਾਪ ਹਾਲੇ Oak & 3rd। ਦੁਪਹਿਰ 3:38 ਉਤਰਨਾ।",
      es: "La ruta 7 circula 12 minutos tarde esta mañana. La parada sigue en Oak y 3rd. La bajada de la tarde es a las 3:38.",
    },
    {
      id: "dismiss",
      keys: ["dismiss", "pickup", "carpool", "bus 4", "after school", "kids club", "early", "sortie", "ramassage", "放学", "ਛੁੱਟੀ"],
      href: "#/dismiss",
      source: "Dismissal · live board",
      fr: "Aujourd’hui Maya est en file de covoiturage, boucle A, pas la ligne 7. Noah va au Kids Club. Hana prend le Bus 4 au lieu du covoiturage.",
      en: "Today Maya is carpool Loop A, not Route 7. Noah is Kids Club instead of the bus. Hana is taking Bus 4 instead of carpool.",
      zh: "今天Maya走拼车A环，不上7路。Noah去课后托管。Hana改坐4路而不是拼车。",
      pa: "ਅੱਜ ਮਾਇਆ ਕਾਰਪੂਲ ਲੂਪ A, ਰੂਟ 7 ਨਹੀਂ। ਨੋਆ Kids Club। ਹਾਨਾ ਬੱਸ 4, ਕਾਰਪੂਲ ਨਹੀਂ।",
      es: "Hoy Maya va en carpool Loop A, no la ruta 7. Noah va a Kids Club. Hana toma el Bus 4 en vez de carpool.",
    },
    {
      id: "choir",
      keys: ["choir", "chorale", "coro", "合唱", "ਗਾਇਕੀ"],
      href: "#/inbox/c1",
      source: "Ms. Ellison · announcement",
      fr: "La chorale finit plus tard mardi. Maya reste jusqu’à 16 h. L’avis d’autobus tardif est déjà au bureau.",
      en: "Choir runs late Tuesday. Maya stays until 4:00. The late bus note is already with the office.",
      zh: "周二合唱会延迟结束。Maya留到下午4点。晚班校车通知已在办公室。",
      pa: "ਮੰਗਲਵਾਰ ਗਾਇਕੀ ਦੇਰ ਨਾਲ ਖ਼ਤਮ। ਮਾਇਆ 4:00 ਤੱਕ ਰਹੇਗੀ। ਦੇਰ ਵਾਲੀ ਬੱਸ ਦੀ ਨੋਟਿਸ ਦਫ਼ਤਰ ਵਿਚ ਹੈ।",
      es: "El coro termina más tarde el martes. Maya se queda hasta las 4:00. El aviso del autobús tarde ya está en la oficina.",
    },
    {
      id: "curriculum",
      keys: ["curriculum", "pedagogique", "curriculo", "thursday", "jeudi", "jueves", "night", "soiree", "noche", "说明会", "ਪਾਠਕ੍ਰਮ"],
      href: "#/inbox/c2",
      source: "Front office · announcement",
      fr: "La soirée pédagogique est jeudi à 18 h à la cafétéria. La classe 12 présente à 18 h 20.",
      en: "Curriculum night is Thursday at 6:00 in the cafeteria. Room 12 presents at 6:20.",
      zh: "课程说明会周四晚上6点在食堂。12班6:20上场。",
      pa: "ਪਾਠਕ੍ਰਮ ਰਾਤ ਵੀਰਵਾਰ 6:00 ਕੈਫੇਟੇਰੀਆ ਵਿਚ। ਕਮਰਾ 12 6:20 ਵਜੇ ਪੇਸ਼ ਕਰੇਗਾ।",
      es: "La noche de currículo es el jueves a las 6:00 en la cafetería. El salón 12 presenta a las 6:20.",
    },
    {
      id: "walk",
      keys: ["science", "walk", "marche", "caminata", "creek", "permission", "autorisation", "permiso", "orchard", "verger", "huerto", "果园", "徒步", "ਯਾਤਰਾ"],
      href: "#/docs/d2",
      source: "Backpack · Ms. Ellison",
      fr: "La marche scientifique est mercredi de 10 h 30 à 11 h 30 au ruisseau. L’autorisation n’est pas encore signée.",
      en: "Science walk is Wednesday 10:30–11:30 at the creek. The permission slip is still waiting for a signature.",
      zh: "科学徒步周三10:30–11:30在小溪。许可单尚未签字。",
      pa: "ਵਿਗਿਆਨ ਯਾਤਰਾ ਬੁੱਧਵਾਰ 10:30–11:30 ਨਾਲੇ ਵਿਚ। ਇਜਾਜ਼ਤ ਪੱਤਰ ਹਾਲੇ ਅਣ-ਦਸਤਖ਼ਤ ਹੈ।",
      es: "La caminata de ciencias es el miércoles de 10:30 a 11:30 en el arroyo. Falta firmar el permiso.",
    },
    {
      id: "dance",
      keys: ["dance", "danse", "baile", "halloween", "costume", "舞会", "ਡਾਂਸ"],
      href: "#/events/e2",
      source: "Events · Front office",
      fr: "La danse d’Halloween est le vendredi 31 octobre de 18 h à 20 h au gymnase. Costumes sans masque intégral. Confirmez dans Événements.",
      en: "Halloween dance is Friday Oct 31, 6:00–8:00 in the gym. Costumes without face masks. RSVP from Events.",
      zh: "万圣节舞会是10月31日周五晚上6:00–8:00，在体育馆。服装勿戴遮脸面具。请在活动里回复。",
      pa: "ਹੈਲੋਵੀਨ ਡਾਂਸ ਸ਼ੁੱਕਰਵਾਰ 31 ਅਕਤੂਬਰ 6:00–8:00 ਜਿਮ ਵਿਚ। ਚਿਹਰਾ ਢੱਕਣ ਵਾਲੇ ਮਾਸਕ ਨਹੀਂ। ਈਵੈਂਟ ਤੋਂ RSVP।",
      es: "El baile de Halloween es el viernes 31 de octubre de 6:00 a 8:00 en el gimnasio. Disfraces sin máscara. Confirme en Eventos.",
    },
    {
      id: "pizza",
      keys: ["pizza", "kit", "fundraiser", "collecte", "pto", "walkathon", "募捐", "ਫੰਡਰੇਜ਼ਰ"],
      href: "#/events/e7",
      source: "Events · PTO",
      fr: "Les trousses pizza du CPE sont 12 $ chacune. Commande dans Documents, ramassage vendredi 15 h 30 à la cafétéria. Aussi au tableau Événements.",
      en: "PTO pizza kits are $12. Order from Documents, pickup Friday 3:30 in the cafeteria. Also listed under Events.",
      zh: "家委会披萨套装12美元。在文件里订购，周五3:30食堂领取。活动列表里也有。",
      pa: "PTO ਪੀਜ਼ਾ ਕਿੱਟਾਂ $12। ਦਸਤਾਵੇਜ਼ ਤੋਂ ਆਰਡਰ, ਸ਼ੁੱਕਰਵਾਰ 3:30 ਕੈਫੇਟੇਰੀਆ। ਈਵੈਂਟ ਵਿਚ ਵੀ।",
      es: "Los kits de pizza del PTO cuestan $12. Pídalos en Documentos, recogida viernes 3:30 en la cafetería. También están en Eventos.",
    },
  ];
  if (state.edition === "mvp") {
    items = items.filter((item) => item.id !== "balance" && item.id !== "lunch-menu" && item.id !== "dismiss");
  }
  if (kid.id !== "maya") {
    const hide = new Set(["choir", "walk"]);
    return items.filter((item) => !hide.has(item.id)).concat(
      kid.id === "noah"
        ? [
            {
              id: "pumpkin",
              keys: ["pumpkin", "citrouille", "calabaza", "story", "kindergarten", "jardin", "kindergarten", "南瓜", "ਕੱਦੂ"],
              href: "#/inbox/c5",
              source: "Mr. Patel · announcement",
              fr: "Noah va à la bibliothèque mardi à 10 h pour l’histoire de citrouille. Chaussettes de rechange dans le casier.",
              en: "Noah visits the library pumpkin display Tuesday at 10:00. Extra socks are in the cubby.",
              zh: "Noah周二10点去图书馆看南瓜展示。柜子里有备用袜子。",
              pa: "ਨੋਆ ਮੰਗਲਵਾਰ 10:00 ਲਾਇਬ੍ਰੇਰੀ ਕੱਦੂ ਵਿਖਾਵੇ ਤੇ ਜਾਂਦਾ ਹੈ। ਐਕਸਟਰਾ ਜੁਰਾਬਾਂ ਕਬੀਨ ਵਿਚ ਹਨ।",
              es: "Noah visita la calabaza de la biblioteca el martes a las 10:00. Hay calcetines extra en el cubby.",
            },
          ]
        : [
            {
              id: "vball",
              keys: ["volleyball", "volley", "algebra", "quiz", "game", "partido", "quiz", "排球", "ਵਾਲੀਬਾਲ"],
              href: "#/inbox/c6",
              source: "Coach Rivera · announcement",
              fr: "Quiz d’algèbre vendredi. Sortie anticipée mercredi pour le match de volleyball.",
              en: "Algebra quiz Friday. Early dismissal Wednesday for the volleyball away game.",
              zh: "周五代数测验。周三排球客场提前放学。",
              pa: "ਸ਼ੁੱਕਰਵਾਰ ਅਲਜਬਰਾ ਕੁਇਜ਼। ਬੁੱਧਵਾਰ ਵਾਲੀਬਾਲ ਲਈ ਛੇਤੀ ਛੁੱਟੀ।",
              es: "Examen de álgebra el viernes. Salida temprana el miércoles por el partido de voleibol.",
            },
          ]
    );
  }
  return items;
}

function answerAsk(raw) {
  const q = (raw || "").trim();
  if (!q) return null;
  const words = tokens(q);
  const scored = askIndex()
    .map((item) => {
      const overlap = item.keys.filter((k) => words.includes(k) || q.toLowerCase().includes(k)).length;
      return { item, overlap };
    })
    .filter((row) => row.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap);
  const lang = readLang();
  if (!scored.length) {
    return {
      question: q,
      miss: true,
      answer: ASK_MISS[lang] || ASK_MISS.en,
      sources: [],
    };
  }
  const top = scored[0].item;
  return {
    question: q,
    miss: false,
    answer: top[lang] || top.en,
    sources: scored.slice(0, 2).map((row) => ({ href: row.item.href, label: row.item.source })),
  };
}

function askBar(current = "") {
  const lang = readLang();
  const hints = ASK_HINTS[lang] || ASK_HINTS.en;
  const ph = hints[0];
  return `
    <form class="ask-bar" id="ask-form">
      <div class="ask-label">${tx("Ask my portal")}</div>
      <div class="ask-row">
        <input id="ask-q" name="q" value="${current.replace(/"/g, "&quot;")}" placeholder="${ph}" autocomplete="off" />
        <button class="btn" type="submit">${tx("Ask")}</button>
      </div>
      <div class="ask-hints">
        ${hints.map((h) => `<button type="button" class="chip" data-ask="${h.replace(/"/g, "&quot;")}">${h}</button>`).join("")}
      </div>
    </form>`;
}

function bindAsk() {
  const form = document.getElementById("ask-form");
  if (!form) return;
  const go = (q) => {
    const query = (q || "").trim();
    if (!query) return;
    location.hash = "#/ask/" + encodeURIComponent(query);
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    go(document.getElementById("ask-q").value);
  });
  view.querySelectorAll("[data-ask]").forEach((btn) => {
    btn.addEventListener("click", () => go(btn.dataset.ask));
  });
}

function askView(rawQuery) {
  paintChrome("ask");
  const query = rawQuery || "";
  const result = query ? answerAsk(query) : null;
  setCrumbs([
    boardCrumb(),
    { label: "Ask my portal", href: "#/ask" },
  ]);
  view.innerHTML = `
    <div class="hero">
      <div>
        <h1>${tx("Ask my portal")}</h1>
        <p class="lede">${txf("Skip the newsletter. Ask in {lang} — Harbor reads the schedule, meal account, and recent announcements.", { lang: LANGS[readLang()].native })}</p>
      </div>
    </div>
    ${askBar(query)}
    ${
      result
        ? `<article class="card ask-answer ${result.miss ? "is-miss" : ""}">
            <div class="kicker">Harbor AI</div>
            <p class="ask-q">${result.question}</p>
            <p class="ask-a">${result.answer}</p>
            ${
              result.sources.length
                ? `<div class="ask-sources">${result.sources.map((s) => `<a class="btn ghost" href="${s.href}">${s.label}</a>`).join("")}</div>`
                : ""
            }
          </article>`
        : ""
    }
  `;
  bindAsk();
}

const view = document.getElementById("view");
const crumbs = document.getElementById("crumbs");
const railNav = document.getElementById("rail-nav");

function homeHref() {
  return "#/";
}

function pill(label, kind = "") {
  const cls = kind === "risk" ? "risk" : kind === "amber" ? "amber" : "";
  return `<span class="pill ${cls}">${tx(label)}</span>`;
}

function statusKind(status) {
  if (status === "Absent" || status === "Late") return "amber";
  if (status === "Left early") return "risk";
  return "";
}

function setCrumbs(items) {
  crumbs.innerHTML = items
    .map((item, i) => {
      const last = i === items.length - 1;
      return last
        ? `<span class="here">${tx(item.label)}</span>`
        : `<a href="${item.href}">${tx(item.label)}</a><span aria-hidden="true">/</span>`;
    })
    .join("");
}

function sourcePill(source) {
  return source === "teacher" ? pill("Teacher") : pill("Office", "amber");
}

function paintChrome(active) {
  const person = people[state.role];
  const kid = child();
  document.getElementById("rail-name").textContent = person.name;
  document.getElementById("rail-role").textContent =
    state.role === "parent"
      ? `${kid.short} · ${tx(kid.grade)} · ${tx(kid.band)}`
      : person.role;
  const meta = document.querySelector(".topbar-meta");
  if (meta) {
    meta.innerHTML =
      state.role === "parent"
        ? `<span class="dot live"></span> ${kid.short} · Cedar Hill K–8 · ${LANGS[state.parentLang].native}`
        : `<span class="dot live"></span> Week of Oct 13 · Cedar Hill K–8`;
  }
  document.getElementById("avatar").textContent = state.role === "parent" ? kid.initials : person.initials;
  document.body.dataset.edition = state.edition;
  document.querySelectorAll("[data-role]").forEach((btn) => {
    btn.classList.toggle("is-on", btn.dataset.role === state.role);
  });
  document.querySelectorAll("[data-edition]").forEach((btn) => {
    btn.classList.toggle("is-on", btn.dataset.edition === state.edition);
  });
  const switcher = document.getElementById("child-switch");
  if (switcher) {
    switcher.hidden = state.role !== "parent";
    switcher.innerHTML = students
      .map((s) => {
        const n = childUnread(s.id);
        return `
      <button type="button" data-child="${s.id}" class="${s.id === state.childId ? "is-on" : ""}">
        <span class="child-short">${s.short}${badgeMarkup(n)}</span>
        <span class="child-grade">${tx(s.grade)} · ${tx(s.band)}</span>
      </button>`;
      })
      .join("");
  }
  const langSlot = document.getElementById("lang-slot");
  if (langSlot) {
    langSlot.innerHTML = langPicker();
    bindLangPicker();
  }
  const bell = document.getElementById("bell");
  const bellBadge = document.getElementById("bell-badge");
  const alertCount = unreadAlerts().length;
  if (bell) {
    bell.classList.toggle("has-new", alertCount > 0);
    bell.setAttribute(
      "aria-label",
      alertCount ? `${tx("Notifications")}, ${alertCount} ${tx("new")}` : tx("Notifications")
    );
  }
  if (bellBadge) {
    bellBadge.hidden = !alertCount;
    bellBadge.textContent = alertCount > 9 ? "9+" : String(alertCount);
  }
  const menuOpen = document.body.classList.contains("nav-open");
  const menuBtn = document.getElementById("menu-btn");
  if (menuBtn) {
    menuBtn.setAttribute("aria-expanded", String(menuOpen));
    menuBtn.setAttribute("aria-label", menuOpen ? tx("Close menu") : tx("Menu"));
  }
  const nav = state.edition === "mvp" ? mvpNavByRole[state.role] : navByRole[state.role];
  railNav.innerHTML = nav
    .map(([id, label, href]) => {
      const count = navBadgeCount(id);
      return `<a class="rail-link ${id === active ? "is-active" : ""}" href="${href}" data-nav="${id}"><span>${tx(label)}</span>${badgeMarkup(count)}</a>`;
    })
    .join("");
}

function reminderBanner() {
  const nextReminder = unreadAlerts().find((alert) => alert.kind === "reminder");
  if (!nextReminder) return "";
  return `
    <div class="banner">
      <div>
        <strong>${tx("Reminder")}</strong>
        ${tx(nextReminder.title)} — ${tx(nextReminder.body)}
      </div>
      <a class="btn ghost" href="#/alerts">${tx("Notifications")}</a>
    </div>`;
}

function alertGroup(title, list, { href, extra } = {}) {
  return `
    <section class="card panel">
      <div class="widget-head">
        <h2>${tx(title)}</h2>
        ${href ? `<a href="${href}">${extra || tx("See all")} ${badgeMarkup(list.filter((alert) => alert.unread).length)}</a>` : `<span class="kicker">${list.filter((alert) => alert.unread).length || tx("None")} ${tx("new")}</span>`}
      </div>
      ${
        list.length
          ? list
              .map(
                (alert) => `
        <a class="list-row ${alert.unread ? "is-new" : ""}" href="${alertHref(alert)}" data-alert="${alert.id}">
          <div class="title-block">
            <span class="kicker">${tx(alert.when)} · ${tx(alert.kind === "reminder" ? "Reminder" : "Notification")}</span>
            <strong>${tx(alert.title)}</strong>
            <span class="kicker">${tx(alert.body)}</span>
          </div>
          ${alert.unread ? pill("New", "risk") : pill("Read")}
        </a>`
              )
              .join("")
          : `<p class="doc-empty">${tx("Nothing in this pile.")}</p>`
      }
    </section>`;
}

function bindAlertRows() {
  view.querySelectorAll("[data-alert]").forEach((row) => {
    row.addEventListener("click", () => {
      const alert = state.alerts.find((item) => item.id === row.dataset.alert);
      if (alert) alert.unread = false;
    });
  });
}

function widgetTodayAlerts() {
  const items = visibleAlerts();
  const reminders = items.filter((alert) => alert.kind === "reminder");
  const notices = items.filter((alert) => alert.kind !== "reminder");
  return `
    <div class="grid-2 today-alerts">
      ${alertGroup("Reminders", reminders, { href: "#/alerts" })}
      ${alertGroup("Notifications", notices, { href: "#/alerts" })}
    </div>`;
}

function alertsView() {
  paintChrome("alerts");
  const home = state.edition === "mvp" ? boardCrumb() : { label: state.role === "parent" ? "Today" : "Home", href: "#/" };
  setCrumbs([home, { label: "Notifications", href: "#/alerts" }]);
  const items = visibleAlerts();
  const reminders = items.filter((alert) => alert.kind === "reminder");
  const notices = items.filter((alert) => alert.kind !== "reminder");
  view.innerHTML = `
    ${notice()}
    <div class="hero">
      <div>
        <h1>${tx("Catch it tonight, not at the door.")}</h1>
        <p class="lede">${
          state.role === "parent"
            ? txf("Reminders and new papers for {name}. Library books, early dismissals, and anything that just landed in Documents.", {
                name: child().short,
              })
            : "What still needs a tap from the office or the classroom."
        }</p>
      </div>
      ${unreadAlerts().length ? `<button class="btn ghost" type="button" id="alerts-clear">${tx("Mark all read")}</button>` : ""}
    </div>
    <div class="doc-stack">
      ${alertGroup("Reminders", reminders)}
      ${alertGroup("Notifications", notices)}
    </div>
  `;
  document.getElementById("alerts-clear")?.addEventListener("click", () => {
    visibleAlerts().forEach((alert) => {
      alert.unread = false;
    });
    alertsView();
  });
  bindAlertRows();
}

function notice() {
  if (!state.notice) return "";
  return `<div class="banner"><span>${state.notice}</span></div>`;
}

function parentHome() {
  paintChrome("home");
  setCrumbs([{ label: "Today", href: "#/" }]);
  const kid = child();
  const present = kid.attendance.filter((d) => d.status === "Present").length;
  const nextMeal = kid.meals.find((m) => !m.bought) || kid.meals[0];
  const nextReminder = unreadAlerts().find((alert) => alert.kind === "reminder");
  view.innerHTML = `
    ${notice()}
    ${reminderBanner()}
    ${
      (() => {
        const plan = todayDismiss(kid.id);
        return `<div class="banner ${plan.change ? "risk" : ""}">
      <div>
        <strong>${plan.change ? tx("Dismissal change") : tx("Dismissal today")}</strong>
        ${tx(dismissMode(plan.mode).title)} · ${tx(plan.detail)}${plan.note ? ` · ${tx(plan.note)}` : ""}
      </div>
      <a class="btn ghost" href="#/dismiss">${tx("Live board")}</a>
    </div>`;
      })()
    }
    <div class="hero">
      <div>
        <h1>${txf("{name}’s day.", { name: kid.name })}</h1>
        <p class="lede">${txf("{grade} · {band} with {teacher} in {room}. Cedar Hill is K–8 — switch siblings in the rail.", { grade: tx(kid.grade), band: tx(kid.band), teacher: kid.teacher, room: kid.room })}</p>
      </div>
    </div>
    ${askBar()}
    <section class="metrics">
      <a class="card metric" href="#/attendance">
        <div class="metric-label">${tx("This week")}</div>
        <div class="metric-value">${present}/4</div>
        <div class="metric-hint">${tx("Days present so far")}</div>
      </a>
      <a class="card metric" href="#/reports">
        <div class="metric-label">${tx("Report card")}</div>
        <div class="metric-value">${tx("Fall")}</div>
        <div class="metric-hint">${tx("Ready to read")}</div>
      </a>
      <a class="card metric" href="#/lunch">
        <div class="metric-label">${tx("Lunch")}</div>
        <div class="metric-value">${tx("Today")}</div>
        <div class="metric-hint">${tx(lunchMenu(LUNCH_TODAY).find((item) => item.cat === "main")?.name || nextMeal.name)}</div>
      </a>
      <a class="card metric" href="#/alerts">
        <div class="metric-label">${tx("Notifications")}</div>
        <div class="metric-value">${unreadAlerts().length}</div>
        <div class="metric-hint">${nextReminder ? tx(nextReminder.title) : tx("Caught up")}</div>
      </a>
    </section>
    <div class="grid-2">
      <section class="card panel">
        <h2>${tx("In class")}</h2>
        ${kid.activities
          .map(
            (a) => `
          <a class="list-row" href="#/class/${a.id}">
            <div class="title-block">
              <span class="kicker">${tx(a.when)}</span>
              <strong>${tx(a.title)}</strong>
            </div>
            ${pill("Open")}
          </a>`
          )
          .join("")}
      </section>
      <div>
        <section class="card panel">
          <h2>${tx("This week")}</h2>
          ${Object.entries(weekByDay())
            .map(
              ([day, items]) => `
            <a class="session" href="#/calendar">
              <time>${tx(day)}</time>
              <strong>${items.join(" · ") || "—"}</strong>
            </a>`
            )
            .join("")}
        </section>
        <section class="card panel" style="margin-top:16px">
          <div class="widget-head">
            <h2>${tx("Events")}</h2>
            <a href="#/events">${tx("See all")} ${badgeMarkup(unreadEventsCount())}</a>
          </div>
          ${kidEvents().slice(0, 3).map(eventRow).join("")}
        </section>
        <div class="actions">
          <a class="btn" href="#/attendance/report">${tx("Report absence")}</a>
          <a class="btn ghost" href="#/messages/${teacherThreadId()}">${tx("Message teacher")}</a>
        </div>
      </div>
    </div>
  `;
  bindAsk();
}

function boardCrumb() {
  if (state.edition === "mvp") {
    if (state.role === "teacher") return { label: "Class board", href: "#/" };
    if (state.role === "admin") return { label: "School board", href: "#/" };
    return { label: "Today", href: "#/" };
  }
  if (state.role === "teacher") return { label: "My class", href: "#/" };
  if (state.role === "admin") return { label: "School", href: "#/" };
  return { label: "Today", href: "#/" };
}

function attendance() {
  paintChrome("attendance");
  setCrumbs([
    boardCrumb(),
    { label: "Attendance", href: "#/attendance" },
  ]);
  view.innerHTML = `
    ${notice()}
    <div class="hero">
      <div>
        <h1>${tx("Attendance")}</h1>
        <p class="lede">${txf("See the week, then tell the office if {name} will be absent, late, or leaving early.", { name: child().short })}</p>
      </div>
          <a class="btn" href="#/attendance/report">${tx("Report a change")}</a>
    </div>
    <section class="card panel">
      ${child().attendance
        .map(
          (d) => `
        <div class="list-row">
          <div class="title-block">
            <strong>${d.day}</strong>
            <span class="kicker">${d.note ? tx(d.note) : tx("No note")}</span>
          </div>
          ${pill(d.status, statusKind(d.status))}
        </div>`
        )
        .join("")}
    </section>
  `;
}

function attendanceReport() {
  paintChrome("attendance");
  setCrumbs([
    boardCrumb(),
    { label: "Attendance", href: "#/attendance" },
    { label: "Report", href: "#/attendance/report" },
  ]);
  view.innerHTML = `
    <div class="hero">
      <div>
        <h1>${tx("Tell the office.")}</h1>
        <p class="lede">${
          ridesBus()
            ? txf("This goes to attendance and {teacher}. Bus will be skipped if they’re absent.", { teacher: child().teacher })
            : txf("This goes to attendance and {teacher}. Office will know they walk, not ride.", { teacher: child().teacher })
        }</p>
      </div>
    </div>
    <section class="card panel" style="padding-bottom:18px">
      <form id="attendance-form">
        <div class="field">
          <label for="kind">${child().short} will be</label>
          <select id="kind" name="kind">
            <option value="Absent">Absent</option>
            <option value="Late">Late</option>
            <option value="Left early">Leaving early</option>
          </select>
        </div>
        <div class="field">
          <label for="day">Day</label>
          <select id="day" name="day">
            ${child().attendance.map((d) => `<option>${d.day}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label for="note">Note</label>
          <textarea id="note" rows="3" placeholder="Appointment, family day, pickup time…"></textarea>
        </div>
        <button class="btn" type="submit">Send to office</button>
      </form>
    </section>
  `;
  document.getElementById("attendance-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const kind = document.getElementById("kind").value;
    const day = document.getElementById("day").value;
    const note = document.getElementById("note").value.trim();
    const row = child().attendance.find((d) => d.day === day);
    row.status = kind;
    row.note = note || kind;
    state.notice = `${kind} recorded for ${day}. ${child().teacher} and the office can see it.`;
    location.hash = "#/attendance";
  });
}

function reports() {
  paintChrome("reports");
  setCrumbs([
    { label: "Today", href: "#/" },
    { label: "Report cards", href: "#/reports" },
  ]);
  view.innerHTML = `
    <div class="hero">
      <div>
        <h1>${tx("Fall report card")}</h1>
        <p class="lede">${txf("{teacher}’s comments for {name}, {grade}. Spring term opens in March.", { teacher: child().teacher, name: child().name, grade: tx(child().grade) })}</p>
      </div>
    </div>
    <section class="card panel" style="padding-bottom:8px">
      <table class="grades">
        <thead>
            <tr><th>${tx("Subject")}</th><th>${tx("Level")}</th><th>${tx("Comment")}</th></tr>
        </thead>
        <tbody>
          ${child().report
            .map(
              (r) => `
            <tr>
              <td>${tx(r.subject)}</td>
              <td>${pill(r.mark, r.mark === "Meeting" ? "amber" : "")}</td>
              <td>${tx(r.comment)}</td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </section>
  `;
}

const WEEK_DATES = {
  Mon: { ymd: "20261013", stamp: "20261013", label: "Monday, Oct 13" },
  Tue: { ymd: "20261014", stamp: "20261014", label: "Tuesday, Oct 14" },
  Wed: { ymd: "20261015", stamp: "20261015", label: "Wednesday, Oct 15" },
  Thu: { ymd: "20261016", stamp: "20261016", label: "Thursday, Oct 16" },
  Fri: { ymd: "20261017", stamp: "20261017", label: "Friday, Oct 17" },
};

function icsStamp(time) {
  const parts = String(time || "09:00").split(":");
  const h = String(parts[0] || "9").padStart(2, "0");
  const m = String(parts[1] || "00").padStart(2, "0");
  return `${h}${m}00`;
}

function icsEnd(time) {
  const parts = String(time || "09:00").split(":");
  let h = Number(parts[0] || 9);
  let m = Number(parts[1] || 0) + 60;
  h += Math.floor(m / 60);
  m = m % 60;
  return `${String(h).padStart(2, "0")}${String(m).padStart(2, "0")}00`;
}

function icsEscape(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function weekIcs() {
  const events = kidSchedule()
    .map((item) => {
      const day = WEEK_DATES[item.day];
      if (!day) return "";
      const start = icsStamp(item.time);
      const end = icsEnd(item.time);
      return [
        "BEGIN:VEVENT",
        `UID:${item.id}@harbor.cedarhill`,
        "DTSTAMP:20261013T120000Z",
        `DTSTART:${day.stamp}T${start}`,
        `DTEND:${day.stamp}T${end}`,
        `SUMMARY:${icsEscape(item.title)}`,
        `LOCATION:${icsEscape(item.where || "Cedar Hill School")}`,
        `DESCRIPTION:${icsEscape((item.source === "teacher" ? `${child().room} · ` : "Office · ") + "Cedar Hill K–8")}`,
        "END:VEVENT",
      ].join("\r\n");
    })
    .filter(Boolean)
    .join("\r\n");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Harbor//Cedar Hill K-8//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Cedar Hill K-8 · Week of Oct 13",
    events,
    "END:VCALENDAR",
  ].join("\r\n");
}

function downloadWeekIcs() {
  const blob = new Blob([weekIcs()], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "cedar-hill-week-of-oct-13.ics";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function googleEventUrl(item) {
  const day = WEEK_DATES[item.day];
  if (!day) return "#";
  const dates = `${day.stamp}T${icsStamp(item.time)}/${day.stamp}T${icsEnd(item.time)}`;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: item.title,
    dates,
    location: item.where || "Cedar Hill School",
    details: `${item.source === "teacher" ? child().room : "Office"} · Cedar Hill K–8`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function calendarExportBar() {
  return `
    <div class="cal-export no-print">
      <button type="button" class="btn" id="cal-apple">${tx("Apple Calendar")}</button>
      <button type="button" class="btn ghost" id="cal-google">${tx("Google Calendar")}</button>
      <button type="button" class="btn ghost" id="cal-ics">${tx("Download .ics")}</button>
      <button type="button" class="btn ghost" id="cal-print">${tx("Print")}</button>
    </div>
    <div class="card panel google-events no-print" id="google-events" hidden>
      <h2>Add to Google Calendar</h2>
      <p class="lede" style="margin-bottom:12px">Open an event in Google, or download the week as .ics and import it under Settings → Import.</p>
      ${kidSchedule()
        .map(
          (item) => `
        <a class="list-row" href="${googleEventUrl(item)}" target="_blank" rel="noopener">
          <div class="title-block">
            <span class="kicker">${tx(item.day)} · ${item.time} · ${tx(item.where || "")}</span>
            <strong>${tx(item.title)}</strong>
          </div>
          <span class="pill">Google</span>
        </a>`
        )
        .join("")}
      <div class="actions"><button type="button" class="btn" id="cal-google-ics">Download week .ics</button></div>
    </div>
    <section class="print-week" aria-hidden="true">
      <h1>Cedar Hill School</h1>
      <p>${child().name} · ${tx(child().grade)} · ${tx(child().band)} · ${tx("Week of Oct 13")}</p>
      <div class="week">
        ${["Mon", "Tue", "Wed", "Thu", "Fri"]
          .map((day) => {
            const items = kidSchedule().filter((item) => item.day === day);
            return `<article class="card day"><h3>${WEEK_DATES[day].label}</h3>${
              items.map((item) => `<p>${item.time} · ${tx(item.title)}${item.where ? ` · ${tx(item.where)}` : ""}</p>`).join("") || "<p>—</p>"
            }</article>`;
          })
          .join("")}
      </div>
    </section>`;
}

function bindCalendarExport() {
  document.getElementById("cal-apple")?.addEventListener("click", downloadWeekIcs);
  document.getElementById("cal-ics")?.addEventListener("click", downloadWeekIcs);
  document.getElementById("cal-google-ics")?.addEventListener("click", downloadWeekIcs);
  document.getElementById("cal-google")?.addEventListener("click", () => {
    const panel = document.getElementById("google-events");
    if (panel) panel.hidden = !panel.hidden;
  });
  document.getElementById("cal-print")?.addEventListener("click", () => window.print());
}

function calendar() {
  paintChrome("calendar");
  setCrumbs([
    boardCrumb(),
    { label: "Calendar", href: "#/calendar" },
  ]);
  const who = state.role === "parent" ? child().short : "Cedar Hill";
  view.innerHTML = `
    <div class="hero">
      <div>
        <h1>${tx("Week of Oct 13")}</h1>
        <p class="lede">${
          state.role === "parent"
            ? txf("{name}’s week at Cedar Hill K–8. Class holds and office events that change pickup.", { name: who })
            : tx("Class holds and office events that change pickup this week.")
        }</p>
      </div>
    </div>
    ${calendarExportBar()}
    <section class="week">
      ${Object.entries(weekByDay())
        .map(
          ([day, items]) => `
        <article class="card day">
          <h3>${tx(day)}</h3>
          ${items.map((item) => `<p>${item}</p>`).join("") || "<p>—</p>"}
        </article>`
        )
        .join("")}
    </section>
    ${yearCalendarHtml()}
  `;
  bindCalendarExport();
}

function lunchCrumbs(extra) {
  return [boardCrumb(), { label: "Cafeteria", href: "#/lunch" }, ...(extra || [])];
}

function qtyControl(iso, item) {
  const qty = cartQty(iso, item.id);
  return `
    <div class="qty" role="group" aria-label="${tx(item.name)}">
      <button type="button" class="qty-btn" data-lunch-iso="${iso}" data-lunch-item="${item.id}" data-lunch-delta="-1" ${qty ? "" : "disabled"} aria-label="${tx("Remove")}">−</button>
      <span class="qty-n">${qty || ""}</span>
      <button type="button" class="qty-btn add" data-lunch-iso="${iso}" data-lunch-item="${item.id}" data-lunch-delta="1" ${qty >= 9 ? "disabled" : ""} aria-label="${tx("Add")}">+</button>
    </div>`;
}

function bindLunchQty(step) {
  view.querySelectorAll("[data-lunch-delta]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const iso = btn.dataset.lunchIso;
      const itemId = btn.dataset.lunchItem;
      setLunchQty(iso, itemId, cartQty(iso, itemId) + Number(btn.dataset.lunchDelta));
      lunch(step);
    });
  });
}

function lunchDock() {
  const count = cartCount();
  if (!count) return "";
  return `
    <div class="lunch-dock no-print">
      <div>
        <strong>${count} ${tx(count === 1 ? "item" : "items")}</strong>
        <span class="kicker">${money(cartTotal())} · ${child().short}</span>
      </div>
      <a class="btn" href="#/lunch/cart">${tx("View cart")}</a>
    </div>`;
}

function lunchMenuView() {
  const days = lunchDays();
  if (!days.some((d) => d.iso === state.lunchDay)) state.lunchDay = LUNCH_TODAY;
  const selected = days.find((d) => d.iso === state.lunchDay) || days[0];
  const menu = lunchMenu(selected.iso);
  const dayTotal = dayCartTotal(selected.iso);
  paintChrome("lunch");
  setCrumbs(lunchCrumbs());
  view.innerHTML = `
    ${notice()}
    <div class="hero">
      <div>
        <h1>${txf("{name}’s hot lunch", { name: child().short })}</h1>
        <p class="lede">${tx("Today is at the top. Order ahead any school day through Friday, Nov 6 — packed lunch stays the default until you check out.")}</p>
      </div>
      <div class="stat-row">
        <div><div class="num">${money(child().mealBalance)}</div><div class="kicker">${tx("On the account")}</div></div>
      </div>
    </div>
    ${lunchWeeks()
      .map(
        (group) => `
      <section class="lunch-week">
        <div class="widget-head">
          <h2>${group.title}</h2>
        </div>
        <div class="lunch-days">
          ${group.days
            .map(
              (day) => `
            <button type="button" class="day-chip ${day.iso === selected.iso ? "is-on" : ""} ${day.today ? "is-today" : ""}" data-lunch-day="${day.iso}">
              <span class="kicker">${day.today ? tx("Today") : tx(day.dow)}</span>
              <strong>${day.day}</strong>
            </button>`
            )
            .join("")}
        </div>
      </section>`
      )
      .join("")}
    <article class="card lunch-sheet">
      <header class="lunch-sheet-head">
        <div>
          <div class="kicker">${selected.today ? tx("Today") : tx("Order ahead")}</div>
          <h2>${tx("Hot lunch")} · ${tx(selected.dow)} ${selected.day} ${tx(selected.month)}</h2>
        </div>
        <div class="lunch-day-total">${money(dayTotal)}</div>
      </header>
      ${LUNCH_CATS.map((cat) => {
        const rows = menu.filter((item) => item.cat === cat.id);
        if (!rows.length) return "";
        return `
          <h3 class="lunch-cat">${tx(cat.title)}</h3>
          ${rows
            .map(
              (item) => `
            <div class="lunch-row">
              <div class="title-block">
                <strong>${tx(item.name)}</strong>
              </div>
              ${qtyControl(selected.iso, item)}
              <span class="lunch-price">${money(item.price)}</span>
            </div>`
            )
            .join("")}`;
      }).join("")}
    </article>
    ${lunchDock()}
  `;
  view.querySelectorAll("[data-lunch-day]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.lunchDay = btn.dataset.lunchDay;
      lunch();
    });
  });
  bindLunchQty();
}

function lunchCartView() {
  const lines = cartLines();
  paintChrome("lunch");
  setCrumbs(lunchCrumbs([{ label: "Cart", href: "#/lunch/cart" }]));
  if (!lines.length) {
    view.innerHTML = `
      ${notice()}
      <div class="hero">
        <div>
          <h1>${tx("Cart is empty")}</h1>
          <p class="lede">${tx("Add mains, sandwiches, drinks, or dessert for today or any day still open.")}</p>
        </div>
        <a class="btn" href="#/lunch">${tx("Back to menu")}</a>
      </div>`;
    return;
  }
  const groups = [];
  lines.forEach((line) => {
    let group = groups.find((g) => g.iso === line.iso);
    if (!group) {
      group = { iso: line.iso, meta: lunchDateMeta(line.iso), lines: [] };
      groups.push(group);
    }
    group.lines.push(line);
  });
  view.innerHTML = `
    ${notice()}
    <div class="hero">
      <div>
        <h1>${tx("Cart")}</h1>
        <p class="lede">${txf("Hot lunch for {name}. Packed days stay packed until you pay.", { name: child().short })}</p>
      </div>
      <div class="stat-row">
        <div><div class="num">${money(cartTotal())}</div><div class="kicker">${tx("Due today")}</div></div>
      </div>
    </div>
    ${groups
      .map((group) => {
        const meta = group.meta;
        return `
        <section class="card panel">
          <div class="widget-head">
            <h2>${meta.today ? tx("Today") : tx(meta.dow)} · ${tx(meta.month)} ${meta.day}</h2>
            <span class="kicker">${money(dayCartTotal(group.iso))}</span>
          </div>
          ${group.lines
            .map((line) => {
              const item = lunchItem(line.iso, line.itemId);
              if (!item) return "";
              return `
                <div class="lunch-row">
                  <div class="title-block">
                    <strong>${tx(item.name)}</strong>
                    <span class="kicker">${money(item.price)} ${tx("each")}</span>
                  </div>
                  ${qtyControl(line.iso, item)}
                  <span class="lunch-price">${money(item.price * line.qty)}</span>
                </div>`;
            })
            .join("")}
        </section>`;
      })
      .join("")}
    <div class="actions">
      <a class="btn ghost" href="#/lunch">${tx("Keep shopping")}</a>
      <a class="btn" href="#/lunch/pay">${tx("Check out")} · ${money(cartTotal())}</a>
    </div>
  `;
  bindLunchQty("cart");
}

function lunchPayView() {
  if (!cartCount()) {
    location.hash = "#/lunch/cart";
    return;
  }
  paintChrome("lunch");
  setCrumbs(
    lunchCrumbs([
      { label: "Cart", href: "#/lunch/cart" },
      { label: "Pay", href: "#/lunch/pay" },
    ])
  );
  const method = state.lunchPay || "card";
  view.innerHTML = `
    ${notice()}
    <div class="hero">
      <div>
        <h1>${tx("Pay")}</h1>
        <p class="lede">${tx("Demo checkout — Harbor does not charge a real card. Apple Pay and Google Pay succeed in this prototype.")}</p>
      </div>
      <div class="stat-row">
        <div><div class="num">${money(cartTotal())}</div><div class="kicker">${child().short}</div></div>
      </div>
    </div>
    <section class="card panel" style="padding-bottom:18px">
      <h2>${tx("Payment method")}</h2>
      <div class="pay-methods">
        <button type="button" class="pay-choice ${method === "apple" ? "is-on" : ""}" data-pay="apple">${tx("Apple Pay")}</button>
        <button type="button" class="pay-choice ${method === "google" ? "is-on" : ""}" data-pay="google">${tx("Google Pay")}</button>
        <button type="button" class="pay-choice ${method === "card" ? "is-on" : ""}" data-pay="card">${tx("Credit card")}</button>
        <button type="button" class="pay-choice ${method === "account" ? "is-on" : ""}" data-pay="account">${tx("Family account")}</button>
      </div>
      ${
        method === "card"
          ? `<form id="card-form" class="card-form">
              <div class="field"><label for="card-name">${tx("Name on card")}</label><input id="card-name" autocomplete="cc-name" value="Jordan Bowser" required /></div>
              <div class="field"><label for="card-number">${tx("Card number")}</label><input id="card-number" inputmode="numeric" autocomplete="cc-number" placeholder="4242 4242 4242 4242" required /></div>
              <div class="card-grid">
                <div class="field"><label for="card-exp">${tx("Expiry")}</label><input id="card-exp" placeholder="MM/YY" autocomplete="cc-exp" required /></div>
                <div class="field"><label for="card-cvc">${tx("CVC")}</label><input id="card-cvc" inputmode="numeric" autocomplete="cc-csc" placeholder="123" required /></div>
              </div>
              <button class="btn" type="submit">${tx("Pay")} ${money(cartTotal())}</button>
            </form>`
          : method === "account"
            ? `<p class="lede" style="margin:12px 0">${txf("Charge {amount} to the family meal account. Balance after this order: {balance}.", { amount: money(cartTotal()), balance: money(child().mealBalance - cartTotal()) })}</p>
               <button class="btn" type="button" id="pay-now">${tx("Charge account")}</button>`
            : `<p class="lede" style="margin:12px 0">${tx("Opens the wallet on a phone. In this demo it confirms without leaving Harbor.")}</p>
               <button class="btn pay-wallet ${method === "apple" ? "apple" : "google"}" type="button" id="pay-now">${method === "apple" ? tx("Pay with Apple Pay") : tx("Pay with Google Pay")}</button>`
      }
    </section>
  `;
  view.querySelectorAll("[data-pay]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.lunchPay = btn.dataset.pay;
      lunchPayView();
    });
  });
  document.getElementById("card-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const number = (document.getElementById("card-number").value || "").replace(/\D/g, "");
    const exp = (document.getElementById("card-exp").value || "").trim();
    const cvc = (document.getElementById("card-cvc").value || "").replace(/\D/g, "");
    if (number.length < 13 || number.length > 19 || !/^\d{2}\/\d{2}$/.test(exp) || cvc.length < 3) {
      state.notice = tx("Check the card number, expiry, and CVC. Demo cards like 4242 4242 4242 4242 work.");
      lunchPayView();
      return;
    }
    completeLunchPay("card", number.slice(-4));
  });
  document.getElementById("pay-now")?.addEventListener("click", () => {
    if (method === "account" && child().mealBalance < cartTotal()) {
      state.notice = tx("Not enough on the family account. Use a card or Apple Pay.");
      lunchPayView();
      return;
    }
    completeLunchPay(method);
  });
}

function completeLunchPay(method, last4) {
  const lines = cartLines().map((line) => {
    const item = lunchItem(line.iso, line.itemId);
    return {
      iso: line.iso,
      itemId: line.itemId,
      name: item?.name || line.itemId,
      qty: line.qty,
      price: item?.price || 0,
    };
  });
  const total = cartTotal();
  const order = {
    id: "o" + Date.now(),
    childId: child().id,
    method,
    last4: last4 || "",
    total,
    paidAt: "Just now",
    lines,
  };
  state.lunchOrders.unshift(order);
  if (method === "account") child().mealBalance = Math.round((child().mealBalance - total) * 100) / 100;
  lines.forEach((line) => {
    const weekday = WEEK_ISO[line.iso];
    if (!weekday) return;
    const meal = child().meals.find((m) => m.day === weekday && m.id === line.itemId);
    if (meal) meal.bought = true;
  });
  state.lunchCart[child().id] = [];
  state.notice = "";
  location.hash = "#/lunch/receipt";
  render();
}

function lunchReceiptView() {
  const order = lastLunchOrder();
  paintChrome("lunch");
  setCrumbs(lunchCrumbs([{ label: "Receipt", href: "#/lunch/receipt" }]));
  if (!order) {
    location.hash = "#/lunch";
    return;
  }
  const methodLabel =
    order.method === "apple"
      ? tx("Apple Pay")
      : order.method === "google"
        ? tx("Google Pay")
        : order.method === "account"
          ? tx("Family account")
          : order.last4
            ? txf("Card · {last4}", { last4: order.last4 })
            : tx("Credit card");
  view.innerHTML = `
    ${notice()}
    <div class="hero">
      <div>
        <h1>${tx("Paid.")}</h1>
        <p class="lede">${txf("{name} is on the cafeteria list. Packed lunch is skipped on those days.", { name: child().short })}</p>
      </div>
      <div class="stat-row">
        <div><div class="num">${money(order.total)}</div><div class="kicker">${methodLabel}</div></div>
      </div>
    </div>
    <section class="card panel">
      ${order.lines
        .map((line) => {
          const meta = lunchDateMeta(line.iso);
          return `
            <div class="list-row">
              <div class="title-block">
                <span class="kicker">${tx(meta.dow)} ${meta.day} · ×${line.qty}</span>
                <strong>${tx(line.name)}</strong>
              </div>
              <span class="lunch-price">${money(line.price * line.qty)}</span>
            </div>`;
        })
        .join("")}
    </section>
    <div class="actions">
      <a class="btn" href="#/lunch">${tx("Order more")}</a>
    </div>
  `;
}

function lunch(step) {
  if (state.role === "admin") return adminLunch();
  if (state.role === "teacher") return teacherLunchList();
  if (step === "cart") return lunchCartView();
  if (step === "pay") return lunchPayView();
  if (step === "receipt") return lunchReceiptView();
  return lunchMenuView();
}

function postLunchWeek(week, filename) {
  lunchDaysInWeek(week).forEach((day) => {
    state.lunchMenuByIso[day.iso] = defaultLunchMenu(day.iso);
  });
  const meta = lunchDateMeta(week);
  state.notice = filename
    ? `${filename} is posted for the week of ${tx(meta.dow)} ${meta.day}. Families see it in Cafeteria.`
    : `Typical hot lunch is posted for the week of ${tx(meta.dow)} ${meta.day}. Families see it in Cafeteria.`;
}

function adminLunch() {
  const weeks = lunchWeeks();
  const week = weeks.some((g) => g.week === mondayIso(state.lunchDay))
    ? mondayIso(state.lunchDay)
    : weeks[0]?.week || mondayIso(LUNCH_TODAY);
  if (mondayIso(state.lunchDay) !== week) state.lunchDay = lunchDaysInWeek(week)[0]?.iso || LUNCH_TODAY;
  const days = lunchDaysInWeek(week);
  const selected = days.find((d) => d.iso === state.lunchDay) || days[0];
  const menu = selected ? lunchMenu(selected.iso) : [];
  const posted = selected && Object.prototype.hasOwnProperty.call(state.lunchMenuByIso, selected.iso);
  paintChrome("lunch");
  setCrumbs([boardCrumb(), { label: "Hot lunch menu", href: "#/lunch" }]);
  view.innerHTML = `
    ${notice()}
    <div class="hero">
      <div>
        <h1>${tx("Post the week’s hot lunch")}</h1>
        <p class="lede">${tx("Upload the cafeteria sheet the vendor sends — PDF, spreadsheet, or a photo. Harbor puts it on the family Cafeteria. You can still edit a day by hand.")}</p>
      </div>
    </div>
    <section class="card panel lunch-upload" style="padding-bottom:18px;margin-bottom:16px">
      <h2>${tx("Weekly menu file")}</h2>
      <p class="lede" style="margin-bottom:12px">${tx("This is the office side. Parents order from Cafeteria. Nothing here charges a card.")}</p>
      <div class="actions">
        <label class="btn">
          ${tx("Upload weekly menu")}
          <input id="menu-file" type="file" accept=".pdf,.csv,.xlsx,.xls,.png,.jpg,.jpeg" hidden />
        </label>
        <button type="button" class="btn ghost" id="menu-typical">${tx("Post typical week")}</button>
      </div>
    </section>
    ${weeks
      .map(
        (group) => `
      <section class="lunch-week">
        <div class="widget-head"><h2>${group.title}</h2></div>
        <div class="lunch-days">
          ${group.days
            .map(
              (day) => `
            <button type="button" class="day-chip ${day.iso === selected?.iso ? "is-on" : ""} ${day.today ? "is-today" : ""}" data-lunch-day="${day.iso}">
              <span class="kicker">${day.today ? tx("Today") : tx(day.dow)}</span>
              <strong>${day.day}</strong>
            </button>`
            )
            .join("")}
        </div>
      </section>`
      )
      .join("")}
    ${
      selected
        ? `<article class="card lunch-sheet">
      <header class="lunch-sheet-head">
        <div>
          <div class="kicker">${posted ? tx("Posted for families") : tx("Typical menu until you post")}</div>
          <h2>${tx("Hot lunch")} · ${tx(selected.dow)} ${selected.day} ${tx(selected.month)}</h2>
        </div>
      </header>
      ${
        menu.length
          ? menu
              .map(
                (item) => `
        <div class="lunch-row">
          <div class="title-block">
            <span class="kicker">${tx(LUNCH_CATS.find((c) => c.id === item.cat)?.title || item.cat)}</span>
            <strong>${tx(item.name)}</strong>
          </div>
          <span class="lunch-price">${money(item.price)}</span>
          <button type="button" class="btn ghost" data-remove-item="${item.id}">${tx("Remove")}</button>
        </div>`
              )
              .join("")
          : `<p class="doc-empty">${tx("No hot lunch this day. Families will pack.")}</p>`
      }
      <form id="menu-item-form" class="compose" style="grid-template-columns: 120px 1fr 90px auto;padding-top:12px">
        <select id="menu-cat">${LUNCH_CATS.map((c) => `<option value="${c.id}">${tx(c.singular || c.title)}</option>`).join("")}</select>
        <input id="menu-name" placeholder="${tx("Item")}" required />
        <input id="menu-price" inputmode="decimal" placeholder="4.50" required />
        <button class="btn" type="submit">${tx("Add")}</button>
      </form>
    </article>`
        : ""
    }
  `;
  view.querySelectorAll("[data-lunch-day]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.lunchDay = btn.dataset.lunchDay;
      adminLunch();
    });
  });
  document.getElementById("menu-typical")?.addEventListener("click", () => {
    postLunchWeek(week);
    adminLunch();
  });
  document.getElementById("menu-file")?.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    postLunchWeek(week, file?.name || "Weekly menu");
    adminLunch();
  });
  view.querySelectorAll("[data-remove-item]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!selected) return;
      const next = lunchMenu(selected.iso).filter((item) => item.id !== btn.dataset.removeItem);
      state.lunchMenuByIso[selected.iso] = next;
      adminLunch();
    });
  });
  document.getElementById("menu-item-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!selected) return;
    const price = Number(document.getElementById("menu-price").value);
    const name = document.getElementById("menu-name").value.trim();
    if (!name || !(price >= 0)) return;
    const current = lunchMenu(selected.iso).slice();
    current.push({
      id: "u" + Date.now(),
      cat: document.getElementById("menu-cat").value,
      name,
      price,
    });
    state.lunchMenuByIso[selected.iso] = current;
    adminLunch();
  });
}

function teacherLunchList() {
  const until = parseIso(LUNCH_TODAY);
  until.setDate(until.getDate() + 14);
  const cap = isoDay(until.getFullYear(), until.getMonth(), until.getDate());
  const days = lunchDays().filter((day) => day.iso <= cap);
  if (!days.some((d) => d.iso === state.lunchDay)) state.lunchDay = LUNCH_TODAY;
  const selected = days.find((d) => d.iso === state.lunchDay) || days[0];
  const room = LUNCH_ROOMS.find((r) => r.id === state.lunchRoom) || LUNCH_ROOMS[0];
  const kids = roster.filter((s) => s.room === room.id);
  const buying = kids.filter((s) => lunchLinesForChild(selected.iso, s.id).length);
  paintChrome("lunch");
  setCrumbs([boardCrumb(), { label: "Lunch list", href: "#/lunch" }]);
  view.innerHTML = `
    ${notice()}
    <div class="hero">
      <div>
        <h1>${tx("Who has hot lunch")}</h1>
        <p class="lede">${tx("Younger rooms — Kindergarten especially — often walk students to the cafeteria. Harbor lists who already bought a meal. Packed lunches stay off the list. Cedar Hill’s paper process isn’t modeled yet.")}</p>
      </div>
      <div class="stat-row">
        <div><div class="num">${buying.length}/${kids.length}</div><div class="kicker">${tx("Cafeteria today")}</div></div>
      </div>
    </div>
    <div class="event-filters" role="tablist">
      ${LUNCH_ROOMS.map(
        (r) => `
        <button type="button" data-lunch-room="${r.id}" class="${r.id === room.id ? "is-on" : ""}">${tx(r.title)}</button>`
      ).join("")}
    </div>
    <div class="lunch-days" style="margin-bottom:16px">
      ${days
        .slice(0, 6)
        .map(
          (day) => `
        <button type="button" class="day-chip ${day.iso === selected.iso ? "is-on" : ""} ${day.today ? "is-today" : ""}" data-lunch-day="${day.iso}">
          <span class="kicker">${day.today ? tx("Today") : tx(day.dow)}</span>
          <strong>${day.day}</strong>
        </button>`
        )
        .join("")}
    </div>
    <section class="card panel">
      <div class="widget-head">
        <h2>${room.teacher} · ${tx(selected.today ? "Today" : selected.dow)} ${selected.day}</h2>
        <span class="kicker">${buying.length} ${tx("hot lunch")}</span>
      </div>
      ${kids
        .map((s) => {
          const lines = lunchLinesForChild(selected.iso, s.id);
          return `
            <div class="list-row">
              <div class="title-block">
                <strong>${s.name}</strong>
                <span class="kicker">${
                  lines.length
                    ? lines.map((line) => `${line.qty}× ${tx(line.name)}`).join(" · ")
                    : tx("Packed lunch")
                }</span>
              </div>
              ${lines.length ? pill("Hot lunch") : pill("Packed", "amber")}
            </div>`;
        })
        .join("")}
    </section>
  `;
  view.querySelectorAll("[data-lunch-room]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.lunchRoom = btn.dataset.lunchRoom;
      teacherLunchList();
    });
  });
  view.querySelectorAll("[data-lunch-day]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.lunchDay = btn.dataset.lunchDay;
      teacherLunchList();
    });
  });
}

function dismissStatusLabel(status) {
  if (status === "released") return "Released";
  if (status === "called") return "At the door";
  if (status === "sent") return "Sent from class";
  return "Waiting";
}

function dismissStatusTone(status) {
  if (status === "released") return "";
  if (status === "called" || status === "sent") return "amber";
  return "risk";
}

function setDismissStatus(id, status) {
  state.dismissStatus[id] = status;
}

function dismissRow(student, opts = {}) {
  const plan = todayDismiss(student.id);
  const mode = dismissMode(plan.mode);
  const usual = plan.usual;
  const staff = state.role !== "parent";
  return `
    <div class="list-row dismiss-row ${plan.change ? "is-change" : ""}">
      <div class="title-block">
        <span class="kicker">${tx(student.grade)} · ${student.room}${plan.at ? ` · ${plan.at}` : ""}</span>
        <strong>${student.name}</strong>
        <span class="kicker">${tx(mode.title)} · ${tx(plan.detail)}${
          plan.change ? ` · ${tx("was")} ${tx(dismissMode(usual.mode).title)} · ${tx(usual.detail)}` : ""
        }</span>
        ${plan.note ? `<span class="kicker">${tx(plan.note)}</span>` : ""}
      </div>
      <div class="dismiss-side">
        ${plan.change ? pill("Changed", "risk") : ""}
        ${pill(dismissStatusLabel(plan.status), dismissStatusTone(plan.status))}
        ${
          staff
            ? `<div class="dismiss-acts">
                ${
                  opts.classroom && plan.status === "waiting"
                    ? `<button type="button" class="btn ghost" data-dismiss-id="${student.id}" data-dismiss-status="sent">${tx("Send")}</button>`
                    : ""
                }
                ${
                  !opts.classroom && plan.status !== "released"
                    ? `<button type="button" class="btn ghost" data-dismiss-id="${student.id}" data-dismiss-status="called">${tx("At the door")}</button>
                       <button type="button" class="btn" data-dismiss-id="${student.id}" data-dismiss-status="released">${tx("Released")}</button>`
                    : ""
                }
              </div>`
            : ""
        }
      </div>
    </div>`;
}

function bindDismissActions(rerender) {
  view.querySelectorAll("[data-dismiss-status]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setDismissStatus(btn.dataset.dismissId, btn.dataset.dismissStatus);
      markAlertsFor("dismiss");
      rerender();
    });
  });
}

function parentDismiss() {
  const kid = child();
  const plan = todayDismiss(kid.id);
  const usual = usualDismiss(kid.id);
  paintChrome("dismiss");
  setCrumbs([boardCrumb(), { label: "Dismissal", href: "#/dismiss" }]);
  view.innerHTML = `
    ${notice()}
    ${
      ridesBus()
        ? `<div class="banner">
            <div>
              <strong>${tx("Live change")}</strong>
              ${tx(state.busChange)}
            </div>
          </div>`
        : ""
    }
    <div class="hero">
      <div>
        <h1>${txf("{name}’s dismissal today", { name: kid.short })}</h1>
        <p class="lede">${tx("Usual plan stays unless you change it. Room and duty staff see the same board — bus loop, carpool, Kids Club, or the office.")}</p>
      </div>
      <div class="stat-row">
        <div>
          <div class="num">${tx(dismissMode(plan.mode).title)}</div>
          <div class="kicker">${tx(plan.detail)}</div>
        </div>
      </div>
    </div>
    <section class="card panel" style="padding-bottom:18px;margin-bottom:16px">
      <div class="widget-head">
        <h2>${tx("Today")}</h2>
        ${plan.change ? pill("Changed", "risk") : pill("Usual")}
      </div>
      <div class="list-row">
        <div class="title-block">
          <span class="kicker">${tx(dismissMode(plan.mode).lane)}</span>
          <strong>${tx(plan.detail)}</strong>
          <span class="kicker">${plan.note ? tx(plan.note) : txf("Usual is {mode} · {detail}.", { mode: tx(dismissMode(usual.mode).title), detail: tx(usual.detail) })}</span>
        </div>
        ${pill(dismissStatusLabel(plan.status), dismissStatusTone(plan.status))}
      </div>
      ${
        plan.change
          ? `<div class="actions"><button type="button" class="btn ghost" id="dismiss-revert">${tx("Back to usual")}</button></div>`
          : ""
      }
    </section>
    <section class="card panel" style="padding-bottom:18px">
      <h2>${tx("Change for today")}</h2>
      <p class="lede" style="margin-bottom:12px">${tx("Example: taking Bus 4 today instead of carpool. The classroom and the staff outside update live.")}</p>
      <form id="dismiss-form">
        <div class="field">
          <label for="dismiss-mode">${tx("How they leave")}</label>
          <select id="dismiss-mode">${DISMISS_MODES.map((m) => `<option value="${m.id}" ${m.id === plan.mode ? "selected" : ""}>${tx(m.title)}</option>`).join("")}</select>
        </div>
        <div class="field">
          <label for="dismiss-detail">${tx("Where")}</label>
          <input id="dismiss-detail" value="${(plan.detail || "").replace(/"/g, "&quot;")}" placeholder="Bus 4 · Loop A · Kids Club" required />
        </div>
        <div class="field">
          <label for="dismiss-note">${tx("Note for school")}</label>
          <textarea id="dismiss-note" rows="2" placeholder="${tx("Taking Bus 4 today instead of carpool.")}">${plan.note || ""}</textarea>
        </div>
        <button class="btn" type="submit">${tx("Put on the live board")}</button>
      </form>
    </section>
    ${
      ridesBus()
        ? `<section class="card panel" style="margin-top:16px">
            <h2>${tx("Morning route")}</h2>
            <div class="list-row"><div class="title-block"><strong>Oak & 3rd</strong><span class="kicker">${kid.short}’s stop</span></div>${pill("7:42 AM")}</div>
            <div class="list-row"><div class="title-block"><strong>Cedar Hill loop</strong><span class="kicker">School</span></div>${pill("7:58 AM")}</div>
          </section>`
        : ""
    }
  `;
  document.getElementById("dismiss-revert")?.addEventListener("click", () => {
    state.dismissNotes = state.dismissNotes.filter((n) => n.studentId !== kid.id);
    delete state.dismissStatus[kid.id];
    state.notice = txf("{name} is back on the usual plan.", { name: kid.short });
    parentDismiss();
  });
  document.getElementById("dismiss-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const mode = document.getElementById("dismiss-mode").value;
    const detail = document.getElementById("dismiss-detail").value.trim();
    const note = document.getElementById("dismiss-note").value.trim();
    state.dismissNotes = state.dismissNotes.filter((n) => n.studentId !== kid.id);
    state.dismissNotes.unshift({
      id: "dn" + Date.now(),
      studentId: kid.id,
      mode,
      detail,
      note: note || `${kid.short} ${tx("taking")} ${tx(dismissMode(mode).title)} ${tx("today")}.`,
      from: "parent",
      at: "Just now",
    });
    state.dismissStatus[kid.id] = "waiting";
    pushAlert({
      audience: "teacher",
      section: "dismiss",
      title: `${kid.short}: ${dismissMode(mode).title}`,
      body: note || detail,
      href: "#/dismiss",
    });
    pushAlert({
      audience: "admin",
      section: "dismiss",
      title: `${kid.short}: ${dismissMode(mode).title}`,
      body: `${kid.room} · ${detail}`,
      href: "#/dismiss",
    });
    state.notice = tx("Classroom and duty staff can see it.");
    parentDismiss();
  });
}

function teacherDismiss() {
  const rooms = [
    { id: "Room 12", title: "My class · Room 12" },
    { id: "Room K2", title: "Kindergarten · Room K2" },
    { id: "Room 8", title: "Grade 2 · Room 8" },
    { id: "Room 21", title: "Grade 6 · Room 21" },
    { id: "Room 28", title: "Grade 8 · Room 28" },
  ];
  if (!rooms.some((r) => r.id === state.dismissRoom)) state.dismissRoom = "Room 12";
  const room = rooms.find((r) => r.id === state.dismissRoom);
  const kids = roster.filter((s) => s.room === room.id);
  const changed = kids.filter((s) => todayDismiss(s.id).change);
  paintChrome("dismiss");
  setCrumbs([boardCrumb(), { label: "Dismissal", href: "#/dismiss" }]);
  view.innerHTML = `
    ${notice()}
    <div class="hero">
      <div>
        <h1>${tx("Classroom dismissal")}</h1>
        <p class="lede">${tx("Parent notes land here before the bell. Send them to the right door so duty staff aren’t guessing in the carpool line.")}</p>
      </div>
      <div class="stat-row">
        <div><div class="num">${changed.length}</div><div class="kicker">${tx("Changes today")}</div></div>
      </div>
    </div>
    <div class="event-filters" role="tablist">
      ${rooms.map((r) => `<button type="button" data-dismiss-room="${r.id}" class="${r.id === room.id ? "is-on" : ""}">${tx(r.title)}</button>`).join("")}
    </div>
    <section class="card panel">
      <div class="widget-head">
        <h2>${room.id}</h2>
        <span class="kicker">${kids.length} · ${tx("Live")}</span>
      </div>
      ${kids.map((s) => dismissRow(s, { classroom: true })).join("")}
    </section>
  `;
  view.querySelectorAll("[data-dismiss-room]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.dismissRoom = btn.dataset.dismissRoom;
      teacherDismiss();
    });
  });
  bindDismissActions(teacherDismiss);
}

function dutyDismiss() {
  const q = (state.dismissFind || "").trim().toLowerCase();
  const lane = state.dismissLane || "all";
  const kids = roster
    .filter((s) => {
      const plan = todayDismiss(s.id);
      if (lane !== "all" && plan.mode !== lane) return false;
      if (!q) return true;
      return [s.name, s.room, s.grade, plan.detail, plan.note].join(" ").toLowerCase().includes(q);
    })
    .sort((a, b) => {
      const ac = todayDismiss(a.id).change === todayDismiss(b.id).change ? 0 : todayDismiss(a.id).change ? -1 : 1;
      return ac || a.name.localeCompare(b.name);
    });
  const waiting = kids.filter((s) => todayDismiss(s.id).status !== "released").length;
  paintChrome("dismiss");
  setCrumbs([boardCrumb(), { label: "Dismissal", href: "#/dismiss" }]);
  const groups = (lane === "all" ? DISMISS_MODES : DISMISS_MODES.filter((m) => m.id === lane)).map((mode) => ({
    ...mode,
    students: kids.filter((s) => todayDismiss(s.id).mode === mode.id),
  }));
  view.innerHTML = `
    ${notice()}
    <div class="hero">
      <div>
        <h1>${tx("Duty board")}</h1>
        <p class="lede">${tx("Live with parent notes. Bus loop, carpool line, walkers, Kids Club, and the office share one list so a child doesn’t get put on the wrong ride.")}</p>
      </div>
      <div class="stat-row">
        <div><div class="num">${waiting}</div><div class="kicker">${tx("Still on campus")}</div></div>
        <div><div class="num">${dismissChangedCount()}</div><div class="kicker">${tx("Changes")}</div></div>
      </div>
    </div>
    <div class="event-filters" role="tablist">
      <button type="button" data-dismiss-lane="all" class="${lane === "all" ? "is-on" : ""}">${tx("All lanes")}</button>
      ${DISMISS_MODES.map((m) => `<button type="button" data-dismiss-lane="${m.id}" class="${lane === m.id ? "is-on" : ""}">${tx(m.title)}</button>`).join("")}
    </div>
    <div class="field" style="margin-bottom:16px">
      <label for="dismiss-q">${tx("Find a student")}</label>
      <input id="dismiss-q" type="search" value="${q.replace(/"/g, "&quot;")}" placeholder="${tx("Name, room, bus, or note")}" />
    </div>
    <div class="dismiss-lanes">
      ${groups
        .map(
          (group) => `
        <section class="card panel">
          <div class="widget-head">
            <h2>${tx(group.lane)}</h2>
            <span class="kicker">${group.students.length}</span>
          </div>
          ${
            group.students.length
              ? group.students.map((s) => dismissRow(s)).join("")
              : `<p class="doc-empty">${tx("No one in this lane.")}</p>`
          }
        </section>`
        )
        .join("")}
    </div>
  `;
  view.querySelectorAll("[data-dismiss-lane]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.dismissLane = btn.dataset.dismissLane;
      dutyDismiss();
    });
  });
  const find = document.getElementById("dismiss-q");
  find?.addEventListener("input", () => {
    state.dismissFind = find.value;
  });
  find?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dutyDismiss();
    }
  });
  find?.addEventListener("blur", () => dutyDismiss());
  bindDismissActions(dutyDismiss);
}

function dismissView() {
  if (state.role === "parent") return parentDismiss();
  if (state.role === "teacher") return teacherDismiss();
  return dutyDismiss();
}

function bus() {
  if (state.edition === "dream" && state.role === "parent") return parentDismiss();
  paintChrome("bus");
  setCrumbs([
    { label: "Today", href: "#/" },
    { label: "Bus", href: "#/bus" },
  ]);
  const kid = child();
  if (!ridesBus()) {
    view.innerHTML = `
      <div class="hero">
        <div>
          <h1>${tx("Walks.")}</h1>
          <p class="lede">${txf("{name} is Grade 8 and dismisses at 3:10. No Route 7 seat — Maya and Noah still ride.", { name: kid.short })}</p>
        </div>
      </div>
      <aside class="notes">
        <h3>Early dismissal</h3>
        Wednesday volleyball leaves at 1:30. Report leaving-early from Attendance so the office isn’t looking for a walker at 3:10.
      </aside>
    `;
    return;
  }
  view.innerHTML = `
    <div class="banner">
      <div>
        <strong>${tx("Live change")}</strong>
        ${tx(state.busChange)}
      </div>
    </div>
    <div class="hero">
      <div>
        <h1>Route 7</h1>
        <p class="lede">${kid.bus}. Afternoon drop is 3:38 unless a class hold keeps ${kid.short}.</p>
      </div>
    </div>
    <div class="grid-2">
      <section class="card panel">
        <h2>${tx("Stops")}</h2>
        <div class="list-row"><div class="title-block"><strong>Oak & 3rd</strong><span class="kicker">${kid.short}’s stop</span></div>${pill("7:42 AM")}</div>
        <div class="list-row"><div class="title-block"><strong>Cedar Hill loop</strong><span class="kicker">School</span></div>${pill("7:58 AM")}</div>
        <div class="list-row"><div class="title-block"><strong>Oak & 3rd</strong><span class="kicker">PM drop</span></div>${pill("3:38 PM")}</div>
      </section>
      <aside class="notes">
        <h3>If ${kid.short} is absent</h3>
        Reporting absence from Attendance automatically skips this stop. For leaving early, message the office so the driver isn’t waiting.
      </aside>
    </div>
  `;
}

function classroom(id) {
  paintChrome("class");
  const activity = child().activities.find((a) => a.id === id) || child().activities[0];
  setCrumbs([
    { label: "Today", href: "#/" },
    { label: "Classroom", href: "#/class" },
    { label: activity.title, href: `#/class/${activity.id}` },
  ]);
  view.innerHTML = `
    <div class="hero">
      <div>
        <h1>${id ? tx(activity.title) : tx("In class")}</h1>
        <p class="lede">${id ? tx(activity.body) : txf("What {room} is making, reading, and trying this week.", { room: child().room })}</p>
      </div>
    </div>
    <div class="grid-2">
      <section class="card panel">
        <h2>${tx("Feed")}</h2>
        ${child().activities
          .map(
            (a) => `
          <a class="list-row" href="#/class/${a.id}">
            <div class="title-block">
              <span class="kicker">${tx(a.when)}</span>
              <strong>${tx(a.title)}</strong>
            </div>
            ${pill(a.id === activity.id && id ? "Reading" : "Open")}
          </a>`
          )
          .join("")}
      </section>
      <aside class="notes">
        <h3>${tx(activity.title)}</h3>
        ${tx(activity.body)}
        <div class="actions">
          <a class="btn" href="#/messages/${teacherThreadId()}">${tx("Ask")} ${child().teacher}</a>
        </div>
      </aside>
    </div>
  `;
}

function messages(id) {
  paintChrome("messages");
  const thread = dreamThreads().find((t) => t.id === id) || dreamThreads()[0];
  const showThread = Boolean(id);
  setCrumbs([
    { label: "Today", href: "#/" },
    { label: "Messages", href: "#/messages" },
    ...(showThread ? [{ label: thread.with, href: `#/messages/${thread.id}` }] : []),
  ]);
  if (!showThread) {
    view.innerHTML = `
      <div class="hero">
        <div>
          <h1>${tx("Direct to teachers")}</h1>
          <p class="lede">${state.role === "parent" ? txf("You write {lang}. {teacher} reads English.", { lang: LANGS[state.parentLang].native, teacher: child().teacher }) : "Families write in their language. You read English."}</p>
        </div>
      </div>
      <section class="card panel">
        ${dreamThreads()
          .map(
            (t) => `
          <a class="list-row" href="#/messages/${t.id}">
            <div class="title-block">
              <span class="kicker">${t.role}</span>
              <strong>${t.with}</strong>
              <span class="kicker">${tx(t.preview)}</span>
            </div>
            ${pill("Open")}
          </a>`
          )
          .join("")}
      </section>
    `;
    return;
  }
  view.innerHTML = `
    <div class="hero">
      <div>
        <h1>${thread.with}</h1>
        <p class="lede">${tx(thread.role)} · ${child().name}</p>
      </div>
    </div>
    <section class="card panel">
      <div class="thread">
        ${thread.messages
          .map((m) => {
            const parentWrote = m.from === "me";
            const cssMine = state.role === "parent" ? parentWrote : !parentWrote;
            const sourceLang = m.lang || (parentWrote ? "es" : "en");
            return `
              <div class="bubble ${cssMine ? "me" : ""}">
                ${tx(m.text)}
                ${sourceLang !== readLang() ? `<div class="kicker">AI · ${LANGS[sourceLang].native} → ${LANGS[readLang()].native}</div>` : ""}
              </div>`;
          })
          .join("")}
      </div>
      <form class="compose" id="compose">
        <input id="draft" placeholder="${state.role === "parent" ? tx("Reply") + "…" : "Reply in English…"}" value="${state.draft}" />
        <button class="btn" type="submit">${tx("Send")}</button>
      </form>
    </section>
  `;
  document.getElementById("compose").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("draft");
    const text = input.value.trim();
    if (!text) return;
    const lang = state.role === "parent" ? state.parentLang : "en";
    thread.messages.push({ from: state.role === "parent" ? "me" : "them", lang, text });
    thread.preview = text;
    state.draft = "";
    messages(id);
  });
}

function teacherHome() {
  paintChrome("home");
  setCrumbs([{ label: "My class", href: "#/" }]);
  view.innerHTML = `
    <div class="hero">
      <div>
        <h1>Room 12 is in science.</h1>
        <p class="lede">Snap a paper flyer into a calendar hold and a consent form. Then take attendance and answer families.</p>
      </div>
    </div>
    <div class="actions" style="margin-bottom:22px">
      <a class="btn" href="#/scan">Scan a flyer</a>
      <a class="btn ghost" href="#/teach/attendance">Take attendance</a>
    </div>
    <section class="metrics">
      <article class="card metric"><div class="metric-label">Present</div><div class="metric-value">24</div><div class="metric-hint">2 late · 1 absent</div></article>
      <a class="card metric" href="#/dismiss"><div class="metric-label">${tx("Dismissal")}</div><div class="metric-value">${dismissChangedCount("Room 12")}</div><div class="metric-hint">${tx("Pickup changes in class")}</div></a>
      <a class="card metric" href="#/events"><div class="metric-label">${tx("Events")}</div><div class="metric-value">${kidEvents().length}</div><div class="metric-hint">${tx("Dances, games, and fundraisers in one place")}</div></a>
      <a class="card metric" href="#/lunch"><div class="metric-label">${tx("Lunch list")}</div><div class="metric-value">${roster.filter((s) => s.room === "Room K2" && lunchLinesForChild(LUNCH_TODAY, s.id).length).length}</div><div class="metric-hint">${tx("Kindergarten cafeteria today")}</div></a>
    </section>
    <div class="actions">
      <a class="btn ghost" href="#/messages">Open family inbox</a>
    </div>
  `;
}

function teacherAttendance() {
  paintChrome("attendance");
  setCrumbs([
    boardCrumb(),
    { label: "Attendance", href: "#/teach/attendance" },
  ]);
  const roster = [
    ["Maya Bowser", students.find((s) => s.id === "maya").attendance.find((d) => d.day === "Thu 16").status],
    ["Leo Park", "Present"],
    ["Amira Chen", "Present"],
    ["Priya Nair", "Absent"],
    ["Jonas Feldt", "Late"],
  ];
  view.innerHTML = `
    <div class="hero">
      <div>
        <h1>Thursday attendance</h1>
        <p class="lede">Parent-reported changes already sit on the row. Tap to confirm.</p>
      </div>
    </div>
    <section class="card panel">
      ${roster
        .map(
          ([name, status]) => `
        <div class="list-row">
          <div class="title-block"><strong>${name}</strong></div>
          ${pill(status, statusKind(status))}
        </div>`
        )
        .join("")}
    </section>
  `;
}

function adminHome() {
  paintChrome("home");
  setCrumbs([{ label: "School", href: "#/" }]);
  view.innerHTML = `
    <div class="banner risk">
      <div>
        <strong>Route 7 delay</strong>
        ${state.busChange} 14 families notified.
      </div>
      <a class="btn ghost" href="#/bus">Buses</a>
    </div>
    <div class="hero">
      <div>
        <h1>Cedar Hill, Thursday.</h1>
        <p class="lede">Digitize a backpack flyer before the office copier eats it. Then the rest of the board.</p>
      </div>
    </div>
    <div class="actions" style="margin-bottom:22px">
      <a class="btn" href="#/scan">Scan a flyer</a>
    </div>
    <section class="metrics">
      <a class="card metric" href="#/admin/attendance"><div class="metric-label">Attendance</div><div class="metric-value">96%</div><div class="metric-hint">12 absences schoolwide</div></a>
      <a class="card metric" href="#/dismiss"><div class="metric-label">${tx("Dismissal")}</div><div class="metric-value">${dismissChangedCount()}</div><div class="metric-hint">${tx("Live pickup changes")}</div></a>
      <a class="card metric" href="#/lunch"><div class="metric-label">${tx("Hot lunch menu")}</div><div class="metric-value">${lunchOrdersForDay(LUNCH_TODAY).length}</div><div class="metric-hint">${tx("Family orders today · post this week")}</div></a>
      <a class="card metric" href="#/events"><div class="metric-label">${tx("Events")}</div><div class="metric-value">${kidEvents().length}</div><div class="metric-hint">${kidEvents()[0] ? tx(kidEvents()[0].title) : tx("None upcoming")}</div></a>
    </section>
  `;
}

function rosterResultsHtml() {
  const matches = filteredRoster();
  if (!matches.length) {
    return `<p class="empty-copy">No students match that name, grade, or classroom.</p>`;
  }
  return matches
    .map((s) => {
      const on = state.officeFind.pick === s.id ? "is-on" : "";
      return `
        <button type="button" class="roster-pick ${on}" data-pick="${s.id}">
          <strong>${s.name}</strong>
          <span>${s.grade} · ${s.room} · ${s.teacher}</span>
        </button>`;
    })
    .join("");
}

function applyOfficeAttendance(entry) {
  const kid = students.find((s) => s.id === entry.studentId);
  if (!kid) return;
  const row = kid.attendance.find((d) => d.day === entry.day);
  if (!row) return;
  row.status = entry.status;
  row.note = entry.note || entry.status;
}

function bindRosterPicks() {
  view.querySelectorAll("[data-pick]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.officeFind.pick = btn.dataset.pick;
      const selected = document.getElementById("att-selected");
      const results = document.getElementById("roster-results");
      if (results) results.innerHTML = rosterResultsHtml();
      bindRosterPicks();
      if (selected) selected.innerHTML = selectedStudentHtml();
    });
  });
}

function selectedStudentHtml() {
  const s = rosterStudent(state.officeFind.pick);
  if (!s) return `<p class="kicker" style="margin:0">Search or filter, then choose a student.</p>`;
  return `<p class="selected-student"><strong>${s.name}</strong> · ${s.grade} · ${s.room} · ${s.teacher}</p>`;
}

function adminAttendance() {
  paintChrome("attendance");
  setCrumbs([
    boardCrumb(),
    { label: "Attendance", href: "#/admin/attendance" },
  ]);
  const find = state.officeFind;
  view.innerHTML = `
    ${notice()}
    <div class="hero">
      <div>
        <h1>School attendance</h1>
        <p class="lede">Add a late, absence, or early pickup from the office. Search by name, or narrow by grade and classroom.</p>
      </div>
    </div>
    <div class="grid-2">
      <section class="card panel" style="padding-bottom:18px">
        <h2>Add an entry</h2>
        <form id="office-attendance">
          <div class="field">
            <label for="att-q">Find a student</label>
            <input id="att-q" type="search" value="${find.q.replace(/"/g, "&quot;")}" placeholder="Name, teacher, or room" autocomplete="off" />
          </div>
          <div class="find-filters">
            <div class="field">
              <label for="att-grade">Grade</label>
              <select id="att-grade">
                <option value="all">All grades</option>
                ${rosterGrades()
                  .map((g) => `<option value="${g}" ${find.grade === g ? "selected" : ""}>${g}</option>`)
                  .join("")}
              </select>
            </div>
            <div class="field">
              <label for="att-room">Classroom</label>
              <select id="att-room">
                <option value="all">All classrooms</option>
                ${rosterRooms()
                  .map((r) => {
                    const teacher = roster.find((s) => s.room === r)?.teacher || "";
                    return `<option value="${r}" ${find.room === r ? "selected" : ""}>${r}${teacher ? " · " + teacher : ""}</option>`;
                  })
                  .join("")}
              </select>
            </div>
          </div>
          <div id="roster-results" class="roster-results" role="listbox" aria-label="Students">${rosterResultsHtml()}</div>
          <div id="att-selected" class="att-selected">${selectedStudentHtml()}</div>
          <div class="field">
            <label for="att-kind">Status</label>
            <select id="att-kind">
              <option value="Absent">Absent</option>
              <option value="Late">Late</option>
              <option value="Left early">Leaving early</option>
              <option value="Present">Present</option>
            </select>
          </div>
          <div class="field">
            <label for="att-day">Day</label>
            <select id="att-day">
              ${ATTENDANCE_DAYS.map((d) => `<option ${d === "Thu 16" ? "selected" : ""}>${d}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="att-note">Note</label>
            <textarea id="att-note" rows="2" placeholder="Pickup time, appointment, call from home…"></textarea>
          </div>
          <button class="btn" type="submit">Add attendance</button>
        </form>
      </section>
      <section class="card panel">
        <h2>This week</h2>
        ${state.officeAttendance
          .map((entry) => {
            const s = rosterStudent(entry.studentId);
            const label = entry.confirmed ? entry.status : "Needs confirm";
            const kind = entry.confirmed ? statusKind(entry.status) : "amber";
            return `
              <div class="list-row">
                <div class="title-block">
                  <strong>${s ? s.name : entry.studentId}</strong>
                  <span class="kicker">${entry.day} · ${s ? s.grade + " · " + s.room : ""} · ${entry.note || entry.status}</span>
                </div>
                ${pill(label, kind)}
              </div>`;
          })
          .join("")}
      </section>
    </div>
  `;

  const q = document.getElementById("att-q");
  const grade = document.getElementById("att-grade");
  const room = document.getElementById("att-room");
  const refresh = () => {
    find.q = q.value;
    find.grade = grade.value;
    find.room = room.value;
    const matches = filteredRoster();
    if (matches.length === 1) find.pick = matches[0].id;
    document.getElementById("roster-results").innerHTML = rosterResultsHtml();
    document.getElementById("att-selected").innerHTML = selectedStudentHtml();
    bindRosterPicks();
  };
  q.addEventListener("input", refresh);
  grade.addEventListener("change", refresh);
  room.addEventListener("change", refresh);
  bindRosterPicks();

  document.getElementById("office-attendance").addEventListener("submit", (e) => {
    e.preventDefault();
    const student = rosterStudent(find.pick);
    if (!student) {
      state.notice = "Choose a student first — search by name or filter by grade or classroom.";
      adminAttendance();
      return;
    }
    const status = document.getElementById("att-kind").value;
    const day = document.getElementById("att-day").value;
    const note = document.getElementById("att-note").value.trim();
    const entry = {
      id: "oa" + Date.now(),
      studentId: student.id,
      day,
      status,
      note: note || `Office: ${status.toLowerCase()} ${day}`,
      source: "office",
      confirmed: true,
    };
    state.officeAttendance.unshift(entry);
    applyOfficeAttendance(entry);
    state.notice = `${status} recorded for ${student.name} · ${day} · ${student.grade}, ${student.room}.`;
    find.pick = student.id;
    adminAttendance();
  });
}

const FLYERS = {
  orchard: {
    label: "Orchard trip flyer",
    title: "Fall orchard trip",
    day: "Tue",
    time: "9:15",
    where: "Meet Room 12",
    cost: "8.00",
    permission: true,
    due: "Mon 13",
    body: "Grade 4 visits Suncrest Orchard. $8 covers picking and cider. Signed permission required.",
  },
  pizza: {
    label: "Pizza kit fundraiser",
    title: "Pizza kit fundraiser",
    day: "Fri",
    time: "15:30",
    where: "Cafeteria pickup",
    cost: "12.00",
    permission: false,
    due: "",
    body: "Optional pizza kits. $12 each, pickup Friday 3:30 in the cafeteria. No permission slip.",
  },
};

function paperFlyer(id, reading) {
  const flyer = FLYERS[id];
  const mark = (field, text) => `<span class="ocr-mark" data-field="${field}">${text}</span>`;
  if (id === "pizza") {
    return `
      <article class="paper-flyer pizza">
        <p class="paper-kicker">Cedar Hill PTO</p>
        <h3>${mark("title", "PIZZA KIT FUNDRAISER")}</h3>
        <p>${mark("date", "Pickup Friday 3:30 PM · Cafeteria")}</p>
        <p>${mark("cost", "Cost: $12 per kit")}</p>
        <p>Optional. ${mark("perm", "No permission slip needed.")}</p>
      </article>`;
  }
  return `
    <article class="paper-flyer">
      <p class="paper-kicker">Cedar Hill School · Room 12</p>
      <h3>${mark("title", "FALL ORCHARD TRIP")}</h3>
      <p>Grade 4 · Suncrest Orchard</p>
      <p>${mark("date", "Tuesday, October 14 · 9:15 AM")}</p>
      <p>${mark("cost", "Cost: $8.00 (picking + cider)")}</p>
      <p>${mark("perm", "Permission slip due Monday. Return to Room 12.")}</p>
    </article>`;
}

function runOcr(id) {
  document.querySelector(".scan-stage")?.classList.add("is-reading");
  setTimeout(() => {
    state.scan = { ...FLYERS[id], id };
    location.hash = "#/scan/review";
    render();
  }, 1100);
}

function scanCapture() {
  paintChrome("scan");
  setCrumbs([
    { label: state.role === "teacher" ? "Class board" : "School board", href: "#/" },
    { label: "Scan flyer", href: "#/scan" },
  ]);
  view.innerHTML = `
    <div class="hero">
      <div>
        <h1>Snap the backpack flyer.</h1>
        <p class="lede">Harbor OCR pulls title, date, cost, and whether families must consent — then files a calendar hold and an online form.</p>
      </div>
    </div>
    <div class="grid-2">
      <section class="card scan-stage">
        <div class="viewfinder">
          <span class="vf-corner"></span><span class="vf-corner"></span><span class="vf-corner"></span><span class="vf-corner"></span>
          ${paperFlyer("orchard", false)}
        </div>
        <p class="kicker scan-hint">Desk camera · Room 12</p>
        <div class="actions">
          <button class="btn" type="button" id="snap-orchard">Snap photo</button>
          <label class="btn ghost">
            Upload photo
            <input id="scan-file" type="file" accept="image/*" capture="environment" hidden />
          </label>
        </div>
      </section>
      <div>
        <aside class="notes">
          <h3>What AI reads</h3>
          Event title, date and time, cost, and permission requirements. You can edit anything before families see it.
        </aside>
        <section class="card panel" style="margin-top:16px">
          <h2>Or try another flyer</h2>
          <button class="list-row" type="button" id="snap-pizza">
            <div class="title-block">
              <strong>Pizza kit fundraiser</strong>
              <span class="kicker">PTO · $12 · no consent</span>
            </div>
            ${pill("Scan")}
          </button>
        </section>
      </div>
    </div>
  `;
  document.getElementById("snap-orchard")?.addEventListener("click", () => runOcr("orchard"));
  document.getElementById("snap-pizza")?.addEventListener("click", () => runOcr("pizza"));
  document.getElementById("scan-file")?.addEventListener("change", () => runOcr("orchard"));
}

function scanReview() {
  const draft = state.scan || FLYERS.orchard;
  paintChrome("scan");
  setCrumbs([
    { label: state.role === "teacher" ? "Class board" : "School board", href: "#/" },
    { label: "Scan flyer", href: "#/scan" },
    { label: "Review", href: "#/scan/review" },
  ]);
  view.innerHTML = `
    <div class="hero">
      <div>
        <h1>Check the extract.</h1>
        <p class="lede">Harbor read the paper in a second. Confirm the fields, then publish a calendar entry and ${draft.permission ? "an online consent form" : "a family notice"}.</p>
      </div>
    </div>
    <div class="grid-2">
      <section class="card scan-stage is-done">
        <div class="viewfinder">
          ${paperFlyer(draft.id || "orchard", true)}
        </div>
        <p class="kicker scan-hint">OCR complete · 4 fields</p>
      </section>
      <section class="card panel" style="padding-bottom:18px">
        <h2>Structured from the page</h2>
        <form id="ocr-form">
          <div class="field"><label for="ocr-title">Event title</label><input id="ocr-title" value="${draft.title}" required /></div>
          <div class="field"><label for="ocr-day">Day</label>
            <select id="ocr-day">${["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => `<option ${d === draft.day ? "selected" : ""}>${d}</option>`).join("")}</select>
          </div>
          <div class="field"><label for="ocr-time">Time</label><input id="ocr-time" value="${draft.time}" required /></div>
          <div class="field"><label for="ocr-where">Where</label><input id="ocr-where" value="${draft.where}" /></div>
          <div class="field"><label for="ocr-cost">Cost</label><input id="ocr-cost" value="${draft.cost}" /></div>
          <div class="field">
            <label><input type="checkbox" id="ocr-perm" ${draft.permission ? "checked" : ""} /> Permission / consent required</label>
          </div>
          <div class="field"><label for="ocr-body">What families see</label><textarea id="ocr-body" rows="3">${draft.body}</textarea></div>
          <button class="btn" type="submit">Publish calendar + form</button>
        </form>
      </section>
    </div>
  `;
  document.getElementById("ocr-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("ocr-title").value.trim();
    const day = document.getElementById("ocr-day").value;
    const time = document.getElementById("ocr-time").value.trim();
    const where = document.getElementById("ocr-where").value.trim();
    const cost = document.getElementById("ocr-cost").value.trim();
    const permission = document.getElementById("ocr-perm").checked;
    const body = document.getElementById("ocr-body").value.trim();
    const source = state.role === "teacher" ? "teacher" : "admin";
    const from = state.role === "teacher" ? "Ms. Ellison" : "Front office";
    const audience = source === "teacher" ? "maya" : "all";
    const id = Date.now();
    state.scheduleItems.push({
      id: "s" + id,
      source,
      for: audience,
      day,
      time,
      title,
      where,
    });
    const commId = "c" + id;
    state.comms.unshift({
      id: commId,
      source,
      for: audience,
      from,
      title,
      body: `${body} Cost: $${cost}.`,
      time: "Just now",
      unread: true,
      lang: "en",
      replies: [],
    });
    pushAlert({
      for: audience,
      section: "inbox",
      ref: commId,
      title,
      body: `${from} posted a new update.`,
      href: `#/inbox/${commId}`,
    });
    const bucket = draft.id === "pizza" ? "fundraiser" : source === "teacher" ? "classroom" : "school";
    if (permission || bucket === "fundraiser") {
      state.docs.unshift({
        id: "d" + id,
        source,
        bucket,
        for: audience,
        title,
        kind: permission ? "Form · consent" : "Order · optional",
        unread: true,
        signed: false,
        lang: "en",
        body: permission
          ? `${body} Event: ${day} ${time} · ${where}. Cost: $${cost}. Sign to consent.`
          : `${body} Pickup ${day} ${time} · ${where}. Cost: $${cost}.`,
        replies: [],
      });
      pushAlert({
        kind: "notice",
        for: audience,
        section: "docs",
        ref: "d" + id,
        title: bucket === "fundraiser" ? "New fundraiser" : "New document",
        body: `${title} was added to ${bucketTitle(bucket)}.`,
        href: `#/docs/d${id}`,
      });
    }
    state.scan = null;
    state.notice = permission
      ? `${title} is on the family calendar and waiting for consent.`
      : `${title} is on the family calendar${bucket === "fundraiser" ? " and in Fundraisers" : ""}.`;
    location.hash = permission ? `#/docs/d${id}` : "#/schedule";
    render();
  });
}

function scanView(step) {
  if (state.role === "parent") {
    location.hash = "#/";
    return render();
  }
  if (step === "review") return scanReview();
  scanCapture();
}

function commRow(item) {
  return `
    <a class="list-row" href="#/inbox/${item.id}">
      <div class="title-block">
        <span class="kicker">${item.from} · ${tx(item.time)}</span>
        <strong>${tx(item.title)}</strong>
      </div>
      ${sourcePill(item.source)}
      ${item.unread ? pill("New", "risk") : ""}
    </a>`;
}

function schedRow(item) {
  return `
    <div class="list-row">
      <div class="title-block">
        <span class="kicker">${tx(item.day)} · ${item.time} · ${tx(item.where)}</span>
        <strong>${tx(item.title)}</strong>
      </div>
      ${sourcePill(item.source)}
    </div>`;
}

function docRow(item) {
  return `
    <a class="list-row" href="#/docs/${item.id}">
      <div class="title-block">
        <span class="kicker">${tx(bucketTitle(docBucket(item)))} · ${tx(item.kind)}</span>
        <strong>${tx(item.title)}</strong>
      </div>
      ${sourcePill(item.source)}
      ${item.signed ? pill("Signed") : item.unread ? pill("New", "risk") : ""}
    </a>`;
}

function eventRow(item) {
  return `
    <a class="list-row ${item.unread ? "is-new" : ""}" href="#/events/${item.id}">
      <div class="title-block">
        <span class="kicker">${tx(eventKindMeta(item.kind).title)} · ${tx(item.when)} · ${tx(item.where)}</span>
        <strong>${tx(item.title)}</strong>
      </div>
      ${pill(eventKindMeta(item.kind).singular, eventKindTone(item.kind))}
      ${item.going ? pill("Going") : item.unread ? pill("New", "risk") : ""}
    </a>`;
}

function widgetComms() {
  return `
    <section class="card panel">
      <div class="widget-head">
        <h2>${tx("From school")}</h2>
        <a href="#/inbox">${tx("Inbox")} ${badgeMarkup(unreadComms())}</a>
      </div>
      ${kidComms().slice(0, 3).map(commRow).join("")}
    </section>`;
}

function widgetSchedule() {
  return `
    <section class="card panel">
      <div class="widget-head">
        <h2>${tx("This week")}</h2>
        <a href="#/schedule">${tx("Schedule")}</a>
      </div>
      ${kidSchedule().map(schedRow).join("")}
    </section>`;
}

function docsList(groups) {
  return groups
    .map(
      (group) => `
      <section class="card panel doc-group">
        <div class="widget-head">
          <h2>${tx(group.title)}</h2>
          <span class="kicker">${group.items.length || tx("None")}</span>
        </div>
        ${
          group.items.length
            ? group.items.map(docRow).join("")
            : `<p class="doc-empty">${
                state.role === "parent"
                  ? txf("Nothing in this pile for {name}.", { name: child().short })
                  : tx("Nothing in this pile.")
              }</p>`
        }
      </section>`
    )
    .join("");
}

function widgetAttendance() {
  const present = child().attendance.filter((d) => d.status === "Present").length;
  return `
    <section class="card panel">
      <div class="widget-head">
        <h2>${tx("Attendance")}</h2>
        <a href="#/attendance">${present}/4 · ${tx("See the week")}</a>
      </div>
      ${child()
        .attendance.map(
          (d) => `
        <div class="list-row">
          <div class="title-block">
            <strong>${d.day}</strong>
            <span class="kicker">${d.note ? tx(d.note) : tx("No note")}</span>
          </div>
          ${pill(d.status, statusKind(d.status))}
        </div>`
        )
        .join("")}
      <div class="actions" style="padding: 8px 0 12px">
        <a class="btn" href="#/attendance/report">${tx("Report absence")}</a>
      </div>
    </section>`;
}

function widgetEvents() {
  const upcoming = kidEvents().slice(0, 4);
  return `
    <section class="card panel">
      <div class="widget-head">
        <h2>${tx("Coming up")}</h2>
        <a href="#/events">${tx("Events")} ${badgeMarkup(unreadEventsCount())}</a>
      </div>
      ${upcoming.length ? upcoming.map(eventRow).join("") : `<p class="doc-empty">${tx("No events in this pile.")}</p>`}
    </section>`;
}

function widgetDocs() {
  return `
    <section class="card panel">
      <div class="widget-head">
        <h2>${tx("To read or sign")}</h2>
        <a href="#/docs">${tx("Documents")} ${badgeMarkup(unreadDocsCount())}</a>
      </div>
      ${docsByBucket()
        .map((group) => {
          if (!group.items.length) return "";
          return `<h3 class="doc-sub">${tx(group.title)}</h3>${group.items.map(docRow).join("")}`;
        })
        .join("")}
    </section>`;
}

function mvpParentHome() {
  paintChrome("home");
  setCrumbs([boardCrumb()]);
  const kid = child();
  const unread = kidComms().filter((c) => c.unread).length + kidDocs().filter((d) => d.unread && !d.signed).length;
  const form = unsignedForms()[0];
  const nextReminder = unreadAlerts().find((alert) => alert.kind === "reminder");
  view.innerHTML = `
    ${notice()}
    ${reminderBanner()}
    <div class="hero">
      <div>
        <h1>${txf("{name}’s day.", { name: kid.name })}</h1>
        <p class="lede">${txf("{grade} · {band} with {teacher} in {room}. Reminders, notices, and posts arrive in {lang}.", { grade: tx(kid.grade), band: tx(kid.band), teacher: kid.teacher, room: kid.room, lang: LANGS[state.parentLang].native })}</p>
      </div>
    </div>
    ${askBar()}
    <section class="metrics">
      <a class="card metric" href="#/attendance"><div class="metric-label">${tx("Attendance")}</div><div class="metric-value">${kid.attendance.filter((d) => d.status === "Present").length}/4</div><div class="metric-hint">${tx("Days present so far")}</div></a>
      <a class="card metric" href="#/inbox"><div class="metric-label">${tx("Inbox")}</div><div class="metric-value">${unread}</div><div class="metric-hint">${tx("New from teacher or office")}</div></a>
      <a class="card metric" href="#/docs"><div class="metric-label">${tx("To sign")}</div><div class="metric-value">${unsignedForms().length}</div><div class="metric-hint">${form ? tx(form.title) : tx("Nothing waiting")}</div></a>
      <a class="card metric" href="#/alerts"><div class="metric-label">${tx("Notifications")}</div><div class="metric-value">${unreadAlerts().length}</div><div class="metric-hint">${nextReminder ? tx(nextReminder.title) : tx("Caught up")}</div></a>
    </section>
    ${widgetTodayAlerts()}
    <div class="grid-2" style="margin-top:16px">
      ${state.widgets.comms ? widgetComms() : ""}
      <div class="mvp-stack">
        ${state.widgets.attendance ? widgetAttendance() : ""}
        ${state.widgets.schedule ? widgetSchedule() : ""}
        ${state.widgets.events ? widgetEvents() : ""}
        ${state.widgets.docs ? widgetDocs() : ""}
      </div>
    </div>
  `;
  bindAsk();
  bindAlertRows();
}

function mvpStaffHome() {
  const isTeacher = state.role === "teacher";
  paintChrome("home");
  setCrumbs([{ label: isTeacher ? "Class board" : "School board", href: "#/" }]);
  view.innerHTML = `
    ${notice()}
    <div class="hero">
      <div>
        <h1>${isTeacher ? "Send it to families once." : "The school board families actually open."}</h1>
        <p class="lede">${
          isTeacher
            ? "Write in English. Families read it in their language; their replies come back to you in English."
            : "Bulletin, events, and forms sit beside Ms. Ellison’s class notes — translated per family."
        }</p>
      </div>
      <a class="btn" href="#/scan">Scan a flyer</a>
    </div>
    <section class="metrics">
      <a class="card metric" href="${isTeacher ? "#/teach/attendance" : "#/admin/attendance"}"><div class="metric-label">Attendance</div><div class="metric-value">${isTeacher ? "24" : "96%"}</div><div class="metric-hint">${isTeacher ? "Room 12 today" : "Add an office entry"}</div></a>
      <a class="card metric" href="#/inbox"><div class="metric-label">Posted</div><div class="metric-value">${state.comms.filter((c) => (isTeacher ? c.source === "teacher" : c.source === "admin")).length}</div><div class="metric-hint">${isTeacher ? "From Room 12" : "From the office"}</div></a>
      <a class="card metric" href="#/events"><div class="metric-label">${tx("Events")}</div><div class="metric-value">${kidEvents().length}</div><div class="metric-hint">${tx("Dances, games, and fundraisers in one place")}</div></a>
      <a class="card metric" href="#/docs"><div class="metric-label">Documents</div><div class="metric-value">${state.docs.length}</div><div class="metric-hint">School · class · fundraisers</div></a>
    </section>
    <div class="grid-2">
      <section class="card panel" style="padding-bottom:18px">
        <h2>${isTeacher ? "Class update" : "Office bulletin"}</h2>
        <form id="post-form">
          <div class="field">
            <label for="post-title">Title</label>
            <input id="post-title" required placeholder="${isTeacher ? "Field trip reminder" : "Early dismissal Friday"}" />
          </div>
          <div class="field">
            <label for="post-body">Note to families</label>
            <textarea id="post-body" rows="3" required></textarea>
          </div>
          <button class="btn" type="submit">Post to family board</button>
        </form>
      </section>
      ${widgetComms()}
    </div>
  `;
  document.getElementById("post-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("post-title").value.trim();
    const body = document.getElementById("post-body").value.trim();
    const commId = "c" + Date.now();
    const audience = isTeacher ? "maya" : "all";
    state.comms.unshift({
      id: commId,
      source: isTeacher ? "teacher" : "admin",
      for: audience,
      from: isTeacher ? "Ms. Ellison" : "Front office",
      title,
      body,
      time: "Just now",
      unread: true,
      lang: "en",
      replies: [],
    });
    pushAlert({
      for: audience,
      section: "inbox",
      ref: commId,
      title,
      body: `${isTeacher ? "Ms. Ellison" : "The office"} posted a new update.`,
      href: `#/inbox/${commId}`,
    });
    state.notice = `Posted in English. The Bowser family will read it in ${LANGS[state.parentLang].native}.`;
    location.hash = "#/inbox";
    render();
  });
}

function replyThread(item, replyHash) {
  const replies = item.replies || [];
  return `
    <section class="card panel" style="margin-top:16px">
      <h2>${tx("Reply")}</h2>
      ${replies
        .map((r) => {
          const mine = (state.role === "parent") === (r.from === "parent");
          return `
            <div class="bubble ${mine ? "me" : ""}">
              <div class="kicker">${r.name} · ${r.time}</div>
              ${tx(r.text)}
              ${r.lang !== readLang() ? `<div class="kicker">AI · ${LANGS[r.lang].native} → ${LANGS[readLang()].native}</div>` : ""}
            </div>`;
        })
        .join("")}
      <form class="compose" id="reply-form">
        <input id="reply-text" required placeholder="${state.role === "parent" ? tx("Reply") + "…" : "Reply in English…"}" />
        <button class="btn" type="submit">${tx("Send")}</button>
      </form>
    </section>`;
}

function bindReply(item, renderAgain) {
  const form = document.getElementById("reply-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = document.getElementById("reply-text").value.trim();
    if (!text) return;
    const lang = state.role === "parent" ? state.parentLang : "en";
    if (lang !== "en") remember(toEnglish(text) === text ? text : toEnglish(text), lang, text);
    item.replies = item.replies || [];
    item.replies.push({
      id: "r" + Date.now(),
      from: state.role === "parent" ? "parent" : "staff",
      name: people[state.role].name,
      lang,
      text,
      time: "Just now",
    });
    renderAgain();
  });
}

function mvpInbox(id) {
  const item = kidComms().find((c) => c.id === id);
  if (item) {
    item.unread = false;
    markAlertsFor(item.id);
  }
  paintChrome("messages");
  if (!item) {
    setCrumbs([
      boardCrumb(),
      { label: "Inbox", href: "#/inbox" },
    ]);
    view.innerHTML = `
      <div class="hero">
        <div>
          <h1>${state.role === "parent" ? tx("Teacher and office, one inbox.") : "What families see."}</h1>
          <p class="lede">${state.role === "parent" ? txf("Announcements arrive in {lang}. Replies go back in English.", { lang: LANGS[state.parentLang].native }) : "You write English. Each family reads their language."}</p>
        </div>
      </div>
      <section class="card panel">${kidComms().map(commRow).join("")}</section>
    `;
    return;
  }
  item.unread = false;
  markAlertsFor(item.id);
  const sourceLang = item.lang || "en";
  const titleShown = state.showOriginal[item.id] ? item.title : tx(item.title);
  const bodyShown = state.showOriginal[item.id] ? item.body : tx(item.body);
  setCrumbs([
    boardCrumb(),
    { label: "Inbox", href: "#/inbox" },
    { label: titleShown, href: `#/inbox/${item.id}` },
  ]);
  view.innerHTML = `
    <div class="hero">
      <div>
        <h1>${titleShown}</h1>
        <p class="lede">${item.from} · ${item.time}</p>
      </div>
      ${sourcePill(item.source)}
    </div>
    ${aiBar(item.id, sourceLang, item.body)}
    <aside class="notes">
      <h3>Message</h3>
      ${bodyShown}
    </aside>
    ${replyThread(item)}
  `;
  bindOriginalToggles();
  bindReply(item, () => mvpInbox(id));
}

function mvpSchedule() {
  paintChrome("calendar");
  setCrumbs([
    boardCrumb(),
    { label: "Schedule", href: "#/schedule" },
  ]);
  const canPost = state.role !== "parent";
  view.innerHTML = `
    <div class="hero">
      <div>
        <h1>${tx("The week, merged.")}</h1>
        <p class="lede">${tx("Office events and class holds on one calendar so pickup is not a scavenger hunt. Save it to Apple or Google, or print the week.")}</p>
      </div>
    </div>
    ${calendarExportBar()}
    ${
      canPost
        ? `<section class="card panel" style="padding-bottom:18px;margin-bottom:16px">
        <h2>Add to family schedule</h2>
        <form id="sched-form" class="compose" style="grid-template-columns: 90px 90px 1fr auto">
          <input id="sched-day" placeholder="Fri" required />
          <input id="sched-time" placeholder="13:30" required />
          <input id="sched-title" placeholder="Title" required />
          <button class="btn" type="submit">Add</button>
        </form>
      </section>`
        : ""
    }
    <section class="card panel">${kidSchedule().map(schedRow).join("")}</section>
    ${yearCalendarHtml()}
  `;
  bindCalendarExport();
  const form = document.getElementById("sched-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      state.scheduleItems.push({
        id: "s" + Date.now(),
        source: state.role === "teacher" ? "teacher" : "admin",
        for: state.role === "teacher" ? "maya" : "all",
        day: document.getElementById("sched-day").value,
        time: document.getElementById("sched-time").value,
        title: document.getElementById("sched-title").value,
        where: state.role === "teacher" ? "Room 12" : "School",
      });
      state.notice = "Added to the family schedule.";
      mvpSchedule();
    });
  }
}

function mvpDocs(id) {
  const doc = kidDocs().find((d) => d.id === id);
  if (doc) {
    doc.unread = false;
    markAlertsFor(doc.id);
  }
  paintChrome("docs");
  if (!doc) {
    setCrumbs([
      boardCrumb(),
      { label: "Documents", href: "#/docs" },
    ]);
    const canPost = state.role !== "parent";
    view.innerHTML = `
      <div class="hero">
        <div>
        <h1>${tx("The paper pile, digital.")}</h1>
        <p class="lede">${tx("School documents, classroom papers, and fundraisers — split so the backpack isn’t one stack.")}</p>
      </div>
      </div>
      ${
        canPost
          ? `<section class="card panel" style="padding-bottom:18px;margin-bottom:16px">
          <h2>Send a document</h2>
          <form id="doc-form">
            <div class="field"><label for="doc-title">Title</label><input id="doc-title" required /></div>
            <div class="field"><label for="doc-bucket">Category</label>
              <select id="doc-bucket">${DOC_BUCKETS.map((b) => `<option value="${b.id}" ${b.id === (state.role === "teacher" ? "classroom" : "school") ? "selected" : ""}>${b.title}</option>`).join("")}</select>
            </div>
            <div class="field"><label for="doc-body">What families need to know</label><textarea id="doc-body" rows="3" required></textarea></div>
            <button class="btn" type="submit">Put on family board</button>
          </form>
        </section>`
          : ""
      }
      <div class="doc-stack">${docsList(docsByBucket())}</div>
    `;
    const form = document.getElementById("doc-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const docId = "d" + Date.now();
        const bucket = document.getElementById("doc-bucket").value;
        const audience = state.role === "teacher" ? "maya" : "all";
        const title = document.getElementById("doc-title").value;
        state.docs.unshift({
          id: docId,
          source: state.role === "teacher" ? "teacher" : "admin",
          bucket,
          for: audience,
          title,
          kind: "Note",
          unread: true,
          signed: false,
          lang: "en",
          body: document.getElementById("doc-body").value,
          replies: [],
        });
        pushAlert({
          for: audience,
          section: "docs",
          ref: docId,
          title: bucket === "fundraiser" ? "New fundraiser" : "New document",
          body: `${title} was added to ${bucketTitle(bucket)}.`,
          href: `#/docs/${docId}`,
        });
        state.notice = `On the family board in English and ${LANGS[state.parentLang].native}.`;
        location.hash = "#/docs";
        render();
      });
    }
    return;
  }
  setCrumbs([
    boardCrumb(),
    { label: "Documents", href: "#/docs" },
    { label: doc.title, href: `#/docs/${doc.id}` },
  ]);
  const titleShown = state.showOriginal[doc.id] ? doc.title : tx(doc.title);
  const bodyShown = state.showOriginal[doc.id] ? doc.body : tx(doc.body);
  view.innerHTML = `
    <article class="card doc-view">
      <div class="kicker">${tx(bucketTitle(docBucket(doc)))} · ${tx(doc.kind)}</div>
      <h1>${titleShown}</h1>
      ${sourcePill(doc.source)}
      ${aiBar(doc.id, doc.lang || "en", doc.body)}
      <div class="doc-sheet">${bodyShown}</div>
      ${
        state.role === "parent"
          ? `<button class="btn" id="sign-doc" ${doc.signed ? "disabled" : ""}>${tx(doc.signed ? "Signed" : "Sign and return")}</button>`
          : ""
      }
    </article>
    ${replyThread(doc)}
  `;
  bindOriginalToggles();
  bindReply(doc, () => mvpDocs(id));
  const sign = document.getElementById("sign-doc");
  if (sign) {
    sign.addEventListener("click", () => {
      doc.signed = true;
      state.notice = `${tx(doc.title)} signed. ${doc.source === "teacher" ? "Ms. Ellison" : "The office"} can see it.`;
      mvpDocs(id);
    });
  }
}

function eventsView(id) {
  const item = kidEvents().find((event) => event.id === id);
  if (item) {
    item.unread = false;
    markAlertsFor(item.id);
  }
  paintChrome("events");
  if (!item) {
    setCrumbs([boardCrumb(), { label: "Events", href: "#/events" }]);
    const canPost = state.role !== "parent";
    const shown = filteredEvents();
    view.innerHTML = `
      ${notice()}
      <div class="hero">
        <div>
          <h1>${tx("Events")}</h1>
          <p class="lede">${
            state.role === "parent"
              ? tx("Dances, sports, and fundraisers — one list instead of three flyers.")
              : tx("What Cedar Hill is hosting next. RSVP dances and games; fundraisers still live in Documents.")
          }</p>
        </div>
      </div>
      <div class="event-filters" role="tablist" aria-label="${tx("Events")}">
        <button type="button" data-event-kind="all" class="${state.eventFilter === "all" ? "is-on" : ""}">${tx("All events")}</button>
        ${EVENT_KINDS.map(
          (kind) => `
          <button type="button" data-event-kind="${kind.id}" class="${state.eventFilter === kind.id ? "is-on" : ""}">${tx(kind.title)}</button>`
        ).join("")}
      </div>
      ${
        canPost
          ? `<section class="card panel" style="padding-bottom:18px;margin-bottom:16px">
          <h2>${tx("Add an event")}</h2>
          <form id="event-form">
            <div class="field"><label for="event-kind">${tx("Category")}</label>
              <select id="event-kind">${EVENT_KINDS.map((k) => `<option value="${k.id}">${tx(k.singular)}</option>`).join("")}</select>
            </div>
            <div class="field"><label for="event-title">${tx("Title")}</label><input id="event-title" required /></div>
            <div class="field"><label for="event-when">${tx("When")}</label><input id="event-when" placeholder="Fri Oct 31 · 6:00 PM" required /></div>
            <div class="field"><label for="event-where">${tx("Where")}</label><input id="event-where" placeholder="${tx("Gym")}" required /></div>
            <div class="field"><label for="event-body">${tx("What families need to know")}</label><textarea id="event-body" rows="3" required></textarea></div>
            <button class="btn" type="submit">${tx("Put on the board")}</button>
          </form>
        </section>`
          : ""
      }
      <section class="card panel">
        ${
          shown.length
            ? shown.map(eventRow).join("")
            : `<p class="doc-empty">${
                state.role === "parent"
                  ? txf("Nothing in this pile for {name}.", { name: child().short })
                  : tx("No events in this pile.")
              }</p>`
        }
      </section>
    `;
    view.querySelectorAll("[data-event-kind]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.eventFilter = btn.dataset.eventKind;
        eventsView();
      });
    });
    const form = document.getElementById("event-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const eventId = "e" + Date.now();
        const kind = document.getElementById("event-kind").value;
        const title = document.getElementById("event-title").value;
        const audience = state.role === "teacher" ? "maya" : "all";
        state.schoolEvents.unshift({
          id: eventId,
          kind,
          source: state.role === "teacher" ? "teacher" : "admin",
          for: audience,
          title,
          when: document.getElementById("event-when").value,
          where: document.getElementById("event-where").value,
          who: state.role === "teacher" ? child().room : "K–8",
          unread: true,
          going: false,
          lang: "en",
          body: document.getElementById("event-body").value,
        });
        pushAlert({
          for: audience,
          section: "events",
          ref: eventId,
          title: "New event",
          body: title,
          href: `#/events/${eventId}`,
        });
        state.notice = `${title} is on Events.`;
        location.hash = "#/events";
        render();
      });
    }
    return;
  }
  setCrumbs([
    boardCrumb(),
    { label: "Events", href: "#/events" },
    { label: item.title, href: `#/events/${item.id}` },
  ]);
  const titleShown = state.showOriginal[item.id] ? item.title : tx(item.title);
  const bodyShown = state.showOriginal[item.id] ? item.body : tx(item.body);
  const formDoc = item.docId ? kidDocs().find((d) => d.id === item.docId) : null;
  view.innerHTML = `
    ${notice()}
    <article class="card doc-view">
      <div class="kicker">${tx(eventKindMeta(item.kind).title)} · ${tx(item.when)}</div>
      <h1>${titleShown}</h1>
      ${sourcePill(item.source)}
      ${aiBar(item.id, item.lang || "en", item.body)}
      <p class="event-meta">${tx(item.where)} · ${tx(item.who)}</p>
      <div class="doc-sheet">${bodyShown}</div>
      ${
        state.role === "parent" && item.kind !== "fundraiser"
          ? `<div class="actions" style="padding-top:8px">
              <button class="btn ${item.going ? "" : "ghost"}" type="button" id="event-going">${tx(item.going ? "You’re going" : "Going")}</button>
              <button class="btn ghost" type="button" id="event-skip">${tx("Can’t go")}</button>
            </div>`
          : ""
      }
      ${
        formDoc
          ? `<div class="actions" style="padding-top:8px"><a class="btn" href="#/docs/${formDoc.id}">${tx("Open the form")}</a></div>`
          : ""
      }
    </article>
  `;
  bindOriginalToggles();
  document.getElementById("event-going")?.addEventListener("click", () => {
    item.going = true;
    state.notice = tx("You’re going");
    eventsView(id);
  });
  document.getElementById("event-skip")?.addEventListener("click", () => {
    item.going = false;
    state.notice = tx("Marked as can’t go");
    eventsView(id);
  });
}

function mvpConfigure() {
  paintChrome("config");
  setCrumbs([
    boardCrumb(),
    { label: "Configure", href: "#/configure" },
  ]);
  const rows = [
    ["comms", "From school", "Unified inbox from teachers and the office"],
    ["attendance", "Attendance", "Week, absences, and a note to the office"],
    ["schedule", "This week", "Class holds next to school events"],
    ["events", "Events", "Dances, games, and fundraisers in one place"],
    ["docs", "Documents", "School documents, classroom, and fundraisers"],
  ];
  view.innerHTML = `
    <div class="hero">
      <div>
        <h1>${state.role === "admin" ? "What families see." : tx("Tune the board.")}</h1>
        <p class="lede">${
          state.role === "admin"
            ? "Cedar Hill’s MVP is these tiles. Turn one off schoolwide."
            : tx("The school set the default. Hide a tile you don’t need this week.")
        }</p>
      </div>
    </div>
    <section class="card panel" style="padding-bottom:8px">
      ${rows
        .map(
          ([key, title, hint]) => `
        <div class="config-row">
          <label>
            <input type="checkbox" data-widget="${key}" ${state.widgets[key] ? "checked" : ""} />
            <span>
              <strong>${tx(title)}</strong>
              <span class="kicker" style="display:block">${tx(hint)}</span>
            </span>
          </label>
          ${state.widgets[key] ? pill("On") : pill("Hidden", "amber")}
        </div>`
        )
        .join("")}
    </section>
    ${
      state.role === "parent"
        ? `<section class="card panel" style="margin-top:16px;padding-bottom:18px">
        <h2>${tx("Preferred language")}</h2>
        <p class="lede" style="margin-bottom:12px">${tx("Announcements, messages, and backpack documents arrive in this language. Staff still read English.")}</p>
      </section>`
        : `<aside class="notes" style="margin-top:16px"><h3>Harbor AI</h3>Families pick a language. You keep writing English; replies come back translated.</aside>`
    }
  `;
  view.querySelectorAll("[data-widget]").forEach((box) => {
    box.addEventListener("change", () => {
      state.widgets[box.dataset.widget] = box.checked;
      mvpConfigure();
    });
  });
}

function setNavOpen(open) {
  document.body.classList.toggle("nav-open", open);
  const btn = document.getElementById("menu-btn");
  const scrim = document.getElementById("nav-scrim");
  if (btn) {
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? tx("Close menu") : tx("Menu"));
  }
  if (scrim) {
    scrim.hidden = !open;
    scrim.setAttribute("aria-label", tx("Close menu"));
  }
}

function render() {
  setNavOpen(false);
  const hash = location.hash.replace(/^#/, "") || "/";
  const parts = hash.split("/").filter(Boolean);
  document.querySelector("[data-home]").setAttribute("href", homeHref());

  if (parts[0] === "ask") {
    return askView(decodeURIComponent(parts.slice(1).join("/") || ""));
  }
  if (parts[0] === "alerts") return alertsView();
  if (parts[0] === "scan") return scanView(parts[1]);

  if (state.edition === "mvp") {
    if (parts[0] === "inbox") return mvpInbox(parts[1]);
    if (parts[0] === "schedule") return mvpSchedule();
    if (parts[0] === "events") return eventsView(parts[1]);
    if (parts[0] === "docs") return mvpDocs(parts[1]);
    if (parts[0] === "attendance" && parts[1] === "report") return attendanceReport();
    if (parts[0] === "attendance") return attendance();
    if (parts[0] === "teach" && parts[1] === "attendance") return teacherAttendance();
    if (parts[0] === "admin" && parts[1] === "attendance") return adminAttendance();
    if (parts[0] === "configure") return mvpConfigure();
    if (parts[0] === "bus") return bus();
    if (state.role === "parent") return mvpParentHome();
    return mvpStaffHome();
  }

  if (state.role === "teacher") {
    if (parts[0] === "teach" && parts[1] === "attendance") return teacherAttendance();
    if (parts[0] === "calendar") return calendar();
    if (parts[0] === "events") return eventsView(parts[1]);
    if (parts[0] === "lunch") return lunch(parts[1]);
    if (parts[0] === "dismiss") return dismissView();
    if (parts[0] === "messages") return messages(parts[1]);
    if (parts[0] === "class") return classroom(parts[1]);
    return teacherHome();
  }
  if (state.role === "admin") {
    if (parts[0] === "admin" && parts[1] === "attendance") return adminAttendance();
    if (parts[0] === "bus") return bus();
    if (parts[0] === "dismiss") return dismissView();
    if (parts[0] === "lunch") return lunch(parts[1]);
    if (parts[0] === "calendar") return calendar();
    if (parts[0] === "events") return eventsView(parts[1]);
    return adminHome();
  }

  if (parts[0] === "attendance" && parts[1] === "report") return attendanceReport();
  if (parts[0] === "attendance") return attendance();
  if (parts[0] === "reports") return reports();
  if (parts[0] === "calendar") return calendar();
  if (parts[0] === "events") return eventsView(parts[1]);
  if (parts[0] === "lunch") return lunch(parts[1]);
  if (parts[0] === "dismiss") return dismissView();
  if (parts[0] === "bus") return bus();
  if (parts[0] === "class") return classroom(parts[1]);
  if (parts[0] === "messages") return messages(parts[1]);
  parentHome();
}

document.getElementById("child-switch")?.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-child]");
  if (!btn) return;
  state.childId = btn.dataset.child;
  localStorage.setItem("harborChild", state.childId);
  state.notice = "";
  render();
});

document.querySelectorAll("[data-role]").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.role = btn.dataset.role;
    state.notice = "";
    location.hash = "#/";
    render();
  });
});

document.querySelectorAll("[data-edition]").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.edition = btn.dataset.edition;
    localStorage.setItem("harborEdition", state.edition);
    state.notice = "";
    location.hash = "#/";
    render();
  });
});

document.getElementById("menu-btn")?.addEventListener("click", () => {
  setNavOpen(!document.body.classList.contains("nav-open"));
});
document.getElementById("nav-scrim")?.addEventListener("click", () => setNavOpen(false));
document.getElementById("rail")?.addEventListener("click", (e) => {
  if (e.target.closest("a, [data-role], [data-child]")) setNavOpen(false);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setNavOpen(false);
});
window.matchMedia("(min-width: 981px)").addEventListener("change", (e) => {
  if (e.matches) setNavOpen(false);
});

window.addEventListener("hashchange", render);
render();
