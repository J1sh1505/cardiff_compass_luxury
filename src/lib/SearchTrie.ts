
// A node in Prefix Tree. Each node represents a character.
class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;
  route: string | null;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
    this.route = null;
  }
}

// ADVANCED DATA STRUCTURE: Prefix Tree (Trie)
// This structure allows for O(L) search speeds, meaning lookup time depends
// only on the word length, not the size of the database.
export class SearchTrie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // Insert a keyword into the tree, building the path character by character.
  insert(word: string, route: string): void {
    let current = this.root;
    const normalizedWord = word.toLowerCase();

    for (const char of normalizedWord) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char)!;
    }

    // Mark the end of the word and store the destination route.
    current.isEndOfWord = true;
    current.route = route;
  }

  // Traverses the tree to find a match. Returns null instantly if the path breaks.
  search(word: string): string | null {
    let current = this.root;
    const normalizedWord = word.toLowerCase();

    for (const char of normalizedWord) {
      if (!current.children.has(char)) {
        return null; // Path doesn't exist
      }
      current = current.children.get(char)!;
    }

    return current.isEndOfWord ? current.route : null;
  }
}

// Initialize and populate the Trie (The "Knowledge Base")
// This allows the app to map user keywords instantly to the correct page.
export const routerTrie = new SearchTrie();

//  GASTRONOMY 
routerTrie.insert("food", "/explore/gastronomy");
routerTrie.insert("eat", "/explore/gastronomy");
routerTrie.insert("steak", "/explore/gastronomy");
routerTrie.insert("burger", "/explore/gastronomy");

//  NOCTURNAL 
routerTrie.insert("drink", "/explore/nocturnal");
routerTrie.insert("cocktail", "/explore/nocturnal");
routerTrie.insert("nightlife", "/explore/nocturnal");

//  HERITAGE 
routerTrie.insert("castle", "/explore/heritage");
routerTrie.insert("museum", "/explore/heritage");
routerTrie.insert("history", "/explore/heritage");