(function () {
  const data = window.SITE_DATA || { counties: [], tornado: [], heatmap: { wages: [], utils: [], values: [] } };
  const money = (n) => n.toLocaleString("en-US");

  let sortKey = "rank";
  let sortDir = 1;

  function renderScorecard() {
    const tbody = document.querySelector("#scorecard tbody");
    if (!tbody) return;
    const rows = data.counties.slice().sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (typeof av === "string") return av.localeCompare(bv) * sortDir;
      return (av - bv) * sortDir;
    });
    tbody.innerHTML = rows
      .map(
        (c) => `<tr>
        <td>${c.rank}</td>
        <td>${c.name}<div class="sub">${c.region}</div></td>
        <td>
          <div class="score-cell">
            <span>${c.score}</span>
            <span class="mini-bar"><span style="width:${c.score}%"></span></span>
          </div>
        </td>
        <td>$${money(c.income)}</td>
        <td>${c.own}%</td>
        <td>${c.competition}</td>
        <td>${c.verdict}</td>
      </tr>`
      )
      .join("");
  }

  document.querySelectorAll("#scorecard [data-sort]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-sort");
      if (sortKey === key) sortDir *= -1;
      else {
        sortKey = key;
        sortDir = key === "name" || key === "rank" || key === "competition" || key === "verdict" ? 1 : -1;
      }
      renderScorecard();
    });
  });
  renderScorecard();

  const tornado = document.getElementById("tornado");
  if (tornado) {
    const max = Math.max(...data.tornado.map((d) => d.swing));
    tornado.innerHTML = data.tornado
      .map((d) => {
        const w = Math.round((d.swing / max) * 100);
        return `<div class="tornado-row">
          <div class="tornado-label">${d.driver}</div>
          <div class="tornado-bar"><span style="width:${w}%"></span></div>
          <div class="tornado-val">${d.swing}</div>
        </div>`;
      })
      .join("");
  }

  const heat = document.getElementById("heatmap");
  if (heat && data.heatmap.values.length) {
    const vals = data.heatmap.values.flat();
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const color = (v) => {
      if (v < 0) {
        const t = Math.min(1, Math.abs(v) / Math.abs(min || 1));
        return `rgba(142, 27, 46, ${0.12 + t * 0.38})`;
      }
      const t = v / (max || 1);
      return `rgba(22, 20, 16, ${0.05 + t * 0.22})`;
    };
    let html =
      "<thead><tr><th>Wage \\ util.</th>" +
      data.heatmap.utils.map((u) => `<th>${u}</th>`).join("") +
      "</tr></thead><tbody>";
    data.heatmap.wages.forEach((w, i) => {
      html += `<tr><th>${w}</th>`;
      data.heatmap.values[i].forEach((v, j) => {
        const base = w === "Base" && data.heatmap.utils[j] === "Base";
        html += `<td class="${base ? "base" : ""}" style="background:${color(v)}">${v}</td>`;
      });
      html += "</tr>";
    });
    html += "</tbody>";
    heat.innerHTML = html;
  }

  const rail = document.getElementById("rail");
  const toggle = document.getElementById("menu-toggle");
  const backdrop = document.getElementById("backdrop");

  function closeMenu() {
    rail.classList.remove("open");
    backdrop.classList.remove("show");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    rail.classList.add("open");
    backdrop.classList.add("show");
    toggle.setAttribute("aria-expanded", "true");
  }

  if (toggle && rail && backdrop) {
    toggle.addEventListener("click", () => {
      if (rail.classList.contains("open")) closeMenu();
      else openMenu();
    });
    backdrop.addEventListener("click", closeMenu);
    rail.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  }
})();
