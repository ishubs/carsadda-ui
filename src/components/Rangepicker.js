import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const onChange = (value, dateString) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};
const onOk = (value) => {
  console.log('onOk: ', value);
};
const App = () => (
  <Space direction="vertical" size={12}>
    <RangePicker
      showTime={{
        format: 'HH:mm',
      }}
      format="DD-MM-YYYY HH:mm"
      onChange={onChange}
      onOk={onOk}
    />
  </Space>
);
export default App;