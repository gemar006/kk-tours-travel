/* KK Tours & Travel shared interactions. Existing Google Ads conversion label retained. */
function gtag_report_conversion(url) {
  var callback = function () { if (typeof url !== 'undefined') window.location.href = url; };
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {'send_to':'AW-18532461887/vyjHCJzJ46gdEL_a-4RF','value':1.0,'currency':'INR','event_callback':callback});
    window.setTimeout(callback, 800);
  } else if (typeof url !== 'undefined') { window.location.href = url; }
  return false;
}
(function () {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      const opened = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(opened));
      menuToggle.setAttribute('aria-label', opened ? 'Close navigation menu' : 'Open navigation menu');
      menuToggle.textContent = opened ? '×' : '☰';
    });
    mainNav.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', function () {
      mainNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); menuToggle.setAttribute('aria-label','Open navigation menu'); menuToggle.textContent='☰';
    }); });
  }
  const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
  const dateInput = document.getElementById('date');
  if (dateInput) { const now = new Date(); dateInput.min = new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10); }
  const form = document.getElementById('bookingForm');
  const query = new URLSearchParams(window.location.search);
  const tourValue = query.get('tour');
  const tourSelect = document.getElementById('tour');
  if (tourValue && tourSelect) {
    const match = Array.from(tourSelect.options).find(function (opt) { return opt.value.toLowerCase() === tourValue.toLowerCase() || opt.text.toLowerCase() === tourValue.toLowerCase(); });
    if (match) { tourSelect.value = match.value; }
    else { tourSelect.value = 'Custom outstation taxi trip'; const detailsInput = document.getElementById('details'); if (detailsInput) detailsInput.value = 'Requested tour / route: ' + tourValue; }
  }
  if (form) form.addEventListener('submit', function (event) {
    event.preventDefault();
    const val = function(id) { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    const message = ['🚖 Taxi Enquiry - KK Tours & Travel','','Name: '+val('name'),'Customer phone: '+(val('phone') || 'Not provided'),'Travel date: '+val('date'),'Pickup location: '+val('pickup'),'Destination / tour: '+val('tour'),'Passengers: '+val('people'),'Extra details: '+(val('details') || 'Not provided'),'','Please confirm taxi availability and share the fare.'].join('\n');
    window.open('https://wa.me/918233280601?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');
  });
})();
