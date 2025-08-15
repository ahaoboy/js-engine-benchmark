export function toFixed(n: number) {
  if (!n) {
    return 0;
  }
  const fixed = n.toFixed(1);
  if (fixed.endsWith(".0")) {
    return parseInt(fixed);
  }
  return fixed;
}

export function humanSize(n: number) {
  if (n === 0 || isNaN(n)) {
    return "0";
  }
  n = n / 1024;
  if (n < 1024) {
    return `${toFixed(n)}K`;
  }
  if (n < 1024 * 1024) {
    return `${toFixed(n / 1024)}M`;
  }
  return `${toFixed(n / 1024 / 1024)}G`;
}
