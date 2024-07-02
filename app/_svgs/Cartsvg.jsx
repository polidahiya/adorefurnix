import React from "react";

function Icon({ styles }) {
  return (
    <svg
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 15"
    >
      <path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21A.336.336 0 001.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003a1.92 1.92 0 101.91 2.128l5.55.076a1.883 1.883 0 003.752-.249c0-.866-.584-1.593-1.38-1.814l2.423-8.832a.679.679 0 00-.655-.86"></path>
    </svg>
  );
}

export default React.memo(Icon);
