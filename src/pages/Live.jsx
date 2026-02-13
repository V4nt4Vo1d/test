
import { useEffect, useState } from 'react'
import { TWITCH_CLIENT_ID, TWITCH_OAUTH_TOKEN, TWITCH_USERNAME } from '../twitchConfig'

export default function Live() {
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    async function checkLive() {
      const res = await fetch(
        `https://api.twitch.tv/helix/streams?user_login=${TWITCH_USERNAME}`,
        {
          headers: {
            "Client-ID": TWITCH_CLIENT_ID,
            "Authorization": `Bearer ${TWITCH_OAUTH_TOKEN}`
          }
        }
      )
      const data = await res.json()
      setIsLive(data.data && data.data.length > 0)
    }

    checkLive()
    const interval = setInterval(checkLive, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="live-page">
      <h2 className={isLive ? "live-glow pulse" : ""}>
        {isLive ? "LIVE NOW" : "Offline"}
      </h2>

      <iframe
        src="https://player.twitch.tv/?channel=fahxey&parent=fahxey.com"
        height="600"
        width="100%"
        allowFullScreen
      ></iframe>
    </section>
  )
}
