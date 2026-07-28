/* ============================================
   JavaLogic — Dry Run Visualizer
   Har program ek trace generate karta hai:
   step = { ln: line index, vars: {..}, out: "..", note: ".." }
   ============================================ */

const PROGRAMS = [

  {
    id: "fib",
    name: "Fibonacci (n = 5)",
    file: "Fibonacci.java",
    lines: [
      "int n = 5, a = 0, b = 1;",
      "for (int i = 0; i < n; i++) {",
      "    System.out.print(a + \" \");",
      "    int next = a + b;",
      "    a = b;",
      "    b = next;",
      "}"
    ],
    trace: function () {
      const s = [];
      let n = 5, a = 0, b = 1, out = "";
      s.push({ ln: 0, vars: { n: n, a: a, b: b, i: "-", next: "-" }, out: out, note: "Shuruaat: a = 0, b = 1. Yehi do variables poora kaam karenge." });
      for (let i = 0; i < n; i++) {
        s.push({ ln: 1, vars: { n: n, a: a, b: b, i: i, next: "-" }, out: out, note: "Check: i (" + i + ") < n (5)? Haan — loop body chalegi." });
        out += a + " ";
        s.push({ ln: 2, vars: { n: n, a: a, b: b, i: i, next: "-" }, out: out, note: "a print hua → " + a });
        const next = a + b;
        s.push({ ln: 3, vars: { n: n, a: a, b: b, i: i, next: next }, out: out, note: "next = a + b = " + a + " + " + b + " = " + next });
        const oldA = a;
        a = b;
        s.push({ ln: 4, vars: { n: n, a: a, b: b, i: i, next: next }, out: out, note: "Shift: a ab b ki value le leta hai (" + oldA + " → " + a + ")" });
        b = next;
        s.push({ ln: 5, vars: { n: n, a: a, b: b, i: i, next: next }, out: out, note: "Shift: b ab next ki value le leta hai → " + b });
      }
      s.push({ ln: 1, vars: { n: n, a: a, b: b, i: 5, next: "-" }, out: out, note: "Check: i (5) < n (5)? Nahi — loop khatam. Final output ready!" });
      return s;
    }
  },

  {
    id: "sum",
    name: "Sum of Digits (493)",
    file: "SumOfDigits.java",
    lines: [
      "int n = 493, sum = 0;",
      "while (n > 0) {",
      "    sum += n % 10;",
      "    n /= 10;",
      "}",
      "System.out.println(sum);"
    ],
    trace: function () {
      const s = [];
      let n = 493, sum = 0;
      s.push({ ln: 0, vars: { n: n, sum: sum }, out: "", note: "Shuruaat: n = 493, sum = 0." });
      while (n > 0) {
        s.push({ ln: 1, vars: { n: n, sum: sum }, out: "", note: "Check: n (" + n + ") > 0? Haan — andar chalo." });
        const d = n % 10;
        sum += d;
        s.push({ ln: 2, vars: { n: n, sum: sum }, out: "", note: "Last digit " + d + " (= " + n + " % 10) sum me juda → sum = " + sum });
        n = Math.floor(n / 10);
        s.push({ ln: 3, vars: { n: n, sum: sum }, out: "", note: "n / 10 se last digit hata → n = " + n });
      }
      s.push({ ln: 1, vars: { n: n, sum: sum }, out: "", note: "Check: n (0) > 0? Nahi — loop khatam." });
      s.push({ ln: 5, vars: { n: n, sum: sum }, out: String(sum), note: "Answer print: " + sum + " (4 + 9 + 3)" });
      return s;
    }
  },

  {
    id: "rev",
    name: "Reverse Number (123)",
    file: "Reverse.java",
    lines: [
      "int n = 123, rev = 0;",
      "while (n > 0) {",
      "    rev = rev * 10 + n % 10;",
      "    n /= 10;",
      "}",
      "System.out.println(rev);"
    ],
    trace: function () {
      const s = [];
      let n = 123, rev = 0;
      s.push({ ln: 0, vars: { n: n, rev: rev }, out: "", note: "Shuruaat: n = 123, rev = 0." });
      while (n > 0) {
        s.push({ ln: 1, vars: { n: n, rev: rev }, out: "", note: "Check: n (" + n + ") > 0? Haan." });
        const d = n % 10;
        const old = rev;
        rev = rev * 10 + d;
        s.push({ ln: 2, vars: { n: n, rev: rev }, out: "", note: "rev = " + old + " × 10 + " + d + " = " + rev + " — purana rev left shift, naya digit peeche." });
        n = Math.floor(n / 10);
        s.push({ ln: 3, vars: { n: n, rev: rev }, out: "", note: "n /= 10 → n = " + n });
      }
      s.push({ ln: 1, vars: { n: n, rev: rev }, out: "", note: "Check: n (0) > 0? Nahi — bahar niklo." });
      s.push({ ln: 5, vars: { n: n, rev: rev }, out: String(rev), note: "123 ulta hoke ban gaya " + rev + "!" });
      return s;
    }
  },

  {
    id: "fact",
    name: "Factorial (5)",
    file: "Factorial.java",
    lines: [
      "int n = 5;",
      "long fact = 1;",
      "for (int i = 1; i <= n; i++) {",
      "    fact *= i;",
      "}",
      "System.out.println(fact);"
    ],
    trace: function () {
      const s = [];
      let n = 5, fact = 1;
      s.push({ ln: 0, vars: { n: n, fact: "-", i: "-" }, out: "", note: "n = 5 — iska factorial chahiye." });
      s.push({ ln: 1, vars: { n: n, fact: fact, i: "-" }, out: "", note: "fact = 1 se shuru (0 se karte toh sab 0 ho jaata!)." });
      for (let i = 1; i <= n; i++) {
        s.push({ ln: 2, vars: { n: n, fact: fact, i: i }, out: "", note: "Check: i (" + i + ") <= n (5)? Haan." });
        const old = fact;
        fact *= i;
        s.push({ ln: 3, vars: { n: n, fact: fact, i: i }, out: "", note: "fact = " + old + " × " + i + " = " + fact });
      }
      s.push({ ln: 2, vars: { n: n, fact: fact, i: 6 }, out: "", note: "Check: i (6) <= n (5)? Nahi — loop khatam." });
      s.push({ ln: 5, vars: { n: n, fact: fact, i: 6 }, out: String(fact), note: "5! = " + fact });
      return s;
    }
  },

  {
    id: "swap",
    name: "Swap Without Temp",
    file: "Swap.java",
    lines: [
      "int a = 5, b = 9;",
      "a = a + b;",
      "b = a - b;",
      "a = a - b;",
      "System.out.println(a + \" \" + b);"
    ],
    trace: function () {
      const s = [];
      let a = 5, b = 9;
      s.push({ ln: 0, vars: { a: a, b: b }, out: "", note: "a = 5, b = 9 — inko bina teesre variable ke swap karna hai." });
      a = a + b;
      s.push({ ln: 1, vars: { a: a, b: b }, out: "", note: "a = 5 + 9 = 14 — ab a me dono ka TOTAL hai. Yehi trick hai!" });
      b = a - b;
      s.push({ ln: 2, vars: { a: a, b: b }, out: "", note: "b = 14 - 9 = 5 — total me se purana b hataya toh purana a mila!" });
      a = a - b;
      s.push({ ln: 3, vars: { a: a, b: b }, out: "", note: "a = 14 - 5 = 9 — total me se naya b hataya toh purana b mila!" });
      s.push({ ln: 4, vars: { a: a, b: b }, out: a + " " + b, note: "Swap complete — bina temp ke! 🎉" });
      return s;
    }
  },

  {
    id: "pal",
    name: "Palindrome (121)",
    file: "Palindrome.java",
    lines: [
      "int n = 121, original = n, rev = 0;",
      "while (n > 0) {",
      "    rev = rev * 10 + n % 10;",
      "    n /= 10;",
      "}",
      "System.out.println(rev == original);"
    ],
    trace: function () {
      const s = [];
      let n = 121, original = n, rev = 0;
      s.push({ ln: 0, vars: { n: n, original: original, rev: rev }, out: "", note: "original me copy save ki — kyunki n loop me barbaad ho jaayega." });
      while (n > 0) {
        s.push({ ln: 1, vars: { n: n, original: original, rev: rev }, out: "", note: "Check: n (" + n + ") > 0? Haan." });
        const d = n % 10;
        const old = rev;
        rev = rev * 10 + d;
        s.push({ ln: 2, vars: { n: n, original: original, rev: rev }, out: "", note: "rev = " + old + " × 10 + " + d + " = " + rev });
        n = Math.floor(n / 10);
        s.push({ ln: 3, vars: { n: n, original: original, rev: rev }, out: "", note: "n /= 10 → n = " + n });
      }
      s.push({ ln: 1, vars: { n: n, original: original, rev: rev }, out: "", note: "n = 0 — loop khatam." });
      s.push({ ln: 5, vars: { n: n, original: original, rev: rev }, out: "true", note: "rev (" + rev + ") == original (" + original + ")? Haan — palindrome hai! ✓" });
      return s;
    }
  }
];

/* ============================================
   UI wiring
   ============================================ */

const progBar = document.getElementById("progBar");
const progName = document.getElementById("progName");
const codeLines = document.getElementById("codeLines");
const varHead = document.getElementById("varHead");
const varRow = document.getElementById("varRow");
const outBox = document.getElementById("outBox");
const noteBox = document.getElementById("noteBox");
const stepCount = document.getElementById("stepCount");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const btnReset = document.getElementById("btnReset");

let current = null;
let steps = [];
let idx = -1;
let prevVars = {};

function make(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function loadProgram(p) {
  current = p;
  steps = p.trace();
  idx = -1;
  prevVars = {};

  progName.textContent = p.file;
  codeLines.textContent = "";
  p.lines.forEach(function (line) {
    codeLines.appendChild(make("li", null, line));
  });

  document.querySelectorAll("#progBar .filter-btn").forEach(function (b) {
    b.classList.toggle("active", b.dataset.id === p.id);
  });

  renderStep();
}

function renderStep() {
  const lis = codeLines.children;
  for (let i = 0; i < lis.length; i++) lis[i].classList.remove("active");

  if (idx < 0) {
    varHead.textContent = "";
    varRow.textContent = "";
    const vars = steps.length ? steps[0].vars : {};
    Object.keys(vars).forEach(function (k) {
      varHead.appendChild(make("th", null, k));
      varRow.appendChild(make("td", null, "-"));
    });
    outBox.textContent = "";
    noteBox.textContent = "Next Step dabao — pehli line chalegi.";
    stepCount.textContent = "Step 0 / " + steps.length;
    btnPrev.disabled = true;
    btnNext.disabled = false;
    prevVars = {};
    return;
  }

  const st = steps[idx];
  if (st.ln >= 0 && st.ln < lis.length) {
    lis[st.ln].classList.add("active");
  }

  varHead.textContent = "";
  varRow.textContent = "";
  Object.keys(st.vars).forEach(function (k) {
    varHead.appendChild(make("th", null, k));
    const td = make("td", null, String(st.vars[k]));
    if (String(prevVars[k]) !== String(st.vars[k]) && idx > 0) {
      td.classList.add("changed");
    }
    varRow.appendChild(td);
  });
  prevVars = st.vars;

  outBox.textContent = st.out;
  noteBox.textContent = st.note;
  stepCount.textContent = "Step " + (idx + 1) + " / " + steps.length;
  btnPrev.disabled = idx <= 0;
  btnNext.disabled = idx >= steps.length - 1;
}

btnNext.addEventListener("click", function () {
  if (idx < steps.length - 1) {
    if (idx >= 0) prevVars = steps[idx].vars;
    idx++;
    renderStep();
  }
});

btnPrev.addEventListener("click", function () {
  if (idx > 0) {
    idx--;
    prevVars = idx > 0 ? steps[idx - 1].vars : {};
    renderStep();
  }
});

btnReset.addEventListener("click", function () {
  idx = -1;
  renderStep();
});

// Keyboard: right/left arrows
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") btnNext.click();
  if (e.key === "ArrowLeft") btnPrev.click();
});

// Build program selector
PROGRAMS.forEach(function (p) {
  const b = make("button", "filter-btn", p.name);
  b.dataset.id = p.id;
  b.addEventListener("click", function () { loadProgram(p); });
  progBar.appendChild(b);
});

loadProgram(PROGRAMS[0]);
