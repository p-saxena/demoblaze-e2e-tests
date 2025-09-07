# Demoblaze E2E Tests

This project contains automated e2e tests implemented using Cypress.  
The tests verify critical user journeys of [Demoblaze](https://www.demoblaze.com) electronics store: sign up, log in, browse laptops, add to cart, and complete a purchase.


## Prerequisites

- [Node.js](https://nodejs.org/) v20, 22, or 24 (and newer)
  - Verify installation:
    ```bash
    node --version
    
- [Git](https://git-scm.com/downloads)

- Google Chrome (for headed/headless runs)


## Getting Started

1. Clone the project
    ```bash
    git clone https://github.com/p-saxena/demoblaze-e2e-tests.git
    cd demoblaze-e2e-tests

2. Install dependencies
   ```bash
   npm install


## How to run tests
You can use any one of the following methods to run the tests from project's root directory.
1. Open Cypress UI (interactive)
   ```bash
    npm run test:chrome:ui
    # then click a spec (login or purchase-laptop)

2. Headless execution in Chrome
   ```bash
    npm run test:chrome:headless

3. Run a single spec. E.g.
   ```bash
    npx cypress run --spec "cypress/specs/login.spec.js" --browser chrome


## About Tests
The following two flows were identified as essential to test because they represent critical business workflows and cover the happy path scenarios for store users.
1. Login
    - Opens login modal, waits until it’s fully interactive, types credentials, and asserts the "Welcome,user" and "logout" link.

2. Purchase Laptop
    - Sign up with a unique username (avoids shared state).
    - Log in → verify welcome link.
    - Browse laptops category. Wait on the network call that loads products.
    - Add to cart → verify JS alert "Product added."
    - Cart → assert an item was added and capture the displayed total.
    - Place order → fill form using fixture data (customer.json), click Purchase.
    - Confirmation → assert presence of Id, Name, Amount, and Date on order summary modal.
    

## Design choices

1. Page Object Model (POM) adoption:
  - The UI element locators are clearly separated into page object classes (*.page.js), which improves reusability and maintainability.
  - Each page has its own page file, which prevents duplication of selectors across specs and makes it easy to refactor tests when UI changes.

2. Deterministic waits:
  - All waits are tied to UI state or network calls to reduce flakiness.
  - Used network intercepts instead of hard coded sleeps.

3. Fixtures for test data:
  - Used fixtures to externalize and reuse test data, decoupling it from specs so tests are cleaner and maintainable.
  - customer.json holds form data.
  - user.json holds an "existing user" if we need to run the login tests independently.


## AI Tool usage and disclosure
I used GitHub Copilot to speed up routine coding tasks — scaffolding POM classes, reviewing selector patterns, minor utility snippets, and drafting parts of README.