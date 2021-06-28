import { Menu, Dropdown, Button, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const DropdownFilter = ({ currentFilter, onClick, onChange, currentMenu }) => {
  function handleMenuClick(e) {
    onChange(e.key);
    message.info('Filter By changed');
    onClick();
  }
  let menus = []
  for (const [key, value] of Object.entries(currentMenu)) {
    menus.push({ key, value });
  }
  const menu = (
    <Menu >
      <Menu.Item key={menus[0].key} onClick={handleMenuClick}>{menus[0].value}</Menu.Item>
      <Menu.Item key={menus[1].key} onClick={handleMenuClick}>{menus[1].value}</Menu.Item>
      <Menu.Item key={menus[2].key} onClick={handleMenuClick}>{menus[2].value}</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button>
        {currentFilter} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

DropdownFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  currentMenu: PropTypes.object.isRequired
};

export default DropdownFilter;
