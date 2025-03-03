import Sidebar from "./Sidebar";
import Header from "../widgets/header/Header";

type Props = {
  title: string,
  subTitle: string,
  imageSrc: string,
  children: React.ReactNode
}

export default function PageTemplate({ title, subTitle, imageSrc, children }: Props) {
  return (
    <div id="wrapper">
      <div id="main">
        <div className="inner">
          <Header title={title} />

          <section>
            {subTitle && <header className="main"><h1>{subTitle}</h1></header>}
            
            <span className="image main">
              {imageSrc && <img src={`${import.meta.env.BASE_URL}images/${imageSrc}`} style={{ width: "100%" }} alt="section image" />} 
            </span>

            {children}
          </section>
        </div>
      </div>

      <Sidebar />
    </div>
  );
}
