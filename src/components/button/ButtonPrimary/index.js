import React from "react";
import Link from "next/link";

const ButtonPrimary = (props) => {
  const { text, link, onClick, iconLeft, iconRight, customClass } = props;
  return link ? (
    <Link href={link}>
      <a aria-label="Button" className={`button-primary ${customClass}`} href={link}>
        {iconLeft && <i className={`${iconLeft} icon-left`}></i>}
        {text}
        {iconRight && <i className={`${iconRight} icon-right`}></i>}
      </a>
    </Link>
  ) : (
    <button className="button-primary" onClick={onClick}>
      {iconLeft && <i className={`${iconLeft} icon-left`}></i>}
      {text}
      {iconRight && <i className={`${iconRight} icon-right`}></i>}
    </button>
  );
};

export default ButtonPrimary;
