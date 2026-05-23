// ============================================
// MAMAEXPERT — kalkulator.js
// EDD Calculator dengan Naegele's Rule
// ============================================

const DAYS = ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'];
const MONTHS = ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'];

let selectedCycle = 28;

// Cycle buttons
document.querySelectorAll('.cycle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cycle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (btn.dataset.days === 'custom') {
      document.getElementById('customCycle').classList.remove('hidden');
      selectedCycle = parseInt(document.getElementById('customCycle').value) || 28;
    } else {
      document.getElementById('customCycle').classList.add('hidden');
      selectedCycle = parseInt(btn.dataset.days);
    }
  });
});

document.getElementById('customCycle').addEventListener('input', (e) => {
  selectedCycle = parseInt(e.target.value) || 28;
});

// Set max date to today
document.getElementById('lmpDate').max = new Date().toISOString().split('T')[0];

function formatDate(date) {
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

function calculateEDD() {
  const lmpVal = document.getElementById('lmpDate').value;
  if (!lmpVal) {
    alert('Sila masukkan tarikh haid terakhir kau.');
    return;
  }

  const lmp = new Date(lmpVal);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (lmp > today) {
    alert('Tarikh haid tidak boleh pada masa hadapan.');
    return;
  }

  // Naegele's Rule adjusted for cycle length
  const cycleDiff = selectedCycle - 28;
  const edd = new Date(lmp);
  edd.setDate(edd.getDate() + 280 + cycleDiff);

  // Current week
  const daysPassed = Math.floor((today - lmp) / (1000 * 60 * 60 * 24));
  const weeksPassed = Math.floor(daysPassed / 7);
  const dayInWeek = daysPassed % 7;
  const totalDays = 280 + cycleDiff;
  const daysLeft = Math.max(0, totalDays - daysPassed);
  const pct = Math.min(100, Math.round((daysPassed / totalDays) * 100));

  // Trimester
  let trimester, trimesterNum;
  if (weeksPassed <= 12) { trimester = 'Pertama (Minggu 1–12)'; trimesterNum = 1; }
  else if (weeksPassed <= 26) { trimester = 'Kedua (Minggu 13–26)'; trimesterNum = 2; }
  else { trimester = 'Ketiga (Minggu 27–40)'; trimesterNum = 3; }

  // Fill results
  document.getElementById('resultEDD').textContent = formatDate(edd);
  document.getElementById('resultDay').textContent = `${DAYS[edd.getDay()]}, ${edd.getFullYear()}`;
  document.getElementById('resultWeeks').textContent = weeksPassed <= 40
    ? `Minggu ${weeksPassed} + ${dayInWeek} hari`
    : 'Sudah lepas 40 minggu';
  document.getElementById('resultTrimester').textContent = trimester;
  document.getElementById('resultDaysLeft').textContent = daysLeft > 0 ? `${daysLeft} hari lagi` : 'Sudah tamat!';
  document.getElementById('resultPct').textContent = `${pct}% selesai`;
  document.getElementById('progLabel').textContent = `${pct}% — Minggu ${Math.min(weeksPassed, 40)}`;
  document.getElementById('progFill').style.width = `${pct}%`;

  // Tracker link
  const safeWeek = Math.min(40, Math.max(1, weeksPassed || 1));
  document.getElementById('ctaWeek').textContent = safeWeek;
  document.getElementById('trackerLink').href = `tracker.html?week=${safeWeek}`;

  // Timeline
  buildTimeline(lmp, edd, today, weeksPassed, cycleDiff);

  // Trimester cards
  buildTrimesterCards(trimesterNum, lmp, cycleDiff);

  // Show result
  document.getElementById('resultSection').classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function buildTimeline(lmp, edd, today, currentWeek, cycleDiff) {
  const events = [
    { week: 0,  label: 'Haid terakhir (LMP)', desc: 'Titik mula pengiraan kehamilan', icon: '🩸' },
    { week: 4,  label: 'Ujian kehamilan positif', desc: 'HCG mula boleh dikesan', icon: '✅' },
    { week: 8,  label: 'Temujanji doktor pertama', desc: 'Dengar degupan jantung baby', icon: '🩺' },
    { week: 12, label: 'Tamat Trimester 1', desc: 'Risiko keguguran berkurang', icon: '🎉' },
    { week: 13, label: 'Mula Trimester 2', desc: 'Tenaga kembali, loya berkurang', icon: '💪' },
    { week: 20, label: 'Anomaly scan', desc: 'Ultrasound untuk periksa organ baby', icon: '👶' },
    { week: 24, label: 'Ujian GDM', desc: 'Ujian diabetes gestasi', icon: '🧪' },
    { week: 27, label: 'Mula Trimester 3', desc: 'Perjalanan akhir bermula!', icon: '🌟' },
    { week: 36, label: 'Full term hampir tiba', desc: 'Baby boleh lahir bila-bila masa', icon: '🏁' },
    { week: 40, label: 'Due Date! 🎊', desc: 'Hari yang ditunggu-tunggu', icon: '🎂' },
  ];

  const html = events.map(ev => {
    const evDate = new Date(lmp);
    evDate.setDate(evDate.getDate() + (ev.week * 7) + cycleDiff);
    const isPast = evDate < today;
    const isToday = Math.abs(currentWeek - ev.week) < 1;
    const dotClass = isToday ? 'today' : isPast ? 'past' : '';
    const badgeClass = isToday ? 'tl-badge-today' : isPast ? 'tl-badge-past' : 'tl-badge-future';
    const badgeText = isToday ? '⬅️ Sekarang' : isPast ? '✓ Selesai' : 'Akan datang';

    return `
      <div class="timeline-item">
        <div class="tl-date">${formatDate(evDate)}</div>
        <div class="tl-dot-col"><div class="tl-dot ${dotClass}"></div></div>
        <div class="tl-content">
          <div class="tl-title">${ev.icon} ${ev.label}</div>
          <div class="tl-desc">${ev.desc}</div>
          <span class="tl-badge ${badgeClass}">${badgeText}</span>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('timeline').innerHTML = html;
}

function buildTrimesterCards(currentTri, lmp, cycleDiff) {
  const tris = [
    {
      num: 1, label: 'Trimester Pertama', weeks: 'Minggu 1–12',
      bg: '#FFF0F3', border: '#F4C0D1',
      desc: 'Fasa terpenting pembentukan organ. Morning sickness mungkin hadir. Elak ubat tanpa nasihat doktor.',
      icon: '🌱'
    },
    {
      num: 2, label: 'Trimester Kedua', weeks: 'Minggu 13–26',
      bg: '#F0FBF8', border: '#9FDECE',
      desc: '"Honeymoon trimester" — tenaga kembali, perut membesar cantik, dan baby mula bergerak aktif.',
      icon: '🌸'
    },
    {
      num: 3, label: 'Trimester Ketiga', weeks: 'Minggu 27–40',
      bg: '#FEF9E8', border: '#F5D78E',
      desc: 'Fasa akhir! Baby membesar pesat. Mula buat persediaan — hospital bag, bilik bayi, dan birth plan.',
      icon: '⭐'
    }
  ];

  const html = tris.map(t => {
    const isActive = t.num === currentTri;
    const statusText = t.num < currentTri ? '✓ Selesai' : t.num === currentTri ? '📍 Kau di sini' : '⏳ Akan datang';
    const statusBg = t.num < currentTri ? '#E8F5E9' : t.num === currentTri ? var_rose_light() : '#F5F5F5';
    const statusColor = t.num < currentTri ? '#2E7D32' : t.num === currentTri ? '#C94860' : '#9E9E9E';

    return `
      <div class="tri-card ${isActive ? 'active-tri' : ''}" style="background:${t.bg}; border-color:${isActive ? 'var(--rose)' : t.border}">
        <div style="font-size:28px; margin-bottom:8px">${t.icon}</div>
        <h4>${t.label}</h4>
        <div class="tri-weeks">${t.weeks}</div>
        <p>${t.desc}</p>
        <span class="tri-status" style="background:${statusBg}; color:${statusColor}">${statusText}</span>
      </div>
    `;
  }).join('');

  document.getElementById('trimesterInfo').innerHTML = html;
}

function var_rose_light() { return '#FBEAF0'; }

function resetCalc() {
  document.getElementById('resultSection').classList.add('hidden');
  document.getElementById('lmpDate').value = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
