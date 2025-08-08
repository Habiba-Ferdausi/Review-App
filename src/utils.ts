export function formatDate(input: string) {
  const d = new Date(input);
  return d.toLocaleString();
}
export function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}
export function average(nums: number[]) {
  if (nums.length === 0) return 0;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}
