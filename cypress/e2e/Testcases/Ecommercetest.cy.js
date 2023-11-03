// Import the necessary PageObjectModel classes for Ecommerce testing
import LoginPage from "../PageObjectModel/EcommerceLogin";
import EcommerceEndtoEnd from "../PageObjectModel/EcommerceE2E";

// Create instances of the PageObjectModel classes
const lg = new LoginPage(); // LoginPage object
const Ecom = new EcommerceEndtoEnd(); // EcommerceEndtoEnd object

// Describe the test suite
describe('Ecommerce Test suite', function () {

    // Specify the test case within the suite
    it('End to End Checkout testing', function () {
        // Visit the Ecommerce website
        lg.VisitPage();

        // Navigate to the sign-in page
        lg.NagivateSigninPage();

        // Enter the email and password for signing in
        lg.EnterEmail("hasan_rizwan@mailinator.com");
        lg.EnterPassword("Google@321");

        // Click the Sign In button
        lg.ClickSignIn();

        // Search for Product#01
        Ecom.SearchProduct("Jacket{enter}");

        // Add Product#01 to the cart
        Ecom.AddProduct1();

        // Add Product#01 to the cart
        Ecom.AddToCart();

        // Scroll down the page
        cy.scrollTo(0, 500);

        // Go back to the previous page
        cy.go('back');

        // Clear the previously added product
        Ecom.ClearProduct();

        // Search for Product#02
        Ecom.SearchProduct('Bag{enter}');

        // Scroll down the page
        cy.scrollTo(0, 500);

        // Add Product#02 to the cart
        Ecom.AddProduct2();

        // Add Product#02 to the cart
        Ecom.AddToCart();

        // View the shopping cart
        Ecom.ViewCart();

        // Delete a product from the cart
        Ecom.DeleteProduct();

        // Visit the homepage
        Ecom.VisitHomePage();

        // Search for Product#03
        Ecom.SearchProduct('Bag{enter}');

        // Scroll down the page
        cy.scrollTo(0, 500);

        // Add Product#03 to the cart
        Ecom.AddProduct3();

        // Add Product#03 to the cart again
        Ecom.AddToCart();

        // View the shopping cart
        Ecom.ViewCart();

        // Wait for 3 seconds
        cy.wait(3000);

        // Proceed to the checkout
        Ecom.ProceedToCheckOut();

        // Wait for 8 seconds
        cy.wait(8000);

        // Click the "Add New Address" button
        Ecom.ClickAddNewAddress();

        // Add a new address
        Ecom.AddNewAddress();

        // Add the country for the address
        Ecom.AddCountry();

        // Wait for 5 seconds
        cy.wait(3000);

        // Add the city for the address
        Ecom.AddCity();

        // Ship to the added address
        Ecom.ShipHere();

        // Save the address
        Ecom.SaveAddress();

        // Continue to the next step
        Ecom.Next();

        // Wait for 3 seconds
        cy.wait(3000);

        // Place the order
        Ecom.PlaceOrder();

        // Sign out of the Ecommerce website
        Ecom.SignOut();
    })
})
