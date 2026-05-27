import { Locator, Page } from '@playwright/test';

export class CartPage {

    readonly page: Page;
    readonly cartTitle: Locator;
    readonly productName: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.cartTitle =
            page.locator('[data-test="title"]');

        this.productName =
            page.locator('[data-test="inventory-item-name"]');

        this.checkoutButton =
            page.getByRole('button', {
                name: 'Checkout'
            });
    }

    async isCartPageVisible() {
        return await this.cartTitle.isVisible();
    }

    async getProductName() {
        return await this.productName.textContent();
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}