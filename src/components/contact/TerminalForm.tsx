"use client";

import { useState, type FormEvent } from "react";

type Field = "email" | "message" | "done";

export default function TerminalForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [currentField, setCurrentField] = useState<Field>("email");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (currentField === "email" && email.trim()) {
      setCurrentField("message");
    } else if (currentField === "message" && message.trim()) {
      setCurrentField("done");
    }
  };

  const reset = () => {
    setEmail("");
    setMessage("");
    setCurrentField("email");
  };

  return (
    <div className="rounded-xl border border-border/60 bg-surface/50 overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border/40 px-4 py-2.5">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-muted">contact.sh</span>
      </div>

      {/* Terminal body */}
      <div className="p-4 font-mono text-sm leading-relaxed">
        <div className="text-muted">
          <span className="text-accent">$</span> ./send_message.sh
        </div>

        {/* Email line */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-accent">{">"}</span>
          <span className="text-muted">enter your email:</span>
          {currentField === "email" ? (
            <form onSubmit={handleSubmit} className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-foreground outline-none caret-accent"
                placeholder="you@example.com"
              />
            </form>
          ) : (
            <span className="text-foreground">{email}</span>
          )}
        </div>

        {/* Message line */}
        {(currentField === "message" || currentField === "done") && (
          <div className="mt-2 flex items-start gap-2">
            <span className="text-accent">{">"}</span>
            <span className="shrink-0 text-muted">enter your message:</span>
            {currentField === "message" ? (
              <form onSubmit={handleSubmit} className="flex-1">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-foreground outline-none caret-accent"
                  placeholder="Hello there..."
                />
              </form>
            ) : (
              <span className="text-foreground">{message}</span>
            )}
          </div>
        )}

        {/* Done */}
        {currentField === "done" && (
          <div className="mt-4">
            <div className="text-accent">
              <span className="text-accent">$</span> send --force{" "}
              <span className="text-green-400">&#10003;</span>
            </div>
            <p className="mt-1 text-muted">
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
            <button
              onClick={reset}
              className="mt-2 cursor-pointer text-xs text-muted underline underline-offset-2 hover:text-accent transition-colors"
            >
              send another
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
