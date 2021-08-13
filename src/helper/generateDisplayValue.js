const generateDisplayValue = ({total, next, operation}) => {
    if (!total && !next && !operation) {
        return '0';
      }else if (!total && next) {
        return `${next}`;
      } else if (operation && total && !next) {
        return `${total} ${operation}`;
      } else if (total && next && operation) {
        return `${total} ${operation} ${next}`;
      } else {
        return `${total}`;
      }
}

export default generateDisplayValue;
