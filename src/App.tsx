/* eslint-disable no-eval */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useState } from 'react';

const App = () => {
  const [calc, setCalc] = useState(''); // 計算式。この中に文字列の計算式が入る（例: "2 + 3 * 5 / 2"）
  const [result, setResult] = useState(''); // 計算結果

  const ops = ['/', '*', '+', '-', '.', '='];

  const handleUpdateCalc = (value: string): void => {
    /**
     * (opsのどれかを押下 かつ calcが空文字) または
     * (opsのどれかを押下 かつ calcの最後の文字がopsに含まれている)
     *
     * 場合は早期return
     */
    if ((ops.includes(value) && calc === '') ||
        (ops.includes(value) && ops.includes(calc.slice(-1)))) return; // prettier-ignore

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === '') return;

    setCalc(calc.slice(0, -1));
  };

  return (
    <div className='App'>
      <div className='calculator'>
        <div className='display'>
          {result ? <span>（{result}）</span> : ''}
          {calc || '0'}
        </div>

        <div className='operators'>
          <button type='button' onClick={() => handleUpdateCalc('/')}>
            /
          </button>
          <button type='button' onClick={() => handleUpdateCalc('*')}>
            *
          </button>
          <button type='button' onClick={() => handleUpdateCalc('+')}>
            +
          </button>
          <button type='button' onClick={() => handleUpdateCalc('-')}>
            -
          </button>
          <button type='button' onClick={() => deleteLast()}>
            DEL
          </button>
        </div>

        <div className='digits'>
          {/* one ~ nien gen */}
          {Array.from({ length: 9 }, (_, i) => (
            <button key={i} type='button' onClick={() => handleUpdateCalc(`${i + 1}`)}>
              {i + 1}
            </button>
          ))}
          <button type='button' onClick={() => handleUpdateCalc('0')}>
            0
          </button>
          <button type='button' onClick={() => handleUpdateCalc('.')}>
            .
          </button>
          <button type='button' onClick={() => calculate()}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
