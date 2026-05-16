/**
 * Formats benchmark results as a console table.
 * @param {Array<Object>} results
 */
export function formatTable(results) {
  console.table(results);
}

/**
 * Formats benchmark results as pretty-printed JSON.
 * @param {Array<Object>} results
 */
export function formatJSON(results) {
  console.log(JSON.stringify(results, null, 2));
}

/**
 * Formats benchmark results as CSV.
 * @param {Array<Object>} results
 */
export function formatCSV(results) {
  if (results.length === 0) return;
  const headers = Object.keys(results[0]).join(",");
  const rows = results.map((r) =>
    Object.values(r)
      .map((v) => (String(v).includes(",") ? `"${v}"` : v))
      .join(",")
  );
  console.log([headers, ...rows].join("\n"));
}
