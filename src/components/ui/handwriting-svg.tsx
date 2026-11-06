"use client";

import { motion } from "framer-motion";
import * as opentype from "opentype.js";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_FONT_URL =
  "https://cdn.21st.dev/assets/mirror/cc/ccc94b22b156e9c5dfe50fd051f01b097600b252c24473e624bb43a143140a94.ttf";

interface HandwritingSvgProps {
  path?: string;
  text?: string;
  fontUrl?: string;
  className?: string;
  strokeClassName?: string;
  duration?: number;
  delay?: number;
  strokeWidth?: number;
  width?: number;
  height?: number;
  fontSize?: number;
  ease?: "linear" | "easeIn" | "easeOut" | "easeInOut";
  onReady?: () => void;
}

export function HandwritingSvg({
  path: pathProp,
  text,
  fontUrl = DEFAULT_FONT_URL,
  className,
  strokeClassName,
  duration = 2,
  delay = 0.5,
  strokeWidth = 2,
  width = 100,
  height = 100,
  fontSize = 48,
  ease = "easeInOut",
  onReady,
}: HandwritingSvgProps) {
  const [path, setPath] = useState<string | null>(pathProp ?? null);
  const [viewBox, setViewBox] = useState(`0 0 ${width} ${height}`);
  const [loading, setLoading] = useState(Boolean(text && !pathProp));

  useEffect(() => {
    if (!text || pathProp) {
      setPath(pathProp ?? null);
      setViewBox(`0 0 ${width} ${height}`);
      setLoading(false);
      if (pathProp) onReady?.();
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetch(fontUrl)
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        if (cancelled) return;

        const font = opentype.parse(buffer);
        const glyphPath = font.getPath(text, 0, fontSize, fontSize);
        const bounds = glyphPath.getBoundingBox();
        const padding = 5;
        const x = Math.floor(bounds.x1) - padding;
        const y = Math.floor(bounds.y1) - padding;
        const viewWidth = Math.ceil(bounds.x2 - bounds.x1) + padding * 2;
        const viewHeight = Math.ceil(bounds.y2 - bounds.y1) + padding * 2;

        setViewBox(`${x} ${y} ${viewWidth} ${viewHeight}`);
        setPath(glyphPath.toPathData(2));
        onReady?.();
      })
      .catch(() => {
        if (!cancelled) setPath(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [fontSize, fontUrl, height, onReady, pathProp, text, width]);

  if (loading) {
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={cn("text-muted-foreground", className)} aria-hidden>
        <title>Handwriting loading</title>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={14}>Loading...</text>
      </svg>
    );
  }

  const drawing = path ?? "";
  if (!drawing) {
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={cn("text-muted-foreground", className)} aria-hidden>
        <title>Handwriting unavailable</title>
      </svg>
    );
  }

  return (
    <svg width={width} height={height} viewBox={pathProp ? `0 0 ${width} ${height}` : viewBox} className={cn(className || "text-rose-500")} aria-hidden>
      <title>Handwriting</title>
      <motion.path
        d={drawing}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={strokeClassName}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay, duration, ease }}
      />
    </svg>
  );
}

export default HandwritingSvg;
