import ReactRenderer from '@alilc/lowcode-react-renderer';

import components from './config/components/index';
import utils from './config/utils';
import constants from './config/consts';
import { Div, compose, antd, dataSource } from './config/schemas';

function App() {
  return (
    <div className="App">
      <h2>基本示例</h2>
      <ReactRenderer key={Div.fileName} schema={Div} components={components} appHelper={{
        utils,
        constants
      }} />
      <h2>antd 示例</h2>
      <ReactRenderer key={antd.fileName} schema={antd} components={components} appHelper={{
        utils,
        constants
      }} />
      <h2>自定义数据源</h2>
      <ReactRenderer key={dataSource.fileName} schema={dataSource} components={components} appHelper={{
        utils,
        constants
      }} />
    </div>
  );
}

export default App;
