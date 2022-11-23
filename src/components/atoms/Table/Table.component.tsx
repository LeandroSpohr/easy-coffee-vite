import React from 'react'
import {StyledComponentPropsWithRef} from 'styled-components'
import {Table, THead, TBody, TR, TH, TD} from './Table.style'

interface TableInterface extends StyledComponentPropsWithRef<typeof Table> {
  data: string[][]
  columns: string[]
}

const TableComponent = ({
  columns,
  data,
  ...rest
}: TableInterface) => (
  <Table {...rest}>
    <THead>
      <TR>
        {columns.length ? columns.map((col: string ) => (
          <TH key={col}>{col}</TH>
        )): null}
      </TR>
    </THead>
    <TBody>
      {data.length ? data.map((dat: string[],e: number) => (
        <TR key={e}>
          {columns.map((col, i: number) => (
            <TD key={i}>{dat[i]}</TD>
          ))}
        </TR>
      )): null}
    </TBody>
    {data.length ? null : <TBody><TR><TH>Sem dados para mostrar</TH></TR></TBody>}
  </Table>
)

export default TableComponent