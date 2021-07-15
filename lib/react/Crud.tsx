import React from 'react';
/** // 临时处理，后期封装 */
import request from 'umi-request';
import CrudTable from './components/Table';
import { ICrudFormTypeEnum } from './index';
declare namespace API {
  // 后端接口
  type ListItem = {
  }

  // 页面请求参数
  type PageParams = {
  }
}

const columns = [
  { label: 'ID', dataIndex: 'id', readonly: true },
  {
    label: '姓名',
    dataIndex: 'name',
    type: ICrudFormTypeEnum.Text,
    rules: [{ message: '姓名不能为空', required: true }],
    isFilter: true,
  },
  { label: '年龄', dataIndex: 'age', type: ICrudFormTypeEnum.Number },
  {
    label: '职位',
    dataIndex: 'title',
    type: ICrudFormTypeEnum.Select,
    isFilter: true,
    rules: [{ message: '职位不能为空', required: true }],
    config: {
      options: [
        { text: 'CTO', value: 'cto' },
        { text: 'COO', value: 'coo' },
        { text: 'CFO', value: 'cfo' },
      ],
    },
  },
]

/**
 * 组件拼装逻辑
 *
 * @param param
 * @returns
 */
export default function FCrud({ }) {
  return (
    <CrudTable<API.ListItem, API.PageParams, string>
      request={async (params = {}, sort, filter) => {
        return request<{
          data: any,
        }>('/mock/json/list', {
          params,
        });
      }}
      columns={columns}
    />
  )
}
