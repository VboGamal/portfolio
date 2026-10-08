"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  // You can link this to Web3Forms by setting the action URL to https://api.web3forms.com/submit
  // and adding an input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"
  
  return (
    <div className="border border-foreground/15 bg-card p-8">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <CheckCircle2 className="mb-4 size-16 text-primary" />
          <h3 className="text-2xl font-black tracking-tight">Message Received.</h3>
          <p className="mt-2 text-sm text-foreground/60">I'll get back to you as soon as possible.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="mt-8 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST" 
          onSubmit={(e) => {
            // Optional: Handle form submission manually if using custom API
            // For now, we allow the default action or just prevent default to simulate
            // e.preventDefault()
            // setIsSubmitted(true)
          }}
          className="flex flex-col gap-5"
        >
          {/* Replace YOUR_ACCESS_KEY_HERE with your Web3Forms access key */}
          <input type="hidden" name="access_key" value="5a7c59be-d672-4989-9dbe-8c64a56ba5cc" />
          <input type="hidden" name="subject" value="New Inquiry from Portfolio Website" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">Full Name</label>
              <input 
                required
                type="text" 
                id="name"
                name="name"
                placeholder="John Doe" 
                className="w-full rounded-none border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">Email Address</label>
              <input 
                required
                type="email" 
                id="email"
                name="email"
                placeholder="john@example.com" 
                className="w-full rounded-none border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="budget" className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">Estimated Budget (EGP)</label>
            <select 
              id="budget" 
              name="budget"
              className="w-full appearance-none rounded-none border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            >
              <option value="Not sure yet">Not sure yet</option>
              <option value="Starter Growth (3,500 - 4,500)">Starter Growth (3,500 - 4,500)</option>
              <option value="Scale / Sales (6,000 - 7,500)">Scale / Sales (6,000 - 7,500)</option>
              <option value="Custom Enterprise">Custom Enterprise</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">Project Details</label>
            <textarea 
              required
              id="message" 
              name="message"
              rows={4}
              placeholder="Tell me about your brand and what you want to achieve..." 
              className="w-full resize-none rounded-none border border-foreground/15 bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <button 
            type="submit" 
            className="group mt-2 inline-flex w-full items-center justify-center gap-3 bg-primary px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-foreground hover:text-background"
          >
            Send Message 
            <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </form>
      )}
    </div>
  )
}
