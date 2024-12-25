/**
 * Função utilitária para ordenar um array de objetos por data no formato "dd/mm/yyyy"
 * @param {Array} arr - O array de objetos a ser ordenado.
 * @param {String} dateField - O nome da propriedade do objeto que contém a data (por padrão 'date').
 * @param {Boolean} descending - Se verdadeiro, ordena de forma decrescente, se falso, de forma crescente. Padrão é decrescente.
 * @returns {Array} - O array ordenado.
 */
export function sortByDate(arr: any, dateField = "date", descending = true) {
  return arr.sort((a: any, b: any) => {
    const [dayA, monthA, yearA] = a[dateField].split("/");
    const [dayB, monthB, yearB] = b[dateField].split("/");

    // Cria objetos Date com as datas extraídas, mês precisa ser ajustado (-1).
    const dateA = new Date(+yearA, +monthA - 1, +dayA);
    const dateB = new Date(+yearB, +monthB - 1, +dayB);

    // Ordenação baseada em comparação das datas.
    if (descending) {
      return dateB.getTime() - dateA.getTime();
    } else {
      return dateA.getTime() - dateB.getTime();
    }
  });
}
