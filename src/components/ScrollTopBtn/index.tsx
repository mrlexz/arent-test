import { useEffect, useRef, useState } from "react";
import IconScroll from "../../assets/icons/component_scroll.svg";
import { animateScroll as scroll } from "react-scroll";

function ScrollTopBtn() {
  const btnRef = useRef<HTMLDivElement>(null);

  const [scrollSpaceFromTop, setScrollSpaceFromTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollSpace = window.pageYOffset;
      setScrollSpaceFromTop(scrollSpace);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div
      className={`fixed bottom-10 right-10 cursor-pointer ${
        scrollSpaceFromTop > 200 ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
      ref={btnRef}
    >
      <img src={IconScroll} alt="scroll-top" />
    </div>
  );
}

export default ScrollTopBtn;
