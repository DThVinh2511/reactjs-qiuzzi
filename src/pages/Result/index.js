import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAnwsers } from "../../services/AnwserService";
import { getQuestion } from "../../services/TopicService";
import "./Result.scss";
const Result = () => {
  const prams = useParams();
  const [ dataRes, setDataRes ] = useState([]);
  const [ dataAns, setDataAns ] = useState("");
  const [ correctAns, setCorrectAns ] = useState(0);

  useEffect(() => {
    const fetchApi = async () => {
      const dataAns = await getAnwsers(prams.id);
      const dataQuestion = await getQuestion(dataAns[0].topicId);
      setDataAns(dataAns[0]);
      console.log("check data Question",dataQuestion);
      console.log("check dataAns", dataAns);
      let Result = [];
      for(let i = 0; i < dataQuestion.length; i++) {
        Result.push({
          ...dataQuestion[i],
          ...dataAns[0].answers.find(item => item.questionId === dataQuestion[i]._id)
        })
      }
      console.log(Result);
      setDataRes(Result);
      let correctAns = 0;
      for(let i = 0; i < Result.length; i++) {
        if(parseInt(Result[i].answer) === Result[i].correctAnswer) {
          correctAns++;
        }
      }
      setCorrectAns(correctAns);
    };
    fetchApi();
  },[])
  console.log(prams.id);
  console.log(dataAns);
  return (
    <>
      <div className="container--Result">
        <div className="box--Result">
          <h2>Kết quả: 
            <span className="title--correct"> đúng:</span> <span className="number number--correct">{correctAns}</span>,
            <span className="title--wrong"> sai:</span> <span className="number number--wrong">{dataRes.length - correctAns}</span>, 
            <span className="title--percent"> tỉ lệ đúng:</span> <span className="number number--percent">{((correctAns*100/dataRes.length))}%</span>
          </h2>
          <div className="Result-list">
            {dataRes.map((item,index) => (
              <div className="Result__item" key={item._id}>
                <p className="Result__item--question"><strong>Câu {index + 1}</strong>: {item.question}
                  {item.correctAnswer === parseInt(item.answer) ? (
                    <strong className="Result__item--tag Result__item--tag-true">Correct</strong>
                  ): (
                    <strong className="Result__item--tag Result__item--tag-false">Wrong</strong>
                  )}
                </p>
                {item.answers.map((itemAns, indexAns) => {
                  let checked = false;
                  let corect = false;
                  let classname = "";
                  if(parseInt(item.answer) === indexAns) {
                    checked = true;
                    classname = "Result__item--selected";
                  }
                  if(item.correctAnswer === indexAns){
                    classname += " Result__item--correct";
                    corect = true;
                  }
                  return (
                    <label className={"Result__anwser " + classname} key={indexAns}>
                      {itemAns}
                      <input type="radio" disabled defaultChecked={checked}/>
                      <span className={"Result__anwser--checkmark" + (corect ? " Result__anwser--checkmark--correct" : "")}></span>
                    </label>
                  )
                })}
              </div>
            ))}
          </div>
          <Link to={"/qiuz/"+ dataAns.topicId}>
            <button type="submit" className="button-37 button-37-ll">Làm lại</button>
          </Link>
          <Link to={"/topic"}><button type="submit" className="button-37">Bài mới</button></Link>
        </div>
      </div>
    </>
  )
}

export default Result;