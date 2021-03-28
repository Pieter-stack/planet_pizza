describe("function PizzaPlaceOrder", function () {
    it("place new pizza order", function () {
        expect(PizzaPlaceOrder()).toEqual(undefined);
    });
});

describe("function PizzaDiscount", function () {
    it("The discount code work", function () {
        expect(PizzaDiscount()).toEqual(undefined);
    });
});

describe("function PizzaPrice", function () {
    it("Works out the total cost of the pizza", function () {
        expect(PizzaPrice()).toEqual(undefined);
    });
});

describe("function PizzaName ", function () {
    it("Generate a pizza name", function () {
        expect(PizzaName() ).toEqual(undefined);
    });
});