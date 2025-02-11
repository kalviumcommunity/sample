
const express = require('express');
const app = express();

// Helper function to get the greeting message based on the day of the week
const getDayMessage = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();

  // Return messages based on the day of the week
  switch (dayOfWeek) {
    case 1: // Monday
      return "Happy Monday! Start your week with energy!";
    case 5: // Friday
      return "It's Friday! The weekend is near!";
    default:
      return "Have a wonderful day!";
  }
};

// GET endpoint for greeting
app.get('/assistant/greet', (req, res) => {
  const name = req.query.name; // Get the name from the query parameters

  if (!name) {
    return res.status(400).json({
      error: 'Name parameter is required'
    });
  }

  const welcomeMessage = `Hello, ${name}! Welcome to our assistant app!`;
  const dayMessage = getDayMessage();

  res.json({
    welcomeMessage,
    dayMessage
  });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
