import React from 'react'

export default function ContactForm () {

  return (
    <div>
        <form
          className="contact-form"
          action="/thanks"
          name="contact"
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name">
              Imię i nazwisko
            </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="email">
              Email
            </label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="phone">
              Nr Telefonu
            </label>
            <input type="text" name="phone" id="phone" required />
          </div>
          <div>
            <label htmlFor="target">
              Cel wyceny
            </label>
            <input type="text" name="target" id="target" required />
          </div>
          <div>
            <label htmlFor="valuation-subject">
              Przedmiot wyceny
            </label>
            <input type="text" name="valuation-subject" id="valuation-subject" required />
          </div>
          <div>
            <label htmlFor="name">
              Temat
            </label>
            <input type="text" name="subject" id="subject" required />
          </div>
          <div>
            <label htmlFor="message">
              Wiadomość
            </label>
            <textarea name="message" id="message" required />
          </div>
          <p className="text-align-right">
            <button
              className="button mrb-button mrb-button-light"
              sx={{
                variant: "variants.button",
              }}
              type="submit"
            >
              Wyślij wiadomość
            </button>
          </p>
        </form>
      </div>
  )
}