export const cpf = {
  format: (cpf: string) => {
    const rawCpf = cpf.replace(/[^\d]/g, "");
    return rawCpf.length !== 11 ?
      rawCpf : rawCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
};

export const currency = Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  currencyDisplay: "symbol",
  currencySign: "standard",
  style: "currency",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
// if (typeof value === 'string') { value = parseFloat(value) }
// return value.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' })


export const bytesToSize = {
  format: (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return 'n/a'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString(), 10)
    if (i === 0) return `${bytes} ${sizes[i]}`
    return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
  }
};