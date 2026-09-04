"use client";

import { useEffect } from "react";

const ME_TALK_HOST = "widget.me-talk.ru";

function isMeTalkScript(node: Node): node is HTMLScriptElement {
  return (
    node instanceof HTMLScriptElement &&
    Boolean(node.src) &&
    node.src.includes(ME_TALK_HOST)
  );
}

export default function DeferredMeTalk() {
  const widgetId = process.env.NEXT_PUBLIC_ME_TALK_ID;

  useEffect(() => {
    const loadWidget = () => {
      if (!widgetId) return;
      if (document.querySelector(`script[src*="${ME_TALK_HOST}"]`)) return;

      const script = document.createElement("script");
      script.src = `https://${ME_TALK_HOST}/js/init.js?id=${encodeURIComponent(widgetId)}`;
      script.async = true;
      script.dataset.deferred = "true";
      document.body.appendChild(script);
    };

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (isMeTalkScript(node) && node.dataset.deferred !== "true") {
            node.remove();
          }
        });
      }
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    const timeoutId = window.setTimeout(() => {
      observer.disconnect();
      loadWidget();
    }, 4000);

    const idleId =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(
            () => {
              window.clearTimeout(timeoutId);
              observer.disconnect();
              loadWidget();
            },
            { timeout: 4000 },
          )
        : 0;

    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, [widgetId]);

  return null;
}
