import "./styles.css";
import { useState, useEffect } from "react";
import { supabase } from './supabase.js';

export const Todo = () => {
  const [form, setForm] = useState({ textInputDetail: "", textInputTime: 0 });
  const [records, setRecords] = useState([]);
  const { textInputDetail, textInputTime } = form;
  const [error, setError] = useState("");

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    const { data, error } = await supabase
      .from('study-record')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.error('Error fetching records:', error);
      setError("データの取得に失敗しました");
    } else {
      setRecords(data);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!textInputDetail || textInputTime === 0) {
      setError("入力されていない項目があります");
      return;
    }

    const { data, error } = await supabase
      .from('study-record')
      .insert([
        { textInputDetail, textInputTime: parseInt(textInputTime, 10) }
      ]);

    if (error) {
      console.error('Error inserting record:', error);
      setError("データの登録に失敗しました");
    } else {
      await fetchRecords();  // 最新のデータを再取得
      setForm({ textInputDetail: "", textInputTime: 0 }); // フォーム初期化
      
      setError(""); // エラーメッセージ初期化
    }
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
            {`【記録${index + 1}】${textInputDetail}`}
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
