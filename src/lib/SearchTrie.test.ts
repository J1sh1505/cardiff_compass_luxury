import { describe, it, expect, beforeEach } from 'vitest'; // or 'jest' depending on your setup
import { SearchTrie } from './SearchTrie';

/**
 * UNIT TESTING: Search Module (Trie Data Structure)
 * * Assessment Criteria:
 * - Validate the correctness of complex programs.
 * - Detailed input, output, and expected outcomes.
 */

describe('SearchTrie Logic', () => {
  let trie: SearchTrie;

  // Reset the Trie before every test to ensure isolation
  beforeEach(() => {
    trie = new SearchTrie();
  });

  it('should successfully insert and find a keyword', () => {
    // INPUT: Insert "steak" mapping to Gastronomy
    trie.insert("steak", "/explore/gastronomy");

    // ACT: Search for "steak"
    const result = trie.search("steak");

    // ASSERT: Expect the correct route back
    expect(result).toBe("/explore/gastronomy");
  });

  it('should return null for a keyword that does not exist', () => {
    // INPUT: Trie is empty or has other words
    trie.insert("food", "/explore/gastronomy");

    // ACT: Search for "skydiving"
    const result = trie.search("skydiving");

    // ASSERT: Expect null (not found)
    expect(result).toBeNull();
  });

  it('should handle case insensitivity (Advanced Robustness)', () => {
    // INPUT: Insert lower case "castle"
    trie.insert("castle", "/explore/heritage");

    // ACT: Search with Mixed Case "CaStLe"
    const result = trie.search("CaStLe");

    // ASSERT: Should still find the route
    expect(result).toBe("/explore/heritage");
  });

  it('should handle partial matches correctly (Prefix vs Whole Word)', () => {
    // INPUT: Insert "shop"
    trie.insert("shop", "/explore/boutiques");

    // ACT: Search for "sho" (incomplete word)
    const result = trie.search("sho");

    // ASSERT: Should be null because "sho" isn't a defined keyword, just a prefix
    expect(result).toBeNull();
  });
});