"use client";
import { useState } from "react";
import { delay } from "../utils";

export default function CopyButton(props: { text: string }) {
	const [copiedState, setCopiedState] = useState<"copied" | "idle" | "...">("idle");
	const copyToClipboard = async () => {
		if (copiedState !== "idle") return;
		setCopiedState("...");
		await navigator.clipboard.writeText(props.text);
		await delay(500);
		setCopiedState("copied");
	};
	const reset = async () => {
		if (copiedState === "idle") return;
		await delay(1000);
		setCopiedState("idle");
	};
	return (
		<div
			className="cursor-pointer flex items-center text-xs font-medium justify-center h-10 w-[100px] bg-white rounded-full"
			onMouseLeave={reset}
			onClick={copyToClipboard}
		>
			{copiedState === "idle" && "Copy"}
			{copiedState === "..." && "..."}
			{copiedState === "copied" && "Copied!"}
		</div>
	);
}
