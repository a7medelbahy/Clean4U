const NavItem = (props) => {
  return (
    <div>
      <li className="nav-item">
        <a className="nav-link" href={props.navItem.href}>
          {props.navItem.title}
        </a>
      </li>
    </div>
  );
};

export default NavItem;
