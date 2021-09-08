import { useEffect } from "react";

const MicroFrontend = ({ code, host }) => {
  useEffect(() => {
    const scriptId = `micro-frontend-script-${code}`;

    const renderMicroFrontend = () =>
      window[`render${code}`](`${code}-container`);

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${manifest.files["main.js"]}`;
        script.onload = () => renderMicroFrontend();
        document.head.appendChild(script);
      });

    return () => window?.[`unmount${code}`]?.(`${code}-container`);
  });

  return <main id={`${code}-container`} />;
};

export default MicroFrontend;
