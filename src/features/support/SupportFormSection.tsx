import { useState, type SubmitEvent } from 'react';
import { Input } from '@/ui';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function SupportFormSection() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(import.meta.env.VITE_SUPPORT_FORM_URL, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <section className="py-stack-xl lg:py-section-gap w-full max-w-7xl px-12 lg:px-4">
        <div className="border-line-subtle bg-canvas mx-auto max-w-xl rounded-3xl border p-10 text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Message sent!</h2>
          <p className="font-body-lg text-body-lg text-support">
            Thanks for reaching out. I&apos;ll get back to you as soon as I can.
          </p>
          <button
            className="bg-brand font-headline-md mt-8 rounded-xl px-8 py-3 text-white transition-transform hover:scale-105"
            type="button"
            onClick={() => setStatus('idle')}
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-stack-xl lg:py-section-gap w-full max-w-7xl px-12 lg:px-4">
      <div className="mx-auto max-w-xl">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-2 text-center">
          Send a question
        </h2>
        <p className="font-body-lg text-body-lg text-support mb-stack-lg text-center">
          Fill out the form and your message will land straight in my inbox.
        </p>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <Input
            label="Name"
            id="support-name"
            name="name"
            required
            type="text"
            autoComplete="name"
          />
          <Input
            label="Email"
            id="support-email"
            name="email"
            required
            type="email"
            autoComplete="email"
          />

          <div className="flex flex-col gap-2">
            <label className="font-label-md text-ink-700" htmlFor="support-message">
              Your question
            </label>
            <textarea
              className="border-line-subtle text-ink-700 focus:ring-brand min-h-32 resize-y rounded-xl border bg-white px-4 py-3 focus:ring-2 focus:outline-none"
              id="support-message"
              name="message"
              required
              rows={5}
            />
          </div>

          {status === 'error' && (
            <p className="font-body-md text-body-md text-red-600" role="alert">
              Something went wrong. Please try again or email me directly.
            </p>
          )}

          <button
            className="bg-brand font-headline-md rounded-xl px-10 py-4 text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={status === 'submitting'}
            type="submit"
          >
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}
