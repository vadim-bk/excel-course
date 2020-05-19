const CODES = {
  A: 65,
  Z: 90,
};

const toChar = (_, i) => {
  return String.fromCharCode(CODES.A + i);
};

const createRow = (content, i) => {
  const resize = i ? "<div class='row-resize' data-resize='row'></div>" : "";
  return `
  <div class='row' data-type="resizable">
    <div class='row-info'>${i ? i : ""}
      ${resize}
    </div>
    <div class='row-data'>${content}</div>
  </div>`;
};

const toColumn = (col, i) => {
  return ` 
  <div class="column" data-type="resizable" data-col="${i}">${col}
    <div class="col-resize" data-resize='col'></div>
  </div>
  `;
};

const toCell = (_, col) => {
  return `
  <div class="cell" contenteditable data-col="${col}"></div>
  `;
};

export function createTable(rowsCount = 20) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount).fill("").map(toChar).map(toColumn).join("");

  rows.push(createRow(cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill("").map(toCell).join("");

    rows.push(createRow(cells, i + 1));
  }

  return rows.join("");
}
