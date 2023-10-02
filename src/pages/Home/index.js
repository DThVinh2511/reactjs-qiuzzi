import imBg from "../../images/backgroud.jpg"
import "./Home.scss";
const Home = () => {
  return (
    <>
      <div className="box">
        <img className="box__img" src={imBg} alt="ảnh nền"/>
        <div className="box__title">
          <p>Xin chào bạn</p>
          <div className="box__title--one">
            Website trắc nghiệm online lập trình Frontend là một nền tăng trực tuyến cho phép các lập trình
            viên Frontend thực hiện các bài kiểm tra, tắc nghiệm đánh giá và đo đạc kiến thức của mình
            trong lĩnh vực lập trình Frontend.
          </div>
          <div className="box__title--two">
            Đối với các lập trình viên Frontend, website trắc nghiệm online cung cấp các bài kiểm tra để giúp
            họ nâng cao kiến thức và kỹ năng của mình trong các công nghệ và công cụ lập tình như HTML,
            CSS JavaScript JQuety, Bootstap, Angular, React Vue,...
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;