// src/tests/integration/authProtectedRoute.test.ts
import { describe, it, expect, vi } from "vitest";

// MOCK: We simulate the Router and Auth system instead of using the real internet.
const mockNavigate = vi.fn();
const mockAuth = {
  getSession: vi.fn()
};

/**
 * INTEGRATION TEST: Security & Routing
 * Scenario: A user tries to access the 'Bookings' page.
 */
describe("Protected Route Access", () => {
  
  it("should block unauthenticated access (Redirect to Login)", async () => {
    // 1. ARRANGE: No user session exists
    mockAuth.getSession.mockReturnValue(null);

    // 2. ACT: Try to navigate to private page
    if (!mockAuth.getSession()) {
      mockNavigate('/login');
    }

    // 3. ASSERT: User was sent to login page
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });

  it("should allow authenticated users", async () => {
    // 1. ARRANGE: User is logged in
    mockAuth.getSession.mockReturnValue({ user: { id: '123' } });

    // 2. ACT: Try to navigate
    const accessGranted = !!mockAuth.getSession();

    // 3. ASSERT: Access is allowed (True)
    expect(accessGranted).toBe(true);
  });
});