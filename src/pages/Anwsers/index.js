import { useEffect, useState } from "react";
import { getListAnwsers } from "../../services/AnwserService";
import { getListTopic } from "../../services/TopicService";
import { Link } from "react-router-dom";

const Anwsers = () => {
  const [ anwser, setAnwser ] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const anwsers = await getListAnwsers();
      const topics = await getListTopic();
      const data = [
      ];
      for(let i = 0; i < anwsers.length; i++) {
        data.push({
          ...topics.find(item => item._id === anwsers[i].topicId),
          ...anwsers[i]
        })
      }
      setAnwser(data.reverse());
    };
    fetchApi();
  }, [])
  return (
    <>
      <div className="container_topic">
        <h2>Danh sách các chủ đề đã luyện tập</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="table_id">id</th>
              <th className="table_title">Tên chủ đề</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {anwser.map(item => (
              <tr key={item._id}>
                <td className="table_id">{item._id}</td>
                <td className="table_name">{item.name}</td>
                <td className="table_link">
                  <Link to={"/result/"+ item._id}>
                    <button className="table_link-button">Xem chi tiết</button>
                  </Link>
                  <Link to={"/qiuz/"+ item.topicId}>
                    <button className="table_link-button">Làm Lại</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Anwsers;