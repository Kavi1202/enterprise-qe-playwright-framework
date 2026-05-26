import { Locator, Page } from '@playwright/test';

export class InventoryPage {

    readonly page: Page;
    readonly inventoryTitle: Locator;
    readonly addToCartButton: Locator;
    readonly cartBadge: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;

        this.inventoryTitle =
            page.locator('[data-test="title"]');

        this.addToCartButton =
            page.locator(
                '[data-test="add-to-cart-sauce-labs-backpack"]'
            );

        this.cartBadge =
            page.locator('[data-test="shopping-cart-badge"]');

        this.cartIcon =
            page.locator('[data-test="shopping-cart-link"]');
    }

    async addProductToCart() {
        await this.addToCartButton.click();
    }

    async getCartCount() {
        return await this.cartBadge.textContent();
    }

    async navigateToCart() {
        await this.cartIcon.click();
    }

    async isInventoryPageVisible() {
        return await this.inventoryTitle
            .isVisible();
    }
}