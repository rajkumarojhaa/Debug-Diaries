import React, { useState } from 'react';
import axios from 'axios';

const AskAi = () => {
  const [userInput, setUserInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!userInput.trim()) return;

    setLoading(true);
    setAnswer('');

    const options = {
      method: 'POST',
      url: 'https://chatgpt-42.p.rapidapi.com/chat',
      headers: {
        'x-rapidapi-key': '6131edcb4cmsh23ebb63bba81107p1b37d5jsn13862f0d1d3f',
        'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: {
        messages: [
          {
            role: 'user',
            content: userInput,
          },
        ],
        model: 'gpt-4o-mini',
      },
    };

    try {
      const response = await axios.request(options);
      console.log('Full API Response:', response.data);

      const messageContent = response?.data?.choices?.[0]?.message?.content;
      setAnswer(messageContent || 'No response found.');
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setAnswer('❌ Sorry, something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 text-white flex items-center justify-center px-4 mt-10">
      <div className="w-full max-w-3xl bg-white/40  rounded-2xl p-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">🧠 Ask AI</h1>

        <textarea
          className="w-full p-4 text-gray-100 bg-gray-700 border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          placeholder="Ask me anything..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />

        <button
          onClick={handleAsk}
          className="mt-4 w-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white   py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Thinking...' : 'Ask AI'}
        </button>

        {loading && (
          <div className="mt-4 flex justify-center">
            <div className="h-8 w-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {answer && (
          <div className="mt-6 bg-gray-900/70 border border-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 text-blue-400">💬 AI says:</h2>
            <p className="text-gray-200 whitespace-pre-line">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AskAi;
