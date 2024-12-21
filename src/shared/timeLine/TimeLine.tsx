
import styles from './TimeLine.module.css';

const timelineData = [
  { id: 1, title: "현재(개발 역량 확장)", careerDetails: [{id:1, title: 'Spring Boot'},{id:1, title: 'React + Vite + TS'}] },
  { id: 2, title: "2018 ~ 2020 호주 유학", careerDetails: [{id:1, title: '어학 연수'}] },
  { id: 3, title: "init", careerDetails: [{id:1, title: '입출고 시스템'},{id:1, title: '고객 관리 시스템'}] },
  { id: 4, title: "init", careerDetails: [{id:1, title: '입출고 시스템'},{id:1, title: '고객 관리 시스템'}] },
  { id: 5, title: "init", careerDetails: [{id:1, title: '입출고 시스템'},{id:1, title: '고객 관리 시스템'},{id:1, title: '입출고 시스템'},{id:1, title: '고객 관리 시스템'}] },
];

function TimeLine() {
  return (
    <div className={styles.timeline}>
      {timelineData.map((item) => (
        <div key={item.id} className={styles.timelineitem }>
          <div className={styles.circle} />
          <div className={styles.content}>
            <p className={styles.message}>{item.title}</p>
            {item.careerDetails.map((i) => <p key={i.id} className={styles.author}>{i.title}</p>)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimeLine;
