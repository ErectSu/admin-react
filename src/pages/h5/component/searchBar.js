import React from 'react';

import { Input, Select } from 'antd';

const { Search } = Input;

const { Option } = Select;

export default function SearchBar(){

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return(<div style={{marginLeft:20,marginTop:10,display:'flex'}}>

        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select>

        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
        </Select>

        <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
        />
    </div>)
}
