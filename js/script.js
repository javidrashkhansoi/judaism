/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/scripts/scripts/section.js
const MONTHS = {
  "01": "Январь",
  "02": "Февраль",
  "03": "Март",
  "04": "Апрель",
  "05": "Май",
  "06": "Июнь",
  "07": "Июль",
  "08": "Август",
  "09": "Сентябрь",
  "10": "Октябрь",
  "11": "Ноябрь",
  "12": "Декабрь",
}

/** @type {HTMLDivElement} */
const section = document.querySelector(".section");
/** @type {HTMLFormElement} */
const sectionForm = section?.querySelector(".section-form");

if (sectionForm) {
  /** @type {HTMLInputElement} */
  const dateInput = sectionForm.querySelector(".section-date__input");

  if (dateInput) {
    /** @type {HTMLElement} */
    const nextFocus = document.querySelector("[data-focus=\"next\"]");
    /** @type {HTMLElement} */
    const prevFocus = document.querySelector("[data-focus=\"prev\"]");
    /** @type {HTMLInputElement} */
    const dayInput = sectionForm.querySelector("[data-date=\"day\"]");
    /** @type {HTMLInputElement} */
    const monthInput = sectionForm.querySelector("[data-date=\"month\"]");
    /** @type {HTMLInputElement} */
    const yearInput = sectionForm.querySelector("[data-date=\"year\"]");

    dateInput.addEventListener("focus", () => {
      dateInput.showPicker();
    });

    dateInput.addEventListener("keydown", event => {
      const { code, shiftKey } = event;

      event.preventDefault();

      if (code === "Tab") {
        dateInput.blur();

        shiftKey ? prevFocus?.focus() : nextFocus?.focus();
      }
    });

    if (dayInput && monthInput && yearInput) {
      dateInput.addEventListener("change", () => {
        changeDate();

        dateInput.blur();
        nextFocus?.focus();
      });

      dateInput.addEventListener("input", changeDate);

      function changeDate() {
        const { value } = dateInput;
        const [year, month, day] = value.split("-");

        dayInput.value = day || "";
        monthInput.value = MONTHS[month] || "";
        yearInput.value = year || "";
      }
    }
  }
}

;// CONCATENATED MODULE: ./src/js/scripts/scripts.js
// import "./scripts/header-observers.js";
// import "./scripts/burger.js";
// import "./scripts/up.js";


;// CONCATENATED MODULE: ./src/js/script.js


/******/ })()
;