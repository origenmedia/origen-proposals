import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function useProposal(slug) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) return

    async function fetchProposal() {
      try {
        const { data: proposal, error: err } = await supabase
          .from('proposals')
          .select('*')
          .eq('slug', slug)
          .eq('status', 'active')
          .single()

        if (err) throw err
        setData(proposal)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProposal()
  }, [slug])

  return { data, loading, error }
}
