[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/McZen-Technologies/IRPP/blob/main/LICENSE)
[![](https://data.jsdelivr.com/v1/package/gh/McZen-Technologies/IRPP/badge)](https://www.jsdelivr.com/package/gh/McZen-Technologies/IRPP)

# IRPP

La classe IrppCalculator est une classe JavaScript qui calcule le montant d'impôt dû en fonction d'un salaire donné.

L'IRPP, ou Impôt sur le Revenu des Personnes Physiques, est un impôt qui doit être payé par toute personne physique ayant sa résidence habituelle en Tunisie. Si la personne en question n'est pas résidente mais perçoit des revenus de source tunisienne, elle est également assujettie à cet impôt.

Voir la démo sur [trovit.tn](https://trovit.tn/irpp)

## Usage dans le navigateur

```html
<script src="https://cdn.jsdelivr.net/gh/McZen-Technologies/IRPP@latest/index.min.js"></script>

<script>
	const annual_salary = 133530;
	const taxCalculator = new IrppCalculator(annual_salary);
	const result = taxCalculator.calculateIrpp();
	console.log(result); // 42335.5
</script>
```