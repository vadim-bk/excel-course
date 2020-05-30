import { ExcelComponent } from "../../core/ExcelComponent";
import { $ } from "../../core/dom";

export class Formula extends ExcelComponent {
  static className = "excel__formula";

  constructor($root, options) {
    super($root, {
      name: "Formula",
      listeners: ["input", "keydown"],
      ...options,
    });
  }

  toHTML() {
    return `<div class="info">fx</div>
    <div id="formula" class="input" contenteditable spellcheck="false"></div>`;
  }

  init() {
    super.init();

    const $formula = this.$root.find("#formula");

    this.$on("table:select", ($cell) => $formula.text($cell.text()));
    this.$on("table:input", ($cell) => $formula.text($cell.text()));
  }

  onInput(e) {
    this.$emit("formula:input", $(e.target).text());
  }

  onKeydown(e) {
    const keys = ["Enter", "Tab"];
    if (keys.includes(e.key)) {
      e.preventDefault();
      this.$emit("formula:done");
    }
  }
}
