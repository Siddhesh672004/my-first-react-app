import { useState } from "react";
import styles from './InputText.module.css'

const InputText = ({ initText = "" }) => {
  const [text, setText] = useState(initText);

  return (
    <div className={styles.counter}>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <h3>{text}</h3>
    </div>
  );
};

export default InputText;
