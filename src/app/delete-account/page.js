'use client';

import React, { useState } from 'react';
import { Trash2, Mail, CheckCircle, AlertCircle } from 'lucide-react';

const CONTACT_EMAIL = 'codeversoft53@gmail.com';

const DeleteAccountPage = () => {
  const [form, setForm] = useState({ account: '', email: '', reason: '' });
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('/api/deleteAccountRequest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setForm({ account: '', email: '', reason: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Pikoo - Account Deletion Request')}&body=${encodeURIComponent(
    'I would like to request the deletion of my Pikoo account and all associated data.\n\nUsername or email used in the game: \nReason (optional): '
  )}`;

  return (
    <div className='relative min-h-screen w-full bg-black py-20'>
      <div className='relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8'>
        <header className='mb-10 text-center'>
          <div className='mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white'>
            <Trash2 className='h-7 w-7' />
          </div>
          <h1 className='text-3xl font-bold text-white md:text-4xl'>Delete Your Account</h1>
          <p className='mt-3 text-neutral-400'>Request deletion of your Pikoo account and all associated data.</p>
        </header>

        <div className='mb-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-neutral-300 backdrop-blur-md'>
          <p className='mb-2 font-semibold text-white'>What will be deleted?</p>
          <ul className='list-disc space-y-1 pl-5'>
            <li>Your account (email, username, sign-in details)</li>
            <li>Your high score and progress</li>
            <li>Your in-game currency (diamonds)</li>
            <li>Your cosmetic inventory (hats, eyewear, clothes, pants)</li>
          </ul>
          <p className='mt-3 text-neutral-400'>
            Requests are processed within 30 days. This action is permanent and cannot be undone.
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md'>
          <div>
            <label className='mb-2 block text-sm font-medium text-neutral-300'>
              Username or email used in the game <span className='text-red-400'>*</span>
            </label>
            <input
              type='text'
              name='account'
              value={form.account}
              onChange={handleChange}
              required
              placeholder='e.g. your in-game username'
              className='w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-500 transition-all duration-300 focus:border-white/20 focus:bg-white/10 focus:outline-none'
            />
          </div>

          <div>
            <label className='mb-2 block text-sm font-medium text-neutral-300'>Contact email (so we can confirm)</label>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='you@example.com'
              className='w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-500 transition-all duration-300 focus:border-white/20 focus:bg-white/10 focus:outline-none'
            />
          </div>

          <div>
            <label className='mb-2 block text-sm font-medium text-neutral-300'>Reason (optional)</label>
            <textarea
              name='reason'
              value={form.reason}
              onChange={handleChange}
              rows={4}
              placeholder='Let us know why you are leaving (optional)'
              className='w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-500 transition-all duration-300 focus:border-white/20 focus:bg-white/10 focus:outline-none'
            />
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-red-600 hover:to-pink-600 disabled:cursor-not-allowed disabled:opacity-50'
          >
            {isSubmitting ? (
              <>
                <div className='h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white' />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Trash2 className='h-5 w-5' />
                <span>Request Account Deletion</span>
              </>
            )}
          </button>

          {status === 'success' && (
            <div className='flex items-start gap-2 rounded-xl bg-green-500/15 p-4 text-green-400'>
              <CheckCircle className='mt-0.5 h-5 w-5 flex-shrink-0' />
              <span>Your deletion request has been received. We will process it within 30 days.</span>
            </div>
          )}

          {status === 'error' && (
            <div className='flex items-start gap-2 rounded-xl bg-red-500/15 p-4 text-red-400'>
              <AlertCircle className='mt-0.5 h-5 w-5 flex-shrink-0' />
              <span>{errorMessage}</span>
            </div>
          )}
        </form>

        <div className='mt-8 text-center text-sm text-neutral-400'>
          <p>Prefer to email us directly?</p>
          <a href={mailtoHref} className='mt-2 inline-flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300'>
            <Mail className='h-4 w-4' />
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountPage;
