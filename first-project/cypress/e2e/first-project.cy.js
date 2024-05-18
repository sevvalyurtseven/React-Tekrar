/*global cy */

describe("Counter Page Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=counter-page]").click();
  });

  it("Should open counter page ", () => {
    //Arrange
    //cy.visit("http://localhost:3000");

    //Act
    //cy.get("[data-cy=counter-page]").click();

    //Assert
    cy.url().should("include", "counter");
  });

  describe("Increase Testleri", () => {
    it("Should increase the counter by 1", () => {
      //Arrange
      //cy.visit("http://localhost:3000");
      //cy.get("[data-cy=counter-page]").click();

      //Act
      cy.get("[data-cy=increase]").click();
      //Assert
      cy.get("[data-cy=counter-display]").contains("Counter: 1");
    });

    it("Should increase the counter by 5", () => {
      //Arrange
      //cy.visit("http://localhost:3000");
      //cy.get("[data-cy=counter-page]").click();

      //Act
      const button = cy.get("[data-cy=increase]");
      for (let i = 0; i < 5; i++) {
        button.click();
      }

      //Assert
      cy.get("[data-cy=counter-display]").contains("Counter: 5");
    });
  });

  describe("Decrease Testleri", () => {
    it("Should show 1 after increase 2 and decrease 1", () => {
      //Arrange
      //cy.visit("http://localhost:3000");
      //cy.get("[data-cy=counter-page]").click();

      //Act
      cy.get("[data-cy=increase]").click();
      cy.get("[data-cy=increase]").click();
      cy.get("[data-cy=decrease]").click();

      //Assert
      cy.get("[data-cy=counter-display]").contains("Counter: 1");
    });
  });
});

describe("Users Page Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=users-page]").click();
  });

  it("Should open users page ", () => {
    //Arrange
    //cy.visit("http://localhost:3000");

    //Act
    //cy.get("[data-cy=users-page]").click();

    //Assert
    cy.url().should("include", "users");
  });
});

describe("User Page Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=users-page]").click();
  });

  it("Should open first user page ", () => {
    //Arrange
    //cy.visit("http://localhost:3000");

    //Act
    //cy.get("[data-cy=users-page]").click();

    //Assert
    cy.contains("george.bluth@reqres.in").click();
    cy.url().should("include", "users/1");
  });
});

describe("Add User Page Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=add-user-page]").click();
  });
  describe("Hata Testleri", () => {
    it("Should show error if name is less than 3 characters", () => {
      //Arrange
      const nameInput = cy.get("[name=first_name");

      //Act
      nameInput.type("se");

      //Assert
      cy.get("[data-cy=name-error]").contains(
        "Must be at least 3 characters long."
      );
    });

    it("Should be button disabled if name is less than 3 characters ", () => {
      //Arrange
      const nameInput = cy.get("[name=first_name");

      //Act
      nameInput.type("se");

      //Assert
      cy.get("button").should("be.disabled");
    });
  });
  describe("Success Testleri", () => {
    beforeEach(() => {
      //Arrange

      const nameInput = cy.get("[name=first_name");
      const lastNameInput = cy.get("[name=last_name");
      const email = cy.get("[name=email");
      const password = cy.get("[name=password");
      const age = cy.get("[name=age");
      const radio = cy.get("[name=position");
      const checkbox = cy.get("[name=agreement");
      const select = cy.get("[name=gender");

      //Act

      nameInput.type("Sevval");
      lastNameInput.type("Yurtseven");
      email.type("sevvalyurtseven@reqres.in");
      password.type("pistol8@A1");
      age.type("20");
      radio.check("hr");
      checkbox.check();
      select.select("female");
    });
    it("Should set button enabled", () => {
      //Assert
      cy.get("button").should("not.be.disabled");
    });
    it("Should send form", () => {
      //Act
      cy.get("[data-cy='submit-form-button']").click();

      //Assert
      cy.get("[name=first_name]").should("have.value", "");
    });
  });
});
