export function module10(block: string) {
  const codigo = block.split("").reverse();
  const somatorio = codigo.reduce((acc, current, index) => {
    let soma = Number(current) * (((index + 1) % 2) + 1);
    soma = soma > 9 ? Math.trunc(soma / 10) + (soma % 10) : soma;
    return acc + soma;
  }, 0);
  return Math.ceil(somatorio / 10) * 10 - somatorio;
}

export function module11(block: string) {
  const codigo = block.split("").reverse();
  let multiplicador = 2;
  const somatorio = codigo.reduce((acc, current) => {
    const soma = Number(current) * multiplicador;
    multiplicador = multiplicador === 9 ? 2 : multiplicador + 1;
    return acc + soma;
  }, 0);
  const restoDivisao = somatorio % 11;

  if (restoDivisao === 0 || restoDivisao === 1) {
    return 0;
  }
  if (restoDivisao === 10) {
    return 1;
  }
  const DV = 11 - restoDivisao;
  return DV;
}
