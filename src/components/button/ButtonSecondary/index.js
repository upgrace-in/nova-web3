import React from "react";
import Link from "next/link";

const ButtonSecondary = (props) => {
  const { link, text, onClick, iconLeft, iconRight, customClass } = props;
  return link ? (
    <Link href={link}>
      <a className={`button-secondary ${customClass}`} aria-label="Button" href={href}>
        {iconLeft && <i className={`${iconLeft} icon-left`}></i>}
        {text}
        {iconRight && <i className={`${iconRight} icon-right`}></i>}
      </a>
    </Link>
  ) : (
    <button className={`button-secondary ${customClass}`} onClick={onClick}>
      {iconLeft && <i className={`${iconLeft} icon-left`}></i>}
      {text}
      {iconRight && <i className={`${iconRight} icon-right`}></i>}
    </button>
  );
};

export default ButtonSecondary;
