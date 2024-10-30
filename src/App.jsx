import { useState } from 'react'
import './App.css'

import { Calendar, theme } from 'antd';


const onPanelChange = (value) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const onSelect = (value,info) =>{
 console.log(value.toDate())
}

function App() {
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div style={wrapperStyle}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} onSelect={onSelect} />
    </div>
  );
}

export default App
