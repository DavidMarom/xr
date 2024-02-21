"use client";
import { useState, useEffect } from "react";
import { transmitEvent } from "@/services/transmitter";

const PAGE_NAME = "Page 02";
const recordEvent01 = () => { transmitEvent({ page: PAGE_NAME, entity_id: "button", event_type: "click", data: { 'button text': 'Click me', 'location': 'under the title' } }) }
const recordEvent02 = () => { transmitEvent({ page: PAGE_NAME, entity_id: "page", event_type: "scroll", data: {} }) }
const recordEventPageLoad = () => { transmitEvent({ page: PAGE_NAME, entity_id: "page", event_type: "load", data: {} }) }

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollReported, setScrollReported] = useState(false);

  const updateScrollPosition = () => {
    const divElement = document.getElementById(PAGE_NAME);
    if (divElement) { setScrollPosition(divElement.scrollTop) }
  };

  useEffect(() => {
    const divElement = document.getElementById(PAGE_NAME);
    recordEventPageLoad();
    if (divElement) {
      divElement.addEventListener('scroll', updateScrollPosition)
      return () => { divElement.removeEventListener('scroll', updateScrollPosition) }
    }
  }, []);

  useEffect(() => {
    if (!scrollReported && scrollPosition > 150) {
      recordEvent02();
      setScrollReported(true);
    }
  }, [scrollPosition]);


  return (
    <div id={PAGE_NAME} className="page-container">
      <h2>Page 02</h2>

      <button onClick={recordEvent01}>Click me</button>

      <p>
        So God created man in his own image, in the image of God he created him; male and female he created them.
        And God said, Let there be light, and there was light. And God saw that the light was good.
        So God created man in his own image, in the image of God he created him; male and female he created them.
        And God said, Let there be light, and there was light. And God saw that the light was good.
        So God created man in his own image
      </p>
      <img src="/images/page02-hero.jpg" alt="Heusen" width="100%" />
      <p className="vspace">
        So God created man in his own image, in the image of God he created him; male and female he created them.
        And God said, Let there be light, and there was light. And God saw that the light was good.</p>

      <div className="card">
        <div className="rbs">
          <img src="/images/img02.jpg" alt="Heusen" width="50%" />
          <div className="w100 padding2">

            <h3>VAN HEUSEN LOOK BOOK</h3>
            <p>With a strong foundation in men's fashion, Van Heusen has expanded into brands. in the U.S also after</p>
          </div>
        </div>
      </div>
    </div >
  );
}
