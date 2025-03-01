import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function usePrevPath() {
  const path = useLocation();
  const prevPath = useRef(null);

  useEffect(
    function () {
      prevPath.current = path.pathname;
    },
    [path]
  );

  return prevPath.current;
}
