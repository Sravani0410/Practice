import "cypress-localstorage-commands";
import data from "../../submissionData.json"; // do not create this file

// let data = [{ submission_link: "http://localhost:8081", id: 67890 }];

describe("Test", function () {
  let acc_score = 1;
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    // Check if Api call is made

    it(`should be able to make the fetch request on page loads `, () => {
      cy.visit(url);
      cy.request(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=1"
      ).should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.length(10);
      });
            cy.wait(2000);
      cy.get("#main_items").children().should("have.length", 10);
      cy.then(() => {
        acc_score += 2;
      });
    });

    // Check If 10 items present on DOM

    it(`should be able to fetch and append ten items to the DOM`, () => {
      cy.visit(url);
      cy.wait(2000);
      cy.get("#main_items").children().should("have.length", 10);
      cy.then(() => {
        acc_score += 2;
      });
    });

    //Add items to cart and check count on navbar

    it(` should be able to add items to the cart and the cart count in the navbar should be updated`, () => {
      cy.get(".add_to_cart").eq(0).click();
      cy.get(".add_to_cart").eq(1).click();
      cy.get(".add_to_cart").eq(2).click();
      cy.get("#cart_count").should("have.text", 3);
      cy.then(() => {
        acc_score += 2;
      });
    });

    // Check cart items stored to localstorage or not

    it(` if items are added to LocalStorage`, () => {
      cy.restoreLocalStorage();
      let data = JSON.parse(localStorage.getItem("cart"));
      expect(data.length).to.equal(3);
      expect(data[0].title).to.equal("Printed Straight Kurti");
      expect(data[1].title).to.equal("Artificial flowers with pot");
      cy.then(() => {
        acc_score += 2;
      });
    });

    // Check for pagination

    it(`check pagination`, () => {
      cy.get("#previous").should("exist");
      cy.get("#previous").should("be.disabled");
      cy.get("#next").should("exist");
      cy.get("#next").click();
      cy.get("#next").click();
      cy.get("#next").click();
      cy.get("#next").should("be.disabled");
      cy.get("#main_items").children().should("have.length", 8);
      cy.get("#previous").click();
      cy.get("#main_items").children().should("have.length", 10);
      cy.then(() => {
        acc_score += 2;
      });
    });

    // Check items are reflected on cart page

    it(` check if items reflected on cart`, () => {
      cy.visit(`${url}/cart.html`);
      cy.get("#items").children().should("have.length", 3);
      cy.then(() => {
        acc_score += 2;
      });
    });

    // Check remove functionality
    it(` check remove functionality`, () => {
      cy.get(".remove").eq(1).click();
      cy.get("#items").children().should("have.length", 2);
      cy.get("#cart_count").should("have.text", 2);
      cy.then(() => {
        acc_score += 1;
      });
    });

    // Checkout
    it(` Checkout page should work propelry and get the alert `, () => {
      cy.visit(`${url}/cart.html`);
      cy.get("#name").type("Santa Banta");
      cy.get("#address").type("Delhi");
      cy.get("#checkout").click();

      // Check for alert
      cy.on("window:alert", (txt) => {
        expect(txt).to.contains("Santa Banta");
      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      //////////////
      let result = {
        id,
        marks: acc_score,
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
