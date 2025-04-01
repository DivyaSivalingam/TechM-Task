// Function to determine discount percentage
function getDiscount(isLoggedIn, membershipLevel, hasValidCoupon) {
    if (!isLoggedIn) {
        console.log("User must be logged in to receive a discount.");
        return 0;
    }

    // Determine discount using ternary operator
    let discount = membershipLevel === "Gold" ? 20 : 10;

    // Apply additional discount condition
    if (!hasValidCoupon) {
        console.log("Invalid coupon. No additional discount.");
    }

    return discount;
}

// Test cases
console.log(`Final Discount: ${getDiscount(true, "Gold", true)}%`);  // 20%
console.log(`Final Discount: ${getDiscount(true, "Silver", true)}%`); // 10%
console.log(`Final Discount: ${getDiscount(false, "Gold", true)}%`);  // 0%
console.log(`Final Discount: ${getDiscount(true, "Gold", false)}%`);  // 20%
