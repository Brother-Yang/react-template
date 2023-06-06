import React, { FC, PropsWithChildren } from 'react';

import classnames from 'classnames';

import styles from './index.less';

type TProps = PropsWithChildren<{
  data: {
    width: string | number;
    columnCount: number;
    children: {
      key: string | number;
      label: JSX.Element;
      value: JSX.Element;
    }[];
    colgroup: string[];
  };
  className?: string;
}>;

/**
 *
 * @param {number} count
 * @param {array} colgroup length=2 使用数组是想保证两个值
 * @returns
 */
const getGridTemplateColumns = (count: number, colgroup: string[]) => ({
  gridTemplateColumns: `repeat(${count}, ${colgroup.toString().replace(',', ' ')})`,
});

// !!!目前先考虑这几种情况
const SystemFormItemGridLayout: FC<TProps> = (props) => {
  if (!Object.keys(props?.data || {})?.length) return;

  /**
   * columnCount 几列
   * colgroup [Label宽度, Value宽度]
   */
  const {
    className,
    data: { width: _width, columnCount, children, colgroup },
  } = props;

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
  );
};

export const Label: FC<PropsWithChildren<{ className?: string; require?: boolean }>> = (props) => {
  return (
    <div
      className={classnames(styles.Label, props?.className, props?.require ? styles.Require : null)}
    >
      {props.children}
    </div>
  );
};

export const Value: FC<PropsWithChildren<{ className?: string; colSpan?: number }>> = (props) => {
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
  );
};

export default SystemFormItemGridLayout;
