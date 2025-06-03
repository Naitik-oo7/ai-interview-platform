"use client";
import Button from "../components/Button";

export default function Home() {
  const handleStart = () => alert("Get started clicked!");

  return (
    <main>
      <h1>Welcome to AI Interview Prep Platform</h1>
      <p>Your personal AI-powered coding interview coach.</p>
      <Button onClick={handleStart} type="primary">
        Get Started
      </Button>
      <Button type="secondary" onClick={() => alert("Learn more clicked!")}>
        Learn More
      </Button>
    </main>
  );
}
