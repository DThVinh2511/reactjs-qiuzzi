import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getQuestion, getTopic } from "../../services/TopicService";
import { getCookie } from "../../helpers/Cookie";
import { postAnwsers, putAnwsers } from "../../services/AnwserService";
import "./Qiuz.scss";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Qiuz = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [ question, setQuestion ] = useState([]);
  const [ datatopic, setDatatopic ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const datatopic = await getTopic(params.id);
      setDatatopic(datatopic);
    };
    fetchApi();
  }, [])
  useEffect( () => {
    const fetchApi = async () => {
      const question = await getQuestion(params.id);
      setQuestion(question);
    }
    fetchApi();
  }, []);
  const hanldeSubmit =  async (e) => {
    e.preventDefault();
    setLoading(true);
    let count = 0;
    let selectedAns = [];
    for(let i = 0; i < e.target.elements.length; i++) {
      if(e.target.elements[i].checked) {
        count++;
        const name = e.target.elements[i].name;
        const value = e.target.elements[i].value;
        selectedAns.push({
          questionId: name,
          answer: value
        })
      }
    };
    if(count === question.length) {
      let option = {
        type: "EMPTY_AWNSER",
        userId: getCookie("id"),
        topicId: params.id,
      }
      const respone = await postAnwsers(option);
      let option2 = {
        awnserId: respone._id,
        awnserArr: selectedAns,
      }
      const respone2 = await putAnwsers(option2);
      if(respone && respone2) {
        await Swal.fire({
          icon: 'success',
          title: 'Nộp bài thành công',
          showConfirmButton: false,
          timer: 1500
        });
        setLoading(false);
        navigate(`/result/${respone._id}`);
      }
      else {
        await Swal.fire({
          icon: 'warning',
          title: 'Nộp bài thất bại!',
          showConfirmButton: false,
          timer: 1500
        });
        setLoading(false);
      }
    }
    else {
      Swal.fire({
        icon: 'warning',
        title: 'Vui lòng điền đủ câu trả lời!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  return (
    <>
      <div className="container--qiuz">
        <div className="box--qiuz">
          <h2>Bài Quiz chủ đề: {datatopic && (<span>{datatopic.name}</span>)}</h2>
          <div className="form-quiz">
            <form onSubmit={hanldeSubmit}>
              {question.map((item, index) => (
                <div className="form-qiuz__item" key={item._id}>
                  <p><strong>Câu {index + 1}</strong>: {item.question}</p>
                  {item.answers.map((itemAns, indexAns) => (
                    <label className="form-quiz__anwser container" key={indexAns} htmlFor={`quiz-${item._id}-${indexAns}`}>
                      {itemAns}
                      <input type="radio" name={item._id} value={indexAns} id={`quiz-${item._id}-${indexAns}`}/>
                      <span className="form-quiz__anwser--checkmark"></span>
                    </label>
                  ))}
                </div>
              ))}
              <button type="submit" className={"button-37 " + (loading ? ("classic-2") : (""))}>Nộp bài</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Qiuz;