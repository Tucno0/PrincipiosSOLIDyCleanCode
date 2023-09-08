import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import "./solid/05-dependency-a";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
            <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
        </a>
        <h1>CleanCode y SOLID</h1>
        <p class="read-the-docs">
            Revisar la consola para ver los resultados
        </p>
    </div>
`;
