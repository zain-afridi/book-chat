// src/types/index.ts

export interface Message {
  text: string;
  sender: 'user' | 'ai';
}

export interface DocumentFile extends File {
  // Extending the File interface to add any custom properties if needed
}
