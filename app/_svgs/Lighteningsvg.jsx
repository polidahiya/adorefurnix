import React from "react";

function Icon({ styles }) {
  return (
    <svg
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 46.093 46.093"
      xmlSpace="preserve"
    >
      <path d="M34.137 20.862a2.605 2.605 0 00-2.204-1.232h-6.356l6.707-16.032A2.594 2.594 0 0029.888 0h-8.444c-1.15 0-2.163.761-2.49 1.863l-7.283 24.565a2.587 2.587 0 002.49 3.319h6.807l-1.189 14.106a2.06 2.06 0 003.902 1.088l10.582-21.56a2.6 2.6 0 00-.126-2.519z"></path>
    </svg>
  );
}

export default React.memo(Icon);
