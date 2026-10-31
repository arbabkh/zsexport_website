// Domains used for throwaway / placeholder addresses. Keep in sync with public/contact.php.
const BLOCKED_DOMAINS = [
  'mailinator.com', 'guerrillamail.com', 'guerrillamail.net', 'sharklasers.com', 'grr.la',
  '10minutemail.com', 'tempmail.com', 'temp-mail.org', 'throwawaymail.com', 'yopmail.com',
  'trashmail.com', 'getnada.com', 'maildrop.cc', 'dispostable.com', 'fakeinbox.com',
  'mailnesia.com', 'mintemail.com', 'spamgourmet.com', 'tempinbox.com', 'mohmal.com',
  'example.com', 'example.org', 'example.net', 'test.com', 'test.org', 'test.net',
  'testing.com', 'fake.com', 'fakemail.com', 'noemail.com', 'nomail.com', 'asdf.com',
]
const BLOCKED_LABELS = ['mailinator', 'yopmail', 'guerrillamail', 'tempmail', 'test', 'example', 'localhost', 'invalid']
const BLOCKED_TLDS = ['test', 'example', 'invalid', 'localhost', 'local']

export function getEmailError(value) {
  const email = value.trim().toLowerCase()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address.'
  const domain = email.split('@')[1]
  const labels = domain.split('.')
  const blocked =
    BLOCKED_DOMAINS.some((d) => domain === d || domain.endsWith(`.${d}`)) ||
    BLOCKED_TLDS.includes(labels[labels.length - 1]) ||
    BLOCKED_LABELS.includes(labels[0])
  return blocked ? 'Please use a genuine business email address (temporary or test emails are not accepted).' : ''
}
