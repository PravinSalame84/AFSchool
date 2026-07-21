import { useEffect, useMemo, useState } from 'react'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { Alert, Box, Chip, MenuItem, Paper, Rating, Stack, Typography } from '@mui/material'
import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import RevealOnScroll from '../components/ui/RevealOnScroll'
import campusLifeContent from '../data/campusLifeContent'
import { sharedImages } from '../assets/images'
import OptimizedImage from '../components/ui/OptimizedImage'


const STORAGE_KEY = 'afs-nagpur-parent-feedback'

function loadStoredFeedback() {
  if (typeof window === 'undefined') return []

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export default function RatingsFeedback() {
  const [entries, setEntries] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    relation: 'Parent of Class I student',
    rating: 5,
    message: '',
    suggestion: '',
  })

  useEffect(() => {
    setEntries(loadStoredFeedback())
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
  }, [entries])

  const feedbackItems = useMemo(
    () => [...entries, ...campusLifeContent.feedbackSeeds].sort((a, b) => b.rating - a.rating),
    [entries],
  )

  const stats = useMemo(() => {
    const all = [...campusLifeContent.feedbackSeeds, ...entries]
    const total = all.length
    const average = total ? (all.reduce((sum, item) => sum + Number(item.rating || 0), 0) / total).toFixed(1) : '0.0'
    const recommendations = all.filter((item) => Number(item.rating) >= 4).length

    return {
      total,
      average,
      recommendations,
      suggestions: all.filter((item) => item.suggestion?.trim()).length,
    }
  }, [entries])

  function updateField(field) {
    return (event) => {
      setForm((current) => ({
        ...current,
        [field]: event.target.value,
      }))
      setSubmitted(false)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.name.trim() || !form.message.trim()) {
      setSubmitted(false)
      return
    }

    setEntries((current) => [
      {
        ...form,
        name: form.name.trim(),
        message: form.message.trim(),
        suggestion: form.suggestion.trim(),
      },
      ...current,
    ])
    setForm({
      name: '',
      relation: 'Parent of Class I student',
      rating: 5,
      message: '',
      suggestion: '',
    })
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Ratings & Feedback"
        crumb="Feedback"
        title="Parent ratings, suggestions and community confidence in one practical page"
        subtitle="Families can read existing feedback, view engagement counts and submit suggestions directly from the website."
        image={sharedImages.teacherImageFour}
      />

      <Section background="soft">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.05fr 0.95fr' }, gap: 3 }}>
          <RevealOnScroll>
            <Paper
              sx={{
                p: { xs: 2.4, sm: 3.2 },
                borderRadius: '1.8rem',
                background: 'linear-gradient(135deg, #fff7ef 0%, #ffffff 100%)',
              }}
            >
              <Typography sx={{ color: 'primary.main', fontSize: { xs: '1.5rem', sm: '1.9rem' }, fontWeight: 800 }}>
                Community trust at a glance
              </Typography>
              <Typography sx={{ mt: 1.1, color: 'text.secondary', lineHeight: 1.75 }}>
                This page brings together parent appreciation, suggestions and participation so families can understand how the school community experiences campus life.
              </Typography>

              <Box sx={{ mt: 3, display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }, gap: 1.4 }}>
                {[
                  { label: 'User Count', value: stats.total },
                  { label: 'Average Rating', value: `${stats.average}/5` },
                  { label: 'Recommendations', value: `${stats.recommendations}+` },
                  { label: 'Suggestions Shared', value: `${stats.suggestions}+` },
                ].map((item) => (
                  <Paper key={item.label} sx={{ p: 2, borderRadius: '1.25rem', bgcolor: 'rgba(255,255,255,0.9)' }}>
                    <Typography sx={{ color: 'secondary.dark', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      {item.label}
                    </Typography>
                    <Typography sx={{ mt: 0.8, color: 'primary.main', fontSize: '1.5rem', fontWeight: 800 }}>
                      {item.value}
                    </Typography>
                  </Paper>
                ))}
              </Box>

              <Stack direction="row" useFlexGap flexWrap="wrap" spacing={1} sx={{ mt: 3 }}>
                <Chip icon={<StarRoundedIcon />} label="Parent voices visible on site" color="warning" />
                <Chip label="Suggestions supported" variant="outlined" />
                <Chip label="Counts update with each submission" variant="outlined" />
              </Stack>
            </Paper>
          </RevealOnScroll>

          <RevealOnScroll delay={90}>
            <Paper component="form" onSubmit={handleSubmit} sx={{ p: { xs: 2.4, sm: 3.2 }, borderRadius: '1.8rem' }}>
              <Typography sx={{ color: 'primary.main', fontSize: '1.45rem', fontWeight: 800 }}>
                Parents feedbacks and suggestions
              </Typography>
              <Typography sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.72 }}>
                Parents and guardians may share their views, encouragement and suggestions for the continued growth of the school community.
              </Typography>

              {submitted ? (
                <Alert severity="success" sx={{ mt: 2.2 }}>
                  Thank you for sharing your feedback and suggestions.
                </Alert>
              ) : null}

              <Stack spacing={1.1} sx={{ mt: 2.2 }}>
                <Input id="feedback-name" label="Parent Name" value={form.name} onChange={updateField('name')} required />
                <Input
                  id="feedback-relation"
                  select
                  label="Relation"
                  value={form.relation}
                  onChange={updateField('relation')}
                >
                  {[
                    'Parent of LKG student',
                    'Parent of Class I student',
                    'Parent of Class IV student',
                    'Parent of Class VII student',
                    'Guardian',
                  ].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Input>
                <Box>
                  <Typography sx={{ mb: 0.8, color: 'primary.main', fontSize: '0.92rem', fontWeight: 600 }}>
                    Rating
                  </Typography>
                  <Rating
                    value={Number(form.rating)}
                    onChange={(_, value) => setForm((current) => ({ ...current, rating: value || 5 }))}
                    size="large"
                  />
                </Box>
                <Input
                  id="feedback-message"
                  label="Feedback"
                  value={form.message}
                  onChange={updateField('message')}
                  multiline
                  minRows={4}
                  required
                />
                <Input
                  id="feedback-suggestion"
                  label="Suggestion"
                  value={form.suggestion}
                  onChange={updateField('suggestion')}
                  multiline
                  minRows={3}
                />
                <Button type="submit" variant="dark" sx={{ alignSelf: 'flex-start' }}>
                  Submit Feedback
                </Button>
              </Stack>
            </Paper>
          </RevealOnScroll>
        </Box>
      </Section>

      <Section>
        <RevealOnScroll>
          <Typography sx={{ color: 'primary.main', fontSize: { xs: '1.6rem', sm: '2rem' }, fontWeight: 800, textAlign: 'center' }}>
            Parent feedback wall
          </Typography>
          <Typography sx={{ mt: 1, color: 'text.secondary', textAlign: 'center', lineHeight: 1.72 }}>
            Words from parents reflect the trust, support and partnership that strengthen the school environment.
          </Typography>
        </RevealOnScroll>

        <Box sx={{ mt: 4, display: 'grid', gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' }, gap: 2 }}>
          {feedbackItems.map((item, index) => (
            <RevealOnScroll key={`${item.name}-${index}`} delay={(index % 3) * 80}>
              <Paper
                sx={{
                  height: '100%',
                  p: 2.4,
                  borderRadius: '1.5rem',
                  background: 'linear-gradient(180deg, #ffffff 0%, #f8fbfd 100%)',
                  boxShadow: '0 22px 44px -34px rgba(17,26,36,0.22)',
                }}
              >
                <Rating value={Number(item.rating)} readOnly size="small" />
                <Typography sx={{ mt: 1.1, color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.8 }}>
                  "{item.message}"
                </Typography>
                <Typography sx={{ mt: 1.6, color: 'primary.main', fontWeight: 700 }}>
                  {item.name}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.82rem' }}>{item.relation}</Typography>
                {item.suggestion ? (
                  <Box sx={{ mt: 1.5, borderTop: '1px solid rgba(17,26,36,0.08)', pt: 1.2 }}>
                    <Typography sx={{ color: 'secondary.dark', fontSize: '0.74rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Suggestion
                    </Typography>
                    <Typography sx={{ mt: 0.75, color: 'text.secondary', fontSize: '0.86rem', lineHeight: 1.7 }}>
                      {item.suggestion}
                    </Typography>
                  </Box>
                ) : null}
              </Paper>
            </RevealOnScroll>
          ))}
        </Box>
      </Section>
    </>
  )
}
