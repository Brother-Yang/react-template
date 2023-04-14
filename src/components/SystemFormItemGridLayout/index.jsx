import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

import styles from './index.less'

/**
 *
 * @param {number} count
 * @param {array} colgroup length=2 使用数组是想保证两个值
 * @returns
 */
const getGridTemplateColumns = (count, colgroup) => ({
  gridTemplateColumns: `repeat(${count}, ${colgroup.toString().replace(',', ' ')})`,
})

// !!!目前先考虑这几种情况
const SystemFormItemGridLayout = (props) => {
  if (!Object.keys(props?.data || {})?.length) return

  /**
   * columnCount 几列
   * colgroup [Label宽度, Value宽度]
   */
  const {
    className,
    data: { width: _width, columnCount, children, colgroup },
  } = props

  return (
    <div
      className={classnames(styles.Wrap, className)}
      style={{ width: _width, ...getGridTemplateColumns(columnCount, colgroup) }}
    >
      {children?.map((item) => (
        <React.Fragment key={item?.key}>
          {item?.label}
          {item?.value}
        </React.Fragment>
      ))}
    </div>
  )
}

export const Label = (props) => {
  return (
    <div
      className={classnames(styles.Label, props?.className, props?.require ? styles.Require : null)}
    >
      {props.children}
    </div>
  )
}

export const Value = (props) => {
  return (
    <div
      className={classnames(styles.Value, props?.className)}
      style={{
        // 默认值为1
        gridColumn: `span ${props?.colSpan ?? 1}`,
      }}
    >
      {props.children}
    </div>
  )
}

// SystemFormItemGridLayout.defaultProps = {}

SystemFormItemGridLayout.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    columnCount: PropTypes.number,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.node,
        value: PropTypes.node,
      })
    ),
    colgroup: PropTypes.array,
  }),
}

export default SystemFormItemGridLayout
