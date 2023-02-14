import { SocialIconsData } from "../data";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <ul className="d-flex m-0 p-0 gap-3 justify-content-center justify-content-md-start align-items-center">
        {SocialIconsData.map((socialItem) => {
          return (
            <li
              className="p-2 d-flex justify-content-center align-items-center"
              key={socialItem.id}
            >
              <a href={socialItem.link} target="_blank" rel="noreferrer">
                {socialItem.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialIcons;
