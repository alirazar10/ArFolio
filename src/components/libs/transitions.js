"use client";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useState, useRef, useEffect } from "react";

export function Fade({ show, children }) {
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

export function FadeUp({ show, children }) {
  const [fadeUp, setFadeUp] = useState(false);
  const fadeUpRef = useRef(null);
  useEffect(() => {
    setFadeUp(show);
  }, [fadeUp, show]);
  console.log(fadeUp);
  return (
    <CSSTransition
      in={fadeUp}
      nodeRef={fadeUpRef}
      timeout={300}
      classNames="fadeup"
      unmountOnExit
    >
      <div ref={fadeUpRef} style={{ transitionDelay: "300sm" }}>
        {children}
      </div>
    </CSSTransition>
  );
}

export function FadeDown({ show, children }) {
  return (
    <CSSTransition in={show} timeout={300} classNames="fadedown" unmountOnExit>
      <div>{children}</div>
    </CSSTransition>
  );
}
