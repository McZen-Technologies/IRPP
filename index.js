class IrppCalculator {
	static irppTable = [
		{ g: 5000, p: 0 },
		{ g: 15000, p: 26 },
		{ g: 10000, p: 28 },
		{ g: 20000, p: 32 },
		{ g: 0, p: 35 },
	];

	constructor(value) {
		this.currentSolde = Math.ceil(value);
		this.taxs = 0;
	}

	calculateIrpp() {
		IrppCalculator.irppTable.forEach(({ g, p }, index) => {
			let current_tax = 0;
			if (this.currentSolde > g) {
				current_tax = index == 4 ? (this.currentSolde / 100) * p : (g / 100) * p;
			} else {
				current_tax = (this.currentSolde / 100) * p;
			}
			this.currentSolde -= g;
			if (current_tax > 0) {
				this.taxs += current_tax;
			}
		});
		return this.taxs;
	}
}