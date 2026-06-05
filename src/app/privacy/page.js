import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Pikoo',
  description: 'Privacy Policy for the Pikoo mobile game by Oktay Saygın.',
};

const LAST_UPDATED = 'June 5, 2026';
const CONTACT_EMAIL = 'codeversoft53@gmail.com';
const DEVELOPER = 'Oktay Saygın';

const sections = [
  {
    title: '1. Introduction',
    body: [
      'This Privacy Policy explains how Oktay Saygın, the developer of Pikoo, collects, uses, and protects your information when you play the Game. By creating an account or playing the Game, you agree to the practices described in this policy.',
      'Pikoo is a casual arcade game in which players climb as high as possible while collecting in-game items. We are committed to keeping the amount of personal data we collect to the minimum required to run the Game.',
    ],
  },
  {
    title: '2. Information We Collect',
    body: ['We only collect the information that is necessary to provide your account and gameplay experience:'],
    list: [
      'Account information: your email address and username when you register a standard account.',
      'Authentication data: your password is never stored in plain text. It is securely hashed before being saved.',
      'Sign-in provider: how you signed in (email/password, Google, Apple, or as a Guest), and the related provider identifier.',
      'Gameplay data: your high score and progress so you can compete on leaderboards.',
      'Virtual goods: your in-game currency (diamonds) and your inventory of cosmetic items (hats, eyewear, clothes, and pants).',
      'Technical timestamps: the dates your account was created and last updated.',
    ],
  },
  {
    title: '3. Guest Accounts',
    body: [
      'You can play Pikoo without providing personal details by using a Guest account. Guest accounts do not require an email address. If you later choose to register a full account, your progress can be linked to your new account.',
    ],
  },
  {
    title: '4. How We Use Your Information',
    body: ['We use the information we collect to:'],
    list: [
      'Create and maintain your player account.',
      'Save your scores, diamonds, and cosmetic inventory across sessions and devices.',
      'Display leaderboards and enable competitive features.',
      'Keep the Game secure and prevent fraud or abuse.',
      'Respond to your support requests.',
    ],
  },
  {
    title: '5. Third-Party Sign-In',
    body: [
      'If you choose to sign in with Google or Apple, we receive a unique identifier from that provider to recognize your account. We do not receive or store your password for these services. Their use of your data is governed by their own privacy policies.',
    ],
  },
  {
    title: '6. Data Sharing',
    body: [
      'We do not sell your personal information. We do not share your personal data with third parties except where required to operate the Game (such as our hosting and database providers) or where required by law.',
    ],
  },
  {
    title: '7. Data Security',
    body: [
      'We take reasonable technical and organizational measures to protect your information. Passwords are stored only as secure hashes, and access to player data is restricted. However, no method of transmission or storage is 100% secure.',
    ],
  },
  {
    title: '8. Children’s Privacy',
    body: [
      'Pikoo is suitable for a general audience. We do not knowingly collect more personal information than necessary from children. If you believe a child has provided us with personal data that should be removed, please contact us.',
    ],
  },
  {
    title: '9. Your Rights',
    body: [
      'You may request access to, correction of, or deletion of your account data at any time. You can ask us to permanently delete your account and all associated data (your score, diamonds, and inventory) using the link below, or by contacting us directly.',
    ],
    link: { href: '/delete-account', label: 'Request account deletion' },
  },
  {
    title: '10. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. Continued use of the Game after changes means you accept the updated policy.',
    ],
  },
  {
    title: '11. Contact Us',
    body: ['If you have any questions about this Privacy Policy or your data, please contact us:'],
  },
];

const PrivacyPage = () => {
  return (
    <div className='relative min-h-screen w-full bg-black py-20'>
      <div className='relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8'>
        <header className='mb-12 text-center'>
          <h1 className='text-4xl font-bold text-white md:text-5xl'>Privacy Policy</h1>
          <p className='mt-4 text-lg text-neutral-400'>Pikoo</p>
          <p className='mt-2 text-sm text-neutral-500'>Last updated: {LAST_UPDATED}</p>
        </header>

        <div className='space-y-10'>
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className='mb-3 text-xl font-semibold text-white md:text-2xl'>{section.title}</h2>
              {section.body?.map((paragraph, i) => (
                <p key={i} className='mb-3 leading-relaxed text-neutral-300'>
                  {paragraph}
                </p>
              ))}
              {section.link && (
                <a
                  href={section.link.href}
                  className='mt-2 inline-block font-medium text-blue-400 underline transition-colors hover:text-blue-300'
                >
                  {section.link.label}
                </a>
              )}
              {section.list && (
                <ul className='mt-2 list-disc space-y-2 pl-6 text-neutral-300'>
                  {section.list.map((item, i) => (
                    <li key={i} className='leading-relaxed'>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className='rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md'>
            <p className='text-neutral-300'>
              <span className='font-semibold text-white'>{DEVELOPER}</span>
              <br />
              Istanbul, Türkiye
              <br />
              Email:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className='text-blue-400 transition-colors hover:text-blue-300'>
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
