/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
import React from 'react'
import {StyledComponentPropsWithRef} from 'styled-components'
import Table from './Table.style'

interface TableInterface extends StyledComponentPropsWithRef<typeof Table> {
  data: any
  columns: any
}

const TableComponent = ({
  columns,
  data,
  ...rest
}: TableInterface) => (
  <Table {...rest}>
    <thead>
      <tr>
        {columns && columns.map((head: {field: string | number, header: string | number} ) => (
          <th>{head.header ? head.header : head.field}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data && data.map((row: string) => (
        <tr>
          {columns.map((col: {field: number} ) => (
            <td>{row[col.field]}</td>
          ))}
        </tr>
      ))}
    </tbody>
    {data ? null : <p>Sem dados para mostrar!</p>}
  </Table>
)

export default TableComponent