import "./styles.css";
import { useState, useEffect } from "react";
import { supabase } from './supabase.js';

export const Todo = () => {
  const [form, setForm] = useState({ textInputDetail: "", textInputTime: "" });
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("読み込み中です。");
  const { textInputDetail, textInputTime } = form;
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      setLoadingText("読み込み中です。");
      await fetchRecords();
      setLoading(false);
      setLoadingText("読み込みが完了しました。");
    };

    loadData();
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
    if (!textInputDetail || !textInputTime || isNaN(Number(textInputTime))) {
      setError("入力されていない項目があります");
      return;
    }

    const { data, error } = await supabase
      .from('study-record')
      .insert([
        { 
          textInputDetail, 
          textInputTime: parseInt(textInputTime, 10)
        }
      ]);

    if (error) {
      console.error('Error inserting record:', error);
      setError("データの登録に失敗しました");
    } else {
      await fetchRecords(); 
      setForm({ textInputDetail: "", textInputTime: "" });
      setError("");
    }
  };

  const handleDelete = async (id) => {
    const { error } = await supabase
      .from('study-record')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting record:', error);
      setError("データの削除に失敗しました");
    } else {
      await fetchRecords();
      setError("");
    }
  };

  const totalTime = records.reduce(
    (sum, record) => sum + record.textInputTime,
    0
  );

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "white", flexDirection: "column" }}>
        <h2>loading...</h2>
        <p>{loadingText}</p>
      </div>
    );
  }

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
        {records.map(({ id, textInputDetail, textInputTime }, index) => (
          <div key={id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <p style={{ margin: 0 }}>
              {`【記録${index + 1}】${textInputDetail}`}
              <span
                style={{ borderBottom: "1px solid black", marginLeft: "20px" }}
              >{`${textInputTime}時間`}</span>
            </p>
            <button 
              onClick={() => handleDelete(id)}
              style={{ marginLeft: "20px",  border: "none", padding: "5px 10px", cursor: "pointer" }}
            >
              削除
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>登録</button>
      <p>{error && <p style={{ color: "red" }}>{error}</p>} </p>
      <p>合計時間: {totalTime}/1000（h）</p>
    </>
  );
};
