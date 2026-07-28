/* JavaLogic — MCQ Test engine
   Depends on MCQS array from mcq-data.js
*/
(function () {
  "use strict";
  var list = document.getElementById("mcqList");
  var filterBar = document.getElementById("mcqFilter");
  var sAtt = document.getElementById("statAtt");
  var sCor = document.getElementById("statCor");
  var sTot = document.getElementById("statTot");
  var btnReset = document.getElementById("btnReset");

  var modNames = {
    1: "Basics",
    2: "Control Flow",
    3: "Methods",
    4: "Arrays & Strings",
    5: "Classes & Objects",
    6: "Static"
  };

  var attempted = 0;
  var correct = 0;
  var curFilter = 0; // 0 = All

  sTot.textContent = MCQS.length;

  function updateStats() {
    sAtt.textContent = attempted;
    sCor.textContent = correct;
  }

  function choose(card, item, chosenIndex, opts, exp) {
    if (card.classList.contains("answered")) return;
    card.classList.add("answered");
    var buttons = opts.querySelectorAll(".opt");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
      if (i === item.a) buttons[i].classList.add("correct");
      if (i === chosenIndex && chosenIndex !== item.a) buttons[i].classList.add("wrong");
    }
    attempted++;
    if (chosenIndex === item.a) {
      correct++;
      exp.className = "mcq-exp ok";
      exp.innerHTML = "<strong>Sahi! \u2705</strong> " + item.e;
    } else {
      exp.className = "mcq-exp no";
      exp.innerHTML = "<strong>Galat \u274c</strong> Sahi jawab: " +
        String.fromCharCode(65 + item.a) + ". " + item.e;
    }
    exp.style.display = "block";
    updateStats();
  }

  function render() {
    list.innerHTML = "";
    var shown = 0;
    for (var idx = 0; idx < MCQS.length; idx++) {
      var item = MCQS[idx];
      if (curFilter !== 0 && item.m !== curFilter) continue;
      shown++;

      var card = document.createElement("div");
      card.className = "mcq-card";

      var head = document.createElement("div");
      head.className = "mcq-head";
      head.innerHTML =
        '<span class="mcq-num">Q' + shown + '</span>' +
        '<span class="mcq-tag tag-' + item.m + '">Module ' + item.m + " \u00b7 " +
        modNames[item.m] + "</span>";
      card.appendChild(head);

      var q = document.createElement("p");
      q.className = "mcq-q";
      q.textContent = item.q;
      card.appendChild(q);

      var opts = document.createElement("div");
      opts.className = "mcq-opts";

      var exp = document.createElement("div");
      exp.className = "mcq-exp";

      (function (cardRef, itemRef, optsRef, expRef) {
        for (var oi = 0; oi < itemRef.o.length; oi++) {
          (function (optionIndex) {
            var b = document.createElement("button");
            b.className = "opt";
            b.type = "button";
            b.innerHTML = '<span class="opt-key">' +
              String.fromCharCode(65 + optionIndex) + "</span>" +
              '<span class="opt-txt"></span>';
            b.querySelector(".opt-txt").textContent = itemRef.o[optionIndex];
            b.addEventListener("click", function () {
              choose(cardRef, itemRef, optionIndex, optsRef, expRef);
            });
            optsRef.appendChild(b);
          })(oi);
        }
      })(card, item, opts, exp);

      card.appendChild(opts);
      card.appendChild(exp);
      list.appendChild(card);
    }

    if (shown === 0) {
      list.innerHTML = '<p class="mcq-empty">Is module me koi question nahi.</p>';
    }
  }

  function resetScore() {
    attempted = 0;
    correct = 0;
    updateStats();
  }

  // Build filter bar
  var filters = [
    { lv: 0, label: "All (" + MCQS.length + ")" },
    { lv: 1, label: "M1 Basics" },
    { lv: 2, label: "M2 Control Flow" },
    { lv: 3, label: "M3 Methods" },
    { lv: 4, label: "M4 Arrays & Strings" },
    { lv: 5, label: "M5 Classes" },
    { lv: 6, label: "M6 Static" }
  ];

  filters.forEach(function (f) {
    var b = document.createElement("button");
    b.className = "filter-btn" + (f.lv === 0 ? " active" : "");
    b.type = "button";
    b.textContent = f.label;
    b.addEventListener("click", function () {
      curFilter = f.lv;
      var all = filterBar.querySelectorAll(".filter-btn");
      for (var i = 0; i < all.length; i++) all[i].classList.remove("active");
      b.classList.add("active");
      resetScore();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    filterBar.appendChild(b);
  });

  btnReset.addEventListener("click", function () {
    resetScore();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  updateStats();
  render();
})();
