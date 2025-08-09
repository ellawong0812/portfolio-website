import React from "react";
import "./BookReview.css";

// Book data
const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    rating: "★★★★★",
    review:
      "A practical and insightful book on how small habits, when consistently applied, can lead to remarkable improvements in life and work.",
    quote:
      "You do not rise to the level of your goals. You fall to the level of your systems.",
    keyTakeaway:
      "Focus on building good systems rather than setting goals. Tiny changes can lead to remarkable results.",
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    rating: "★★★★☆",
    review:
      "A refreshing perspective on self-improvement, emphasizing the importance of embracing life's struggles and prioritizing what truly matters.",
    quote: "Who you are is defined by what you’re willing to struggle for.",
    keyTakeaway:
      "Not everything deserves your attention. Focus on values that truly matter and accept life's hardships.",
  },
  {
    title: "Mindset",
    author: "Carol S. Dweck",
    rating: "★★★★★",
    review:
      "Explores the power of a growth mindset and how shifting your perspective can lead to greater success and resilience.",
    quote: "Becoming is better than being.",
    keyTakeaway:
      "Adopting a growth mindset allows for continuous learning and self-improvement.",
  },
  {
    title: "Outliers",
    author: "Malcolm Gladwell",
    rating: "★★★★☆",
    review:
      "An insightful exploration of what makes high achievers successful, revealing that talent alone isn’t enough—opportunity and practice play key roles.",
    quote:
      "Practice isn't the thing you do once you're good. It's the thing you do that makes you good.",
    keyTakeaway:
      "Success is a combination of hard work, luck, and the right opportunities.",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    rating: "★★★★★",
    review:
      "A compelling book on the emotional and psychological aspects of money, rather than just financial strategies.",
    quote:
      "Doing well with money has a little to do with how smart you are and a lot to do with how you behave.",
    keyTakeaway:
      "Wealth-building is more about behavior and mindset than financial knowledge.",
  },
  {
    title: "The Mountain Is You",
    author: "Brianna Wiest",
    rating: "★★★★☆",
    review:
      "A deep dive into self-sabotage and how to overcome inner resistance to reach your true potential.",
    quote: "Your new life is going to cost you your old one.",
    keyTakeaway:
      "Self-sabotage often comes from fear and limiting beliefs—overcoming them leads to growth.",
  },
  {
    title: "21 Lessons for the 21st Century",
    author: "Yuval Noah Harari",
    rating: "★★★★☆",
    review:
      "A thought-provoking book that explores key issues in modern society, including technology, politics, and artificial intelligence.",
    quote: "In a world deluged by irrelevant information, clarity is power.",
    keyTakeaway:
      "Critical thinking and adaptability are essential skills in an ever-changing world.",
  },
  {
    title: "The 4-Hour Workweek",
    author: "Tim Ferriss",
    rating: "★★★★☆",
    review:
      "A radical take on productivity, work-life balance, and financial independence, advocating for smart efficiency over hard work.",
    quote: "Doing something unimportant well does not make it important.",
    keyTakeaway:
      "Optimize your time by focusing on high-value tasks and designing a flexible lifestyle.",
  },
];

const BookReview = () => {
  return (
    <div className="book-review-container">
      <h1 style={{ color: "#1a73e8" }}>Book Sharing 📚 </h1>
      <p className="intro-text">
        Besides programming, I have a deep passion for reading. Books provide me
        with new perspectives, insights, and inspiration. Here are some of the
        books I’ve read and my thoughts on them.
      </p>
      <div className="book-list">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <h2 style={{ fontSize: "1.5rem", color: "#1a73e8" }}>
              {book.title}
            </h2>
            <h3
              style={{
                fontSize: "1.1rem",
                marginBottom: "10px",
                color: "#555",
              }}
            >
              by {book.author}
            </h3>
            <p className="rating">Rating: {book.rating}</p>
            <p className="review">{book.review}</p>
            <blockquote className="quote">"{book.quote}"</blockquote>
            <p className="takeaway">
              <strong>Key Takeaway:</strong> {book.keyTakeaway}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookReview;
