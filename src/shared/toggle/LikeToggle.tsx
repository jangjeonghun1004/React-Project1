import { useState } from "react";
import { useEffect } from "react";

/**
 * LikeToggleProps 인터페이스
 * @property {boolean} [initialLiked=false] - 좋아요 여부의 초기값 (기본: false)
 * @property {number} [initialCount=0] - 좋아요 개수의 초기값 (기본: 0)
 * @property {() => Promise<void> | void} [onToggle] - 좋아요 토글 시 호출되는 콜백 함수.
 * 비동기로 처리할 경우 Promise를 반환할 수 있으며, 에러 발생 시 UI 롤백 처리가 이루어집니다.
 * @property {string} [className=""] - 추가적인 CSS 클래스 이름 (선택 사항)
 */
interface LikeToggleProps {
  initialLiked?: boolean;
  initialCount?: number;
  onToggle?: () => Promise<void> | void;
  className?: string;
}

/**
 * 재사용 가능한 LikeToggle 컴포넌트
 * - 초기 좋아요 상태와 개수를 받아 내부 state로 관리합니다.
 * - 버튼 클릭 시 optimistic UI 업데이트를 수행하고, onToggle 콜백을 호출합니다.
 * - onToggle에서 오류가 발생하면 UI 변경 사항을 롤백합니다.
 *
 * @example
 * ```tsx
 * <LikeToggle
 *   initialLiked={true}
 *   initialCount={42}
 *   onToggle={async (newLiked, newCount) => {
 *     // API 요청 또는 추가 로직 수행
 *   }}
 * />
 * ```
 */
export default function LikeToggle({
  initialLiked = false,
  initialCount = 0,
  onToggle,
  className = "",
}: LikeToggleProps) {
  // 내부 state로 좋아요 여부와 좋아요 개수를 관리합니다.
  const [liked, setLiked] = useState(initialLiked);
  const [count, setCount] = useState(initialCount);

  // 부모로부터 전달된 초기값이 변경될 때 내부 상태를 업데이트
  useEffect(() => {
    setLiked(initialLiked);
    setCount(initialCount);
  }, [initialLiked, initialCount]);

  /**
   * handleToggle 함수
   * - 버튼 클릭 시 호출되며, 좋아요 상태를 토글하고 UI를 즉각 업데이트합니다.
   * - onToggle 콜백이 제공된 경우, 이를 호출하여 추가 처리를 수행합니다.
   * - 에러 발생 시 상태를 롤백합니다.
   */
  const handleToggle = async () => {
    // 새로운 좋아요 상태와 개수를 계산합니다.
    const newLiked = !liked;
    const newCount = newLiked ? count + 1 : count - 1;

    // optimistic UI 업데이트: 상태를 먼저 변경합니다.
    setLiked(newLiked);
    setCount(newCount);

    // onToggle 콜백이 제공되면 호출합니다.
    if (onToggle) {
      try {
        await onToggle();
      } catch (error) {
        // 에러 발생 시 이전 상태로 롤백합니다.
        setLiked(liked);
        setCount(count);
        console.error("Error toggling like:", error);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      // liked 상태에 따라 아이콘의 스타일을 변경하며, 추가 className도 적용합니다.
      className={`icon fa-heart small ${liked ? "solid" : ""} ${className}`}
    >
      like({count})
    </button>
  );
}
