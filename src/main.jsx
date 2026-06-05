import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import Portfolio from "./Portfolio.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";

// Google Analytics - Track page views
if (window.gtag) {
  window.gtag('event', 'page_view', {
    page_path: window.location.pathname,
    page_title: document.title,
  });
}

// Track all clicks
document.addEventListener('click', (e) => {
  const target = e.target.closest('a, button');
  if (target && window.gtag) {
    window.gtag('event', 'click', {
      element_text: target.textContent?.trim() || 'unknown',
      element_tag: target.tagName,
      element_href: target.href || target.id || 'none',
    });
  }
});

// Track form submissions
document.addEventListener('submit', (e) => {
  if (window.gtag) {
    window.gtag('event', 'form_submit', {
      form_id: e.target.id || 'unnamed_form',
    });
  }
});

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', () => {
  const scrollPercent = Math.round(
    ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
  );
  if (scrollPercent > maxScroll) {
    maxScroll = scrollPercent;
    if (scrollPercent === 25 || scrollPercent === 50 || scrollPercent === 75 || scrollPercent === 100) {
      if (window.gtag) {
        window.gtag('event', 'scroll_depth', {
          scroll_percent: scrollPercent,
        });
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
