describe("Welcome page", () => {
	it("visits the homepage", () => {
		cy.visit("/");
		cy.contains("Cadastrar meta");
	});

	it("opens and close drawer to create goal", () => {
		cy.visit("/");

		cy.get("button").contains("Cadastrar meta").click();

		cy.contains("Qual a atividade?");

		cy.get("button").contains("Fechar").click();
	});
});

let goalsDescribe: string;
let initialCompleted: number;
let initialTotal: number;

describe("Create Goal", () => {
	it("creates a new goal", () => {
		cy.visit("/");

		cy.contains("Você completou")
			.invoke("text")
			.then((text) => {
				const regex = /(\d+) de (\d+)/;
				const result = text.match(regex);

				initialCompleted = Number.parseInt(result[1], 10);
				initialTotal = Number.parseInt(result[2], 10);

				expect(initialCompleted).to.be.a("number");
				expect(initialTotal).to.be.a("number");
			});

		cy.get("button").contains("Cadastrar meta").click();

		cy.contains("Qual a atividade?");

		goalsDescribe = `Meta de teste ${Math.random().toString().slice(0, 5)}`;

		cy.get("form").within(() => {
			cy.get('input[id="title"]').type(goalsDescribe);

			cy.get("button").contains("1x na semana").click();
			cy.get("button")
				.contains(/salvar/i)
				.click();
			cy.get("button").contains("Fechar").click();
		});

		cy.get("button").contains(goalsDescribe);
	});
});

describe("Complete goal", () => {
	it("complete goal correctly", () => {
		cy.visit("/");

		cy.get("button").contains(goalsDescribe).click();
		cy.get("button").contains(goalsDescribe).should("be.disabled");

		cy.contains("Você completou")
			.invoke("text")
			.then((text) => {
				const regex = /(\d+) de (\d+)/;
				const result = text.match(regex);

				const newCompleted = Number.parseInt(result[1], 10);
				const newTotal = Number.parseInt(result[2], 10);

				expect(newCompleted).to.equal(initialCompleted + 1);
				expect(newTotal).to.equal(initialTotal + 1);
			});
	});
});
