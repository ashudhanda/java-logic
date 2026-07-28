/* JavaLogic — Coding Questions engine
   Depends on CODING array from coding-data.js
*/
(function () {
  "use strict";
  var list = document.getElementById("codeList");
  var filterBar = document.getElementById("codeFilter");
  var search = document.getElementById("codeSearch");
  var countBox = document.getElementById("codeCount");

  var modNames = {
    1: "Basics",
    2: "Control Flow",
    3: "Methods",
    4: "Arrays & Strings",
    5: "Classes & Objects",
    6: "Static"
  };

  var curFilter = 0;
  var curSearch = "";

  function render() {
    list.innerHTML = "";
    var shown = 0;
    for (var idx = 0; idx < CODING.length; idx++) {
      var item = CODING[idx];
      if (curFilter !== 0 && item.m !== curFilter) continue;
      if (curSearch && item.name.toLowerCase().indexOf(curSearch) === -1 &&
          item.logic.toLowerCase().indexOf(curSearch) === -1) continue;
      shown++;

      var card = document.createElement("div");
      card.className = "code-q";

      var head = document.createElement("div");
      head.className = "code-q-head";
      head.innerHTML =
        '<span class="code-num">#' + shown + '</span>' +
        '<span class="code-tag tag-' + item.m + '">Module ' + item.m + " \u00b7 " +
        modNames[item.m] + "</span>";
      card.appendChild(head);

      var name = document.createElement("h3");
      name.className = "code-name";
      name.textContent = item.name;
      card.appendChild(name);

      var logic = document.createElement("p");
      logic.className = "code-logic";
      logic.innerHTML = '<span class="logic-label">Logic:</span> ';
      logic.appendChild(document.createTextNode(item.logic));
      card.appendChild(logic);

      list.appendChild(card);
    }

    countBox.textContent = shown + " / " + CODING.length + " questions";
    if (shown === 0) {
      list.innerHTML = '<p class="code-empty">Koi question nahi mila. Filter ya search badlo.</p>';
    }
  }

  var filters = [
    { lv: 0, label: "All (" + CODING.length + ")" },
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
      render();
    });
    filterBar.appendChild(b);
  });

  search.addEventListener("input", function () {
    curSearch = search.value.trim().toLowerCase();
    render();
  });

  render();
})();
