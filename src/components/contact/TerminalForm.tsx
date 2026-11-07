"use client";

import { useRef, useState, type FormEvent, type KeyboardEvent } from "react";

type Field = "email" | "message" | "done";

export default function TerminalForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [currentField, setCurrentField] = useState<Field>("email");
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentField === "email" && e.currentTarget.checkValidity()) {
      setCurrentField("message");
      requestAnimationFrame(() => messageRef.current?.focus());
    } else if (currentField === "message" && message.trim()) {
      const subject = encodeURIComponent(`Portfolio contact from ${email.trim()}`);
      const body = encodeURIComponent(message.trim());
      window.location.href = `mailto:akashkumar20485@gmail.com?subject=${subject}&body=${body}`;
      setCurrentField("done");
    }
  };

  const handleMessageKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.currentTarget.form?.requestSubmit();
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
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Your email address"
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
            <span className="text-muted">enter your message:</span>
            {currentField === "message" ? (
              <form onSubmit={handleSubmit} className="flex-1">
                <textarea
                  ref={messageRef}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleMessageKeyDown}
                  aria-label="Your message"
                  rows={3}
                  required
                  className="w-full resize-y bg-transparent text-foreground outline-none caret-accent"
                  placeholder="Hello there..."
                />
                <button
                  type="submit"
                  className="mt-2 rounded-md border border-accent/60 px-3 py-1 text-xs text-accent hover:bg-accent/10"
                >
                  send ↵
                </button>
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
              Your email app was opened with the message ready to send.
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
