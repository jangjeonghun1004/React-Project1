import React, { useEffect, useRef, useState } from "react";
import "./ScrollAnimation.css"; // CSS 파일을 별도로 작성합니다.

interface ScrollAnimationProps {
  children: React.ReactNode;
  animationClass?: string; // 애니메이션 클래스를 지정할 수 있는 옵션
  alwaysVisible?: boolean; // 첫 번째 요소를 기본적으로 노출시키는 옵션
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animationClass = "slide-up",
  alwaysVisible = false,
}) => {
  const [isVisible, setIsVisible] = useState(alwaysVisible);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (alwaysVisible) return; // 항상 노출 상태이면 옵저버를 설정하지 않음

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 한 번만 실행되도록 옵저버 해제
        }
      },
      { threshold: 0.05 } // 5%가 뷰포트에 들어오면 트리거
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [alwaysVisible]);

  return (
    <div
      ref={ref}
      className={`scroll-animation ${isVisible ? animationClass : ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;