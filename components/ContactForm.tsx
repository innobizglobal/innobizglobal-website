'use client';

import { FormEvent, useState } from 'react';

const contactEmail = 'hello@innobizglobal.com';

export function ContactForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const contact = String(form.get('contact') || '').trim();
    const projectType = String(form.get('projectType') || '').trim();
    const message = String(form.get('message') || '').trim();

    const subject = encodeURIComponent(`New Innobiz Global enquiry${name ? ` from ${name}` : ''}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email / Phone: ${contact}`,
        `Project Type: ${projectType}`,
        '',
        'Message:',
        message,
      ].join('\n')
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setStatus('Your email app should open with the enquiry details. Please send the email from there.');
  }

  return (
    <form className="contact-form reveal delay-1" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" type="text" placeholder="Your name" required />
      </label>
      <label>
        Email / Phone
        <input name="contact" type="text" placeholder="name@company.com / phone" required />
      </label>
      <label>
        Project Type
        <select name="projectType" defaultValue="" required>
          <option value="" disabled>Select a service</option>
          <option>Corporate Website</option>
          <option>E-commerce / Portal</option>
          <option>AI Automation</option>
          <option>CRM / Customer Support System</option>
          <option>Digital Growth Campaign</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" placeholder="Tell us what you want to build" rows={4} required />
      </label>
      <button type="submit" className="btn btn-primary">Submit Enquiry</button>
      <a className="btn btn-ghost form-alt" href={`mailto:${contactEmail}`}>Email {contactEmail}</a>
      {status ? <p className="form-status">{status}</p> : null}
    </form>
  );
}
