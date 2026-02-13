
import { useEffect, useState } from 'react'
import { TWITCH_CLIENT_ID, TWITCH_OAUTH_TOKEN, TWITCH_USERNAME } from '../twitchConfig'

export default function Clips() {
  const [clips, setClips] = useState([])

  useEffect(() => {
    async function fetchClips() {
      const res = await fetch(
        `https://api.twitch.tv/helix/clips?broadcaster_id=&first=6`,
        {
          headers: {
            "Client-ID": TWITCH_CLIENT_ID,
            "Authorization": `Bearer ${TWITCH_OAUTH_TOKEN}`
          }
        }
      )
      const data = await res.json()
      if (data.data) setClips(data.data)
    }

    fetchClips()
  }, [])

  return (
    <section className="clips-page">
      <h2>Recent Clips</h2>
      <div className="clip-grid">
        {clips.map(clip => (
          <a key={clip.id} href={clip.url} target="_blank">
            <img src={clip.thumbnail_url} alt={clip.title} />
          </a>
        ))}
      </div>
    </section>
  )
}
