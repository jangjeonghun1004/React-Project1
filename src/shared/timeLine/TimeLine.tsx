interface ITimeLine {
  id: number,
  title: string,
  subTitle: string,
  details: ITimeLineDetail[]
}

interface ITimeLineDetail {
  id: number,
  text: string
}

interface Props {
  data: ITimeLine[]
}

function TimeLine({data}: Props) {
  return (
    <>
      {data.map((timeLine => {
        return (
          <div className="row" key={timeLine.id}>
            <div>
              <h2>{timeLine.id <= 1 && <img src={`${import.meta.env.BASE_URL}images/edit_document.gif`} style={{marginBottom:-20}} />} {timeLine.title}</h2>
              <blockquote>
                <div>
                  <h4>{timeLine.subTitle}</h4>
                  <ul style={{marginBottom:0}}>
                    {timeLine.details.map(item => <li key={item.id}>{item.text}</li>)}
                  </ul>
                </div>
              </blockquote>
            </div>
          </div>
        )
      }))}
    </>
  );
}

export default TimeLine;
