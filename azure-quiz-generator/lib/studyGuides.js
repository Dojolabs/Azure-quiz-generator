export const studyGuides = [
  {
    id: "ai-900-generative-ai",
    name: "AI-900: Azure AI Fundamentals - Generative AI",
    examSize: 10,
    questions: [
      {
        topic: "Large language models",
        question: "What is the primary job of a large language model when it responds to a prompt?",
        choices: [
          "Predict a meaningful continuation based on learned language patterns",
          "Search a spreadsheet for an exact matching sentence",
          "Convert every word directly into a database row",
          "Run only arithmetic calculations on text"
        ],
        answer: "Predict a meaningful continuation based on learned language patterns",
        explanation: "An LLM uses patterns learned during training to generate likely and meaningful text completions.",
        recommendation: "Review how prompts guide language models to produce completions."
      },
      {
        topic: "Prompts",
        question: "In generative AI, what does a prompt provide?",
        choices: [
          "The starting input the model uses to generate a response",
          "The final answer the model must copy exactly",
          "The private training dataset",
          "The server address of the model"
        ],
        answer: "The starting input the model uses to generate a response",
        explanation: "A prompt gives the model context for deciding what text should come next.",
        recommendation: "Practice identifying prompts and expected outputs in short scenarios."
      },
      {
        topic: "Tokenization",
        question: "Why does an LLM tokenize text?",
        choices: [
          "To break text into units that can be represented numerically",
          "To delete all punctuation",
          "To translate every sentence into one language",
          "To stop the model from learning word relationships"
        ],
        answer: "To break text into units that can be represented numerically",
        explanation: "Tokenization splits text into smaller units, such as words or subwords, that the model can process.",
        recommendation: "Review examples of words, subwords, and punctuation as tokens."
      },
      {
        topic: "Embeddings",
        question: "What makes embeddings useful in language models?",
        choices: [
          "They encode contextual and semantic meaning as numeric vectors",
          "They store only alphabetical word order",
          "They remove the need for prompts",
          "They are always exactly three numbers long"
        ],
        answer: "They encode contextual and semantic meaning as numeric vectors",
        explanation: "Embeddings help a model represent meaning and relationships between tokens.",
        recommendation: "Study how related words can have similar vector representations."
      },
      {
        topic: "Transformers",
        question: "What does a transformer model help do?",
        choices: [
          "Turn token vectors into context-aware representations",
          "Convert Excel files into websites",
          "Store quiz answer choices",
          "Replace all training data"
        ],
        answer: "Turn token vectors into context-aware representations",
        explanation: "Transformers use attention to understand how tokens relate to one another in context.",
        recommendation: "Review the basic transformer flow: tokens, vectors, attention, prediction."
      },
      {
        topic: "Attention",
        question: "What is the purpose of attention in a transformer?",
        choices: [
          "To weigh how strongly nearby tokens influence the current token",
          "To sort all tokens by length",
          "To choose random words without context",
          "To erase token order"
        ],
        answer: "To weigh how strongly nearby tokens influence the current token",
        explanation: "Attention helps the model focus on the most relevant tokens in a sequence.",
        recommendation: "Practice spotting which words in a sentence give the strongest clues."
      },
      {
        topic: "Multi-head attention",
        question: "Why is multi-head attention useful?",
        choices: [
          "It evaluates several token relationship patterns in parallel",
          "It makes every token mean the same thing",
          "It removes the need for embeddings",
          "It limits the model to one word"
        ],
        answer: "It evaluates several token relationship patterns in parallel",
        explanation: "Multi-head attention lets the model examine different kinds of relationships at the same time.",
        recommendation: "Review why parallel attention can improve context understanding."
      },
      {
        topic: "Positional encoding",
        question: "Why does a transformer need positional encoding?",
        choices: [
          "Token order affects meaning, so the model needs position information",
          "Tokens must always be alphabetical",
          "Position data replaces embeddings",
          "It prevents prompts from being read"
        ],
        answer: "Token order affects meaning, so the model needs position information",
        explanation: "The order of words matters, so positional encoding tells the model where tokens appear.",
        recommendation: "Review examples where changing word order changes meaning."
      },
      {
        topic: "Masked attention",
        question: "Why is masked attention used during decoder training?",
        choices: [
          "To stop the decoder from looking at future tokens",
          "To hide all previous tokens",
          "To ignore the correct answer",
          "To remove all attention weights"
        ],
        answer: "To stop the decoder from looking at future tokens",
        explanation: "Masked attention makes training match real generation, where future tokens are not known yet.",
        recommendation: "Review how next-token prediction works during training."
      },
      {
        topic: "Completion generation",
        question: "How does a model usually generate a longer answer?",
        choices: [
          "It predicts one token, adds it to the sequence, and repeats",
          "It creates every answer before reading the prompt",
          "It outputs only one token ID",
          "It copies the full training dataset"
        ],
        answer: "It predicts one token, adds it to the sequence, and repeats",
        explanation: "Generative models build responses step by step, using each new token as added context.",
        recommendation: "Practice explaining completion generation one token at a time."
      }
    ]
  }
];
