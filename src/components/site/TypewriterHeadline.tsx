import { useEffect, useRef, useState } from "react";

type Segment = {
  text?: string;
  className?: string;
  isBreak?: boolean;
};

type TypewriterHeadlineProps = {
  segments: Segment[];
  speed?: number;
  startDelay?: number;
  lineBreakPause?: number;
  segmentPause?: number;
  loop?: boolean;
  loopPause?: number;
  cursor?: boolean;
  cursorClassName?: string;
  className?: string;
  hideCursorOnFinish?: boolean;
  finishPause?: number;
  /** Retype every time the headline scrolls back into view */
  restartOnEnter?: boolean;
};

export function TypewriterHeadline({
  segments,
  speed = 45,
  startDelay = 400,
  lineBreakPause = 500,
  segmentPause = 160,
  loop = false,
  loopPause = 3000,
  cursor = true,
  cursorClassName,
  className,
  hideCursorOnFinish = true,
  finishPause = 600,
  restartOnEnter = false,
}: TypewriterHeadlineProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(!restartOnEnter);
  const [displayed, setDisplayed] = useState<Segment[]>(() =>
    segments.map((s) => ({ ...s, text: "" }))
  );
  const [cursorVisible, setCursorVisible] = useState(true);
  const [done, setDone] = useState(false);
  const [finished, setFinished] = useState(false);

  // Watches visibility so the typing can restart when the section re-enters
  useEffect(() => {
    if (!restartOnEnter) return;
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) setActive(entry.isIntersecting);
      },
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [restartOnEnter]);

  useEffect(() => {
    if (!active) return;

    let cancelled = false;
    let segmentIndex = 0;
    let charIndex = 0;
    let current: Segment[] = segments.map((s) => ({ ...s, text: "" }));
    setDisplayed([...current]);
    setDone(false);
    setFinished(false);

    const flush = () => {
      if (!cancelled) setDisplayed([...current]);
    };

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = setTimeout(() => {
          if (!cancelled) resolve();
        }, ms);
        return () => clearTimeout(id);
      });

    let finishTimer: ReturnType<typeof setTimeout> | null = null;
    let cursorInterval: ReturnType<typeof setInterval> | null = null;

    const finishCursor = () => {
      if (!hideCursorOnFinish || loop) return;
      finishTimer = setTimeout(() => {
        if (cancelled) return;
        if (cursorInterval) clearInterval(cursorInterval);
        setFinished(true);
      }, finishPause);
    };

    const type = async () => {
      await wait(startDelay);

      while (segmentIndex < segments.length) {
        if (cancelled) return;
        const segment = segments[segmentIndex];

        if (segment.isBreak) {
          current[segmentIndex] = { ...segment, text: "" };
          flush();
          segmentIndex++;
          charIndex = 0;
          await wait(lineBreakPause);
          continue;
        }

        const fullText = segment.text ?? "";
        while (charIndex < fullText.length) {
          if (cancelled) return;
          current[segmentIndex] = {
            ...segment,
            text: fullText.slice(0, charIndex + 1),
          };
          flush();
          charIndex++;
          await wait(speed + Math.random() * 20);
        }

        segmentIndex++;
        charIndex = 0;
        if (segmentIndex < segments.length) {
          await wait(segmentPause);
        }
      }

      setDone(true);

      if (loop) {
        await wait(loopPause);
        if (cancelled) return;
        segmentIndex = 0;
        charIndex = 0;
        current = segments.map((s) => ({ ...s, text: "" }));
        setDisplayed(current);
        setDone(false);
        type();
      } else {
        finishCursor();
      }
    };

    type();

    cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);

    return () => {
      cancelled = true;
      if (cursorInterval) clearInterval(cursorInterval);
      if (finishTimer) clearTimeout(finishTimer);
    };
  }, [
    segments,
    speed,
    startDelay,
    lineBreakPause,
    segmentPause,
    loop,
    loopPause,
    hideCursorOnFinish,
    finishPause,
    active,
  ]);

  return (
    <span ref={rootRef} className={className}>
      {displayed.map((segment, i) =>
        segment.isBreak ? (
          <br key={i} />
        ) : (
          <span key={i} className={segment.className}>
            {segment.text}
          </span>
        )
      )}
      {cursor && !finished && (
        <span
          className={
            cursorClassName ??
            "inline-block h-[0.9em] w-[2px] translate-y-[0.05em] bg-current align-middle opacity-100 transition-opacity duration-100"
          }
          style={{ opacity: cursorVisible ? 1 : 0 }}
          aria-hidden="true"
        />
      )}
    </span>
  );
}
