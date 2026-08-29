export async function submitToNetlify(formName: string, data: Record<string, string>) {
  const body = new URLSearchParams({ 'form-name': formName, ...data }).toString();

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
  } catch {
    // Best-effort: Netlify Forms is a secondary record, the Supabase insert is the source of truth.
  }
}
