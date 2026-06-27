import { useRuntimeContentContext } from '../context/RuntimeContentContext'

// DYNAMIC CONTENTS:
// Use this hook anywhere the UI should read live notices, events, PDFs,
// result links or admission updates from the shared runtime content source.
export default function useRuntimeContent() {
  return useRuntimeContentContext()
}
