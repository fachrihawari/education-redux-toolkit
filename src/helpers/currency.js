export function formatCurrency(nominal) {
  return new Intl.NumberFormat("id-ID", { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(nominal)
}
