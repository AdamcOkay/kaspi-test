function Header(props) {
  const menuItems = props.menuItems;

  return (
    <header className="kaspi-header">
      <div className="container">
        <div className="kaspi-header__inner">
          <a href="/" className="sprite-container kaspi-logo">
            <span
              className="kaspi-logo--default sprite--default"
              alt="logo"
            ></span>
            <span
              className="kaspi-logo--active sprite--active"
              alt="logo"
            ></span>
          </a>
          <nav className="primary-nav">
            <ul className="kaspi-menu">
              {menuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.link} className="hvr-red">
                      {item.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button className="location sprite-container hvr-red">
            <span className="location-icon location-icon--default sprite--default"></span>
            <span className="location-icon location-icon--active sprite--active"></span>
            <span className="location-text">Алматы</span>
          </button>
          <a href="/" className="profile sprite-container">
            <span className="profile--default sprite--default"></span>
            <span className="profile--active sprite--active"></span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
