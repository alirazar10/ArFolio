"use client";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useState, useRef, useEffect } from "react";

interface FadeProps {
  show: boolean;
  children: React.ReactNode;
}

interface FadeUpProps {
  show: boolean;
  children: React.ReactNode;
}

interface FadeDownProps {
  show: boolean;
  children: React.ReactNode;
}

export function Fade({ show, children }: FadeProps): React.ReactElement {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFade(show);
    }, 50);
  });

  return (
    <>
      <CSSTransition in={fade} timeout={300} classNames="fade" unmountOnExit>
        <div>{children}</div>
      </CSSTransition>
    </>
  );
}

export function FadeUp({ show, children }: FadeUpProps): React.ReactElement {
  const [fadeUp, setFadeUp] = useState(false);
  const fadeUpRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setFadeUp(show);
  }, [fadeUp, show]);
  return (
    <CSSTransition
      in={fadeUp}
      nodeRef={fadeUpRef}
      timeout={300}
      classNames="fadeup"
      unmountOnExit
    >
      <div ref={fadeUpRef} style={{ transitionDelay: "300ms" }}>
        {children}
      </div>
    </CSSTransition>
  );
}

export function FadeDown({ show, children }: FadeDownProps): React.ReactElement {
  return (
    <CSSTransition in={show} timeout={300} classNames="fadedown" unmountOnExit>
      <div>{children}</div>
    </CSSTransition>
  );
}
