import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div>
      <h1 className="error">404 - Страница не найдена</h1>
      <p>Запрашиваемая страница не существует.</p>
      <Link className="backToMain" to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFound;
