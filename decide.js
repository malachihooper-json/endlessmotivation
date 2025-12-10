// api/decide.js
export default function handler(req, res) {
  // Get the user's choice from the query string
  const { choice } = req.query;

  // Add a small artificial delay to simulate "processing" the hypnosis (optional)
  // Logic: 
  // If choice is 'accept' -> Granted
  // If choice is 'deny'   -> Come back next time
  
  if (choice === 'accept') {
    res.status(200).json({ message: "Granted" });
  } else {
    res.status(200).json({ message: "Come back next time" });
  }
}
