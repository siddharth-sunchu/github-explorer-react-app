import React from 'react';
import { CartaIcon } from 'assets';
import { PageHeader } from 'antd';
import './Header.css';

const Header = () => {
  return (
    <PageHeader className="navbar bg-white header-container">
      <img src={CartaIcon} alt="Carta Icon" className="p-1 header-icon" />
    </PageHeader>
  );
};

export default Header;
