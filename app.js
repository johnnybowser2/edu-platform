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
  if (id === "calendar" || id === "schedule") return reminders;
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
  events: {
    Mon: ["Assembly 8:40", "Library"],
    Tue: ["Math clinic", "Choir 3:15"],
    Wed: ["Science walk"],
    Thu: ["Curriculum night 6:00"],
    Fri: ["Spirit day · green", "Picture day 9:00"],
  },
  busChange: "Route 7 running 12 minutes late this morning. Pickup still Oak & 3rd.",
  draft: "",
  notice: "",
  edition: localStorage.getItem("harborEdition") === "dream" ? "dream" : "mvp",
  parentLang: ["fr", "en", "zh", "pa", "es"].includes(localStorage.getItem("harborLang"))
    ? localStorage.getItem("harborLang")
    : "fr",
  showOriginal: {},
  widgets: { comms: true, schedule: true, docs: true, attendance: true },
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
    ["lunch", "Cafeteria", "#/lunch"],
    ["bus", "Bus", "#/bus"],
    ["class", "Classroom", "#/class"],
    ["messages", "Messages", "#/messages"],
  ],
  teacher: [
    ["home", "My class", "#/"],
    ["alerts", "Notifications", "#/alerts"],
    ["scan", "Scan flyer", "#/scan"],
    ["attendance", "Attendance", "#/teach/attendance"],
    ["class", "Activities", "#/class"],
    ["messages", "Families", "#/messages"],
  ],
  admin: [
    ["home", "School", "#/"],
    ["alerts", "Notifications", "#/alerts"],
    ["scan", "Scan flyer", "#/scan"],
    ["attendance", "Attendance", "#/admin/attendance"],
    ["bus", "Buses", "#/bus"],
    ["lunch", "Cafeteria", "#/lunch"],
    ["calendar", "Events", "#/calendar"],
  ],
};

const mvpNavByRole = {
  parent: [
    ["home", "Today", "#/"],
    ["alerts", "Notifications", "#/alerts"],
    ["attendance", "Attendance", "#/attendance"],
    ["messages", "Inbox", "#/inbox"],
    ["calendar", "Schedule", "#/schedule"],
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
    ["docs", "Documents", "#/docs"],
  ],
  admin: [
    ["home", "School board", "#/"],
    ["alerts", "Notifications", "#/alerts"],
    ["scan", "Scan flyer", "#/scan"],
    ["attendance", "Attendance", "#/admin/attendance"],
    ["messages", "Office inbox", "#/inbox"],
    ["calendar", "Schedule", "#/schedule"],
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
  const items = [
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
      fr: `Prochain repas ouvert : ${nextMeal.day}, ${nextMeal.name} à $${nextMeal.price.toFixed(2)}. Le lunch de la maison reste par défaut.`,
      en: `Next open meal is ${nextMeal.day}: ${nextMeal.name} for $${nextMeal.price.toFixed(2)}. Packed lunch stays the default until you purchase.`,
      zh: `下一顿可选餐是${nextMeal.day}：${nextMeal.name}，$${nextMeal.price.toFixed(2)}。不购买则默认带饭。`,
      pa: `ਅਗਲਾ ਖੁੱਲ੍ਹਾ ਭੋਜਨ ${nextMeal.day}: ${nextMeal.name} $${nextMeal.price.toFixed(2)}। ਘਰ ਦਾ ਲੰਚ ਡਿਫਾਲਟ ਰਹਿੰਦਾ ਹੈ।`,
      es: `El próximo almuerzo abierto es ${nextMeal.day}: ${nextMeal.name} por $${nextMeal.price.toFixed(2)}. El lunch de casa queda si no compran.`,
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
  ];
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
      ridesBus()
        ? `<div class="banner">
      <div>
        <strong>${tx("Bus update")}</strong>
        ${tx(state.busChange)}
      </div>
      <a class="btn ghost" href="#/bus">${tx("See route")}</a>
    </div>`
        : `<div class="banner">
      <div>
        <strong>${tx("Walks home")}</strong>
        ${txf("{name} is Grade 8 and dismisses at 3:10. No Route 7 seat — Maya and Noah still ride.", { name: kid.short })}
      </div>
      <a class="btn ghost" href="#/bus">${tx("Dismissal")}</a>
    </div>`
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
        <div class="metric-value">${tx(nextMeal.day)}</div>
        <div class="metric-hint">${tx(nextMeal.name)} ${tx("still open")}</div>
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
    { label: "Today", href: "#/" },
    { label: "Calendar", href: "#/calendar" },
  ]);
  view.innerHTML = `
    <div class="hero">
      <div>
        <h1>${tx("Week of Oct 13")}</h1>
        <p class="lede">${txf("{name}’s week at Cedar Hill K–8. Class holds and office events that change pickup.", { name: child().short })}</p>
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
  `;
  bindCalendarExport();
}

function lunch() {
  paintChrome("lunch");
  setCrumbs([
    { label: "Today", href: "#/" },
    { label: "Cafeteria", href: "#/lunch" },
  ]);
  const due = child().meals.filter((m) => m.bought).reduce((sum, m) => sum + m.price, 0);
  view.innerHTML = `
    <div class="hero">
      <div>
        <h1>${txf("{name}’s cafeteria week", { name: child().short })}</h1>
        <p class="lede">${tx("Tap a meal to order. Packed lunch stays the default until you buy.")}</p>
      </div>
      <div class="stat-row">
        <div><div class="num">$${due.toFixed(2)}</div><div class="kicker">${tx("On the account")}</div></div>
      </div>
    </div>
    <section class="grid-3">
      ${child().meals
        .map(
          (m) => `
        <article class="card menu-card">
          <div class="kicker">${tx(m.day)}</div>
          <strong>${tx(m.name)}</strong>
          <div class="price">$${m.price.toFixed(2)}</div>
          <button class="btn ${m.bought ? "ghost" : ""}" data-meal="${m.id}">
            ${m.bought ? tx("Purchased · undo") : tx("Purchase")}
          </button>
        </article>`
        )
        .join("")}
    </section>
  `;
  view.querySelectorAll("[data-meal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const meal = child().meals.find((m) => m.id === btn.dataset.meal);
      meal.bought = !meal.bought;
      child().mealBalance += meal.bought ? -meal.price : meal.price;
      state.notice = meal.bought
        ? `${meal.name} added for ${meal.day}. Charged to the family account.`
        : `${meal.name} removed. ${child().short} will pack that day.`;
      lunch();
    });
  });
}

function bus() {
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
      <article class="card metric"><div class="metric-label">Family notes</div><div class="metric-value">3</div><div class="metric-hint">Waiting on you</div></article>
      <article class="card metric"><div class="metric-label">Posted</div><div class="metric-value">2</div><div class="metric-hint">Activities this week</div></article>
      <article class="card metric"><div class="metric-label">Lunch</div><div class="metric-value">18</div><div class="metric-hint">Bought today</div></article>
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
      <a class="card metric" href="#/bus"><div class="metric-label">Buses</div><div class="metric-value">1</div><div class="metric-hint warn">Live delay</div></a>
      <a class="card metric" href="#/lunch"><div class="metric-label">Cafeteria</div><div class="metric-value">211</div><div class="metric-hint">Meals purchased today</div></a>
      <a class="card metric" href="#/calendar"><div class="metric-label">Tonight</div><div class="metric-value">6pm</div><div class="metric-hint">Curriculum night</div></a>
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
      <a class="card metric" href="#/schedule"><div class="metric-label">This week</div><div class="metric-value">${state.scheduleItems.length}</div><div class="metric-hint">Teacher + office</div></a>
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
    if (parts[0] === "docs") return mvpDocs(parts[1]);
    if (parts[0] === "attendance" && parts[1] === "report") return attendanceReport();
    if (parts[0] === "attendance") return attendance();
    if (parts[0] === "teach" && parts[1] === "attendance") return teacherAttendance();
    if (parts[0] === "admin" && parts[1] === "attendance") return adminAttendance();
    if (parts[0] === "configure") return mvpConfigure();
    if (parts[0] === "lunch") return lunch();
    if (parts[0] === "bus") return bus();
    if (state.role === "parent") return mvpParentHome();
    return mvpStaffHome();
  }

  if (state.role === "teacher") {
    if (parts[0] === "teach" && parts[1] === "attendance") return teacherAttendance();
    if (parts[0] === "messages") return messages(parts[1]);
    if (parts[0] === "class") return classroom(parts[1]);
    return teacherHome();
  }
  if (state.role === "admin") {
    if (parts[0] === "admin" && parts[1] === "attendance") return adminAttendance();
    if (parts[0] === "bus") return bus();
    if (parts[0] === "lunch") return lunch();
    if (parts[0] === "calendar") return calendar();
    return adminHome();
  }

  if (parts[0] === "attendance" && parts[1] === "report") return attendanceReport();
  if (parts[0] === "attendance") return attendance();
  if (parts[0] === "reports") return reports();
  if (parts[0] === "calendar") return calendar();
  if (parts[0] === "lunch") return lunch();
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
