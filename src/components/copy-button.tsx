"use client";
import { useState } from "react";
import { delay } from "../utils";

export default function CopyButton(props: { text: string }) {
  const [copiedState, setCopiedState] = useState<"copied" | "idle" | "...">("idle");
  const copyToClipboard = async () => {
    setCopiedState("...");
    await navigator.clipboard.writeText(props.text);
    await delay(1000);
    setCopiedState("copied");
    setTimeout(() => setCopiedState("idle"), 2000);
  }
  return (
    <div className="cursor-pointer  flex items-center text-xs font-medium justify-center h-10 w-[100px] bg-white rounded-full" onClick={copyToClipboard}>
      {copiedState === "idle" && "Copy"}
      {copiedState === "..." && "..."}
      {copiedState === "copied" && "Copied!"}
    </div>
  );
}