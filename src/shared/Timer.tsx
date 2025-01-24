import { useEffect } from "react";
import { useState } from "react";

export default function Timer() {
    const [time, setTime] = useState<Date>(new Date());

    const formatTime = () => {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        hours = hours % 12 || 12;
        return `${zeroPadding(hours)}시 ${zeroPadding(minutes)}분 ${zeroPadding(seconds)}초`;
    };

    const formatDate = () => {
        const month = time.getMonth() + 1;
        const date = time.getDate();
        const day = time.getDay();
        const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

        return `${month}월 ${date}일 ${days[day]}`;
    };

    const ampm = time.getHours() < 12 ? '오전' : '오후';
    const zeroPadding = (num: number) => num.toString().padStart(2, '0');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => { clearInterval(intervalId) };
    }, []); // []: 컴포넌트가 처음 렌더링될 때만 실행

    return (
        <>
            <h2 style={{ textAlign: "center" }}>{formatDate()}</h2>
            <h3 style={{ textAlign: "right" }}>{ampm + " " + formatTime()}</h3>
        </>
    );
}