import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { createHmac, randomInt, timingSafeEqual } from 'node:crypto'
import { defineConfig } from 'vite'

// Dev-only stand-in for public/contact.php (Vite can't run PHP): issues and checks the math captcha, never sends mail.
function devContactApi() {
  const secret = 'dev-only-secret'
  const sign = (exp, answer) => createHmac('sha256', secret).update(`${exp}|${answer}`).digest('hex')
  const send = (res, status, body) => {
    res.statusCode = status
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(body))
  }
  return {
    name: 'dev-contact-api',
    configureServer(server) {
      server.middlewares.use('/contact.php', (req, res) => {
        if (req.method === 'GET') {
          const a = randomInt(1, 10)
          const b = randomInt(1, 10)
          const exp = Math.floor(Date.now() / 1000) + 1800
          return send(res, 200, { question: `${a} + ${b} =`, token: `${exp}.${sign(exp, a + b)}` })
        }
        let raw = ''
        req.on('data', (chunk) => (raw += chunk))
        req.on('end', () => {
          let body = {}
          try { body = JSON.parse(raw) } catch {}
          const [exp, sig = ''] = String(body.captchaToken ?? '').split('.')
          const expected = Buffer.from(sign(exp, String(body.captchaAnswer ?? '').trim()))
          const given = Buffer.from(sig)
          const ok = Number(exp) >= Date.now() / 1000 && given.length === expected.length && timingSafeEqual(given, expected)
          if (!ok) return send(res, 400, { message: 'Security check failed. Please try again.' })
          console.log('[dev] contact form accepted (no email sent):', body.email)
          send(res, 200, { success: true })
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), devContactApi()],
})
