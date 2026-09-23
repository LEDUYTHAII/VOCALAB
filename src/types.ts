export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface WordOfTheDay {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  cefr: CEFRLevel;
  definition: string;
  vietnameseMeaning: string;
  sampleSentence: string;
  highlightedWord: string;
  collocation: string;
  audioText: string;
}

export interface ExtractedWord {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  cefr: CEFRLevel;
  contextMeaning: string;
  vietnameseMeaning: string;
  sentenceContext: string;
  saved?: boolean;
}

export interface ArticleRecommendation {
  id: string;
  title: string;
  source: string;
  category: 'Technology' | 'Business' | 'Science' | 'Culture' | 'Health';
  cefrLevel: CEFRLevel;
  readTimeMinutes: number;
  wordCount: number;
  targetWordsCount: number;
  excerpt: string;
  tags: string[];
}

export interface ReadingQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ReadingTest {
  id: string;
  title: string;
  cefrLevel: CEFRLevel;
  passage: string;
  questions: ReadingQuestion[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  targetExam: string;
  metricChange: string;
  quote: string;
  avatarUrl: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'pricing' | 'features' | 'methodology';
}

export interface UserStats {
  streakDays: number;
  wordsMastered: number;
  articlesRead: number;
  currentCefr: CEFRLevel;
  lexileScore: number;
  retentionRate: number;
}
