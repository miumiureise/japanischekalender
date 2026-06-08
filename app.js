const SUPPORTED_YEARS = [2026];
const JST_OFFSET = "+09:00";

const i18n = {
  ja: {
    eyebrow: "暦盤",
    title: "二十四節気と七十二候の日時計",
    lead: "今の季節の名と、次の移ろいまでの時間を静かに眺めます。",
    returnNow: "現在に戻る",
    today: "今日",
    currentDateTime: "現在日時",
    currentTerm: "現在の二十四節気",
    currentMicro: "現在の七十二候",
    zodiacHeading: "十二時辰",
    zodiacLead: "十二支による伝統的な時刻表示",
    zodiacNote: "このアプリでは、十二時辰を現代の固定時刻に対応させて表示しています。歴史的な不定時法を再現したものではありません。",
    nextChange: "次の切り替え",
    remaining: "残り時間",
    selected: "選択中",
    outOfRange: "対応範囲外です。初期版の対応年は2026年のみです。",
    days: "日",
    hours: "時間",
    minutes: "分",
    dataError: "暦データを読み込めませんでした。GitHub PagesなどのWeb URLから開いてください。"
  },
  de: {
    eyebrow: "Kalenderscheibe",
    title: "Sonnenuhr der 24 Sekki und 72 Ko",
    lead: "Ein ruhiger Kalenderkreis zeigt die aktuelle japanische Jahreszeit und den nächsten Wechsel.",
    returnNow: "Zur aktuellen Zeit",
    today: "Heute",
    currentDateTime: "Aktuelles Datum",
    currentTerm: "Aktueller Sekki",
    currentMicro: "Aktueller Ko",
    zodiacHeading: "Die zwölf Doppelstunden",
    zodiacLead: "Traditionelle Zeitangabe mit den zwölf Tierzeichen",
    zodiacNote: "Diese App ordnet die zwölf Doppelstunden festen modernen Uhrzeiten zu. Sie bildet das historische System der ungleichen Stunden nicht vollständig nach.",
    nextChange: "Nächster Wechsel",
    remaining: "Verbleibende Zeit",
    selected: "Auswahl",
    outOfRange: "Ausserhalb des Datenbereichs. Diese erste Version unterstuetzt nur 2026.",
    days: "Tage",
    hours: "Std.",
    minutes: "Min.",
    dataError: "Die Kalenderdaten konnten nicht geladen werden. Bitte ueber eine Web-URL wie GitHub Pages oeffnen."
  }
};

const zodiacHours = [
  {
    id: "ne",
    sign: "子",
    nameJa: "子の刻",
    nameDe: "Stunde der Ratte",
    range: "23:00-00:59",
    startHour: 23,
    descriptionJa: "一日の境目にあたる時間帯。夜が深まり、新しい日へ静かに移る刻です。",
    descriptionDe: "Die Doppelstunde der Ratte liegt an der Grenze des Tages, wenn die Nacht in einen neuen Tag uebergeht."
  },
  {
    id: "ushi",
    sign: "丑",
    nameJa: "丑の刻",
    nameDe: "Stunde des Ochsen",
    range: "01:00-02:59",
    startHour: 1,
    descriptionJa: "夜の静けさがもっとも深い時間帯。大地が眠るような刻です。",
    descriptionDe: "Die Doppelstunde des Ochsen ist eine tiefe Nachtzeit, ruhig und schwer."
  },
  {
    id: "tora",
    sign: "寅",
    nameJa: "寅の刻",
    nameDe: "Stunde des Tigers",
    range: "03:00-04:59",
    startHour: 3,
    descriptionJa: "夜明け前の時間帯。暗さの奥で朝の気配が動き始めます。",
    descriptionDe: "Die Doppelstunde des Tigers liegt vor der Daemmerung, wenn der Morgen noch verborgen ist."
  },
  {
    id: "u",
    sign: "卯",
    nameJa: "卯の刻",
    nameDe: "Stunde des Hasen",
    range: "05:00-06:59",
    startHour: 5,
    descriptionJa: "朝が開く時間帯。光が戻り、一日の動きが始まります。",
    descriptionDe: "Die Doppelstunde des Hasen oeffnet den Morgen und bringt das erste Licht."
  },
  {
    id: "tatsu",
    sign: "辰",
    nameJa: "辰の刻",
    nameDe: "Stunde des Drachen",
    range: "07:00-08:59",
    startHour: 7,
    descriptionJa: "朝の勢いが増す時間帯。仕事や暮らしが本格的に動き出します。",
    descriptionDe: "Die Doppelstunde des Drachen gehoert zum wachsenden Morgen."
  },
  {
    id: "mi",
    sign: "巳",
    nameJa: "巳の刻",
    nameDe: "Stunde der Schlange",
    range: "09:00-10:59",
    startHour: 9,
    descriptionJa: "日が高くなり始める時間帯。午前の明るさが整う刻です。",
    descriptionDe: "Die Doppelstunde der Schlange liegt im hellen Vormittag."
  },
  {
    id: "uma",
    sign: "午",
    nameJa: "午の刻",
    nameDe: "Stunde des Pferdes",
    range: "11:00-12:59",
    startHour: 11,
    descriptionJa: "正午を含む時間帯。「正午」という言葉は午の刻に由来します。",
    descriptionDe: "Die Doppelstunde des Pferdes umfasst den Mittag; der japanische Begriff fuer Mittag leitet sich davon ab."
  },
  {
    id: "hitsuji",
    sign: "未",
    nameJa: "未の刻",
    nameDe: "Stunde der Ziege",
    range: "13:00-14:59",
    startHour: 13,
    descriptionJa: "午後の熱や明るさが残る時間帯。昼の余韻が続きます。",
    descriptionDe: "Die Doppelstunde der Ziege gehoert zum fruehen Nachmittag."
  },
  {
    id: "saru",
    sign: "申",
    nameJa: "申の刻",
    nameDe: "Stunde des Affen",
    range: "15:00-16:59",
    startHour: 15,
    descriptionJa: "日が傾き始める時間帯。夕方へ向かう気配が生まれます。",
    descriptionDe: "Die Doppelstunde des Affen fuehrt in den spaeten Nachmittag."
  },
  {
    id: "tori",
    sign: "酉",
    nameJa: "酉の刻",
    nameDe: "Stunde des Hahns",
    range: "17:00-18:59",
    startHour: 17,
    descriptionJa: "夕暮れを迎える時間帯。家路や一日の区切りを思わせます。",
    descriptionDe: "Die Doppelstunde des Hahns liegt am Abend, wenn der Tag sich schliesst."
  },
  {
    id: "inu",
    sign: "戌",
    nameJa: "戌の刻",
    nameDe: "Stunde des Hundes",
    range: "19:00-20:59",
    startHour: 19,
    descriptionJa: "夜が落ち着き始める時間帯。灯りのそばで過ごす刻です。",
    descriptionDe: "Die Doppelstunde des Hundes gehoert zum ruhigen Beginn der Nacht."
  },
  {
    id: "i",
    sign: "亥",
    nameJa: "亥の刻",
    nameDe: "Stunde des Schweins",
    range: "21:00-22:59",
    startHour: 21,
    descriptionJa: "眠りへ向かう時間帯。一日を閉じ、静けさに戻る刻です。",
    descriptionDe: "Die Doppelstunde des Schweins fuehrt in die Schlafenszeit."
  }
];

let data = null;
let lang = localStorage.getItem("seasonDialLang") || "ja";
let viewedDate = new Date();
let manualMode = false;
let selectedItem = null;
let dragAngle = null;

const els = {
  termSegments: document.querySelector("#term-segments"),
  microSegments: document.querySelector("#micro-segments"),
  hourSegments: document.querySelector("#hour-segments"),
  labels: document.querySelector("#dial-labels"),
  hand: document.querySelector("#hand"),
  dialWrap: document.querySelector("#dial-wrap"),
  currentDateTime: document.querySelector("#current-datetime"),
  termName: document.querySelector("#term-name"),
  termDesc: document.querySelector("#term-desc"),
  microName: document.querySelector("#micro-name"),
  microDesc: document.querySelector("#micro-desc"),
  hourName: document.querySelector("#hour-name"),
  hourDesc: document.querySelector("#hour-desc"),
  centerTime: document.querySelector("#center-time"),
  centerTerm: document.querySelector("#center-term"),
  centerMicro: document.querySelector("#center-micro"),
  nextChange: document.querySelector("#next-change"),
  remaining: document.querySelector("#remaining"),
  selectedTitle: document.querySelector("#selected-title"),
  selectedBody: document.querySelector("#selected-body"),
  rangeNote: document.querySelector("#range-note")
};

init();

async function init() {
  setLanguage(lang);
  bindControls();
  try {
    data = await fetch(`data/season-${SUPPORTED_YEARS[0]}.json`).then((res) => {
      if (!res.ok) throw new Error("data");
      return res.json();
    });
    drawDial();
    update();
    setInterval(() => {
      if (!manualMode && isSameDate(viewedDate, new Date())) viewedDate = new Date();
      update();
    }, 30000);
  } catch (error) {
    els.rangeNote.textContent = i18n[lang].dataError;
  }
}

function bindControls() {
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
  document.querySelector("#prev-day").addEventListener("click", () => shiftDay(-1));
  document.querySelector("#next-day").addEventListener("click", () => shiftDay(1));
  document.querySelector("#today").addEventListener("click", goNow);
  document.querySelector("#return-now").addEventListener("click", goNow);
  els.dialWrap.addEventListener("pointerdown", startDrag);
  window.addEventListener("pointermove", dragDial);
  window.addEventListener("pointerup", endDrag);
}

function setLanguage(nextLang) {
  lang = nextLang;
  localStorage.setItem("seasonDialLang", lang);
  document.documentElement.lang = lang === "ja" ? "ja" : "de";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = i18n[lang][node.dataset.i18n];
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  if (data) update();
}

function shiftDay(days) {
  manualMode = true;
  viewedDate = new Date(viewedDate.getTime() + days * 86400000);
  update();
}

function goNow() {
  manualMode = false;
  selectedItem = null;
  viewedDate = new Date();
  update();
}

function drawDial() {
  els.termSegments.innerHTML = "";
  els.microSegments.innerHTML = "";
  els.hourSegments.innerHTML = "";
  els.labels.innerHTML = "";

  const visibleTerms = data.solarTerms.filter((term) => term.display !== false);
  const visibleMicroSeasons = data.microSeasons.filter((micro) => micro.display !== false);

  visibleTerms.forEach((term, index) => {
    const start = index * 15;
    const end = start + 15;
    const segment = svgEl("path", {
      d: ringPath(300, 300, 268, 214, start, end),
      class: "term-segment",
      "data-id": term.id
    });
    segment.addEventListener("click", () => selectItem("term", term));
    els.termSegments.appendChild(segment);
    addLabel(term.nameJa, start + 7.5, 242, "dial-label");
  });

  visibleMicroSeasons.forEach((micro, index) => {
    const start = index * 5;
    const end = start + 5;
    const segment = svgEl("path", {
      d: ringPath(300, 300, 205, 150, start, end),
      class: "micro-segment",
      "data-id": micro.id
    });
    segment.addEventListener("click", () => selectItem("micro", micro));
    els.microSegments.appendChild(segment);
    if (index % 3 === 1) addLabel(micro.nameJa, start + 2.5, 177, "dial-label micro");
  });

  zodiacHours.forEach((hour, index) => {
    const start = index * 30;
    const end = start + 30;
    const segment = svgEl("path", {
      d: ringPath(300, 300, 142, 86, start, end),
      class: "hour-segment",
      "data-id": hour.id
    });
    segment.addEventListener("click", () => selectItem("hour", hour));
    els.hourSegments.appendChild(segment);
    const label = addLabel(hour.sign, start + 15, 115, "dial-label hour");
    label.setAttribute("data-id", hour.id);
    label.addEventListener("click", () => selectItem("hour", hour));
  });
}

function addLabel(text, angle, radius, className) {
  const pos = polar(300, 300, radius, angle);
  const label = svgEl("text", { x: pos.x, y: pos.y, class: className });
  label.textContent = text;
  els.labels.appendChild(label);
  return label;
}

function update() {
  const context = getContext(viewedDate);
  document.body.classList.toggle("out-of-range", !context.inRange);
  els.rangeNote.textContent = context.inRange ? data.notes[lang] : i18n[lang].outOfRange;

  if (!context.inRange) {
    setEmptyState();
    return;
  }

  const { term, micro, zodiacHour, nextChange } = context;
  els.currentDateTime.textContent = formatDateTime(viewedDate);
  els.termName.textContent = term.nameJa;
  els.termDesc.textContent = lang === "ja" ? term.descriptionJa : term.descriptionDe;
  els.microName.textContent = micro.nameJa;
  els.microDesc.textContent = lang === "ja" ? micro.descriptionJa : `${micro.nameJa}: ${micro.descriptionDe}`;
  els.hourName.textContent = getZodiacHourTitle(zodiacHour);
  els.hourDesc.textContent = getZodiacHourSummary(zodiacHour);
  els.centerTime.textContent = formatClockTime(viewedDate);
  els.centerTerm.textContent = term.nameJa;
  els.centerMicro.textContent = micro.nameJa;
  els.nextChange.textContent = nextChange ? formatDateTime(parseJst(nextChange.start)) : " -- ";
  els.remaining.textContent = nextChange ? formatRemaining(parseJst(nextChange.start) - viewedDate) : " -- ";

  highlight(".term-segment", term.id);
  highlight(".micro-segment", micro.id);
  highlight(".hour-segment", zodiacHour.id);
  highlight(".dial-label.hour", zodiacHour.id);

  const yearProgress = getYearProgress(viewedDate);
  els.hand.style.transform = `rotate(${yearProgress * 360}deg)`;

  if (!selectedItem) selectedItem = { type: "micro", item: micro };
  renderSelectedItem();
}

function setEmptyState() {
  ["currentDateTime", "termName", "termDesc", "microName", "microDesc", "hourName", "hourDesc", "centerTime", "centerTerm", "centerMicro", "nextChange", "remaining", "selectedTitle", "selectedBody"].forEach((key) => {
    els[key].textContent = "--";
  });
  highlight(".term-segment", "");
  highlight(".micro-segment", "");
  highlight(".hour-segment", "");
  highlight(".dial-label.hour", "");
}

function getContext(date) {
  const year = date.getFullYear();
  if (!SUPPORTED_YEARS.includes(year)) return { inRange: false };

  const term = findCurrent(data.solarTerms, date);
  const micro = findCurrent(data.microSeasons, date);
  const zodiacHour = getZodiacHour(date);
  if (!term || !micro) return { inRange: false };

  const nextTerm = findNext(data.solarTerms, date);
  const nextMicro = findNext(data.microSeasons, date);
  const nextChange = [nextTerm, nextMicro]
    .filter(Boolean)
    .sort((a, b) => parseJst(a.start) - parseJst(b.start))[0];

  return { inRange: true, term, micro, zodiacHour, nextChange };
}

function getZodiacHour(date) {
  const hourFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    hour12: false,
    timeZone: "Asia/Tokyo"
  });
  const hour = Number(hourFormatter.formatToParts(date).find((part) => part.type === "hour").value);
  const normalizedHour = hour === 0 ? 24 : hour;
  return zodiacHours.find((item) => {
    const start = item.startHour === 23 ? 23 : item.startHour;
    const end = item.startHour === 23 ? 25 : item.startHour + 2;
    return normalizedHour >= start && normalizedHour < end;
  }) || zodiacHours[0];
}

function findCurrent(items, date) {
  return items
    .filter((item) => parseJst(item.start) <= date)
    .sort((a, b) => parseJst(b.start) - parseJst(a.start))[0];
}

function findNext(items, date) {
  return items
    .filter((item) => parseJst(item.start) > date)
    .sort((a, b) => parseJst(a.start) - parseJst(b.start))[0];
}

function selectItem(type, item, refresh = true) {
  selectedItem = { type, item };
  renderSelectedItem();
  if (refresh) update();
}

function renderSelectedItem() {
  if (!selectedItem) return;
  const { type, item } = selectedItem;
  if (type === "hour") {
    els.selectedTitle.textContent = getZodiacHourTitle(item);
    els.selectedBody.textContent = `${formatZodiacRange(item.range)} / ${item.sign}\n${getZodiacHourDescription(item)}`;
    return;
  }
  els.selectedTitle.textContent = item.nameJa;
  els.selectedBody.textContent = lang === "ja" ? item.descriptionJa : `${item.nameJa}: ${item.descriptionDe}`;
}

function highlight(selector, id) {
  document.querySelectorAll(selector).forEach((node) => {
    node.classList.toggle("active", node.dataset.id === id);
  });
}

function getZodiacHourTitle(hour) {
  return lang === "ja" ? hour.nameJa : `${hour.nameJa} / ${hour.nameDe}`;
}

function getZodiacHourSummary(hour) {
  return lang === "ja"
    ? `${i18n[lang].zodiacLead}。${formatZodiacRange(hour.range)}。${hour.descriptionJa}`
    : `${i18n[lang].zodiacLead}. ${hour.nameDe}, ${formatZodiacRange(hour.range)}. ${hour.descriptionDe}`;
}

function getZodiacHourDescription(hour) {
  return lang === "ja" ? hour.descriptionJa : `${hour.nameDe}. ${hour.descriptionDe}`;
}

function startDrag(event) {
  if (!isPointerInsideDial(event)) return;
  manualMode = true;
  els.dialWrap.setPointerCapture(event.pointerId);
  dragAngle = pointerAngle(event);
  setDateFromAngle(dragAngle);
}

function dragDial(event) {
  if (dragAngle === null) return;
  dragAngle = pointerAngle(event);
  setDateFromAngle(dragAngle);
}

function endDrag() {
  dragAngle = null;
}

function pointerAngle(event) {
  const rect = els.dialWrap.getBoundingClientRect();
  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;
  return (Math.atan2(y, x) * 180 / Math.PI + 450) % 360;
}

function isPointerInsideDial(event) {
  const rect = els.dialWrap.getBoundingClientRect();
  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;
  const distance = Math.sqrt(x * x + y * y);
  return distance <= rect.width * 0.48;
}

function setDateFromAngle(angle) {
  const year = viewedDate.getFullYear();
  const start = new Date(`${year}-01-01T00:00:00${JST_OFFSET}`);
  const end = new Date(`${year + 1}-01-01T00:00:00${JST_OFFSET}`);
  viewedDate = new Date(start.getTime() + (angle / 360) * (end - start));
  update();
}

function getYearProgress(date) {
  const start = new Date(`${date.getFullYear()}-01-01T00:00:00${JST_OFFSET}`);
  const end = new Date(`${date.getFullYear() + 1}-01-01T00:00:00${JST_OFFSET}`);
  return Math.max(0, Math.min(1, (date - start) / (end - start)));
}

function formatDateTime(date) {
  return new Intl.DateTimeFormat(lang === "ja" ? "ja-JP" : "de-DE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Tokyo"
  }).format(date);
}

function formatClockTime(date) {
  return new Intl.DateTimeFormat(lang === "ja" ? "ja-JP" : "de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Tokyo"
  }).format(date);
}

function formatZodiacRange(range) {
  return range.replace("-", lang === "ja" ? "〜" : "–");
}

function formatRemaining(ms) {
  if (ms <= 0) return `0${i18n[lang].minutes}`;
  const totalMinutes = Math.floor(ms / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  return `${days}${i18n[lang].days} ${hours}${i18n[lang].hours} ${minutes}${i18n[lang].minutes}`;
}

function parseJst(value) {
  return new Date(value);
}

function isSameDate(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function polar(cx, cy, radius, angleDeg) {
  const angle = (angleDeg - 90) * Math.PI / 180;
  return {
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle)
  };
}

function ringPath(cx, cy, outerR, innerR, startAngle, endAngle) {
  const outerStart = polar(cx, cy, outerR, endAngle);
  const outerEnd = polar(cx, cy, outerR, startAngle);
  const innerStart = polar(cx, cy, innerR, startAngle);
  const innerEnd = polar(cx, cy, innerR, endAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 0 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerStart.x} ${innerStart.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 1 ${innerEnd.x} ${innerEnd.y}`,
    "Z"
  ].join(" ");
}

function svgEl(name, attrs) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}
