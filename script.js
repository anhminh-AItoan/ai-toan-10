const state = { mode: "hoc", currentDang: null, currentDe: "" };
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const el = {
  inputDe: $("#inputDe"), btnGiai: $("#btnGiai"), btnXoa: $("#btnXoa"),
  ketQua: $("#ketQua"), dangToan: $("#dangToan"), kienThuc: $("#kienThuc"),
  phanTich: $("#phanTich"), loiGiai: $("#loiGiai"), giaiThich: $("#giaiThich"),
  ketLuan: $("#ketLuan"), loiThuongGap: $("#loiThuongGap"), baiTuongTu: $("#baiTuongTu"),
  inputHint: $("#inputHint"), drawer: $("#drawer"), overlay: $("#overlay"),
  btnMenu: $("#btnMenu"), btnCloseDrawer: $("#btnCloseDrawer")
};

function chuanHoa(s) {
  return s.toLowerCase().replace(/\s+/g, " ")
    .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, "a")
    .replace(/[èéẹẻẽêềếệểễ]/g, "e")
    .replace(/[ìíịỉĩ]/g, "i")
    .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, "o")
    .replace(/[ùúụủũưừứựửữ]/g, "u")
    .replace(/[ỳýỵỷỹ]/g, "y").replace(/đ/g, "d").trim();
}

function nhanDangDangToan(de) {
  const deChuan = chuanHoa(de);
  const deGoc = de.trim();
  let best = null, bestScore = 0;
  for (const dang of DANG_TOAN) {
    let score = 0;
    for (const tk of dang.tuKhoa) {
      const tkChuan = chuanHoa(tk);
      if (!tkChuan) continue;
      if (/[|<>≤≥√²{}]/.test(tk)) { if (deGoc.includes(tk)) score += 3; continue; }
      if (deChuan.includes(tkChuan)) score += tkChuan.split(" ").length >= 2 ? 2 : 1;
    }
    if (dang.id === "c2-bpt-gia-tri-tuyet-doi" && /\|[^|]+\|\s*[<>≤≥]/.test(de)) score += 10;
    if (dang.id === "c7-phuong-trinh-bac-hai" && /x\s*\^\s*2|x²/.test(de)) score += 8;
    if (dang.id === "c2-bpt-bac-nhat" && /[<>≤≥]/.test(de) && !/\|/.test(de)) score += 4;
    if (score > bestScore) { bestScore = score; best = dang; }
  }
  return bestScore > 0 ? best : null;
}

function giaiBPTTriTuyetDoi(de) {
  const m = de.replace(/\s+/g, "").match(/\|([^|]+)\|\s*([<>≤≥])\s*(-?[\d.]+)/);
  if (!m) return null;
  const A = m[1], op = m[2], val = parseFloat(m[3]);
  const steps = [
    { title: "Bước 1: Xác định dạng", content: `Dạng: <code>|${A}| ${op} ${val}</code>` },
    { title: "Bước 2: Áp dụng công thức", content: op === "<" || op === "≤"
      ? `Với <code>|A| ${op} m</code>: <code>-${val} ${op} ${A} ${op} ${val}</code>.`
      : `Với <code>|A| ${op} m</code>: <code>${A} ${op === ">" ? "<" : "≤"} -${val}</code> hoặc <code>${A} ${op === ">" ? ">" : "≥"} ${val}</code>.` }
  ];
  let finalAnswer = "";
  const linear = A.match(/^x([+\-]\d+)?$/);
  if (linear) {
    const b = linear[1] ? parseFloat(linear[1]) : 0;
    steps.push({ title: "Bước 3: Giải ẩn x", content: op === "<" || op === "≤"
      ? `Kết hợp: <code>${-val - b} < x ${op} ${val - b}</code>.`
      : `Kết hợp: <code>x ${op === ">" ? "<" : "≤"} ${-val - b}</code> hoặc <code>x ${op === ">" ? ">" : "≥"} ${val - b}</code>.` });
    finalAnswer = op === "<" || op === "≤"
      ? `S = (${-val - b}; ${val - b})`
      : `S = (-∞; ${-val - b}) ∪ (${val - b}; +∞)`;
  } else { finalAnswer = "Xem các bước trên."; }
  return { steps, finalAnswer };
}

function giaiBPTBacNhat(de) {
  const m = de.match(/(-?\d*\.?\d*)x\s*([+\-]\s*\d+\.?\d*)?\s*([<>≤≥])\s*(-?\d+\.?\d*)/);
  if (!m) return null;
  const a = m[1] === "" || m[1] === "-" ? (m[1] === "-" ? -1 : 1) : parseFloat(m[1]);
  const b = m[2] ? parseFloat(m[2].replace(/\s+/g, "")) : 0;
  const op = m[3], c = parseFloat(m[4]);
  const steps = [
    { title: "Bước 1: Xác định BPT", content: `<code>${a}x ${b >= 0 ? "+" : "-"} ${Math.abs(b)} ${op} ${c}</code>` },
    { title: "Bước 2: Chuyển vế", content: `<code>${a}x ${op} ${c - b}</code>` }
  ];
  const flipped = op === "<" ? ">" : op === ">" ? "<" : op === "≤" ? "≥" : "≤";
  const useOp = a < 0 ? flipped : op;
  const xVal = (c - b) / a;
  steps.push({ title: "Bước 3: Chia hai vế", content: a < 0
    ? `Chia cho số âm <code>${a}</code> nên đổi chiều: <code>x ${useOp} ${xVal}</code>.`
    : `Chia cho <code>${a}</code>: <code>x ${useOp} ${xVal}</code>.` });
  return { steps, finalAnswer: `x ${useOp} ${xVal}` };
}

function giaiPTBacHai(de) {
  const m = de.replace(/\s+/g, "").match(/(-?\d*)x\^?2\s*([+\-]\d*x)?\s*([+\-]\d+)?\s*=\s*0/);
  if (!m) return null;
  let a = m[1] === "" || m[1] === "+" ? 1 : m[1] === "-" ? -1 : parseFloat(m[1]);
  let b = 0, c = 0;
  if (m[2]) { const bm = m[2].match(/([+\-]\d*)x/); if (bm) b = bm[1] === "+" ? 1 : bm[1] === "-" ? -1 : parseFloat(bm[1]); }
  if (m[3]) c = parseFloat(m[3]);
  const delta = b * b - 4 * a * c;
  const steps = [
    { title: "Bước 1: Hệ số", content: `<code>a=${a}, b=${b}, c=${c}</code>` },
    { title: "Bước 2: Tính Δ", content: `<code>Δ = ${b}² - 4·${a}·${c} = ${delta}</code>` }
  ];
  let finalAnswer = "";
  if (delta > 0) {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a), x2 = (-b - Math.sqrt(delta)) / (2 * a);
    steps.push({ title: "Bước 3: Δ > 0", content: `<code>x₁ = ${x1.toFixed(4)}</code>, <code>x₂ = ${x2.toFixed(4)}</code>` });
    finalAnswer = `x₁ = ${x1.toFixed(4)}; x₂ = ${x2.toFixed(4)}`;
  } else if (delta === 0) {
    const x = -b / (2 * a);
    steps.push({ title: "Bước 3: Δ = 0", content: `<code>x = ${x.toFixed(4)}</code>` });
    finalAnswer = `x = ${x.toFixed(4)}`;
  } else {
    steps.push({ title: "Bước 3: Δ < 0", content: `Phương trình vô nghiệm.` });
    finalAnswer = "Phương trình vô nghiệm.";
  }
  return { steps, finalAnswer };
}

function giaiTheoDang(de, dang) {
  if (dang.id === "c2-bpt-gia-tri-tuyet-doi") { const r = giaiBPTTriTuyetDoi(de); if (r) return r; }
  if (dang.id === "c2-bpt-bac-nhat") { const r = giaiBPTBacNhat(de); if (r) return r; }
  if (dang.id === "c7-phuong-trinh-bac-hai") { const r = giaiPTBacHai(de); if (r) return r; }
  return { steps: dang.phuongPhap.map((p, i) => ({ title: `Bước ${i + 1}`, content: p })), finalAnswer: "Xem các bước." };
}

function hienThiKetQua(de, dang) {
  el.ketQua.classList.remove("hidden");
  const kt = KIEN_THUC[dang.kienThuc[0]];
  const chuongTen = kt ? kt.ten : "";
  el.dangToan.innerHTML = `<p><strong>Chương:</strong> ${dang.chuong}. ${chuongTen}</p><p><strong>Dạng:</strong> ${dang.ten}</p><p><strong>Mức độ:</strong> ${dang.mucDo}</p>`;
  let ktHtml = "";
  if (kt) {
    ktHtml += `<p><strong>Lý thuyết:</strong></p><ul>`;
    kt.lyThuyet.forEach(l => ktHtml += `<li>${l}</li>`);
    ktHtml += `</ul><p><strong>Công thức:</strong></p><ul>`;
    kt.congThuc.forEach(c => ktHtml += `<li><span class="formula">${c}</span></li>`);
    ktHtml += `</ul>`;
  }
  el.kienThuc.innerHTML = ktHtml;
  el.phanTich.innerHTML = `<p><strong>Đề bài:</strong> <code>${de}</code></p>`;
  const lg = giaiTheoDang(de, dang);
  let lgHtml = "";
  lg.steps.forEach(s => { lgHtml += `<div class="step"><div class="step-title">🔹 ${s.title}</div><div>${s.content}</div></div>`; });
  if (lg.finalAnswer) lgHtml += `<div class="answer-box">✅ ${lg.finalAnswer}</div>`;
  el.loiGiai.innerHTML = lgHtml;
  el.giaiThich.innerHTML = `<p>💡 Đọc kỹ từng bước và tự làm lại bài tương tự.</p>`;
  el.ketLuan.innerHTML = `<p><strong>Đáp án:</strong> ${lg.finalAnswer}</p>`;
  let lh = "";
  dang.loiThuongGap.forEach(l => lh += `<div class="warn-item">⚠️ ${l}</div>`);
  el.loiThuongGap.innerHTML = lh;
  const list = getBaiTuongTu(dang.id);
  el.baiTuongTu.innerHTML = list.length ? "<ul>" + list.map(b => `<li>${b}</li>`).join("") + "</ul>" : "<p><em>Chưa có.</em></p>";
}

function xuLyGiai() {
  const de = el.inputDe.value.trim();
  if (!de) { el.inputHint.textContent = "⚠️ Nhập đề trước!"; el.inputHint.style.color = "#ef4444"; return; }
  el.inputHint.textContent = "";
  state.currentDe = de;
  el.btnGiai.innerHTML = '<span class="loading"></span> Đang phân tích...';
  el.btnGiai.disabled = true;
  setTimeout(() => {
    const dang = nhanDangDangToan(de);
    el.btnGiai.innerHTML = "🚀 GIẢI BÀI";
    el.btnGiai.disabled = false;
    if (!dang) {
      el.ketQua.classList.remove("hidden");
      el.dangToan.innerHTML = "<p>❌ Không nhận dạng được dạng toán.</p>";
      [el.kienThuc, el.phanTich, el.loiGiai, el.giaiThich, el.ketLuan, el.loiThuongGap, el.baiTuongTu].forEach(x => x.innerHTML = "");
      return;
    }
    state.currentDang = dang;
    hienThiKetQua(de, dang);
    setTimeout(() => el.ketQua.scrollIntoView({ behavior: "smooth" }), 100);
  }, 400);
}

el.btnGiai.addEventListener("click", xuLyGiai);
el.btnXoa.addEventListener("click", () => {
  el.inputDe.value = ""; el.inputHint.textContent = "";
  el.ketQua.classList.add("hidden");
  state.currentDang = null; state.currentDe = "";
});
$$(".chip").forEach(c => c.addEventListener("click", () => { el.inputDe.value = c.dataset.sample; el.inputDe.focus(); }));
$$(".mode-btn").forEach(b => b.addEventListener("click", () => {
  $$(".mode-btn").forEach(x => x.classList.remove("active"));
  b.classList.add("active");
  state.mode = b.dataset.mode;
}));
el.btnMenu.addEventListener("click", () => { el.drawer.classList.add("open"); el.overlay.classList.add("show"); });
el.btnCloseDrawer.addEventListener("click", () => { el.drawer.classList.remove("open"); el.overlay.classList.remove("show"); });
el.overlay.addEventListener("click", () => { el.drawer.classList.remove("open"); el.overlay.classList.remove("show"); });
$$(".drawer-list li").forEach(li => li.addEventListener("click", () => {
  const c = parseInt(li.dataset.chuong);
  const ds = DANG_TOAN.filter(d => d.chuong === c);
  el.drawer.classList.remove("open"); el.overlay.classList.remove("show");
  el.ketQua.classList.remove("hidden");
  el.dangToan.innerHTML = `<p><strong>📚 Chương ${c}</strong></p><ul>${ds.map(d => `<li><strong>${d.ten}</strong> — ${d.mucDo}</li>`).join("")}</ul>`;
  [el.kienThuc, el.phanTich, el.loiGiai, el.giaiThich, el.ketLuan, el.loiThuongGap, el.baiTuongTu].forEach(x => x.innerHTML = "");
}));

// BÀN PHÍM TOÁN
document.addEventListener("DOMContentLoaded", function() {
  const kb = document.getElementById("mathKeyboard");
  const input = document.getElementById("inputDe");
  const btnToggle = document.getElementById("btnToggleKb");
  if (!kb || !input) return;

  function chenText(text) {
    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;
    const before = input.value.substring(0, start);
    const after = input.value.substring(end);
    input.value = before + text + after;
    const parenPos = text.indexOf("()");
    const newPos = parenPos !== -1 ? start + parenPos + 1 : start + text.length;
    input.setSelectionRange(newPos, newPos);
    input.focus();
  }

  function diChuyen(dir) {
    let pos = input.selectionStart || 0;
    const len = input.value.length;
    if (dir === "left") pos = Math.max(0, pos - 1);
    else if (dir === "right") pos = Math.min(len, pos + 1);
    else if (dir === "up") {
      const before = input.value.substring(0, pos);
      const lastNL = before.lastIndexOf("\n");
      if (lastNL !== -1) {
        const col = pos - lastNL - 1;
        const beforeNL = input.value.substring(0, lastNL);
        const prevNL = beforeNL.lastIndexOf("\n");
        const prevLineStart = prevNL === -1 ? 0 : prevNL + 1;
        pos = prevLineStart + Math.min(col, lastNL - prevLineStart);
      }
    } else if (dir === "down") {
      const after = input.value.substring(pos);
      const nextNL = after.indexOf("\n");
      if (nextNL !== -1) {
        const col = pos - (input.value.substring(0, pos).lastIndexOf("\n") + 1);
        const nextLineStart = pos + nextNL + 1;
        const nextLineEnd = input.value.indexOf("\n", nextLineStart);
        const endPos = nextLineEnd === -1 ? input.value.length : nextLineEnd;
        pos = nextLineStart + Math.min(col, endPos - nextLineStart);
      }
    }
    input.setSelectionRange(pos, pos);
    input.focus();
  }

  kb.addEventListener("click", function(e) {
    const btn = e.target.closest(".kb-key");
    if (!btn) return;
    e.preventDefault();

    if (btn.dataset.insert !== undefined) { chenText(btn.dataset.insert); return; }

    const action = btn.dataset.action;
    if (action === "left") diChuyen("left");
    else if (action === "right") diChuyen("right");
    else if (action === "up") diChuyen("up");
    else if (action === "down") diChuyen("down");
    else if (action === "backspace") {
      const pos = input.selectionStart || 0;
      if (pos > 0) {
        input.value = input.value.substring(0, pos - 1) + input.value.substring(input.selectionEnd || pos);
        input.setSelectionRange(pos - 1, pos - 1);
      }
      input.focus();
    } else if (action === "enter") chenText("\n");
    else if (action === "clear") {
      if (confirm("Xóa toàn bộ nội dung?")) { input.value = ""; input.focus(); }
    }
  });

  if (btnToggle) {
    btnToggle.addEventListener("click", function() {
      kb.classList.toggle("kb-hidden");
      btnToggle.textContent = kb.classList.contains("kb-hidden") ? "Hiện" : "Ẩn";
    });
  }

  console.log("✅ Bàn phím Toán sẵn sàng!");
});

console.log("✅ AI TOÁN 10 đã khởi động!");