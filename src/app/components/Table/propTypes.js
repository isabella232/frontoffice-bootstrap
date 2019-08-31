import { any, arrayOf, func, number, objectOf, oneOfType, shape, string, element, object } from 'prop-types';

export const componentType = oneOfType([element, func, object]);
export const actionType = shape({
  component: componentType,
  props: any
});

export const configType = shape({
  styles: any
});

export const columnType = shape({
  id: number.isRequired,
  key: string.isRequired,
  title: string,
  cell: shape({
    component: componentType,
    parser: func
  })
});

export const columnsType = objectOf(columnType);

export const cellPropsType = shape({
  value: oneOfType([number.isRequired, string.isRequired]),
  className: string,
  itemClassName: string
});

export const cellType = shape({
  cellProps: cellPropsType
});

export const emptyMessageType = shape({
  component: componentType,
  messageProps: objectOf(any)
});

export const rowType = shape({
  columns: columnsType,
  config: configType,
  data: any
});

export const bodyType = shape({
  columns: columnsType,
  config: configType,
  emptyBodyMessage: emptyMessageType,
  title: string,
  rows: arrayOf(rowType)
});

export const paginatorType = shape({
  onPageChange: func.isRequired,
  currentPage: number,
  nextPage: number,
  paginatorClassName: string,
  totalPages: number
});
