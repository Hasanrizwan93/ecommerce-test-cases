/// <reference types="Cypress" />

class EcommerceEndtoEnd {
    // Method to search for a product
    SearchProduct(value) {
        const product = cy.get('#search')
        product.clear()
        product.type(value)
        return this
    }

    // Method to visit the homepage of the Ecommerce website
    VisitHomePage() {
        const visit = cy.visit("https://magento.softwaretestingboard.com/")
    }

    // Method to clear the search input field
    ClearProduct() {
        const clr = cy.get('#search')
        clr.clear()
    }

    // Method to add Product#1 to the cart
    AddProduct1() {
        const Product1 = cy.xpath('//*[@id="maincontent"]/div[3]/div[1]/div[2]/div[2]/ol/li[1]/div/a/span/span/img')
        Product1.should('be.visible').click()
        const size1 = cy.xpath('//*[@id="option-label-size-143-item-166"]').should('be.visible', { timeout: 10000 }).click();
        cy.wait(3000)
        const color1 = cy.xpath('//*[@id="option-label-color-93-item-52"]').should('be.visible').click()
        const quantity = cy.xpath('//*[@id="qty"]')
        quantity.clear()
        quantity.type("2")
    }

    // Method to add Product#2 to the cart
    AddProduct2() {
        const product2 = cy.get(':nth-child(3) > .product-item-info > .details > .name > .product-item-link')
        product2.click()
        const quantity = cy.get('#qty')
        quantity.click()
        quantity.clear()
        quantity.type("2")
        cy.wait(3000)
    }

    // Method to add Product#3 to the cart
    AddProduct3() {
        const product3 = cy.get(':nth-child(2) > .product-item-info > .details > .name > .product-item-link')
        product3.click()
        const quantity3 = cy.get('#qty')
        quantity3.click()
        quantity3.clear()
        quantity3.type("2")
    }

    // Method to add a product to the cart
    AddToCart() {
        cy.wait(3000)
        const Addcart = cy.get('#product-addtocart-button').click({ force: true })
    }

    // Method to view the shopping cart
    ViewCart() {
        cy.wait(4000)
        const showcart = cy.get('.showcart')
        showcart.click()
        // Prevent Cypress from failing the test on uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
    }

    // Method to delete a product from the cart
    DeleteProduct() {
        const delete1 = cy.get('a.action.delete[data-cart-item]').click({ multiple: true, force: true })
        const confirmdelete = cy.get('.action-primary > span')
        confirmdelete.should('be.visible').click({ multiple: true, force: true })
    }

    // Method to proceed to the checkout
    ProceedToCheckOut() {
        const Proceedbtn = cy.get('#top-cart-btn-checkout').click({ force: true })
    }

    // Method to add address details during checkout
    AddDetails() {
        const enterAddress = cy.get('#TD47MS0')
        enterAddress.type("31st Street, Karachi, Pakistan")
        const zipcode = cy.get('#NJYENMY').type('75340')
        const country = cy.get('#PY51DMF').select('Pakistan').should('have.value', 'PK')
        const enterCity = cy.get('#C0WS32X').type('Karachi')
        const phone = cy.get('#NJYENMY').type('03450000000')
        const Nextbutton = cy.get('.button').click()
    }

    // Method to click the "Add New Address" button
    ClickAddNewAddress() {
        cy.wait(4000)
        const addClick = cy.get('.new-address-popup > .action > span').click({ force: true })
    }

    // Method to add a new address
    AddNewAddress() {
        cy.wait(2000)
        const newAddress = cy.contains('New Address')
        newAddress.click({ force: true })
        const address = cy.get('input[name="street[0]"]').type('House No:33, Alison Society street31, Karachi')
    }

    // Method to select the country for the address
    AddCountry() {
        const count3 = cy.get('select[name="country_id"]').select('PK').should('have.value', 'PK')
    }

    // Method to add the city and other address details
    AddCity() {
        const city1 = cy.get('input[name="city"]').type('Karachi')
        const zipcode1 = cy.get('input[name="postcode"]').type('75340')
        const phonenumber1 = cy.get('input[name="telephone"]').type('0340000000')
    }

    // Method to uncheck the "Save Address" option during checkout
    ShipHere() {
        const uncheckSaveAddree = cy.get('#shipping-save-in-address-book').should('be.checked').uncheck()
    }

    // Method to save the address during checkout
    SaveAddress() {
        const saveAdd = cy.get('.modal-footer > .primary').click()
    }

    // Method to continue to the next step during checkout
    Next() {
        const continueNext = cy.xpath('//*[@id="shipping-method-buttons-container"]/div/button/span')
        continueNext.should('be visible').click({ force: true })
    }

    // Method to place the order during checkout
    PlaceOrder() {
        const placeorderbutton = cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click({ force: true })
    }

    // Method to sign out of the Ecommerce website
    SignOut() {
        const ar = cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        const signOut = cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click({ force: true })
        // Verify the URL after signing out
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/logoutSuccess/')
    }
}

export default EcommerceEndtoEnd
