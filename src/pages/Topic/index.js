import { useEffect, useState } from "react";
import { getListTopic } from "../../services/TopicService";
import { Link } from "react-router-dom";

const Topic = () => {
  const [ topics, setTopics ] = useState([]);
  useEffect(() => {
    const fetchApi =  async() => {
      const response = await getListTopic();
      setTopics(response);
    }
    fetchApi();
  }, [])
  return (
    <>
      <div className="container_topic">
        <h2>Danh sách các chủ đề</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="table_id">id</th>
              <th className="table_title">Tên chủ đề</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {topics.map(item => (
              <tr key={item.id}>
                <td className="table_id">{item._id}</td>
                <td className="table_name">{item.name}</td>
                <td className="table_link">
                  <Link to={"/qiuz/"+ item._id}>
                    <button className="table_link-button">Làm bài</button>
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

export default Topic;