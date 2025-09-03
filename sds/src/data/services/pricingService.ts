import { PricingPlan } from "../types/pricing";

/**
 * Mock pricing service
 */
export const pricingService = {
  /**
   * Get pricing plans
   */
  async getPlans(): Promise<{ monthly: PricingPlan[]; annual: PricingPlan[] }> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const monthlyPlans: PricingPlan[] = [
      {
        id: "title1-monthly",
        name: "Title",
        description: "List item",
        price: 50,
        currency: "$",
        interval: "month",
        features: ["List item", "List item", "List item", "List item"],
        sku: "1-title",
      },
      {
        id: "title2-monthly",
        name: "Title",
        description: "List item",
        price: 50,
        currency: "$",
        interval: "month",
        features: ["List item", "List item", "List item", "List item"],
        popular: true,
        sku: "2-title",
      },
      {
        id: "title3-monthly",
        name: "Title",
        description: "List item",
        price: 50,
        currency: "$",
        interval: "month",
        features: ["List item", "List item", "List item", "List item"],
        sku: "3-title",
      },
    ];

    const annualPlans: PricingPlan[] = [
      {
        id: "title1-annual",
        name: "Title",
        description: "List item",
        price: 50,
        currency: "$",
        interval: "year",
        features: ["List item", "List item", "List item", "List item"],
        sku: "1-title",
      },
      {
        id: "title2-annual",
        name: "Title",
        description: "List item",
        price: 50,
        currency: "$",
        interval: "year",
        features: ["List item", "List item", "List item", "List item"],
        popular: true,
        sku: "2-title",
      },
      {
        id: "title3-annual",
        name: "Title",
        description: "List item",
        price: 50,
        currency: "$",
        interval: "year",
        features: ["List item", "List item", "List item", "List item"],
        sku: "3-title",
      },
    ];

    return { monthly: monthlyPlans, annual: annualPlans };
  },

  /**
   * Calculate cart total
   */
  calculateTotal(plans: PricingPlan[]): number {
    return plans.reduce((total, plan) => total + plan.price, 0);
  },
};
