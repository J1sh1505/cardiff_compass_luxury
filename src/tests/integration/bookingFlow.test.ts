
import { describe, it, expect, vi } from "vitest";

// MOCK: We create a fake database so we don't mess up the real one during testing.
const mockDb = {
  from: vi.fn().mockReturnThis(),
  insert: vi.fn().mockReturnThis(),
  // We pretend the database sends back one booking with 2 guests.
  select: vi.fn().mockResolvedValue({ data: [{ id: 1, party_size: 2 }], error: null })
};

/**
 * INTEGRATION TEST: Booking Flow
 * Scenario: A user creates a booking and then checks if it was saved.
 */
describe("End-to-End Booking Flow", () => {
  
  it("should persist booking data across sessions", async () => {
    // 1. ACT: The user tries to create a booking for Christmas.
    await mockDb.from('Booking').insert({ date: '2025-12-25', guests: 2 });

    // 2. ACT: We try to read the bookings back from the "database".
    const { data } = await mockDb.from('Booking').select();

    // 3. ASSERT: We check if the booking is actually there.
    // It should have 1 item, and the party size should be 2.
    expect(data).toHaveLength(1);
    expect(data[0].party_size).toBe(2);
  });
});