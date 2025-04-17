import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>ViteとReactで始めるアプリ開発</h1>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        カウントアップ
      </button>
    </div>
  );
}

export default App;