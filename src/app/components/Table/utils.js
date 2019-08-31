export const formatRows = ({ row, formatter }) => (formatter ? formatter(row) : row);

export const formatBodies = ({ bodies, formatter, options }) => {
  const formattedBodies = [];

  if (bodies.constructor === Array) {
    const rows = bodies.map(row => formatRows({ row, formatter: options?.rowFormatter }));
    const parsedBody = formatter({ key: 0, rows });

    formattedBodies.push(parsedBody);
  } else {
    Object.keys(bodies).forEach(section => {
      const rows = bodies[section].map(row => formatRows({ row, formatter: options?.rowFormatter }));
      const parsedBody = formatter({ key: section, rows });

      if (parsedBody?.excluded) {
        return;
      }

      formattedBodies.push(parsedBody);
    });
  }

  return formattedBodies;
};
