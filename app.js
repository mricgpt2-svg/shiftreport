
const state = { page: "home", phase: "1" };
const view = document.querySelector("#view");

function go(page) {
  state.page = page;
  render();
  window.scrollTo(0, 0);
}

function phase(n) {
  state.phase = n;
  render();
}

function header(title) {
  return `
    <div class="topline">
      <button class="back" onclick="go('home')">›</button>
      <div class="page-title">${title}</div>
    </div>`;
}

const notice = `
  <div class="notice">
    ◉ نسخه نمایشی رابط کاربری
    <br>
    اتصال امن به سرور و ورود پیامکی هنوز فعال نشده است.
  </div>`;

const footer = `
  <div class="foot">
    مجتمع فولاد خراسان · نسخه وب آیفون V5
  </div>`;

function render() {
  if (!view) return;

  document.querySelectorAll(".nav button").forEach(btn => {
    btn.classList.toggle(
      "selected",
      btn.dataset.page === state.page
    );
  });

  let html = "";

  if (state.page === "home") {
    html = `
      <header class="hero">
        <div class="brand">✦ مجتمع فولاد خراسان</div>
        <h1>گزارش کار انبار شمش</h1>
        <p>سامانه ثبت و مدیریت گزارش شیفت</p>
        <div class="hero-bottom">
          <span class="tag">نسخه وب آیفون</span>
          <span class="tag">نسخه آزمایشی</span>
        </div>
      </header>

      <main class="section">
        ${notice}

        <div class="eyebrow">انتخاب فاز گزارش</div>
        <div class="card">
          <div class="muted">فاز موردنظر را انتخاب کنید</div>
          <div class="choice">
            <button id="p1" onclick="phase('1')">فاز ۱</button>
            <button id="p2" onclick="phase('2')">فاز ۲</button>
          </div>
        </div>

        <button class="action blue" onclick="go('report-form')">
          <span class="ico">＋</span>
          <span>
            <b>ثبت گزارش فاز ${state.phase}</b>
            <small>گزارش روزانه و اطلاعات شیفت</small>
          </span>
        </button>

        <button class="action orange" onclick="go('notices')">
          <span class="ico">📢</span>
          <span>
            <b>اطلاعیه‌ها</b>
            <small>مشاهده اطلاعیه‌های سازمانی</small>
          </span>
        </button>

        <button class="action purple" onclick="go('delegation')">
          <span class="ico">⇄</span>
          <span>
            <b>جانشینی و تعویض شیفت</b>
            <small>مدیریت جابه‌جایی شیفت‌ها</small>
          </span>
        </button>

        <div class="eyebrow">دسترسی سریع</div>
        <div class="tiles">
          <button class="tile" onclick="go('reports')">
            <span class="symbol">📋</span>
            <strong>گزارش‌ها</strong>
            <small>فاز ۱ و ۲</small>
          </button>
          <button class="tile" onclick="go('stats')">
            <span class="symbol">📊</span>
            <strong>آمار تولید</strong>
            <small>خلاصه عملکرد</small>
          </button>
        </div>

        <div class="eyebrow">آخرین گزارش‌ها</div>
        <div class="card empty">
          گزارش‌های واقعی پس از اتصال به سرور نمایش داده می‌شوند.
        </div>

        ${footer}
      </main>`;
  }

  else if (state.page === "reports") {
    html = `
      ${header("گزارش‌های شیفت")}
      <main class="section">
        ${notice}
        <div class="card">
          <div class="eyebrow">فیلتر گزارش‌ها</div>
          <div class="choice">
            <button id="p1" onclick="phase('1')">فاز ۱</button>
            <button id="p2" onclick="phase('2')">فاز ۲</button>
          </div>
          <label class="field">جست‌وجوی گزارش</label>
          <input placeholder="تاریخ یا نام تکنسین" disabled>
        </div>
        <div class="card empty">
          📋
          <p>گزارش‌های واقعی پس از اتصال امن نمایش داده می‌شوند.</p>
        </div>
        ${footer}
      </main>`;
  }

  else if (state.page === "stats") {
    html = `
      ${header("آمار و عملکرد")}
      <main class="section">
        ${notice}
        <div class="tiles">
          <div class="tile">
            <span class="symbol">📋</span>
            <strong>تعداد گزارش‌ها</strong>
            <div class="stat">—</div>
          </div>
          <div class="tile">
            <span class="symbol">🔥</span>
            <strong>تولید ذوب</strong>
            <div class="stat">—</div>
          </div>
          <div class="tile">
            <span class="symbol">🚚</span>
            <strong>بارگیری ماشین</strong>
            <div class="stat">—</div>
          </div>
          <div class="tile">
            <span class="symbol">🏭</span>
            <strong>ارسال به نورد</strong>
            <div class="stat">—</div>
          </div>
        </div>
        <div class="card empty">
          اطلاعات آماری پس از اتصال به سرور نمایش داده می‌شوند.
        </div>
        ${footer}
      </main>`;
  }

  else if (state.page === "notices") {
    html = `
      ${header("اطلاعیه‌ها")}
      <main class="section">
        ${notice}
        <div class="card">
          <div class="eyebrow">اطلاعیه‌های سازمانی</div>
          <div class="empty">
            📢
            <p>اطلاعیه‌های واقعی پس از اتصال به سرور نمایش داده می‌شوند.</p>
          </div>
        </div>
        <div class="card">
          <div class="eyebrow">انتشار اطلاعیه</div>
          <label class="field">عنوان اطلاعیه</label>
          <input placeholder="عنوان اطلاعیه" disabled>
          <label class="field">متن اطلاعیه</label>
          <textarea placeholder="متن اطلاعیه..." disabled></textarea>
          <button class="primary" disabled>انتشار اطلاعیه</button>
        </div>
        ${footer}
      </main>`;
  }

  else if (state.page === "delegation") {
    html = `
      ${header("جانشینی و تعویض شیفت")}
      <main class="section">
        ${notice}
        <div class="card">
          <div class="eyebrow">ثبت جابه‌جایی</div>
          <label class="field">نوع جابه‌جایی</label>
          <input value="جانشینی / تعویض شیفت" disabled>
          <label class="field">نام همکار</label>
          <input placeholder="انتخاب تکنسین" disabled>
          <label class="field">تاریخ کاری</label>
          <input placeholder="تاریخ شمسی" disabled>
          <button class="primary" disabled>ثبت جابه‌جایی</button>
        </div>
        ${footer}
      </main>`;
  }

  else if (state.page === "report-form") {
    html = `
      ${header("ثبت گزارش فاز " + state.phase)}
      <main class="section">
        ${notice}
        <div class="card">
          <div class="eyebrow">گزارش جدید</div>
          <label class="field">فاز</label>
          <input value="فاز ${state.phase}" disabled>
          <label class="field">شیفت</label>
          <input value="پس از ورود تعیین می‌شود" disabled>
          <label class="field">شرح گزارش</label>
          <textarea placeholder="متن گزارش..." disabled></textarea>
          <button class="primary" disabled>ذخیره گزارش</button>
        </div>
        ${footer}
      </main>`;
  }

  else if (state.page === "settings") {
    html = `
      ${header("تنظیمات و حساب کاربری")}
      <main class="section">
        ${notice}
        <div class="card">
          <div class="eyebrow">ورود کاربران</div>
          <div class="muted">
            ورود با نام، شماره موبایل و کد پیامکی ۴ رقمی
          </div>
          <label class="field">نام و نام خانوادگی</label>
          <input placeholder="نام و نام خانوادگی" disabled>
          <label class="field">شماره موبایل</label>
          <input placeholder="09123456789" disabled>
          <button class="primary" disabled>
            دریافت کد تأیید
          </button>
        </div>
        <div class="card">
          <div class="eyebrow">مدیریت کاربران</div>
          <div class="muted">
            این بخش پس از فعال‌سازی ورود امن قابل استفاده خواهد بود.
          </div>
        </div>
        ${footer}
      </main>`;
  }

  view.innerHTML = html;

  ["1", "2"].forEach(n => {
    const btn = document.querySelector("#p" + n);
    if (btn) {
      btn.classList.toggle("active", n === state.phase);
    }
  });
}

document.querySelectorAll(".nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    go(btn.dataset.page);
  });
});

render();
