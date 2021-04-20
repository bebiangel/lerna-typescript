import React, {ReactElement} from 'react';
import {Button, Input} from "@aqua/components";

const App = (): ReactElement => {
  return (
    <div className="App">
      <Button/>
      <Input/>
      <div>내용 수정</div>
      <div>bugfix</div>
    </div>
  );
};

export default App;
