const { test, expect } = require('@playwright/test');
 
test('@Website Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "rafliasn48@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill("Test123!");
   await page.getByRole('button', {name:"Login"}).click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:"Add to Cart"}).click();
   await page.getByRole("listitem").getByRole("button", {name:"Cart"}).click();
   //await page.pause();
   await page.locator("div li").first().waitFor();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();
   await page.getByRole("button", {name:"Checkout"}).click();
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
   await page.locator(".ta-results button").getByText("Indonesia").click();
   await page.getByText("PLACE ORDER").click();
   await expect(page.getByText("THANKYOU FOR THE ORDER.")).toBeVisible();
 
});