const App = () => (
  <div className='App'>
    <div className='calculator'>
      <div className='display'>
        <span>0</span>0
      </div>

      <div className='operators'>
        <button type='button'>/</button>
        <button type='button'>*</button>
        <button type='button'>+</button>
        <button type='button'>-</button>
        <button type='button'>DEL</button>
      </div>

      <div className='digits'>
        {/* one ~ nien gen */}
        {Array.from({ length: 9 }, (_, i) => (
          <button key={i} type='button'>
            {i + 1}
          </button>
        ))}
        <button type='button'>0</button>
        <button type='button'>.</button>
        <button type='button'>=</button>
      </div>
    </div>
  </div>
);

export default App;
