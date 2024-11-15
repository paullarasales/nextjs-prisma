'use client'

import { useState } from 'react'

export default function RantForm() {
  // State to store form data
  const [title, setTitle] = useState('')
  const [mood, setMood] = useState('')
  const [content, setContent] = useState('')
  const [gifUrl, setGifUrl] = useState('')
  const [date, setDate] = useState(new Date().toISOString())
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault() 
    setError(null)
    setSuccess(null)

    if (!title || !content) {
      setError('Title and content are required.')
      return
    }

    try {
      const response = await fetch('/api/rants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, mood, content, gifUrl, date: new Date(date).toISOString() }),
      })

      if (!response.ok) {
        throw new Error('Error submitting rant. Please try again.')
      }

      const data = await response.json()
      setSuccess('Rant submitted successfully!')


      setTitle('')
      setMood('')
      setContent('')
      setGifUrl('')
      setDate(new Date().toISOString()) 

    } catch (error) {
      console.error('Error submitting rant:', error)
      setError('Error submitting rant. Please try again.')
    }
  }

  return (
    <div>
      <h1>Create a New Rant</h1>

      {/* Display success or error message */}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="mood">Mood</label>
          <input
            type="text"
            id="mood"
            name="mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="gifUrl">GIF URL</label>
          <input
            type="text"
            id="gifUrl"
            name="gifUrl"
            value={gifUrl}
            onChange={(e) => setGifUrl(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="datetime-local"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button type="submit">Submit Rant</button>
      </form>
    </div>
  )
}
