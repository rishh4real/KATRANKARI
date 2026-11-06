"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowUpRight, MessageCircle, Send, X } from "lucide-react";
import { siteConfig } from "@/config/site";

type ChatMessage = {
  body: string;
  href?: string;
  label?: string;
  role: "assistant" | "user";
};

const starterMessage: ChatMessage = {
  role: "assistant",
  body: "Hi! I can help you explore products, materials, gifting, collaborations, education, orders and contact details.",
};

const suggestions = ["Shop products", "Track an order", "Corporate gifting", "What are the products made from?"];

function answerQuestion(question: string): Omit<ChatMessage, "role"> {
  const text = question.toLowerCase();

  if (/(hello|hi |hey|good morning|good evening)/.test(text)) {
    return { body: "Hello! What would you like to know about KatranKaari?" };
  }
  if (/(material|made from|textile waste|upcycl|sustainab|fabric)/.test(text)) {
    return { body: "KatranKaari is built around thoughtfully designed, functional products made from upcycled textile waste. Explore our process and material stories for the fuller picture.", href: "/education", label: "Explore education" };
  }
  if (/(corporate|bulk|custom|gift|gifting)/.test(text)) {
    return { body: "We have a dedicated route for corporate gifting and custom-order enquiries. Tell us about your brief, quantity and timing there.", href: "/corporate-gifting", label: "Explore corporate gifting" };
  }
  if (/(collab|partner|work with|business|designer|creator|community)/.test(text)) {
    return { body: "KatranKaari welcomes collaborations with brands, designers, creators and community partners. The contact page is the best place to start a conversation.", href: "/contact", label: "Contact KatranKaari" };
  }
  if (/(track|order status|where.*order|delivery)/.test(text)) {
    return { body: "Order tracking will be available when Shopify orders and customer accounts are connected. This development storefront does not create real orders yet.", href: "/track-order", label: "Track order details" };
  }
  if (/(shipping|return|refund|exchange|policy)/.test(text)) {
    return { body: "Shipping, returns and exchange policies are still awaiting approved client details, so we do not want to give you inaccurate information. Please contact KatranKaari for help with a specific query.", href: "/contact", label: "Contact KatranKaari" };
  }
  if (/(price|cost|product|buy|shop|collection|bag|pouch|cushion)/.test(text)) {
    return { body: "You can browse the current product and collection preview in the shop. Prices and availability are development values until the Shopify catalogue is connected.", href: "/shop", label: "Visit the shop" };
  }
  if (/(education|report|learn|landfill|women|impact)/.test(text)) {
    return { body: "Our education area shares material stories and developing resources around textile waste, circularity and the people behind the work.", href: "/education", label: "Visit education" };
  }
  if (/(contact|email|phone|address|instagram)/.test(text)) {
    return { body: `You can reach KatranKaari at ${siteConfig.contact.email}, call ${siteConfig.contact.phoneDisplay}, or use the contact form.`, href: "/contact", label: "Open contact page" };
  }
  if (/(cart|checkout|payment|pay)/.test(text)) {
    return { body: "Checkout and payments are not connected in this development storefront, so no real purchases are processed here yet.", href: "/faq", label: "View FAQs" };
  }

  return { body: "I can help with shopping, products, materials, gifting, collaborations, education, policies, orders or contact details. For anything more specific, the KatranKaari team can help directly.", href: "/contact", label: "Contact KatranKaari" };
}

export function SiteHelpChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([starterMessage]);

  const submitQuestion = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;

    setMessages((current) => [...current, { body: question, role: "user" }, { ...answerQuestion(question), role: "assistant" }]);
    setInput("");
  };

  const askSuggestion = (question: string) => {
    setMessages((current) => [...current, { body: question, role: "user" }, { ...answerQuestion(question), role: "assistant" }]);
  };

  return (
    <aside className="fixed bottom-5 right-5 z-[70] sm:bottom-7 sm:right-7" aria-label="KatranKaari site help">
      {isOpen ? (
        <section className="mb-3 flex h-[min(34rem,calc(100svh-7rem))] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-[10px] border border-[#C8CED7] bg-[#FCFBF8] shadow-[0_18px_55px_rgb(27_41_61_/_0.2)]">
          <header className="flex items-center justify-between bg-[#263A57] px-4 py-3.5 text-[#F7F5EF]">
            <div className="flex items-center gap-2.5">
              <MessageCircle aria-hidden="true" size={20} strokeWidth={1.8} />
              <div>
                <p className="text-sm font-semibold">KatranKaari Help</p>
                <p className="text-[0.65rem] uppercase tracking-[0.12em] text-[#CBD3DF]">Here to guide you</p>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="grid size-8 place-items-center rounded-[6px] text-[#F7F5EF] transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F5EF]" aria-label="Close chat">
              <X aria-hidden="true" size={18} />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
            {messages.map((message, index) => (
              <div className={`max-w-[90%] rounded-[7px] px-3.5 py-3 text-sm leading-5 ${message.role === "user" ? "ml-auto bg-[#2C405E] text-[#F7F5EF]" : "border border-[#DCE0E6] bg-white text-[#253144]"}`} key={`${message.role}-${index}`}>
                <p>{message.body}</p>
                {message.href && message.label ? <Link href={message.href} className="mt-2 inline-flex items-center gap-1 border-b border-current pb-0.5 text-xs font-semibold text-[#2C405E] transition-colors hover:text-[#16243A]">{message.label} <ArrowUpRight aria-hidden="true" size={13} /></Link> : null}
              </div>
            ))}
          </div>

          <div className="border-t border-[#DCE0E6] bg-white p-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {suggestions.map((suggestion) => <button type="button" className="shrink-0 rounded-full border border-[#C8D0DB] px-3 py-1.5 text-xs font-medium text-[#2C405E] transition-colors hover:bg-[#EEF2F6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C405E]" key={suggestion} onClick={() => askSuggestion(suggestion)}>{suggestion}</button>)}
            </div>
            <form className="flex items-center gap-2" onSubmit={submitQuestion}>
              <label className="sr-only" htmlFor="site-help-question">Ask a question</label>
              <input id="site-help-question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask anything..." className="h-10 min-w-0 flex-1 rounded-[6px] border border-[#C8D0DB] bg-[#F8F9FB] px-3 text-sm text-[#253144] outline-none placeholder:text-[#7C8797] focus:border-[#2C405E] focus:ring-2 focus:ring-[#2C405E]/20" />
              <button type="submit" className="grid size-10 shrink-0 place-items-center rounded-[6px] bg-[#2C405E] text-[#F7F5EF] transition-colors hover:bg-[#1D304B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C405E] focus-visible:ring-offset-2" aria-label="Send question">
                <Send aria-hidden="true" size={17} />
              </button>
            </form>
          </div>
        </section>
      ) : null}

      <button type="button" onClick={() => setIsOpen(true)} className="group ml-auto flex min-h-10 items-center gap-2 rounded-full bg-[#263A57]/85 px-3.5 text-xs font-medium text-[#F7F5EF] shadow-[0_8px_22px_rgb(27_41_61_/_0.24)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-[#263A57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263A57] focus-visible:ring-offset-2" aria-expanded={isOpen}>
        <MessageCircle aria-hidden="true" size={18} strokeWidth={1.8} />
        <span>Chat</span>
      </button>
    </aside>
  );
}
