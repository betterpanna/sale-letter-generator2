import React, { useState } from 'react';

const OPENINGS = [
  "疲れていませんか", "悩んでいませんか", "できたらいいのに", "もううんざりしていませんか"
];

const PROBLEMS = [
  "素晴らしい機会を逃している", "一生懸命働いているのに進歩がない",
  "ビジネスに行き詰まっている", "平均的な結果しか出ていない"
];

const SOLUTIONS = [
  "私たちの素晴らしい製品", "この画期的なソリューション", 
  "私たちの実証済みの方法", "画期的なシステム"
];

const BENEFITS = [
  "すべてを変えます", "時間とお金を節約します",
  "瞬時に結果を向上させます", "卓越した成果を提供します"
];

const CTAS = [
  "今すぐ始めましょう！", "今日試してみてください！", "成功ストーリーに参加しましょう！",
  "あなたの突破口が待っています！"
];

const SalesButton = ({ onGenerate }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('あなたの説得力のあるセールスレターがここに表示されます。驚かされる準備はできていますか？');

  const generateLetter = () => {
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const letter = `${getRandom(OPENINGS)} ${getRandom(PROBLEMS)}？ ${getRandom(SOLUTIONS)} ${getRandom(BENEFITS)}。 ${getRandom(CTAS)}`;
    return letter;
  };

  const handleClick = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const newLetter = generateLetter();
    const newCount = clickCount + 1;
    
    setCurrentMessage(newLetter);
    setClickCount(newCount);
    setIsLoading(false);
    
    if (onGenerate) {
      onGenerate(newLetter);
    }
  };

  const getButtonText = () => {
    if (isLoading) return "生成中...";
    if (clickCount === 0) return "セールスレターを作成";
    return "もう一度！";
  };

  return (
    <div className="sales-button-container">
      <button 
        onClick={handleClick}
        disabled={isLoading}
        className="sales-button"
      >
        {getButtonText()}
      </button>
      
      <div className={`result-box ${isLoading ? 'loading' : ''}`}>
        <p>{currentMessage}</p>
        {clickCount > 0 && (
          <div className="click-counter">
            {clickCount}通のレターを作成しました
            {clickCount > 10 && <span> - あなたは自然体です！</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesButton;