export const filterMapper = (value) => {
  value = (value) ? value.toString() : value;
  switch (value) {
    case '0':
      return 'updated';
    case '1':
      return 'created';
    case '2':
      return 'fullname';
    case '3':
      return 'pushed';
    default:
      return 'updated';
  }
};
