import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Input, Space } from 'antd';

const { Column } = Table;

function App() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingRecord, setEditingRecord] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://127.0.0.1:8000/predict_house_price/')
      .then(response => setData(response.data.data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  
  const handleCreate = () => {
    form
      .validateFields()
      .then(values => {
        axios.post('http://127.0.0.1:8000/predict_house_price/create/', values)
          .then(() => {
            fetchData();
            setVisible(false);
            form.resetFields();
          })
          .catch(error => console.error('Error creating data:', error));
      })
      .catch(error => console.error('Validation failed:', error));
  };

  const handleDelete = (record) => {
    axios.delete(`http://127.0.0.1:8000/predict_house_price/${record.CRIM}`)
      .then(() => {
        fetchData();
      })
      .catch(error => console.error('Error deleting record:', error));
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
    setVisible(true);
    form.setFieldsValue(record);
  };
  
  return (
    <div>
      <div style={{display:'flex'}}>
      <h1>House Price Prediction</h1>
      <Button type="primary" onClick={() => setVisible(true)} style={{margin:'25px'}}>Add New Record</Button>
      </div>
      <Modal
        title="Add New Record"
        visible={visible}
        onCancel={handleCancel}
        onOk={handleCreate}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
        >
          <Form.Item
            name="CRIM"
            label="CRIM"
            rules={[{ required: true, message: 'Please input the CRIM!' }]}
          >
            <Input />
          </Form.Item>
          {/* Add more form fields for other columns */}
        </Form>
      </Modal>
      <Table dataSource={data}>
      <Column title="Crime Rate" dataIndex="CRIM" key="CRIM" />
        <Column title="Residential Land Zoned" dataIndex="ZN" key="ZN" />
        <Column title="Non-Retail Business Acres" dataIndex="INDUS" key="INDUS" />
        <Column title="Near Kebena River" dataIndex="CHAS" key="CHAS" />
        <Column title="Nitric Oxides Concentration" dataIndex="NOX" key="NOX" />
        <Column title="Average Number of Rooms" dataIndex="RM" key="RM" />
        <Column title="Proportion of Old Units" dataIndex="AGE" key="AGE" />
        <Column title="Distance to Employment Centers" dataIndex="DIS" key="DIS" />
        <Column title="Accessibility to Highways" dataIndex="RAD" key="RAD" />
        <Column title="Property Tax Rate" dataIndex="TAX" key="TAX" />
        <Column title="Pupil-Teacher Ratio" dataIndex="PTRATIO" key="PTRATIO" />
        <Column title="Proportion of Blacks" dataIndex="B" key="B" />
        <Column title="Lower Status Population" dataIndex="LSTAT" key="LSTAT" />
        <Column title="Median House Value" dataIndex="MEDV" key="MEDV" />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
             {editingRecord === record ? (
                <a>Edit</a>
              ) : (
                <a onClick={() => handleEdit(record)}>Edit</a>
              )}
              <a onClick={() => handleDelete(record)}>Delete</a>
            </Space>
          )}
            
            
        />
      </Table>
    </div>
  );
}

export default App;
