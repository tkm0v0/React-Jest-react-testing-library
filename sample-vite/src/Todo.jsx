import "./styles.css";
import { useState } from "react";

export const Todo = () => {
  const [form, setForm] = useState({ textInputDetail: "", textInputTime: 0 });
  const [records, setRecords] = useState([]);
  const { textInputDetail, textInputTime } = form;
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!textInputDetail || textInputTime === 0) {
      setError("入力されていない項目があります");
      return;
    }

    setRecords([
      ...records,
      { textInputDetail, textInputTime: parseInt(textInputTime, 10) },
    ]);
    setForm({ textInputDetail: "", textInputTime: 0 }); // フォーム初期化

    setError(""); // エラーメッセージ初期化
  };

  // records 内の全ての time を合計
  const totalTime = records.reduce(
    (sum, record) => sum + record.textInputTime,
    0
  );

  return (
    <>
      <h1>学習記録一覧</h1>
      <div>
        <div>
          <label>
            <span>学習内容</span>
            <input
              name="textInputDetail"
              type="text"
              placeholder="内容"
              value={textInputDetail}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <span>学習時間</span>
            <input
              name="textInputTime"
              type="number"
              min="0"
              placeholder="時間"
              value={textInputTime}
              onChange={handleChange}
            />
          </label>
        </div>
        <div style={{ color: "skyblue" }}>
          <p>入力されている学習内容：{textInputDetail}</p>
          <p>入力されている学習時間：{textInputTime}時間</p>
        </div>
      </div>
      <div>
        {records.map(({ textInputDetail, textInputTime }, index) => (
          <p key={index}>
            {`【No.${index + 1}】${textInputDetail}`}
            <span
              style={{ borderBottom: "1px solid black", marginLeft: "20px" }}
            >{`${textInputTime}時間`}</span>
          </p>
        ))}
      </div>
      <button onClick={handleSubmit}>登録</button>
      <p>{error && <p style={{ color: "red" }}>{error}</p>} </p>
      <p>合計時間: {totalTime}/1000（h）</p>
    </>
  );
};
